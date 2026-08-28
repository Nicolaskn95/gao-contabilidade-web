import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function EquipeResumo() {
  const equipe = [
    {
      name: "Gisele Alves",
      role: "CEO | Contadora Responsável",
      experience: "+ de 14 anos de experiência",
      initials: "GA"
    },
    {
      name: "Isabela Gonzales",
      role: "Especialista Fiscal e Consultora Tributária",
      experience: "+ de 11 anos de experiência",
      initials: "IG"
    },
    {
      name: "Amanda Carolini",
      role: "Responsável por Legalização Societária",
      experience: "+ de 8 anos de experiência",
      initials: "AC"
    },
    {
      name: "Fernanda Massone",
      role: "Responsável pelo Departamento Pessoal",
      experience: "+ de 10 anos de experiência",
      initials: "FM"
    },
    {
      name: "Viviane Lucena",
      role: "Responsável pelo Departamento Contábil",
      experience: "+ de 6 anos de experiência",
      initials: "VL"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gao-gold)] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {equipe.map((membro, index) => (
            <Link href="/equipe" key={index} className="block group">
              <div className="bg-white rounded-2xl p-6 text-center border border-border/50 h-full hover:border-[var(--color-gao-gold)] transition-colors shadow-sm hover:shadow-md flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 border-4 border-muted group-hover:border-[var(--color-gao-gold)] transition-colors">
                  <AvatarImage src={`/equipe-${index}.jpg`} alt={membro.name} />
                  <AvatarFallback className="bg-[#024D44] text-white text-xl">{membro.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-foreground mb-1">{membro.name}</h3>
                <p className="text-sm font-semibold text-[#024D44] mb-2">{membro.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{membro.experience}</p>
                <p className="text-xs text-[var(--color-gao-gold)] font-bold mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  Conheça a trajetória &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
