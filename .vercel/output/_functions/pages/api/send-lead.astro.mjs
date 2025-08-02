import { i as isSupabaseConfigured, a as insertLead } from '../../chunks/supabase_DBTIJ_q7.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ params, redirect, request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let email, name, phone, problema, servico;
    if (contentType === "application/json") {
      const body = await request.json();
      email = body.email;
      name = body.nome || body.name;
      phone = body.telefone || body.phone;
      problema = body.problema || body.message;
      servico = body.servico || "Contato Geral";
    } else {
      const form = await request.formData();
      email = form.get("email")?.toString();
      name = form.get("name")?.toString() || form.get("nome")?.toString();
      phone = form.get("phone")?.toString() || form.get("telefone")?.toString();
      problema = form.get("problema")?.toString() || form.get("message")?.toString();
      servico = form.get("servico")?.toString() || "Contato Geral";
    }
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
    const cleanPhone = phone.replace(/\D/g, "");
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
    const leadData = {
      nome: name.trim(),
      email: email.toLowerCase().trim(),
      telefone: cleanPhone,
      problema: (problema || "").trim(),
      servico: servico || "Contato Geral"
    };
    const { data, error: supabaseError } = await insertLead(leadData);
    if (supabaseError) {
      console.error("Erro ao salvar lead no Supabase:", supabaseError);
      if (contentType === "application/json") {
        if (supabaseError.code === "23505") {
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
    console.log(`✅ Lead salvo com sucesso: ${name} - ${servico} - ${(/* @__PURE__ */ new Date()).toISOString()}`);
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
};
const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
