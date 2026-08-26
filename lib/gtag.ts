export const GA_MEASUREMENT_ID = "G-KRPRVERCJW"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

/**
 * Dispara um evento personalizado ou padrão para o Google Analytics (gtag.js)
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams)
  }
}

/**
 * Rastreia cliques e envios de mensagens para o WhatsApp
 * Dispara o evento de conversão 'generate_lead' e o evento customizado 'click_whatsapp'
 */
export const trackWhatsAppClick = (origin: string, additionalData?: Record<string, any>) => {
  const params = {
    event_category: "WhatsApp",
    event_label: origin,
    value: origin,
    ...additionalData,
  }

  // Evento customizado
  trackEvent("click_whatsapp", params)

  // Evento recomendado pelo GA4 para Leads / Conversões
  trackEvent("generate_lead", {
    currency: "BRL",
    lead_source: "WhatsApp",
    method: origin,
    ...additionalData,
  })
}
