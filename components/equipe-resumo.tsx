"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export function EquipeResumo() {
  const isMobile = useIsMobile()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

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

  useEffect(() => {
    // On desktop, scroll selection is completely disabled
    if (!isMobile) {
      setActiveIndex(null)
      return
    }

    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Section visible in viewport
      if (sectionRect.top < windowHeight * 0.9 && sectionRect.bottom > windowHeight * 0.1) {
        // On mobile: highlight the card closest to viewport center as user scrolls
        const viewportCenter = windowHeight * 0.5
        let minDistance = Infinity
        let closestIndex = 0

        cardRefs.current.forEach((cardEl, index) => {
          if (!cardEl) return
          const rect = cardEl.getBoundingClientRect()
          const cardCenter = rect.top + rect.height / 2
          const distance = Math.abs(cardCenter - viewportCenter)

          if (rect.bottom > 0 && rect.top < windowHeight && distance < minDistance) {
            minDistance = distance
            closestIndex = index
          }
        })

        setActiveIndex(closestIndex)
      } else {
        setActiveIndex(null)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [isMobile])

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-gao-nude)]/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
            Nossa Equipe
          </h2>
          <div className="w-20 h-1 bg-[var(--color-gao-gold)] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {equipe.map((membro, index) => {
            // Scroll activation applies on mobile screen
            const isCardActive = isMobile && activeIndex === index

            return (
              <Link
                ref={(el) => { cardRefs.current[index] = el }}
                href={`/equipe#${membro.name.toLowerCase().replace(/\s+/g, '-')}`}
                key={index}
                className="block group w-full h-[370px] sm:h-[360px] select-none"
              >
                <div
                  className={cn(
                    "relative w-full h-full bg-white p-1.5 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out group-hover:rounded-tl-[55px] overflow-hidden border border-border/50 hover:border-transparent",
                    isCardActive && "rounded-tl-[55px] shadow-xl border-transparent"
                  )}
                >
                  {/* Profile Pic */}
                  <div
                    className={cn(
                      "absolute w-[calc(100%-12px)] h-[calc(100%-12px)] top-[6px] left-[6px] rounded-[28px] z-10 border-0 border-[var(--color-gao-gold)] overflow-hidden transition-all duration-500 delay-200 group-hover:w-[100px] sm:group-hover:w-[110px] group-hover:h-[100px] sm:group-hover:h-[110px] group-hover:top-[16px] sm:group-hover:top-[20px] group-hover:left-[16px] sm:group-hover:left-[20px] group-hover:rounded-full group-hover:z-30 group-hover:border-[4px] group-hover:shadow-lg group-hover:delay-0",
                      isCardActive && "w-[100px] sm:w-[110px] h-[100px] sm:h-[110px] top-[16px] sm:top-[20px] left-[16px] sm:left-[20px] rounded-full z-30 border-[4px] border-[var(--color-gao-gold)] shadow-lg delay-0"
                    )}
                  >
                    <img
                      src={`/equipe-${index}.jpg`}
                      alt={membro.name}
                      className={cn(
                        "w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-125",
                        isCardActive && "scale-125"
                      )}
                    />
                  </div>
                  
                  {/* Bottom Panel */}
                  <div
                    className={cn(
                      "absolute bottom-[6px] left-[6px] right-[6px] bg-[#024D44] top-[80%] rounded-[28px] z-20 shadow-[inset_0_5px_5px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-500 ease-in-out group-hover:top-[90px] sm:group-hover:top-[100px] group-hover:rounded-[70px_28px_28px_28px] sm:group-hover:rounded-[80px_28px_28px_28px] group-hover:delay-200 flex flex-col justify-end",
                      isCardActive && "top-[90px] sm:top-[100px] rounded-[70px_28px_28px_28px] sm:rounded-[80px_28px_28px_28px] delay-200"
                    )}
                  >
                    {/* Expanded Content (Fades in on hover / scroll on mobile) */}
                    <div
                      className={cn(
                        "p-4 sm:p-6 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300",
                        isCardActive && "opacity-100"
                      )}
                    >
                      <span className="text-xl sm:text-2xl text-white font-bold block mb-1 mt-1 sm:mt-2 leading-snug">{membro.name}</span>
                      <span className="text-[11px] sm:text-xs font-bold text-[var(--color-gao-gold)] block mb-2 sm:mb-3 uppercase tracking-wider leading-tight">{membro.role}</span>
                      <span className="text-xs sm:text-sm text-white/90 block leading-relaxed">{membro.experience}</span>
                    </div>

                    {/* Always visible bottom bar */}
                    <div className="h-[60px] sm:h-[65px] shrink-0 px-4 sm:px-6 flex items-center justify-between">
                      <span
                        className={cn(
                          "text-white font-bold text-sm sm:text-base group-hover:opacity-0 transition-opacity duration-300 truncate pr-2 sm:pr-4",
                          isCardActive && "opacity-0"
                        )}
                      >
                        {membro.name}
                      </span>
                      <button className="bg-white text-[#024D44] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-md hover:bg-[var(--color-gao-gold)] hover:text-white transition-colors shrink-0">
                        Trajetória &rarr;
                      </button>
                    </div>
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
