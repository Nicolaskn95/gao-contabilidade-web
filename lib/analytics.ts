// Utilitário para envio de eventos ao Google Analytics 4 (gtag)

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, eventParams)
  }
}

// Evento disparado quando o usuário solicita uma proposta contábil
export const trackProposalSubmission = (origin: string = "formulario_proposta") => {
  trackEvent("generate_lead", {
    event_category: "proposta",
    event_label: origin,
    method: "whatsapp",
    value: 1,
    currency: "BRL",
  })
}

// Evento disparado quando o usuário clica para abrir conversa no WhatsApp
export const trackWhatsAppClick = (label: string = "botao_whatsapp") => {
  trackEvent("whatsapp_click", {
    event_category: "contato",
    event_label: label,
    method: "whatsapp",
  })
}
