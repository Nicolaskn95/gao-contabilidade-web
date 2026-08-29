import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Receipt, Users, Briefcase, TrendingUp, User } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Geral",
    slug: "contabilidade-geral",
  },
  {
    icon: Receipt,
    title: "Fiscal",
    slug: "fiscal",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    slug: "departamento-pessoal",
  },
  {
    icon: Briefcase,
    title: "Legalização Societária",
    slug: "legalizacao-societaria",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Tributária",
    slug: "consultoria-tributaria",
  },
  {
    icon: User,
    title: "Pessoa Física",
    slug: "pessoa-fisica",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gao-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={`/servicos/${service.slug}`} key={index} className="block group h-full">
              <div className="relative w-full h-full bg-white rounded-lg p-8 border border-border/50 overflow-hidden z-0 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#024D44]">
                
                {/* Efeito Card1: Círculo que expande no hover */}
                <div className="absolute z-[-1] top-[-16px] right-[-16px] bg-[#024D44] h-8 w-8 rounded-full transform scale-100 origin-center transition-transform duration-300 ease-out group-hover:scale-[40]"></div>
                
                {/* Go-corner (cantinho superior direito) */}
                <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center overflow-hidden bg-[#024D44] rounded-tr-lg rounded-bl-[32px] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-white mt-[-4px] mr-[-4px] text-lg font-mono leading-none">&rarr;</span>
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#024D44]/10 text-[#024D44] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm font-bold mt-auto text-[#024D44] group-hover:text-[var(--color-gao-gold)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                    Saiba mais <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
