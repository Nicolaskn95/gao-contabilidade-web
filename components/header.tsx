"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand-ic47XtwwKqKzDBVVYDPoprVmkhlRGO.jpg"
              alt="GAO Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <div className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white drop-shadow-lg"
              }`}>
                GAO
              </div>
              <div className={`text-xs transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-white/80 drop-shadow-md"
              }`}>
                Contabilidade & Assessoria
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-sm font-medium transition-all duration-300 hover:bg-accent px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground hover:text-accent-foreground" 
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`text-sm font-medium transition-all duration-300 hover:bg-accent px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground hover:text-accent-foreground" 
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("clientes")}
              className={`text-sm font-medium transition-all duration-300 hover:bg-accent px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground hover:text-accent-foreground" 
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              Clientes
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("proposta")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Solicitar Proposta
            </Button>
          </div>

          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-md"
            }`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium text-foreground hover:text-accent-foreground hover:bg-accent px-3 py-2 rounded-md transition-all"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-sm font-medium text-foreground hover:text-accent-foreground hover:bg-accent px-3 py-2 rounded-md transition-all"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("clientes")}
                className="text-left text-sm font-medium text-foreground hover:text-accent-foreground hover:bg-accent px-3 py-2 rounded-md transition-all"
              >
                Clientes
              </button>
              <Button
                onClick={() => scrollToSection("proposta")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
              >
                Solicitar Proposta
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
