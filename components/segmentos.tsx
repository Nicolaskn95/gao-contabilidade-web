import { ShoppingCart, Stethoscope, Briefcase, Factory, Store, Truck } from "lucide-react"

export function Segmentos() {
  const segmentos = [
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Stethoscope, name: "Clínicas médicas" },
    { icon: Briefcase, name: "Serviços em Geral" },
    { icon: Factory, name: "Indústrias" },
    { icon: Store, name: "Comércios em Geral" },
    { icon: Truck, name: "Transportadoras" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Segmentos
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja nossos principais segmentos de atuação no mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {segmentos.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-[#024D44] transition-colors">
                <item.icon className="w-6 h-6 text-[#024D44] group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-semibold text-center text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
