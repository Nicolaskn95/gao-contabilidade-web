import { Newspaper, ExternalLink } from "lucide-react"
import Marquee from "react-fast-marquee"

interface NewsItem {
  title: string
  link: string
  pubDate: string
  imageUrl?: string
}

async function getLatestNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch("https://cfc.org.br/feed/", {
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      return []
    }
    
    const xml = await res.text()
    
    const items: NewsItem[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match
    
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemStr = match[1]
      
      const titleMatch = itemStr.match(/<title>([\s\S]*?)<\/title>/)
      let title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, "$1").trim() : ""
      
      const linkMatch = itemStr.match(/<link>([\s\S]*?)<\/link>/)
      const link = linkMatch ? linkMatch[1].trim() : ""
      
      const pubDateMatch = itemStr.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : ""
      
      const contentMatch = itemStr.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/) || itemStr.match(/<description>([\s\S]*?)<\/description>/)
      let imageUrl = ""
      if (contentMatch) {
        const imgMatch = contentMatch[1].match(/<img[^>]+src="([^">]+)"/i)
        if (imgMatch) {
          imageUrl = imgMatch[1]
        }
      }
      
      if (title && link) {
        items.push({ title, link, pubDate, imageUrl })
      }
      
      if (items.length >= 5) break
    }
    
    return items
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    return []
  }
}

export async function LatestNews() {
  const news = await getLatestNews()

  if (news.length === 0) {
    return null
  }

  const renderNewsCard = (item: NewsItem, index: number) => {
    const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }) : ""

    return (
      <div key={index} className="news-card shrink-0 mx-2">
        {/* Icons visible on hover */}
        <div className="icons">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="see-more">
            Ler Mais
            <ExternalLink size={14} className="see-more__icon" />
          </a>
        </div>

        {/* Image or gradient placeholder */}
        {item.imageUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={item.imageUrl} alt={item.title} className="image" />
        ) : (
          <div className="image"></div>
        )}

        {/* Card Info */}
        <div className="card__info">
          <span className="page">{date}</span>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="title" title={item.title}>
            {item.title}
          </a>
        </div>
      </div>
    )
  }

  return (
    <section className="py-12 bg-[var(--color-gao-sage)]/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="flex flex-col items-center justify-center mb-12 text-center space-y-2">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Newspaper className="mr-2 h-4 w-4" />
            Atualizações
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Últimas Notícias (CFC)</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Mantenha-se atualizado com as informações mais recentes do Conselho Federal de Contabilidade.
          </p>
        </div>
        
        {/* Mobile Layout (Flex Wrap) */}
        <div className="flex flex-wrap justify-center gap-6 md:hidden">
          {news.map((item, index) => renderNewsCard(item, index))}
        </div>

        {/* Desktop Layout (Mural Rotativo / Marquee) */}
        <div className="hidden md:block w-full">
          <Marquee
            pauseOnHover={true}
            speed={30}
            gradient={true}
            gradientColor={[248, 249, 250]}
            className="py-6 overflow-visible"
          >
            <div className="flex gap-4 px-2">
              {news.map((item, index) => renderNewsCard(item, index))}
              {/* Duplicamos o array para garantir o efeito infinito no mural sem cortes */}
              {news.map((item, index) => renderNewsCard(item, index + 5))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}
