export { renderers } from '../renderers.mjs';

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap.xml", "https://devnic.com.br").href}
`.trim();
const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
