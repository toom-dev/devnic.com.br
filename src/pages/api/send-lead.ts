import type { APIRoute } from "astro"
import { insertLead, isSupabaseConfigured, type Lead } from "../../lib/supabase";

export const POST: APIRoute = async ({ params, redirect, request }) => {
    
    try {
        const contentType = request.headers.get("content-type");
        
        let email, name, phone, problema, servico;
        
        if (contentType === "application/json") {
            // Handle JSON data from React form
            const body = await request.json();
            email = body.email;
            name = body.nome || body.name;
            phone = body.telefone || body.phone;
            problema = body.problema || body.message;
            servico = body.servico || "Contato Geral";
        } else {
            // Handle form data from traditional forms
            const form = await request.formData();
            email = form.get("email")?.toString();
            name = form.get("name")?.toString() || form.get("nome")?.toString();
            phone = form.get("phone")?.toString() || form.get("telefone")?.toString();
            problema = form.get("problema")?.toString() || form.get("message")?.toString();
            servico = form.get("servico")?.toString() || "Contato Geral";
        }

        // Validação básica dos campos obrigatórios
        if (!email || !name || !phone) {
            if (contentType === "application/json") {
                return new Response(JSON.stringify({ 
                    success: false, 
                    error: "Nome, e-mail e telefone são obrigatórios" 
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }
            return redirect("/contato-nao-enviado");
        }

        // Validação do formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            if (contentType === "application/json") {
                return new Response(JSON.stringify({ 
                    success: false, 
                    error: "Formato de e-mail inválido" 
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }
            return redirect("/contato-nao-enviado");
        }

        // Limpar e formatar o telefone
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length < 10 || cleanPhone.length > 11) {
            if (contentType === "application/json") {
                return new Response(JSON.stringify({ 
                    success: false, 
                    error: "Telefone deve ter 10 ou 11 dígitos" 
                }), {
                    status: 400,
                    headers: { "Content-Type": "application/json" }
                });
            }
            return redirect("/contato-nao-enviado");
        }

        // Verificar se o Supabase está configurado
        if (!isSupabaseConfigured()) {
            console.error("Supabase não está configurado corretamente!");
            
            if (contentType === "application/json") {
                return new Response(JSON.stringify({ 
                    success: false,
                    error: "Serviço de banco de dados indisponível. Tente novamente em alguns minutos."
                }), {
                    status: 503,
                    headers: { "Content-Type": "application/json" }
                });
            }
            
            return redirect("/contato-nao-enviado");
        }

        // Preparar dados do lead
        const leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'> = {
            nome: name.trim(),
            email: email.toLowerCase().trim(),
            telefone: cleanPhone,
            problema: (problema || "").trim(),
            servico: servico || "Contato Geral"
        };

        // Salvar no Supabase usando a função utilitária
        const { data, error: supabaseError } = await insertLead(leadData);

        if (supabaseError) {
            console.error("Erro ao salvar lead no Supabase:", supabaseError);
            
            if (contentType === "application/json") {
                // Verificar se é erro de duplicação
                if (supabaseError.code === '23505') {
                    return new Response(JSON.stringify({ 
                        success: false, 
                        error: "Este e-mail já foi cadastrado anteriormente." 
                    }), {
                        status: 409,
                        headers: { "Content-Type": "application/json" }
                    });
                }
                
                return new Response(JSON.stringify({ 
                    success: false, 
                    error: "Erro ao salvar dados. Tente novamente em alguns minutos." 
                }), {
                    status: 500,
                    headers: { "Content-Type": "application/json" }
                });
            }
            
            return redirect("/contato-nao-enviado");
        }

        // Log para desenvolvimento (sem dados sensíveis)
        console.log(`✅ Lead salvo com sucesso: ${name} - ${servico} - ${new Date().toISOString()}`);

        if (contentType === "application/json") {
            return new Response(JSON.stringify({ 
                success: true,
                message: "Lead salvo com sucesso! Entraremos em contato em breve.",
                lead_id: data?.[0]?.id || null
            }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        return redirect("/contato-enviado");
        
    } catch (error) {
        console.error("Erro inesperado no endpoint send-lead:", error);
        
        const contentType = request.headers.get("content-type");
        if (contentType === "application/json") {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Erro interno do servidor. Tente novamente em alguns minutos." 
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
        
        return redirect("/contato-nao-enviado");
    }

}

export const prerender = false;