import { LighthouseIcon } from "./icons/lighthouse-icon"
import { StopwatchIcon } from "./icons/stopwatch-icon"
import { StrategyIcon } from "./icons/strategy-icon"


export function Pilares() {
  const pilares = [
    {
      icon: <StopwatchIcon className="w-24 h-24 text-[var(--color-gao-gold)] mb-4" />,
      title: "Agilidade",
      description: "Prazos e obrigações sempre em dia"
    },
    {
      icon: <LighthouseIcon className="w-24 h-24 text-[var(--color-gao-gold)] mb-4" />,
      title: "Clareza",
      description: "Informação que você entende, sem jargão"
    },
    {
      icon: <StrategyIcon className="w-24 h-24 text-[var(--color-gao-gold)] mb-4" />,
      title: "Estratégia",
      description: "Decisões baseadas em dados, não achismo"
    }
  ]

  return (
    <section className="py-20 bg-[var(--color-gao-sage)]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilares.map((pilar, index) => (
            <div key={index} className="pilar-card">
              <div className="pilar-card-inner flex flex-col items-center text-center p-8 min-h-[240px] justify-center">
                {pilar.icon}
                <h3 className="text-2xl font-bold text-[#024D44] mb-3">{pilar.title}</h3>
                <p className="text-muted-foreground">{pilar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
