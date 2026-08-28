import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { servicos } from "@/lib/data/servicos"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return servicos.map((s) => ({
    slug: s.slug,
  }))
}

export default async function ServicoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const servico = servicos.find((s) => s.slug === slug)

  if (!servico) {
    notFound()
  }

  const relacionados = servicos.filter((s) => servico.relatedSlugs.includes(s.slug))

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb & Hero */}
      <section className="pt-32 pb-16 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm mb-6 opacity-80 flex gap-2 items-center">
            <Link href="/" className="hover:text-[var(--color-gao-gold)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#servicos" className="hover:text-[var(--color-gao-gold)] transition-colors">Serviços</Link>
            <span>/</span>
            <span className="font-bold text-[var(--color-gao-gold)]">{servico.title}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-6">
            {servico.subtitle}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed opacity-90">
            {servico.description}
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-[#024D44] mb-8">O que está incluído:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servico.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-muted/20 border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-gao-gold)] shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Banner Reforma Tributária (Condicional) */}
      {servico.showReformaBanner && (
        <section className="py-12 bg-muted/50 border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-[#024D44] rounded-2xl p-8 md:p-12 text-center text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="text-left max-w-2xl">
                <h3 className="text-2xl font-bold text-[var(--color-gao-gold)] mb-2">Sua empresa está pronta para a Reforma Tributária?</h3>
                <p className="opacity-90">Entenda os impactos e prepare-se para a transição com a assessoria da GAO.</p>
              </div>
              <Link 
                href="/reforma-tributaria"
                className="bg-[var(--color-gao-gold)] text-[#024D44] font-bold py-4 px-8 rounded-lg hover:bg-[var(--color-gao-gold)]/90 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Saiba mais <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Serviços Relacionados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-[#024D44] mb-8 text-center">Também pode te interessar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relacionados.map((relacionado) => (
              <Link href={`/servicos/${relacionado.slug}`} key={relacionado.slug} className="block group">
                <div className="p-6 rounded-2xl border border-border/50 bg-muted/10 h-full hover:border-[var(--color-gao-gold)] hover:shadow-md transition-all">
                  <h3 className="text-lg font-bold text-foreground mb-3">{relacionado.title}</h3>
                  <p className="text-sm text-[var(--color-gao-gold)] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Conhecer serviço &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#024D44] text-center text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Solicite uma proposta</h2>
          <p className="text-lg opacity-90 mb-8">Sem compromisso.</p>
          <a
            href="https://wa.me/5515996890947"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[var(--color-gao-gold)] text-[#024D44] font-bold py-4 px-8 rounded-lg hover:bg-[var(--color-gao-gold)]/90 transition-colors shadow-lg"
          >
            Enviar proposta via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
