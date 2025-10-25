"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeSwitch } from "@/components/theme-switch"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md" 
          : isHovered 
            ? "bg-white/95 backdrop-blur-md dark:bg-stone-900/95" 
            : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
                isScrolled || isHovered ? "text-foreground dark:text-foreground" : "text-white drop-shadow-lg"
              }`}>
                GAO
              </div>
              <div className={`text-xs transition-colors duration-300 ${
                isScrolled || isHovered ? "text-muted-foreground dark:text-muted-foreground" : "text-white/80 drop-shadow-md"
              }`}>
                Contabilidade & Assessoria
              </div>
            </div>
            {/* Texto animado para mobile */}
            <div className={`md:hidden transition-all duration-500 ${
              isMobileMenuOpen 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-4"
            }`}>
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled || isHovered ? "text-foreground dark:text-foreground" : "text-white drop-shadow-md"
              }`}>
                {isMobileMenuOpen ? (
                  <>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.05s' }}>C</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.08s' }}>o</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.11s' }}>n</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.14s' }}>t</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.17s' }}>a</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>b</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.23s' }}>i</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.26s' }}>l</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.29s' }}>i</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.32s' }}>d</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.35s' }}>a</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.38s' }}>d</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.41s' }}>e</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.44s' }}> </span>
                    <span className="inline-block animate-fade-in text-yellow-400 font-bold" style={{ animationDelay: '0.47s' }}>&</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.5s' }}> </span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.53s' }}>A</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.56s' }}>s</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.59s' }}>s</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.62s' }}>e</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.65s' }}>s</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.68s' }}>s</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.71s' }}>o</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.74s' }}>r</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.77s' }}>i</span>
                    <span className="inline-block animate-fade-in" style={{ animationDelay: '0.8s' }}>a</span>
                  </>
                ) : (
                  "Contabilidade & Assessoria"
                )}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md group ${
                isScrolled || isHovered
                  ? "text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary" 
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              Início
              <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ease-out ${
                isScrolled || isHovered ? "w-0 group-hover:w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`relative text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md group ${
                isScrolled || isHovered
                  ? "text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary" 
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              Serviços
              <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ease-out ${
                isScrolled || isHovered ? "w-0 group-hover:w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
            {/* <button
              onClick={() => scrollToSection("clientes")}
              className={`text-sm font-medium transition-all duration-300 hover:bg-accent px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground hover:text-accent-foreground" 
                  : "text-white hover:text-white/80 drop-shadow-md"
              }`}
            >
              Clientes
            </button> */}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeSwitch headerTheme={isScrolled || isHovered ? 'light' : 'transparent'} />
            <Button
              onClick={() => scrollToSection("proposta")}
              className={`relative font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isScrolled || isHovered
                  ? "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              }`}
            >
              Solicitar Proposta
            </Button>
          </div>

          <button 
            className={`md:hidden transition-colors duration-300 ${
              isScrolled || isHovered ? "text-foreground dark:text-foreground" : "text-white drop-shadow-md"
            }`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
          isMobileMenuOpen 
            ? "max-h-96 opacity-100 py-6 border-t border-border" 
            : "max-h-0 opacity-0 py-0"
        }`}>
          <nav className="flex flex-col gap-6 px-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className={`text-left text-lg font-medium text-foreground hover:text-primary hover:bg-accent/50 px-4 py-3 rounded-lg transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className={`text-left text-lg font-medium text-foreground hover:text-primary hover:bg-accent/50 px-4 py-3 rounded-lg transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
            >
              Serviços
            </button>
            {/* <button
              onClick={() => scrollToSection("clientes")}
              className={`text-left text-lg font-medium text-foreground hover:text-primary hover:bg-accent/50 px-4 py-3 rounded-lg transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
            >
              Clientes
            </button> */}
            <div className={`flex items-center justify-between px-4 py-3 rounded-lg bg-accent/20 transition-all duration-500 transform ${
              isMobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "400ms" : "0ms" }}
            >
              <span className="text-sm text-muted-foreground font-medium">Tema</span>
              <ThemeSwitch headerTheme="light" />
            </div>
            <Button
              onClick={() => scrollToSection("proposta")}
              className={`bg-primary hover:bg-primary/90 text-primary-foreground w-full py-4 text-lg font-semibold rounded-lg transition-all duration-500 transform ${
                isMobileMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "500ms" : "0ms" }}
            >
              Solicitar Proposta
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Divisor com margem que some no scroll */}
      {!isScrolled && (
        <div className="mx-10 border-b-2 border-stone-200/50 dark:border-stone-700/50 transition-opacity duration-300" />
      )}
    </header>
  )
}
