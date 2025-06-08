import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import CompressionPlugin from "vite-plugin-compression";
import sitemap from "@astrojs/sitemap";
import svgr from "vite-plugin-svgr";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel";

export const siteUrl = "https://devnic.com.br";

const date = new Date().toISOString();
// https://astro.build/config
export default defineConfig({
  site: siteUrl,

  integrations: [
      react(),
      svgr(),
      sitemap({
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: new Date(),
          entryLimit: 10000,
          serialize(item) {
              // Configurar prioridades específicas
              if (item.url === siteUrl + '/') {
                  item.priority = 1.0;
                  item.changefreq = 'weekly';
              }
              if (item.url.includes('politica-de-privacidade') || item.url.includes('termos-de-uso')) {
                  item.priority = 0.3;
                  item.changefreq = 'monthly';
              }
              return item;
          }
      }),
      tailwind({
          configFile: "./tailwind.config.js",
      }),
      robotsTxt({
          sitemap: [`${siteUrl}/sitemap-index.xml`, `${siteUrl}/sitemap-0.xml`],
          host: siteUrl
      })
  ],

  renderers: ["@astrojs/renderer-react"],
  prerender: true,

  vite: {
      plugins: [CompressionPlugin(), svgr()],
      build: {
          // Minificação para produção
          minify: 'esbuild',
          // Code splitting
          rollupOptions: {
              output: {
                  manualChunks: {
                      'react': ['react', 'react-dom'],
                      'form': ['react-hook-form', '@hookform/resolvers', 'zod'],
                      'ui': ['react-input-mask']
                  }
              }
          }
      },
      css: {
          transformer: 'postcss'
      }
  },

  buildOptions: {
      minify: true,
  },

  adapter: vercel(),

  server: {
      // Headers de segurança e performance
      headers: {
          "X-Frame-Options": "DENY",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "geolocation=(), microphone=(), camera=()"
      }
  }
});