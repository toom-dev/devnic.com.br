import type { APIRoute } from "astro";
import { supabase } from "lib/supabase";

export const POST: APIRoute = async ({ request }) => {
    try {
        const contentType = request.headers.get("content-type");
        
        let email, nome, telefone, problema, servico, message;
        
        if (contentType === "application/json") {
            // Handle JSON data from React form
            const body = await request.json();
            email = body.email;
            nome = body.nome;
            telefone = body.telefone;
            problema = body.problema;
            servico = body.servico;
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

        // Validação básica
        if (!email || !nome || !telefone) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Nome, e-mail e telefone são obrigatórios" 
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        // Salvar no Supabase
        const { data, error: supabaseError } = await supabase.from("leads").insert([{
            email,
            nome,
            telefone,
            problema: problema || message,
            servico: servico || "Contato Geral",
            created_at: new Date().toISOString(),
        }]);

        if (supabaseError) {
            console.error("Erro ao salvar no Supabase:", supabaseError);
            return new Response(JSON.stringify({ 
                success: false, 
                error: "Erro ao salvar dados no banco de dados" 
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify({ 
            success: true, 
            message: "Dados salvos com sucesso no banco de dados!",
            data: data 
        }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Erro ao processar requisição:", error);
        return new Response(JSON.stringify({ 
            success: false, 
            error: "Erro interno do servidor" 
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};

export const prerender = false; 