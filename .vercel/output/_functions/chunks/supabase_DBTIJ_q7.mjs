import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://fowdfdwfdeukivgsjsdi.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvd2RmZHdmZGV1a2l2Z3Nqc2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MjIwNzYsImV4cCI6MjA2NTk5ODA3Nn0.BkkU7LkRi8aIsta-oDxgVmN7ILpBmXkrh2qSLmEGEcA";
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});
const insertLead = async (leadData) => {
  const { data, error } = await supabase.from("leads").insert([{
    ...leadData,
    servico: leadData.servico || "Contato Geral"
  }]).select();
  return { data, error };
};
const isSupabaseConfigured = () => {
  return supabaseUrl.includes("supabase.co");
};

export { insertLead as a, isSupabaseConfigured as i };
