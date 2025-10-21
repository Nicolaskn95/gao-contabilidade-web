import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { ProposalSection } from "@/components/proposal-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Clients />
      <ProposalSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
