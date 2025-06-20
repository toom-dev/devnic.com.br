import type { APIRoute } from "astro"
import { supabase } from "lib/supabase";

export const POST: APIRoute = async ({ params, redirect, request }) => {
    
    try {
        const contentType = request.headers.get("content-type");
        
        let email, name, phone, problema, servico;
        
        if (contentType === "application/json") {
            // Handle JSON data from React form
            const body = await request.json();
            email = body.email;
            name = body.nome;
            phone = body.telefone;
            problema = body.problema;
            servico = body.servico;
        } else {
            // Handle form data from traditional forms
    const form = await request.formData();
            email = form.get("email");
            name = form.get("name");
            phone = form.get("phone");
            problema = form.get("problema");
            servico = form.get("servico");
        }

        const { data, error } = await supabase.from("leads").insert([{
            email,
            nome: name,
            telefone: phone,
            problema,
            servico,
            created_at: new Date().toISOString()
        }]);

    if (error) {
            console.error("Erro ao inserir lead", error);
            
            if (contentType === "application/json") {
                return new Response(JSON.stringify({ error: "Erro ao salvar lead" }), {
                    status: 500,
                    headers: { "Content-Type": "application/json" }
                });
            }
            
            return redirect("/contato-nao-enviado");
    }

        if (contentType === "application/json") {
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { "Content-Type": "application/json" }
            });
        }

        return redirect("/contato-enviado");
        
    } catch (error) {
        console.error("Erro no endpoint send-lead:", error);
        
        const contentType = request.headers.get("content-type");
        if (contentType === "application/json") {
            return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
        
        return redirect("/contato-nao-enviado");
    }

}

export const prerender = false;