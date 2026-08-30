import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { Pilares } from "@/components/pilares"
import { Diferenciais } from "@/components/diferenciais"
import { Services } from "@/components/services"
import { Segmentos } from "@/components/segmentos"
import { QuemSomosResumo } from "@/components/quem-somos-resumo"
import { EquipeResumo } from "@/components/equipe-resumo"
import { ReformaTributariaDestaque } from "@/components/reforma-tributaria-destaque"
import { ProposalSection } from "@/components/proposal-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LatestNews } from "@/components/latest-news"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Loader } from "@/components/ui/loader"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <ScrollReveal><Pilares /></ScrollReveal>
      <ScrollReveal><Diferenciais /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><Segmentos /></ScrollReveal>
      <ScrollReveal><QuemSomosResumo /></ScrollReveal>
      <ScrollReveal><EquipeResumo /></ScrollReveal>
      <ScrollReveal><ReformaTributariaDestaque /></ScrollReveal>
      <ScrollReveal>
        <Suspense fallback={<Loader />}>
          <LatestNews />
        </Suspense>
      </ScrollReveal>
      <ScrollReveal><ProposalSection /></ScrollReveal>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
