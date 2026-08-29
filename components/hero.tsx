"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showStaticImage, setShowStaticImage] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      console.log('Vídeo terminou, mostrando imagem estática')
      setShowStaticImage(true)
    }

    const handleVideoError = (e: Event) => {
      console.log('Erro no vídeo:', e)
      setShowStaticImage(true)
    }

    const handleVideoLoad = () => {
      console.log('Vídeo carregado com sucesso')
    }

    const handleVideoCanPlay = () => {
      console.log('Vídeo pode começar a reproduzir')
    }

    // Adicionar event listeners
    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('error', handleVideoError)
    video.addEventListener('loadeddata', handleVideoLoad)
    video.addEventListener('canplay', handleVideoCanPlay)

    // Tentar reproduzir o vídeo
    const playVideo = async () => {
      try {
        await video.play()
        console.log('Vídeo iniciado com sucesso')
      } catch (error) {
        console.log('Erro ao reproduzir vídeo:', error)
        setShowStaticImage(true)
      }
    }

    // Aguardar um pouco antes de tentar reproduzir
    setTimeout(playVideo, 100)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('error', handleVideoError)
      video.removeEventListener('loadeddata', handleVideoLoad)
      video.removeEventListener('canplay', handleVideoCanPlay)
    }
  }, [showStaticImage])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Vídeo de fundo - só mostra se não estiver na imagem estática */}
        {!showStaticImage && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-page-Br8LJbU41IBRjz1MPy1w9AFwM0pyJh.jpg"
          >
            <source src="/video.mp4" type="video/mp4" />
            {/* Fallback para navegadores que não suportam MP4 */}
            <source src="/video.mp4" type="video/webm" />
          </video>
        )}
        
        {/* Imagem estática - mostra em caso de erro */}
        {showStaticImage && (
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landing-page-Br8LJbU41IBRjz1MPy1w9AFwM0pyJh.jpg"
            alt="GAO Contabilidade"
            fill
            className="object-cover transition-opacity duration-1000"
            priority
          />
        )}
        
        {/* Overlay com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-left min-h-[80vh] flex items-center">
            <div className="space-y-12 w-full">
              {/* Logo e Badge */}
              <div className="space-y-10">
                <div className="inline-block">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-white">Soluções Contábeis Completas</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Contabilidade Estratégica para o Seu Negócio
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                  Transformamos números em estratégias. Oferecemos assessoria contábil completa para empresas de todos os segmentos, com foco em crescimento sustentável e conformidade fiscal.
                </p>
              </div>

              <div className="flex justify-start">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-[var(--color-gao-gold)] hover:text-[#024D44] hover:border-[var(--color-gao-gold)] text-base px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 font-bold"
                >
                  <Link href="/#servicos">
                    Conheça nossos serviços
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
