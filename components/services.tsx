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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={`/servicos/${service.slug}`} key={index} className="block group">
              <Card className="h-full border border-border/50 bg-muted/20 hover:border-[var(--color-gao-gold)] transition-colors shadow-none hover:shadow-md">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#024D44]/10 text-[#024D44] group-hover:bg-[#024D44] group-hover:text-white transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-[var(--color-gao-gold)] font-bold mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba mais &rarr;
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
