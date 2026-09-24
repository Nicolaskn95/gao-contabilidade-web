import { Newspaper, Landmark } from "lucide-react"
import { NewsSlider, NewsItem } from "./news-slider"

async function fetchWithTimeout(url: string, timeoutMs = 8000): Promise<string | null> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
      },
    })

    if (!res.ok) {
      return null
    }

    return await res.text()
  } catch (error) {
    console.error(`Error fetching feed from ${url}:`, error)
    return null
  } finally {
    clearTimeout(timeoutId)
  }
}

async function getContabeisNews(): Promise<NewsItem[]> {
  try {
    const xml = await fetchWithTimeout("https://www.contabeis.com.br/rss/conteudo/")
    if (!xml) return []

    const items: NewsItem[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/g
    let match

    while ((match = itemRegex.exec(xml)) !== null) {
      const itemStr = match[1]

      const titleMatch = itemStr.match(/<title>([\s\S]*?)<\/title>/)
      const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim() : ""

      const linkMatch = itemStr.match(/<link>([\s\S]*?)<\/link>/)
      const link = linkMatch ? linkMatch[1].trim() : ""

      const pubDateMatch = itemStr.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : ""

      let imageUrl = ""
      const mediaMatch = itemStr.match(/<media:content[^>]+url=["']([^"']+)["']/i)
      if (mediaMatch) {
        imageUrl = mediaMatch[1]
      } else {
        const imgMatch = itemStr.match(/<img[^>]+src=["']([^"']+)["']/i)
        if (imgMatch) imageUrl = imgMatch[1]
      }

      let excerpt = ""
      const descMatch = itemStr.match(/<description>([\s\S]*?)<\/description>/)
      if (descMatch) {
        const rawDesc = descMatch[1]
          .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
          .replace(/<style[\s\S]*?<\/style>/gi, "")
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/Leia mais em\s+https?:\/\/\S+/gi, "")
          .replace(/&nbsp;/g, " ")
          .replace(/\s+/g, " ")
          .trim()
        excerpt = rawDesc.length > 130 ? rawDesc.substring(0, 127) + "..." : rawDesc
      }

      if (title && link) {
        items.push({
          title,
          link,
          pubDate,
          imageUrl,
          excerpt,
          source: "contabeis",
        })
      }

      if (items.length >= 10) break
    }

    return items
  } catch (error) {
    console.error("Error processing Contabeis RSS:", error)
    return []
  }
}

async function getReceitaNews(): Promise<NewsItem[]> {
  try {
    let xml = await fetchWithTimeout("https://www.gov.br/receitafederal/pt-br/assuntos/noticias/ultimas-noticias/RSS")
    if (!xml) {
      xml = await fetchWithTimeout("https://www.gov.br/receitafederal/pt-br/assuntos/noticias/RSS")
    }
    if (!xml) return []

    let items = parseReceitaXml(xml)

    if (items.length === 0) {
      const fallbackXml = await fetchWithTimeout("https://www.gov.br/receitafederal/pt-br/assuntos/noticias/RSS")
      if (fallbackXml) {
        items = parseReceitaXml(fallbackXml)
      }
    }

    return items
  } catch (error) {
    console.error("Error processing Receita Federal RSS:", error)
    return []
  }
}

function parseReceitaXml(xml: string): NewsItem[] {
  const items: NewsItem[] = []
  const itemRegex = /<item[\s\S]*?>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemStr = match[1]

    const typeMatch = itemStr.match(/<dc:type>([\s\S]*?)<\/dc:type>/)
    const type = typeMatch ? typeMatch[1].trim() : ""
    if (["Folder", "Collection", "Link"].includes(type)) {
      continue
    }

    const titleMatch = itemStr.match(/<title>([\s\S]*?)<\/title>/)
    const title = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim() : ""

    const linkMatch = itemStr.match(/<link>([\s\S]*?)<\/link>/)
    const link = linkMatch ? linkMatch[1].trim() : ""

    const dateMatch =
      itemStr.match(/<dc:date>([\s\S]*?)<\/dc:date>/) || itemStr.match(/<pubDate>([\s\S]*?)<\/pubDate>/)
    const pubDate = dateMatch ? dateMatch[1].trim() : ""

    let imageUrl = ""
    const imgMatch = itemStr.match(/<img[^>]+src=["']([^"']+)["']/i)
    if (imgMatch) imageUrl = imgMatch[1]

    let excerpt = ""
    const descMatch = itemStr.match(/<description>([\s\S]*?)<\/description>/)
    if (descMatch) {
      const rawDesc = descMatch[1]
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim()
      excerpt = rawDesc.length > 130 ? rawDesc.substring(0, 127) + "..." : rawDesc
    }

    if (title && link) {
      items.push({
        title,
        link,
        pubDate,
        imageUrl,
        excerpt,
        source: "receita",
      })
    }

    if (items.length >= 10) break
  }

  return items
}

export async function LatestNews() {
  const [contabeisNews, receitaNews] = await Promise.all([
    getContabeisNews(),
    getReceitaNews(),
  ])

  if (contabeisNews.length === 0 && receitaNews.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-[var(--color-gao-sage)]/20 overflow-hidden space-y-16">
      {/* Mural 1: Portal Contábeis */}
      {contabeisNews.length > 0 && (
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-10 text-center space-y-2">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Newspaper className="mr-2 h-4 w-4" />
              Notícias do Setor
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#024D44]">
              Últimas Notícias (Portal Contábeis)
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Mantenha-se atualizado com as principais notícias, artigos e análises do Portal Contábeis.
            </p>
          </div>

          <NewsSlider news={contabeisNews} />
        </div>
      )}

      {/* Divisor Visual se ambos os murais estiverem presentes */}
      {contabeisNews.length > 0 && receitaNews.length > 0 && (
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-t border-[#024D44]/15" />
        </div>
      )}

      {/* Mural 2: Receita Federal */}
      {receitaNews.length > 0 && (
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-10 text-center space-y-2">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Landmark className="mr-2 h-4 w-4" />
              Atualizações Oficiais
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#024D44]">
              Notícias da Receita Federal
            </h2>
            <p className="text-muted-foreground max-w-[600px]">
              Acompanhe as atualizações, comunicados oficiais, prazos e normativas da Receita Federal do Brasil.
            </p>
          </div>

          <NewsSlider news={receitaNews} />
        </div>
      )}
    </section>
  )
}
