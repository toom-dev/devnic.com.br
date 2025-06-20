// Configurações do Analytics
export const ANALYTICS_CONFIG = {
  googleAnalytics: {
    id: 'G-EBDZE154W3',
    enabled: true,
    features: {
      anonymizeIp: true,
      allowGoogleSignals: false,
      allowAdPersonalization: false,
    }
  },
  vercelAnalytics: {
    enabled: true,
    debug: process.env.NODE_ENV === 'development',
  }
};

// Tipos para eventos customizados
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Funções utilitárias para tracking
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// Eventos pré-definidos para conversões
export const CONVERSION_EVENTS = {
  CONTACT_FORM_SUBMIT: {
    action: 'generate_lead',
    category: 'lead_generation',
    label: 'contact_form_submission',
    value: 1
  },
  WHATSAPP_CLICK: {
    action: 'contact',
    category: 'lead_generation', 
    label: 'whatsapp_click',
    value: 1
  },
  PHONE_CLICK: {
    action: 'contact',
    category: 'lead_generation',
    label: 'phone_click',
    value: 1
  },
  SERVICE_PAGE_VIEW: {
    action: 'page_view',
    category: 'engagement',
    label: 'service_page',
    value: 1
  },
  CTA_BUTTON_CLICK: {
    action: 'click',
    category: 'engagement',
    label: 'cta_button',
    value: 1
  }
};

// Função para rastreamento de conversões de negócio
export const trackConversion = (conversionType: keyof typeof CONVERSION_EVENTS, customValue?: number) => {
  const event = { ...CONVERSION_EVENTS[conversionType] };
  if (customValue !== undefined) {
    event.value = customValue;
  }
  trackEvent(event);
};

// Declaração global para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 