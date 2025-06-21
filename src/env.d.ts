/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly SITE: string
    readonly PUBLIC_SITE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}