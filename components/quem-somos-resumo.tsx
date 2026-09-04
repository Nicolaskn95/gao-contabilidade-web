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
          <div className="relative w-full">
            <div 
              className="w-full p-[3px] rounded-[20px] shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(2,77,68,0.35)] group"
              style={{ backgroundImage: 'linear-gradient(163deg, var(--color-gao-gold) 0%, var(--color-gao-green) 100%)' }}
            >
              <img 
                src={"/equipe-grupo.jpg"} 
                alt="Time GAO" 
                className="w-full h-auto rounded-[17px] object-cover transition-all duration-200 group-hover:scale-[0.98] group-hover:rounded-[18px]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
