import { s as supabase } from '../../chunks/supabase_rGjxOtc7.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ params, redirect, request }) => {
  try {
    const contentType = request.headers.get("content-type");
    let email, name, phone, problema, servico;
    if (contentType === "application/json") {
      const body = await request.json();
      email = body.email;
      name = body.nome;
      phone = body.telefone;
      problema = body.problema;
      servico = body.servico;
    } else {
      const form = await request.formData();
      email = form.get("email");
      name = form.get("name");
      phone = form.get("phone");
      problema = form.get("problema");
      servico = form.get("servico");
    }
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;
    if (!supabaseUrl || supabaseUrl === "https://placeholder.supabase.co" || !supabaseKey || supabaseKey === "placeholder-key") {
      console.log("Supabase não configurado. Dados do lead:", {
        email,
        nome: name,
        telefone: phone,
        servico,
        problema
      });
      if (contentType === "application/json") {
        return new Response(JSON.stringify({
          success: true,
          message: "Lead salvo com sucesso! (log)",
          note: "Supabase não configurado"
        }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
      return redirect("/contato-enviado");
    }
    const { data, error } = await supabase.from("leads").insert([{
      email,
      nome: name,
      telefone: phone,
      problema,
      servico,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
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
};
const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
