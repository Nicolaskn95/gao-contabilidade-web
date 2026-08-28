import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Target, Eye, ShieldCheck } from "lucide-react"

export default function QuemSomosPage() {
  const valores = [
    { nome: "Ética", desc: "integridade e responsabilidade em todas as relações e decisões." },
    { nome: "Transparência", desc: "comunicação clara, objetiva e acessível." },
    { nome: "Compromisso", desc: "responsabilidade com cada entrega e com as necessidades dos nossos clientes." },
    { nome: "Agilidade", desc: "eficiência no atendimento e cumprimento dos prazos." },
    { nome: "Excelência técnica", desc: "conhecimento aplicado com precisão e segurança." },
    { nome: "Atualização constante", desc: "acompanhamento contínuo das mudanças contábeis, fiscais, tributárias e empresariais." },
    { nome: "Proximidade", desc: "relacionamento próximo e consultivo, baseado no conhecimento de cada negócio." },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Quem Somos */}
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-gao-gold)] mb-8 leading-tight">
              Contabilidade próxima, estratégica e conectada ao seu negócio.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 text-pretty">
              A GAO nasceu com o propósito de oferecer uma contabilidade diferente do modelo tradicional, mais próxima do empresário e das decisões que fazem parte da rotina do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* História / Sobre */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Unimos conhecimento técnico, tecnologia e uma atuação consultiva para oferecer soluções nas áreas contábil, fiscal, trabalhista, societária e tributária, transformando informações em suporte para decisões mais seguras.
            </p>
            <p>
              Mais do que cumprir obrigações, buscamos compreender cada empresa, suas necessidades e seus objetivos para atuar como parceiros na gestão e no crescimento do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm">
              <Target className="w-12 h-12 text-[var(--color-gao-gold)] mb-6" />
              <h2 className="text-2xl font-bold text-[#024D44] mb-4">Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer soluções contábeis e tributárias com excelência técnica, proximidade e visão estratégica, apoiando nossos clientes no cumprimento de suas obrigações e na tomada de decisões mais seguras para seus negócios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm">
              <Eye className="w-12 h-12 text-[var(--color-gao-gold)] mb-6" />
              <h2 className="text-2xl font-bold text-[#024D44] mb-4">Visão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida pela excelência e pela atuação estratégica em contabilidade e consultoria tributária, construindo relações duradouras e contribuindo para negócios mais estruturados, seguros e preparados para as transformações do ambiente empresarial e tributário.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <ShieldCheck className="w-12 h-12 text-[#024D44] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#024D44]">Nossos Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valores.map((valor, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gao-gold)] mt-2 shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground">{valor.nome}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{valor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
