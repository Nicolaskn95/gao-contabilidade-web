import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-6">Política de Cookies</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div className="bg-muted/30 p-6 rounded-lg border border-border/50 text-sm mb-8">
            <p><strong>Nota:</strong> Esta é uma versão preliminar. A lista de cookies depende das ferramentas que serão efetivamente utilizadas no site (ex: Google Analytics, Meta Pixel). Recomenda-se validação jurídica.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">1. O que são cookies</h2>
            <p>Cookies são pequenos arquivos armazenados no navegador do usuário, usados para reconhecer visitas, lembrar preferências e coletar dados estatísticos de uso do site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">2. Tipos de cookies utilizados</h2>
            <p><em>Lista a definir após confirmação das ferramentas efetivamente utilizadas no site (ex: Google Analytics, Meta Pixel, ferramentas de formulário/CRM).</em></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">3. Consentimento</h2>
            <p>Cookies não essenciais só são ativados mediante consentimento do usuário, dado por meio do banner de cookies exibido no primeiro acesso.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">4. Gerenciamento</h2>
            <p>O usuário pode alterar suas preferências de cookies a qualquer momento pelo banner/configurações do site, ou diretamente nas configurações do navegador.</p>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
