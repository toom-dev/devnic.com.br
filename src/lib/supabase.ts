import { createClient } from "@supabase/supabase-js";

// Configuração do Supabase para produção
const supabaseUrl = import.meta.env.SUPABASE_URL || "https://fowdfdwfdeukivgsjsdi.supabase.co";
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvd2RmZHdmZGV1a2l2Z3Nqc2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjIwNzYsImV4cCI6MjA2NTk5ODA3Nn0.BkkU7LkRi8aIsta-oDxgVmN7ILpBmXkrh2qSLmEGEcA";

// Criar cliente do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});

// Tipos TypeScript para a tabela leads
export interface Lead {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  problema?: string;
  servico?: string;
  created_at?: string;
  updated_at?: string;
}

// Função utilitária para inserir um novo lead
export const insertLead = async (leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('leads')
    .insert([{
      ...leadData,
      servico: leadData.servico || 'Contato Geral'
    }])
    .select();
    
  return { data, error };
};

// Função utilitária para buscar leads (apenas para admins)
export const getLeads = async () => {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
    
  return { data, error };
};

// Função utilitária para verificar se o Supabase está configurado corretamente
export const isSupabaseConfigured = () => {
  return supabaseUrl !== "https://placeholder.supabase.co" && 
         supabaseAnonKey !== "placeholder-key" &&
         supabaseUrl.includes('supabase.co');
};