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
    <section className="py-24 bg-[var(--color-gao-nude)]/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gao-gold)] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {equipe.map((membro, index) => (
            <Link href={`/equipe#${membro.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="block group w-full h-[360px]">
              <div className="relative w-full h-full bg-white p-1.5 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out group-hover:rounded-tl-[55px] overflow-hidden border border-border/50 hover:border-transparent">
                
                {/* Profile Pic */}
                <div className="absolute w-[calc(100%-12px)] h-[calc(100%-12px)] top-[6px] left-[6px] rounded-[28px] z-10 border-0 border-[var(--color-gao-gold)] overflow-hidden transition-all duration-500 delay-200 group-hover:w-[110px] group-hover:h-[110px] group-hover:top-[20px] group-hover:left-[20px] group-hover:rounded-full group-hover:z-30 group-hover:border-[4px] group-hover:shadow-lg group-hover:delay-0">
                  <img src={`/equipe-${index}.jpg`} alt={membro.name} className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-125" />
                </div>
                
                {/* Bottom Panel */}
                <div className="absolute bottom-[6px] left-[6px] right-[6px] bg-[#024D44] top-[80%] rounded-[28px] z-20 shadow-[inset_0_5px_5px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-500 ease-in-out group-hover:top-[100px] group-hover:rounded-[80px_28px_28px_28px] group-hover:delay-200 flex flex-col justify-end">
                  
                  {/* Expanded Content (Fades in) */}
                  <div className="p-6 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                    <span className="text-2xl text-white font-bold block mb-1 mt-2">{membro.name}</span>
                    <span className="text-xs font-bold text-[var(--color-gao-gold)] block mb-3 uppercase tracking-wider">{membro.role}</span>
                    <span className="text-sm text-white/90 block leading-relaxed">{membro.experience}</span>
                  </div>

                  {/* Always visible bottom bar */}
                  <div className="h-[65px] shrink-0 px-6 flex items-center justify-between">
                    <span className="text-white font-bold group-hover:opacity-0 transition-opacity duration-300 truncate pr-4">{membro.name}</span>
                    <button className="bg-white text-[#024D44] px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-md hover:bg-[var(--color-gao-gold)] hover:text-white transition-colors shrink-0">
                      Trajetória &rarr;
                    </button>
                  </div>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
