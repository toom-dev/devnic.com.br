import { createClient } from "@supabase/supabase-js";

// Valores padrão para desenvolvimento (deve ser configurado em produção)
const supabaseUrl = process.env.SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);