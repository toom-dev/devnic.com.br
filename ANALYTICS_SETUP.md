# Configuração do Analytics - Devnic.com.br

Este documento descreve toda a implementação de analytics do site da Devnic, incluindo Google Analytics 4 e Vercel Analytics.

## 📊 Ferramentas Implementadas

### 1. Google Analytics 4 (GA4)
- **ID**: `G-EBDZE154W3`
- **Localização**: `src/components/GoogleAnalytics.astro`
- **Funcionalidades**:
  - Rastreamento de páginas
  - Eventos personalizados de conversão
  - Rastreamento de scroll depth
  - Rastreamento de tempo na página
  - Configurações de privacidade (IP anonimizado)

### 2. Vercel Analytics
- **Pacote**: `@vercel/analytics`
- **Localização**: `src/layouts/Layout.astro`
- **Funcionalidades**:
  - Analytics de página automático
  - Métricas de performance
  - Dados em tempo real

### 3. Vercel Speed Insights
- **Pacote**: `@vercel/speed-insights`
- **Localização**: `src/layouts/Layout.astro`
- **Funcionalidades**:
  - Core Web Vitals
  - Métricas de performance
  - Diagnóstico de velocidade

## 🎯 Eventos Rastreados

### Eventos de Conversão
1. **Envio de Formulário de Contato**
   - Evento: `form_submit`
   - Categoria: `lead_generation`
   - Label: `form_submission`

2. **Cliques em Links do WhatsApp**
   - Evento: `contact`
   - Categoria: `lead_generation`
   - Label: `whatsapp_click`

3. **Cliques em Botões CTA**
   - Evento: `click`
   - Categoria: `engagement`
   - Label: `contact_button`

### Eventos de Engajamento
1. **Scroll Depth**
   - Marcos: 25%, 50%, 75%, 100%
   - Categoria: `engagement`
   - Labels: `scroll_depth_X`

2. **Tempo na Página**
   - Evento: `page_timing`
   - Categoria: `engagement`
   - Label: `time_on_page`

## 🔧 Configuração Técnica

### Arquivos Principais
```
src/
├── components/
│   └── GoogleAnalytics.astro     # Configuração do GA4
├── layouts/
│   └── Layout.astro              # Importação dos analytics
└── lib/
    └── analytics.ts              # Configurações e utilitários
```

### Instalação das Dependências
```bash
npm install @vercel/analytics @vercel/speed-insights
```

### Configurações de Privacidade
- IP anonimizado: ✅
- Google Signals desabilitado: ✅
- Personalização de anúncios desabilitada: ✅

## 📈 Métricas Importantes

### Para Google Analytics
1. **Conversões de Lead**:
   - Formulário de contato enviado
   - Cliques no WhatsApp
   - Ligações telefônicas

2. **Engajamento**:
   - Tempo médio na página
   - Profundidade de scroll
   - Taxa de rejeição

3. **Páginas de Serviço**:
   - Visualizações das páginas de serviço
   - Tempo gasto em cada serviço
   - Conversões por serviço

### Para Vercel Analytics
1. **Performance**:
   - Core Web Vitals
   - Tempo de carregamento
   - First Contentful Paint

2. **Experiência do Usuário**:
   - Unique visitors
   - Page views
   - Bounce rate

## 🚀 Como Usar

### Rastreamento Manual de Eventos
```typescript
import { trackConversion, CONVERSION_EVENTS } from '@lib/analytics';

// Rastrear uma conversão específica
trackConversion('FORM_SUBMIT');

// Rastrear com valor customizado
trackConversion('WHATSAPP_CLICK', 5);
```

### Adicionar Tracking a Botões
```html
<button data-track="contact" onClick={handleClick}>
  Entrar em Contato
</button>
```

### Verificar Implementação
1. Abra o site em modo desenvolvimento
2. Abra as ferramentas do desenvolvedor
3. Vá para a aba "Network"
4. Procure por requests para:
   - `google-analytics.com`
   - `vercel.live` (Analytics)

## 📊 Dashboard e Relatórios

### Google Analytics 4
- Acesse: [Google Analytics](https://analytics.google.com)
- Propriedade: `G-EBDZE154W3`
- Relatórios customizados configurados para conversões de lead

### Vercel Analytics
- Acesse: [Vercel Dashboard](https://vercel.com/analytics)
- Integrado automaticamente com o projeto
- Métricas disponíveis em tempo real

## 🔒 Privacidade e LGPD

A implementação está em conformidade com:
- **LGPD**: IPs anonimizados, sem rastreamento de dados pessoais
- **GDPR**: Configurações de privacidade ativadas
- **Cookies**: Apenas cookies funcionais e de analytics

## 🛠️ Manutenção

### Verificações Regulares
1. **Mensal**: Verificar se os eventos estão sendo capturados
2. **Trimestral**: Revisar relatórios de conversão
3. **Semestral**: Atualizar configurações conforme necessário

### Troubleshooting
- Verificar console do navegador para erros de GA4
- Confirmar que os scripts estão carregando
- Testar eventos em ambiente de desenvolvimento

---

**Última atualização**: $(date)
**Responsável**: Equipe Devnic
**Versão**: 1.0 