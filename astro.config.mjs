import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import CompressionPlugin from "vite-plugin-compression";
import sitemap from "@astrojs/sitemap";
import svgr from "vite-plugin-svgr";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel";

export const siteUrl = "https://devnic.com.br";

export default defineConfig({
  // URL do site
  site: siteUrl,

  // Gera saída SSR (server) em vez de estático
  output: "server",

  // Todas as integrações
  integrations: [
    react(),
    svgr(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      serialize(item) {
        if (item.url === siteUrl + "/") {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        if (
          item.url.includes("politica-de-privacidade") ||
          item.url.includes("termos-de-uso")
        ) {
          item.priority = 0.3;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
    tailwind({
      configFile: "./tailwind.config.js",
    }),
    robotsTxt({
      sitemap: [`${siteUrl}/sitemap-index.xml`, `${siteUrl}/sitemap-0.xml`],
      host: siteUrl,
    }),
  ],

  // Renderer React
  renderers: ["@astrojs/renderer-react"],

  // Build do Vite
  vite: {
    plugins: [CompressionPlugin(), svgr()],
    build: {
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            form: ["react-hook-form", "@hookform/resolvers", "zod"],
            ui: ["react-input-mask"],
          },
        },
      },
    },
    css: {
      transformer: "postcss",
    },
  },

  // Opções adicionais de build
  buildOptions: {
    minify: true,
  },

  // Adapter Vercel em modo serverless (gera dist/server/entry.mjs)
  adapter: vercel({
    mode: "serverless",
  }),

  // Configurações do dev server (headers)
  server: {
    headers: {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    },
  },
});
