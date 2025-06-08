import { s as supabase } from '../../chunks/supabase_DZWknh1_.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ params, redirect, request }) => {
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
  );
  if (error) {
    console.error("Erro ao inserir lead", error);
    return redirect("/contato-nao-enviado");
  }
  return redirect("/contato-enviado");
};
const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
