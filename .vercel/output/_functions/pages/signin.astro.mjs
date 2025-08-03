/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JMl83RYM.mjs';
import 'kleur/colors';
import { $ as $$Layout, C as Container } from '../chunks/Layout_Xeq6cW1F.mjs';
import { B as Button } from '../chunks/index_BmpqO-0Z.mjs';
export { renderers } from '../renderers.mjs';

const $$Signin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "InsideMedia Sign in", "description": "YOUR META DESCRIPTION FOR SEO" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content"> <section class="relative mb-20 pt-32" data-animate> ${renderComponent($$result2, "Container", Container, {}, { "default": ($$result3) => renderTemplate` <div class="text-center"> <h1 class="text-h1 md:text-h1-md lg:text-h1-lg font-bold text-secondary">
Welcome! <br> Sign in to your account
</h1> </div> <div class="max-w-sm mx-auto mt-10"> <form> <div class="flex flex-wrap -mx-3 mb-4"> <div class="w-full px-3"> <label class="block text-secondary text-p mb-3" for="email">Email <span class="text-red-600">*</span></label> <input id="email" type="email" class="bg-transparent border border-tertiary p-5 w-full text-secondary" placeholder="you@yourcompany.com" required> </div> </div> <div class="flex flex-wrap -mx-3 mb-4"> <div class="w-full px-3"> <label class="block text-secondary text-p mb-3" for="password">Password <span class="text-red-600">*</span></label> <input id="password" type="password" autocomplete="" class="bg-transparent border border-tertiary p-5 w-full text-secondary" placeholder="Password (at least 10 characters)" required> </div> </div> <div class="flex flex-wrap -mx-3 mt-6"> <div class="w-full px-3"> ${renderComponent($$result3, "Button", Button, { "link": "#", "asButton": true, "type": "submit" }, { "default": ($$result4) => renderTemplate`
Sign in` })} </div> </div> </form> <div class="text-secondary text-center mt-6">
You don't have Account? <a href="/signin" class="text-tertiary hover: transition duration-150 ease-in-out">Sign up</a> </div> </div> ` })} </section> </main> ` })}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/signin.astro", void 0);

const $$file = "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
