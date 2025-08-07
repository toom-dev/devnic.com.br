import { i as isSupabaseConfigured, a as insertLead } from '../../chunks/supabase_DBTIJ_q7.mjs';
export { renderers } from '../../renderers.mjs';

({
  vercelAnalytics: {
    debug: process.env.NODE_ENV === "development"
  }
});

const POST = async ({ request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let email, nome, telefone, problema, servico, message;
    if (contentType === "application/json") {
      const body = await request.json();
      email = body.email;
      nome = body.nome || body.name;
      telefone = body.telefone || body.phone;
      problema = body.problema || body.message;
      servico = body.servico || "Contato Geral";
      message = body.message;
    } else {
      const form = await request.formData();
      email = form.get("email")?.toString() || "";
      nome = form.get("name")?.toString() || form.get("nome")?.toString() || "";
      telefone = form.get("phone")?.toString() || form.get("telefone")?.toString() || "";
      problema = form.get("problema")?.toString() || form.get("message")?.toString() || "";
      servico = form.get("servico")?.toString() || "Contato Geral";
      message = form.get("message")?.toString();
    }
    if (!email || !nome || !telefone) {
      return new Response(JSON.stringify({
        success: false,
        error: "Nome, e-mail e telefone são obrigatórios"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
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
    const cleanPhone = telefone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return new Response(JSON.stringify({
        success: false,
        error: "Telefone deve ter 10 ou 11 dígitos"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
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
    const leadData = {
      nome: nome.trim(),
      email: email.toLowerCase().trim(),
      telefone: cleanPhone,
      problema: (problema || message || "Solicitação de orçamento").trim(),
      servico: servico || "Solicitação de Orçamento"
    };
    const { data, error: supabaseError } = await insertLead(leadData);
    if (supabaseError) {
      console.error("Erro ao salvar no Supabase:", supabaseError);
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
    console.log(`✅ Lead salvo com sucesso: ${nome} - ${servico} - ${(/* @__PURE__ */ new Date()).toISOString()}`);
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
const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
