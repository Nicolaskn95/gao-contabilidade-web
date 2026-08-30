import { CheckCircle2 } from "lucide-react"

export function Diferenciais() {
  const diferenciais = [
    {
      title: "Consultoria tributária estratégica",
      description: "Análises que vão além do cumprimento das obrigações."
    },
    {
      title: "Especialização em Reforma Tributária",
      description: "Preparação e planejamento para os impactos da transição tributária."
    },
    {
      title: "Atendimento próximo e consultivo",
      description: "Orientação clara e acompanhamento das necessidades de cada negócio."
    },
    {
      title: "Tecnologia aplicada à gestão contábil e fiscal",
      description: "Ferramentas que apoiam análises, controles e maior eficiência nos processos."
    },
    {
      title: "Visão integrada do negócio",
      description: "Contábil, fiscal, tributário, societário e trabalhista analisados de forma conectada."
    }
  ]

  return (
    <section className="py-20 bg-[var(--color-gao-nude)]/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Por que escolher a GAO?
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gao-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <div key={index} className="flex gap-4 items-start p-6 rounded-2xl bg-muted/20 border border-border/50 hover:border-[var(--color-gao-gold)]/50 transition-colors">
              <CheckCircle2 className="w-8 h-8 text-[var(--color-gao-gold)] shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
