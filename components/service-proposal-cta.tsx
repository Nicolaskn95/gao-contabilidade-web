"use client"

import { trackProposalSubmission } from "@/lib/analytics"

interface ServiceProposalCTAProps {
  serviceTitle: string
}

export function ServiceProposalCTA({ serviceTitle }: ServiceProposalCTAProps) {
  const handleClick = () => {
    trackProposalSubmission(`servico_${serviceTitle.toLowerCase().replace(/\s+/g, "_")}`)
    const whatsappNumber = "5515996890947"
    const message = `Olá! Gostaria de solicitar uma proposta para o serviço de ${serviceTitle} da GAO Contabilidade.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="inline-block bg-[var(--color-gao-gold)] text-[#024D44] font-bold py-4 px-8 rounded-lg hover:bg-[var(--color-gao-gold)]/90 transition-colors shadow-lg cursor-pointer"
    >
      Enviar proposta via WhatsApp
    </button>
  )
}
