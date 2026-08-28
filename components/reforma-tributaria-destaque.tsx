import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function ReformaTributariaDestaque() {
  const apoios = [
    "Diagnóstico dos impactos da Reforma Tributária",
    "Planejamento da transição de 2026 a 2033",
    "Simulações e projeções da carga tributária",
    "Análise dos impactos de IBS e CBS",
    "Revisão de processos e parametrizações fiscais",
    "Análise de créditos tributários",
    "Avaliação dos impactos sobre preços, margens e fluxo de caixa",
    "Apoio na definição de estratégias para o período de transição"
  ]

  return (
    <section className="py-24 bg-[var(--color-gao-gold)] text-[#024D44]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Sua empresa está preparada para a nova realidade tributária?
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
              A Reforma Tributária muda muito mais do que a forma de calcular impostos. Os impactos alcançam preços, margens, fluxo de caixa, aproveitamento de créditos, contratos, cadastros, sistemas e a própria estratégia tributária das empresas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#024D44] hover:bg-[#024D44]/90 text-white border-none text-base px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/reforma-tributaria">
                Prepare sua empresa para a Reforma Tributária
              </Link>
            </Button>
          </div>
          <div className="bg-white/40 p-8 rounded-3xl backdrop-blur-sm border border-white/50 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Como a GAO pode apoiar sua empresa:</h3>
            <ul className="space-y-4">
              {apoios.map((item, index) => (
                <li key={index} className="flex items-start gap-3 font-medium opacity-90">
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
