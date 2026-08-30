import { Button } from "@/components/ui/button"
import Link from "next/link"

export function QuemSomosResumo() {
  return (
    <section className="py-24 bg-[var(--color-gao-sage)]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-[#024D44] mb-6">
              Quem somos
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 md:mb-0">
              Contabilidade próxima, estratégica e conectada ao seu negócio. Unimos conhecimento técnico, tecnologia e atuação consultiva nas áreas contábil, fiscal, trabalhista, societária e tributária.
            </p>
          </div>
          <div>
            <img src={"/equipe-grupo.jpg"} alt="Time GAO" className="w-full rounded-2xl border-4 border-[var(--color-gao-gold)] shadow-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
