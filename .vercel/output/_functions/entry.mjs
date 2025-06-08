import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D03YaMnC.mjs';
import { manifest } from './manifest_tCaobmhE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/api/send-lead.astro.mjs');
const _page4 = () => import('./pages/contato-enviado.astro.mjs');
const _page5 = () => import('./pages/contato-nao-enviado.astro.mjs');
const _page6 = () => import('./pages/politica-de-privacidade.astro.mjs');
const _page7 = () => import('./pages/robots.txt.astro.mjs');
const _page8 = () => import('./pages/signin.astro.mjs');
const _page9 = () => import('./pages/signup.astro.mjs');
const _page10 = () => import('./pages/termos-de-uso.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/api/send-lead.ts", _page3],
    ["src/pages/contato-enviado.astro", _page4],
    ["src/pages/contato-nao-enviado.astro", _page5],
    ["src/pages/politica-de-privacidade.astro", _page6],
    ["src/pages/robots.txt.ts", _page7],
    ["src/pages/signin.astro", _page8],
    ["src/pages/signup.astro", _page9],
    ["src/pages/termos-de-uso.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ebd3217f-ca97-4831-a569-3cd3301b7470",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
