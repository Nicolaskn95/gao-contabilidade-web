"use client"

import { useEffect, useState, useRef } from "react"
import { Calculator, Receipt, Users, Briefcase, TrendingUp, User } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Detect mobile screen or touch device
  useEffect(() => {
    const checkMobile = () => {
      const isSmallScreen = window.innerWidth < 768
      const isTouch = window.matchMedia("(pointer: coarse)").matches
      setIsMobile(isSmallScreen || isTouch)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Scroll effect on desktop
  useEffect(() => {
    if (isMobile) {
      setActiveIndex(null)
      return
    }

    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Section visible in viewport
      if (rect.top < windowHeight * 0.85 && rect.bottom > windowHeight * 0.15) {
        // Calculate relative scroll progress through the services section
        const totalDistance = rect.height + windowHeight * 0.7
        const scrolled = windowHeight * 0.85 - rect.top
        const progress = Math.max(0, Math.min(1, scrolled / totalDistance))

        const index = Math.floor(progress * services.length)
        const safeIndex = Math.min(services.length - 1, Math.max(0, index))
        setActiveIndex(safeIndex)
      } else {
        setActiveIndex(null)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  return (
    <section ref={sectionRef} id="servicos" className="py-24 bg-[var(--color-gao-sage)]/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gao-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isCardActive = (hoveredIndex === index) || (!isMobile && activeIndex === index)

            return (
              <Link
                href={`/servicos/${service.slug}`}
                key={index}
                className="block group h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={cn(
                    "relative w-full h-full bg-white rounded-lg p-8 border border-border/50 overflow-hidden z-0 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#024D44]",
                    isCardActive && "shadow-md -translate-y-1 border-[#024D44]"
                  )}
                >
                  {/* Efeito Card1: Círculo que expande no hover / ativado pelo scroll */}
                  <div
                    className={cn(
                      "absolute z-[-1] top-[-16px] right-[-16px] bg-[#024D44] h-8 w-8 rounded-full transform scale-100 origin-center transition-transform duration-500 ease-out group-hover:scale-[40]",
                      isCardActive && "scale-[40]"
                    )}
                  />

                  {/* Go-corner (cantinho superior direito) */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-8 h-8 flex items-center justify-center overflow-hidden bg-[#024D44] rounded-tr-lg rounded-bl-[32px] opacity-80 group-hover:opacity-100 transition-opacity",
                      isCardActive && "opacity-100"
                    )}
                  >
                    <span className="text-white mt-[-4px] mr-[-4px] text-lg font-mono leading-none">&rarr;</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div
                      className={cn(
                        "mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#024D44]/10 text-[#024D44] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300",
                        isCardActive && "bg-white/20 text-white"
                      )}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-bold text-foreground mb-4 group-hover:text-white transition-colors duration-300",
                        isCardActive && "text-white"
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm font-bold mt-auto text-[#024D44] group-hover:text-[var(--color-gao-gold)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2",
                        isCardActive && "text-[var(--color-gao-gold)] opacity-100"
                      )}
                    >
                      Saiba mais{" "}
                      <span
                        className={cn(
                          "group-hover:translate-x-1 transition-transform",
                          isCardActive && "translate-x-1"
                        )}
                      >
                        &rarr;
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

