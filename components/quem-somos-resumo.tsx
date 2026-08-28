import { Button } from "@/components/ui/button"
import Link from "next/link"

export function QuemSomosResumo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#024D44] mb-6">
            Contabilidade próxima, estratégica e conectada ao seu negócio.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            Unimos conhecimento técnico, tecnologia e atuação consultiva nas áreas contábil, fiscal, trabalhista, societária e tributária.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[var(--color-gao-gold)] text-[#024D44] hover:bg-[var(--color-gao-gold)] hover:text-[#024D44] text-base px-8 py-6 font-bold"
          >
            <Link href="/quem-somos">
              Conheça nossa história
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
