"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-all duration-300 hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground" 
                  : "text-white drop-shadow-md"
              }`}
            >
              Home
            </Link>
            <Link
              href="/#servicos"
              className={`text-sm font-medium transition-all duration-300 hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground" 
                  : "text-white drop-shadow-md"
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/quem-somos"
              className={`text-sm font-medium transition-all duration-300 hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground" 
                  : "text-white drop-shadow-md"
              }`}
            >
              Quem Somos
            </Link>
            <Link
              href="/equipe"
              className={`text-sm font-medium transition-all duration-300 hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-foreground" 
                  : "text-white drop-shadow-md"
              }`}
            >
              Equipe
            </Link>
            <Link
              href="/reforma-tributaria"
              className={`text-sm font-medium transition-all duration-300 hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md ${
                isScrolled 
                  ? "text-[var(--color-gao-green)] font-bold" 
                  : "text-[var(--color-gao-gold)] font-bold drop-shadow-md"
              }`}
            >
              Reforma Tributária
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/#proposta" className="btn-proposta">
              <span>
                Solicitar proposta
                <ArrowRight className="icon" />
              </span>
            </Link>
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
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md absolute left-0 right-0 top-20 shadow-md">
            <nav className="flex flex-col gap-4 px-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-medium text-foreground hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md transition-all"
              >
                Home
              </Link>
              <Link
                href="/#servicos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-medium text-foreground hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md transition-all"
              >
                Serviços
              </Link>
              <Link
                href="/quem-somos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-medium text-foreground hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md transition-all"
              >
                Quem Somos
              </Link>
              <Link
                href="/equipe"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-medium text-foreground hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md transition-all"
              >
                Equipe
              </Link>
              <Link
                href="/reforma-tributaria"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-sm font-bold text-[var(--color-gao-green)] hover:text-[var(--color-gao-gold)] px-3 py-2 rounded-md transition-all"
              >
                Reforma Tributária
              </Link>
              <Link href="/#proposta" onClick={() => setIsMobileMenuOpen(false)} className="btn-proposta w-full mt-4 flex justify-center">
                <span>
                  Solicitar proposta
                  <ArrowRight className="icon" />
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
