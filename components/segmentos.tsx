import { ShoppingCart, Stethoscope, Briefcase, Factory, Store, Truck } from "lucide-react"
import Marquee from "react-fast-marquee"

export function Segmentos() {
  const segmentos = [
    { icon: ShoppingCart, name: "E-commerce" },
    { icon: Stethoscope, name: "Clínicas médicas" },
    { icon: Briefcase, name: "Serviços em Geral" },
    { icon: Factory, name: "Indústrias" },
    { icon: Store, name: "Comércios em Geral" },
    { icon: Truck, name: "Transportadoras" },
  ]

  // Função para renderizar um card individual para não repetir código
  const renderCard = (item: any, index: number, isMobile = false) => (
    <div 
      key={index} 
      className={`relative overflow-hidden flex flex-col justify-center items-center bg-white rounded-tr-[24px] rounded-bl-[24px] rounded-tl-md rounded-br-md shadow-[0_14px_26px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:scale-[1.005] hover:shadow-[0_24px_36px_rgba(0,0,0,0.11),0_24px_46px_rgba(2,77,68,0.48)] group shrink-0 ${isMobile ? 'w-full h-[200px]' : 'w-[200px] h-[260px]'}`}
    >
      {/* Overlay que expande no hover */}
      <div className="absolute w-[100px] h-[100px] rounded-full bg-[#024D44] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70px] z-0 transition-transform duration-500 ease-out group-hover:scale-[6]"></div>
      
      {/* Círculo animado */}
      <div className={`rounded-full bg-white group-hover:bg-[#024D44] border-[3px] border-[#024D44] group-hover:border-[var(--color-gao-gold)] flex justify-center items-center relative z-10 transition-all duration-300 ease-out shrink-0 ${isMobile ? 'w-[80px] h-[80px]' : 'w-[110px] h-[110px]'}`}>
        {/* Círculo interno */}
        <div className={`absolute bg-[#024D44] group-hover:bg-[var(--color-gao-gold)] rounded-full transition-colors duration-300 ease-out z-10 flex items-center justify-center ${isMobile ? 'w-[68px] h-[68px]' : 'w-[94px] h-[94px]'}`}>
          <item.icon className={`${isMobile ? 'w-7 h-7' : 'w-10 h-10'} text-white z-20 group-hover:text-[#024D44] transition-colors duration-300`} strokeWidth={1.5} />
        </div>
      </div>

      {/* Texto */}
      <p className={`font-bold text-[#4C5656] relative z-10 transition-colors duration-300 ease-out group-hover:text-white text-center px-2 leading-tight ${isMobile ? 'text-[13px] mt-6' : 'text-[15px] mt-8 px-4'}`}>
        {item.name}
      </p>
    </div>
  )

  return (
    <section className="py-20 bg-[var(--color-gao-nude)]/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Segmentos
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja nossos principais segmentos de atuação no mercado.
          </p>
        </div>

        {/* Layout Mobile: Grid 2 colunas responsivo */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {segmentos.map((item, index) => renderCard(item, index, true))}
        </div>

        {/* Layout Desktop: Marquee */}
        <div className="hidden md:block">
          <Marquee
            pauseOnHover={true}
            speed={40}
            gradient={true}
            gradientColor={[248, 249, 250]}
            className="overflow-visible"
          >
            <div className="flex gap-6 py-4 px-3">
              {segmentos.map((item, index) => renderCard(item, index, false))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
