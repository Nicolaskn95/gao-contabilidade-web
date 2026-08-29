import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function TermosUsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-6">Termos de Uso</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div className="bg-muted/30 p-6 rounded-lg border border-border/50 text-sm mb-8">
            <p><strong>Nota:</strong> Esta é uma versão preliminar e recomenda-se validação jurídica antes do lançamento oficial do site.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">1. Aceitação</h2>
            <p>Ao acessar este site, o usuário concorda com estes Termos de Uso. Caso não concorde, recomenda-se não utilizar o site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">2. Identificação</h2>
            <p>Este site é de titularidade da GAO Contabilidade & Assessoria, CNPJ 33.317.915/0001-84.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">3. Finalidade do site</h2>
            <p>O site tem finalidade institucional e comercial, apresentando os serviços da GAO e permitindo solicitação de proposta comercial.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">4. Propriedade intelectual</h2>
            <p>Todo o conteúdo (textos, marca, logotipo, layout) é de propriedade da GAO ou usado sob licença, sendo vedada a reprodução sem autorização prévia.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">5. Limitação de responsabilidade</h2>
            <p>As informações disponibilizadas no site têm caráter informativo geral e não substituem consultoria contábil, fiscal ou tributária personalizada. A GAO não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo do site, sem análise específica da situação do cliente.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">6. Links externos</h2>
            <p>O site pode conter links para sites de terceiros, sobre os quais a GAO não possui controle nem responsabilidade.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">7. Alterações</h2>
            <p>A GAO pode alterar estes Termos a qualquer momento, sendo a versão vigente sempre a publicada nesta página.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">8. Foro</h2>
            <p>Fica eleito o foro da comarca de Sorocaba/SP, com renúncia a qualquer outro, para dirimir eventuais controvérsias decorrentes destes Termos.</p>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
