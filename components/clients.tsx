"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const clients = [
  { name: "Cliente 1", logo: "/empresa-logo-1.jpg" },
  { name: "Cliente 2", logo: "/empresa-logo-2.jpg" },
  { name: "Cliente 3", logo: "/empresa-logo-3.jpg" },
  { name: "Cliente 4", logo: "/empresa-logo-4.jpg" },
  { name: "Cliente 5", logo: "/empresa-logo-5.jpg" },
  { name: "Cliente 6", logo: "/empresa-logo-6.jpg" },
]

function CounterAnimation({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary mb-2">
      {count}
      {suffix}
    </div>
  )
}

export function Clients() {
  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossos Clientes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Empresas que Confiam em Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Atendemos empresas de diversos segmentos com excelência e comprometimento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={160}
                height={80}
                className="opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <CounterAnimation end={150} suffix="+" />
              <div className="text-muted-foreground">Clientes Ativos</div>
            </div>
            <div className="p-6">
              <CounterAnimation end={15} suffix="+" />
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="p-6">
              <CounterAnimation end={98} suffix="%" />
              <div className="text-muted-foreground">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
