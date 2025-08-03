/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JMl83RYM.mjs';
import 'kleur/colors';
import { C as ContentSection } from '../chunks/index_ICU10zsN.mjs';
import { $ as $$Layout } from '../chunks/Layout_Xeq6cW1F.mjs';
import { B as Button } from '../chunks/index_BmpqO-0Z.mjs';
export { renderers } from '../renderers.mjs';

const $$ContatoNaoEnviado = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Erro ao enviar contato!", "description": "Desculpe, houve um erro ao tentar enviar sua mensagem. Por favor, tente novamente ou entre em contato atrav\xE9s de outros meios dispon\xEDveis." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content"> ${renderComponent($$result2, "ContentSection", ContentSection, {}, { "default": ($$result3) => renderTemplate` <div class="text-center max-w-xl lg:my-32 flex flex-col gap-5 justify-center items-center"> <h1 class="text-h1-lg bg-red-600 text-primary">Erro ao enviar o contato!</h1> <p>
Infelizmente houve um erro ao enviar o contato.
</p> ${renderComponent($$result3, "Button", Button, { "variant": "primary", "link": "https://wa.me/5511989266354?text=Ol\xE1! Gostaria de saber mais sobre os servi\xE7os da Devnic.", "target": "_blank", "align": "center" }, { "default": ($$result4) => renderTemplate`
Chamar no whats!
` })} ${renderComponent($$result3, "Button", Button, { "variant": "primary", "link": "/", "align": "center" }, { "default": ($$result4) => renderTemplate`
Voltar
` })} </div> ` })} </main> ` })}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/contato-nao-enviado.astro", void 0);

const $$file = "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/contato-nao-enviado.astro";
const $$url = "/contato-nao-enviado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ContatoNaoEnviado,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
