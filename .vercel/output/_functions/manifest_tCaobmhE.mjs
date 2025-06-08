import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_C0nYQaw9.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_CZNZoEe-.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BV_pmwiP.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/","cacheDir":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/node_modules/.astro/","outDir":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/dist/","srcDir":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/src/","publicDir":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/public/","buildClientDir":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/dist/client/","buildServerDir":"file:///Users/claytonrodrigues/Documents/projects/devnic.com.br/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contato-enviado/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contato-enviado","isIndex":false,"type":"page","pattern":"^\\/contato-enviado\\/?$","segments":[[{"content":"contato-enviado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contato-enviado.astro","pathname":"/contato-enviado","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contato-nao-enviado/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contato-nao-enviado","isIndex":false,"type":"page","pattern":"^\\/contato-nao-enviado\\/?$","segments":[[{"content":"contato-nao-enviado","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contato-nao-enviado.astro","pathname":"/contato-nao-enviado","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"politica-de-privacidade/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/politica-de-privacidade","isIndex":false,"type":"page","pattern":"^\\/politica-de-privacidade\\/?$","segments":[[{"content":"politica-de-privacidade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica-de-privacidade.astro","pathname":"/politica-de-privacidade","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"signin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"signup/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"termos-de-uso/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/termos-de-uso","isIndex":false,"type":"page","pattern":"^\\/termos-de-uso\\/?$","segments":[[{"content":"termos-de-uso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termos-de-uso.astro","pathname":"/termos-de-uso","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-lead","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-lead\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-lead","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-lead.ts","pathname":"/api/send-lead","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://devnic.com.br","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/contato-enviado.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/contato-nao-enviado.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/politica-de-privacidade.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/pages/termos-de-uso.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/api/send-lead@_@ts":"pages/api/send-lead.astro.mjs","\u0000@astro-page:src/pages/contato-enviado@_@astro":"pages/contato-enviado.astro.mjs","\u0000@astro-page:src/pages/contato-nao-enviado@_@astro":"pages/contato-nao-enviado.astro.mjs","\u0000@astro-page:src/pages/politica-de-privacidade@_@astro":"pages/politica-de-privacidade.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/termos-de-uso@_@astro":"pages/termos-de-uso.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/claytonrodrigues/Documents/projects/devnic.com.br/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D22kzelc.mjs","\u0000@astrojs-manifest":"manifest_tCaobmhE.mjs","@modules/Header":"_astro/Header.CoN9aYq1.js","@astrojs/react/client.js":"_astro/client.DBKRMbYM.js","/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BbJdMVDT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/claytonrodrigues/Documents/projects/devnic.com.br/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const r=()=>{const n=document.querySelectorAll(\"[data-animate]\");if(n.length===0)return;const o=new IntersectionObserver(t=>{t.forEach(s=>{if(s.isIntersecting){const e=s.target;e.classList.contains(\"animate-fadeInUp\")||e.classList.add(\"fade-in\"),e.querySelectorAll(\".group, .grid > div, .flex > div\").forEach((a,d)=>{setTimeout(()=>{a.classList.add(\"fade-in\")},d*100)}),o.unobserve(e)}})},{threshold:.15,rootMargin:\"50px 0px -50px 0px\"});n.forEach(t=>{o.observe(t)})};document.documentElement.style.scrollBehavior=\"smooth\";document.addEventListener(\"DOMContentLoaded\",r);window.addEventListener(\"load\",r);"]],"assets":["/_astro/logo1.DPIt9Oes.webp","/_astro/logo2.BmqSmyoV.webp","/_astro/hero-img.BfnRRkqo.webp","/_astro/preview.D2I8HkEY.webp","/_astro/about.CPG-PfzA.webp","/_astro/logo.BL71ct5K.webp","/_astro/partner.nSPPxOOg.webp","/_astro/Roboto-BlackItalic.CxCOE_MU.woff2","/_astro/Roboto-Black.tBYbbWl-.woff2","/_astro/Roboto-BoldItalic.Bbs8lVH2.woff2","/_astro/Roboto-Bold.OBUL28o9.woff2","/_astro/Roboto-Italic.0KLjOP-5.woff2","/_astro/Roboto-Light.-TzFADkf.woff2","/_astro/Roboto-LightItalic.DuFP9W7P.woff2","/_astro/Roboto-MediumItalic.CPqftbAj.woff2","/_astro/Roboto-Regular.CjbfJjO0.woff2","/_astro/Roboto-Medium.DRylU_ql.woff2","/_astro/Roboto-Thin.Df4ydPom.woff2","/_astro/Roboto-ThinItalic.CI9JpB2v.woff2","/_astro/contato-enviado.CtGfRTd-.css","/favicon.ico","/robots.txt","/site.webmanifest","/sitemap.xml","/_astro/Header.CoN9aYq1.js","/_astro/Header.CoN9aYq1.js.gz","/_astro/client.DBKRMbYM.js","/_astro/client.DBKRMbYM.js.gz","/_astro/index.DP00RREz.js","/_astro/index.DP00RREz.js.gz","/404.html","/contato-enviado/index.html","/contato-nao-enviado/index.html","/politica-de-privacidade/index.html","/robots.txt","/signin/index.html","/signup/index.html","/termos-de-uso/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2LaH0Iuj62Py/fAFTcrLjsGVo3ymMVOLasvLZW8s+q0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
