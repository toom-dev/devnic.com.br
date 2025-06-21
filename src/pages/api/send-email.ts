import type { APIRoute } from "astro";
import { insertLead, isSupabaseConfigured, type Lead } from "../../lib/supabase";
import { trackConversion } from "../../lib/analytics";

export const POST: APIRoute = async ({ request }) => {
    try {
        const contentType = request.headers.get("content-type");
        
        let email, nome, telefone, problema, servico, message;
        
        if (contentType === "application/json") {
            // Handle JSON data from React form
            const body = await request.json();
            email = body.email;
            nome = body.nome || body.name;
            telefone = body.telefone || body.phone;
            problema = body.problema || body.message;
            servico = body.servico || "Contato Geral";
            message = body.message;
        } else {
            // Handle form data from traditional forms
            const form = await request.formData();
            email = form.get("email")?.toString() || "";
            nome = form.get("name")?.toString() || form.get("nome")?.toString() || "";
            telefone = form.get("phone")?.toString() || form.get("telefone")?.toString() || "";
            problema = form.get("problema")?.toString() || form.get("message")?.toString() || "";
            servico = form.get("servico")?.toString() || "Contato Geral";
            message = form.get("message")?.toString();
        }

        // Validação básica dos campos obrigatórios
        if (!email || !nome || !telefone) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Nome, e-mail e telefone são obrigatórios" 
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Validação do formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Formato de e-mail inválido" 
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Limpar e formatar o telefone (remover caracteres especiais)
        const cleanPhone = telefone.replace(/\D/g, '');
        if (cleanPhone.length < 10 || cleanPhone.length > 11) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Telefone deve ter 10 ou 11 dígitos" 
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Verificar se o Supabase está configurado
        if (!isSupabaseConfigured()) {
            console.error("Supabase não está configurado corretamente!");
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Serviço de banco de dados indisponível. Tente novamente em alguns minutos." 
            }), {
                status: 503,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Preparar dados do lead
        const leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'> = {
            nome: nome.trim(),
            email: email.toLowerCase().trim(),
            telefone: cleanPhone,
            problema: (problema || message || "").trim(),
            servico: servico || "Contato Geral"
        };

        // Salvar no Supabase usando a função utilitária
        const { data, error: supabaseError } = await insertLead(leadData);

        if (supabaseError) {
            console.error("Erro ao salvar no Supabase:", supabaseError);
            
            // Verificar se é erro de duplicação ou outro tipo
            if (supabaseError.code === '23505') { // Código de violação de constraint único
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

        // Log para desenvolvimento (sem dados sensíveis)
        console.log(`✅ Lead salvo com sucesso: ${nome} - ${servico} - ${new Date().toISOString()}`);

        // Retornar sucesso
        return new Response(JSON.stringify({ 
            success: true, 
            message: "Dados salvos com sucesso! Entraremos em contato em breve.",
            lead_id: data?.[0]?.id || null
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Erro inesperado ao processar requisição:", error);
        return new Response(JSON.stringify({ 
            success: false, 
            error: "Erro interno do servidor. Tente novamente em alguns minutos." 
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

export const prerender = false; 