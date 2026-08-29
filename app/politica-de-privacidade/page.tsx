import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-6">Política de Privacidade</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-8 text-muted-foreground leading-relaxed">
          <div className="bg-muted/30 p-6 rounded-lg border border-border/50 text-sm mb-8">
            <p><strong>Nota:</strong> Esta é uma versão preliminar. As bases legais e lista de dados dependem da definição final das ferramentas utilizadas no site. Recomenda-se validação jurídica.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">1. Introdução</h2>
            <p>Esta Política de Privacidade descreve como a GAO Contabilidade & Assessoria (CNPJ 33.317.915/0001-84) coleta, usa, armazena e protege os dados pessoais dos usuários deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">2. Dados coletados</h2>
            <p>Ao preencher os formulários do site, coletamos dados como nome completo, empresa, WhatsApp, e-mail e demais informações fornecidas voluntariamente. Também podemos coletar dados de navegação por meio de cookies (ver Política de Cookies).</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">3. Finalidade do tratamento</h2>
            <p>Os dados são utilizados para: (i) elaborar e enviar propostas comerciais; (ii) realizar contato via WhatsApp e e-mail; (iii) melhorar a experiência de navegação no site; (iv) cumprir obrigações legais e regulatórias, quando aplicável.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">4. Base legal</h2>
            <p><em>A definir com precisão após configuração final do formulário e do tratamento de leads — evitar indicar consentimento, legítimo interesse e procedimentos pré-contratuais de forma genérica para o mesmo tratamento.</em></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">5. Compartilhamento de dados</h2>
            <p>Os dados não são vendidos a terceiros. Podem ser compartilhados com prestadores de serviço envolvidos na operação do site, sempre sob obrigações de confidencialidade.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">6. Direitos do titular</h2>
            <p>Nos termos do art. 18 da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação dos dados e informações sobre compartilhamento, mediante contato em contato@gaocontabilidade.com.br.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">7. Armazenamento e segurança</h2>
            <p>Os dados são armazenados em ambiente com medidas técnicas e administrativas de segurança, pelo tempo necessário às finalidades descritas ou conforme exigência legal.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4">8. Alterações</h2>
            <p>Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página, com data da última atualização.</p>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
