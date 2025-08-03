import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BHW_OQEe.mjs';
import { manifest } from './manifest_ClvEFGUW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/send-email.astro.mjs');
const _page3 = () => import('./pages/api/send-lead.astro.mjs');
const _page4 = () => import('./pages/apis-integracao.astro.mjs');
const _page5 = () => import('./pages/apps-mobile.astro.mjs');
const _page6 = () => import('./pages/contato-enviado.astro.mjs');
const _page7 = () => import('./pages/contato-nao-enviado.astro.mjs');
const _page8 = () => import('./pages/politica-de-privacidade.astro.mjs');
const _page9 = () => import('./pages/robots.txt.astro.mjs');
const _page10 = () => import('./pages/signin.astro.mjs');
const _page11 = () => import('./pages/signup.astro.mjs');
const _page12 = () => import('./pages/sistemas-desktop.astro.mjs');
const _page13 = () => import('./pages/sistemas-web.astro.mjs');
const _page14 = () => import('./pages/termos-de-uso.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/send-email.ts", _page2],
    ["src/pages/api/send-lead.ts", _page3],
    ["src/pages/apis-integracao.astro", _page4],
    ["src/pages/apps-mobile.astro", _page5],
    ["src/pages/contato-enviado.astro", _page6],
    ["src/pages/contato-nao-enviado.astro", _page7],
    ["src/pages/politica-de-privacidade.astro", _page8],
    ["src/pages/robots.txt.ts", _page9],
    ["src/pages/signin.astro", _page10],
    ["src/pages/signup.astro", _page11],
    ["src/pages/sistemas-desktop.astro", _page12],
    ["src/pages/sistemas-web.astro", _page13],
    ["src/pages/termos-de-uso.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "51e489ee-c368-434d-ad74-31029805b98f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
