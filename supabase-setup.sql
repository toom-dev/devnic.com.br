-- Configuração da tabela leads no Supabase
-- Execute este script no SQL Editor do Supabase

-- Criar tabela leads (caso não exista)
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(50) NOT NULL,
  problema TEXT,
  servico VARCHAR(255) DEFAULT 'Contato Geral',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Adicionar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_servico ON leads(servico);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para updated_at
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Habilitar RLS (Row Level Security) se necessário
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de novos leads (acesso público para formulários)
CREATE POLICY IF NOT EXISTS "Allow public insert" ON leads
    FOR INSERT
    WITH CHECK (true);

-- Política para leitura apenas para usuários autenticados (admin)
CREATE POLICY IF NOT EXISTS "Allow authenticated read" ON leads
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- Política para atualização apenas para usuários autenticados (admin)
CREATE POLICY IF NOT EXISTS "Allow authenticated update" ON leads
    FOR UPDATE
    USING (auth.role() = 'authenticated');

-- Comentários para documentação
COMMENT ON TABLE leads IS 'Tabela para armazenar leads gerados pelos formulários de contato do site';
COMMENT ON COLUMN leads.nome IS 'Nome completo do lead';
COMMENT ON COLUMN leads.email IS 'E-mail de contato do lead';
COMMENT ON COLUMN leads.telefone IS 'Telefone de contato do lead';
COMMENT ON COLUMN leads.problema IS 'Descrição do problema ou necessidade do lead';
COMMENT ON COLUMN leads.servico IS 'Serviço de interesse do lead';
COMMENT ON COLUMN leads.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN leads.updated_at IS 'Data e hora da última atualização do registro'; 