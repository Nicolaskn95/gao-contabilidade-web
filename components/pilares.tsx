import { Zap, Eye, Target } from "lucide-react"

export function Pilares() {
  const pilares = [
    {
      icon: <Zap className="w-12 h-12 text-[var(--color-gao-gold)] mb-4" />,
      title: "Agilidade",
      description: "Prazos e obrigações sempre em dia"
    },
    {
      icon: <Eye className="w-12 h-12 text-[var(--color-gao-gold)] mb-4" />,
      title: "Clareza",
      description: "Informação que você entende, sem jargão"
    },
    {
      icon: <Target className="w-12 h-12 text-[var(--color-gao-gold)] mb-4" />,
      title: "Estratégia",
      description: "Decisões baseadas em dados, não achismo"
    }
  ]

  return (
    <section className="py-20 bg-[var(--color-gao-sage)]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              {pilar.icon}
              <h3 className="text-2xl font-bold text-[#024D44] mb-3">{pilar.title}</h3>
              <p className="text-muted-foreground">{pilar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
