/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JMl83RYM.mjs';
import 'kleur/colors';
import { C as ContentSection } from '../chunks/index_CEHkxuTB.mjs';
import { $ as $$Layout } from '../chunks/Layout_CCJ9a_IF.mjs';
import { B as Button } from '../chunks/index_L3fIrfDW.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | P\xE1gina n\xE3o encontrada", "description": "A p\xE1gina que voc\xEA est\xE1 procurando pode ter sido removida, teve seu nome alterado ou est\xE1 temporariamente indispon\xEDvel." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content"> ${renderComponent($$result2, "ContentSection", ContentSection, {}, { "default": ($$result3) => renderTemplate` <div class="text-center max-w-xl lg:my-32 flex flex-col gap-5 justify-center items-center"> <h1 class="text-h1-lg">Ops - Nada por aqui! 404</h1> <p>
A página que você está procurando pode ter sido removida, seu nome alterado ou estar temporariamente indisponível.
</p> ${renderComponent($$result3, "Button", Button, { "variant": "primary", "link": "/", "align": "center" }, { "default": ($$result4) => renderTemplate`
Voltar
` })} </div> ` })} </main> ` })}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/404.astro", void 0);

const $$file = "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
