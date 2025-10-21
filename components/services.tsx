import { Card, CardContent } from "@/components/ui/card"
import { Calculator, FileText, TrendingUp, Users, Building2, Shield } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Geral",
    description: "Escrituração contábil completa, balanços patrimoniais e demonstrações financeiras para sua empresa.",
  },
  {
    icon: FileText,
    title: "Assessoria Fiscal",
    description:
      "Planejamento tributário estratégico e gestão de obrigações fiscais para otimizar sua carga tributária.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Financeira",
    description: "Análise de indicadores financeiros e consultoria para tomada de decisões estratégicas.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Gestão completa de folha de pagamento, encargos trabalhistas e benefícios.",
  },
  {
    icon: Building2,
    title: "Abertura de Empresas",
    description: "Assessoria completa para constituição de empresas, escolha do regime tributário ideal e registro.",
  },
  {
    icon: Shield,
    title: "Compliance & Auditoria",
    description: "Garantia de conformidade legal e auditoria interna para segurança do seu negócio.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossos Serviços</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Soluções Completas para Seu Negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Oferecemos uma gama completa de serviços contábeis e de assessoria para empresas de todos os segmentos e
            portes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
