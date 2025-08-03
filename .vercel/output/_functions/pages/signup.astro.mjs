/* empty css                                           */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_JMl83RYM.mjs';
import 'kleur/colors';
import { $ as $$Layout, C as Container } from '../chunks/Layout_DOzioh_d.mjs';
import { B as Button } from '../chunks/index_Dot6zh3M.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "InsideMedia Sign in", "description": "YOUR META DESCRIPTION FOR SEO" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content"> <section class="relative mb-20 pt-32" data-animate> ${renderComponent($$result2, "Container", Container, {}, { "default": ($$result3) => renderTemplate` <div class="text-center"> <h1 class="text-h1 md:text-h1-md lg:text-h1-lg font-bold text-secondary">
Become our partner!
</h1> </div> <div class="max-w-sm mx-auto"> <div class="flex items-center my-6"> <span class="border-t border-tertiary grow mr-3"></span> <div class="text-secondary opacity-50">
register with your email
</div> <span class="border-t border-tertiary grow ml-3"></span> </div> <form> <div class="flex flex-wrap -mx-3 mb-4"> <div class="w-full px-3"> <label class="block text-secondary text-p mb-3" for="email">Work Email <span class="text-red-600">*</span></label> <input id="email" type="email" class="bg-transparent border border-tertiary p-5 w-full text-secondary" placeholder="you@yourcompany.com" required> </div> </div> <div class="flex flex-wrap -mx-3 mb-4"> <div class="w-full px-3"> <label class="block text-secondary text-p mb-3" for="password">Password <span class="text-red-600">*</span></label> <input id="password" type="password" autocomplete="" class="bg-transparent border border-tertiary p-5 w-full text-secondary" placeholder="Password (at least 10 characters)" required> </div> </div> <div class="text-sm text-gray-500 text-center">
I agree to be contacted with partners <a href="#" class="underline text-secondary opacity-50 hover:opacity-100 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</a>.
</div> <div class="flex flex-wrap -mx-3 mt-6"> <div class="w-full px-3"> ${renderComponent($$result3, "Button", Button, { "link": "#", "asButton": true, "type": "submit" }, { "default": ($$result4) => renderTemplate`
Sign up` })} </div> </div> </form> <div class="text-secondary text-center mt-6">
Already have account? <a href="/signin" class="text-tertiary hover: transition duration-150 ease-in-out">Sign in</a> </div> </div> ` })} </section> </main> ` })}`;
}, "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/signup.astro", void 0);

const $$file = "/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signup,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
