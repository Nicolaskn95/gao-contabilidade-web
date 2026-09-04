"use client"

import { useState, useRef, MouseEvent, useEffect } from "react"
import { Newspaper, ExternalLink, ChevronLeft, ChevronRight, Calendar, X, ZoomIn } from "lucide-react"

export interface NewsItem {
  title: string
  link: string
  pubDate: string
  imageUrl?: string
  excerpt?: string
}

export function NewsSlider({ news }: { news: NewsItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)
  const [previewItem, setPreviewItem] = useState<NewsItem | null>(null)

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeftState(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeftState - walk
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = direction === "left" ? -360 : 360
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <div className="relative group/slider max-w-[1300px] mx-auto px-4 md:px-12">
      {/* Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        aria-label="Notícia Anterior"
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-[#024D44] hover:bg-[#024D44] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        aria-label="Próxima Notícia"
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-border flex items-center justify-center text-[#024D44] hover:bg-[#024D44] hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Draggable & Scrollable Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto py-6 px-2 scrollbar-none select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {news.map((item, index) => {
          const date = item.pubDate
            ? new Date(item.pubDate).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : ""

          return (
            <div
              key={index}
              className="w-[290px] sm:w-[320px] md:w-[350px] shrink-0 bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-[#024D44]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group/card"
            >
              <div>
                {/* Header Image or Decorative Placeholder */}
                {item.imageUrl ? (
                  <div 
                    className="relative h-44 w-full overflow-hidden bg-muted cursor-pointer group/image"
                    onClick={() => !isDragging && setPreviewItem(item)}
                    title="Toque/Clique para ampliar a imagem"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    
                    {/* Hover Overlay Desktop */}
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors hidden sm:flex items-center justify-center opacity-0 group-hover/image:opacity-100 pointer-events-none">
                      <span className="bg-white/95 text-[#024D44] text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                        <ZoomIn className="w-3.5 h-3.5 text-[var(--color-gao-gold)]" /> Clique para ampliar
                      </span>
                    </div>

                    {/* Badge Permanente no Mobile */}
                    <div className="absolute bottom-2.5 right-2.5 bg-[#024D44]/90 text-white px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-md border border-[var(--color-gao-gold)]/60 backdrop-blur-xs z-10 pointer-events-none sm:hidden">
                      <ZoomIn className="w-3.5 h-3.5 text-[var(--color-gao-gold)]" />
                      <span>Toque para ampliar</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-28 w-full bg-gradient-to-br from-[#024D44] to-[var(--color-gao-gold)] opacity-90 flex items-center justify-center p-4">
                    <Newspaper className="w-10 h-10 text-white/40" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {date && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-gao-gold)] uppercase tracking-wider mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{date}</span>
                    </div>
                  )}

                  <h3 className="font-bold text-foreground text-base leading-snug mb-3 group-hover/card:text-[#024D44] transition-colors">
                    {item.title}
                  </h3>

                  {item.excerpt && (
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 mt-auto">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#024D44] hover:text-[var(--color-gao-gold)] transition-colors gap-1.5"
                >
                  <span>Ler notícia completa</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Preview Modal (Ao clicar) */}
      {previewItem && previewItem.imageUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Fundo escurecido - Clicar para fechar */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={() => setPreviewItem(null)}
          ></div>
          
          {/* Card do Modal */}
          <div className="relative bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden max-w-4xl w-full border border-white/20 transition-all transform scale-100 flex flex-col max-h-[90vh]">
            {/* Botão de Fechar */}
            <button 
              onClick={() => setPreviewItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors cursor-pointer"
              aria-label="Fechar preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full shrink h-[55vh] min-h-[300px] bg-[#f0f0f0] flex items-center justify-center">
              <img 
                src={previewItem.imageUrl} 
                alt={previewItem.title} 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="p-6 bg-white border-t border-border/30 text-center overflow-y-auto">
              <h3 className="font-bold text-xl md:text-2xl text-[#024D44] mb-2">{previewItem.title}</h3>
              {previewItem.excerpt && (
                <p className="text-muted-foreground max-w-2xl mx-auto">{previewItem.excerpt}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
