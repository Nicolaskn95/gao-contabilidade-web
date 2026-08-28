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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pilares />
      <Diferenciais />
      <Services />
      <Segmentos />
      <QuemSomosResumo />
      <EquipeResumo />
      <ReformaTributariaDestaque />
      <ProposalSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
