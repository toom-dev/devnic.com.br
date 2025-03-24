import type { APIRoute } from "astro"
import { supabase } from "lib/supabase";

export const POST: APIRoute = async ({ params, redirect, request }) => {
    
    const form = await request.formData();
    const email = form.get("email");
    const name = form.get("name");
    const phone = form.get("phone");
    

    const { data, error } = await supabase.from("leads").insert(
        {
            email,
            name,
            phone
        }
    )

    if (error) {
        console.error("Erro ao inserir lead", error)
        return redirect("/contato-nao-enviado")
    }


    return redirect("/contato-enviado")

}

export const prerender = false;