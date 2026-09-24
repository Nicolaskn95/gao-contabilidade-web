// Utilitário para envio de eventos ao Google Analytics 4 (gtag)

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean | undefined>
) => {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, eventParams)
  }
}

// 1. Proposta Geral de Serviços Contábeis
export const trackProposalSubmission = (origin: string = "formulario_proposta") => {
  // Evento padrão global de lead para campanhas e relatórios consolidados
  trackEvent("generate_lead", {
    event_category: "proposta",
    event_label: origin,
    lead_type: "proposta_geral",
    method: "whatsapp",
    value: 1,
    currency: "BRL",
  })

  // Evento com nome direto para aparecer destacado na lista do GA4
  trackEvent("proposta_geral", {
    method: "whatsapp",
    origem: origin,
  })
}

// 2. Proposta / Avaliação da Reforma Tributária
export const trackReformaTributariaSubmission = () => {
  // Evento padrão global de lead
  trackEvent("generate_lead", {
    event_category: "reforma_tributaria",
    event_label: "formulario_reforma_tributaria",
    lead_type: "reforma_tributaria",
    method: "whatsapp",
    value: 1,
    currency: "BRL",
  })

  // Evento com nome direto para você saber exatamente que foi Reforma Tributária
  trackEvent("proposta_reforma_tributaria", {
    method: "whatsapp",
    origem: "formulario_reforma_tributaria",
  })
}

// 3. Clique direto no botão de WhatsApp (dúvidas / contato)
export const trackWhatsAppClick = (label: string = "botao_whatsapp") => {
  trackEvent("whatsapp_click", {
    event_category: "contato",
    event_label: label,
    method: "whatsapp",
  })
}
