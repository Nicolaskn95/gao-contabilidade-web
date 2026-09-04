import { Newspaper } from "lucide-react"
import { NewsSlider, NewsItem } from "./news-slider"

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
      let title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim() : ""
      
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

      // Excerpt extraction
      let excerpt = ""
      const descMatch = itemStr.match(/<description>([\s\S]*?)<\/description>/)
      const rawDesc = descMatch ? descMatch[1] : (contentMatch ? contentMatch[1] : "")
      if (rawDesc) {
        const cleanText = rawDesc
          .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
          .replace(/<style[\s\S]*?<\/style>/gi, "")
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/&nbsp;/g, " ")
          .replace(/\s+/g, " ")
          .trim()
        excerpt = cleanText.length > 130 ? cleanText.substring(0, 127) + "..." : cleanText
      }
      
      if (title && link) {
        items.push({ title, link, pubDate, imageUrl, excerpt })
      }
      
      if (items.length >= 10) break
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

  return (
    <section className="py-16 bg-[var(--color-gao-sage)]/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-10 text-center space-y-2">
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Newspaper className="mr-2 h-4 w-4" />
            Atualizações
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#024D44]">Últimas Notícias (CFC)</h2>
          <p className="text-muted-foreground max-w-[600px]">
            Mantenha-se atualizado com as informações mais recentes do Conselho Federal de Contabilidade.
          </p>
        </div>
        
        <NewsSlider news={news} />
      </div>
    </section>
  )
}
