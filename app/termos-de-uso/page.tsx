import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import Link from "next/link"
import { FileCheck, Shield, AlertTriangle, Scale, Lock, ExternalLink } from "lucide-react"

export default function TermosUsoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[var(--color-gao-gold)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" /> Condições Gerais de Navegação e Serviços
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-4">
            Termos de Uso
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Conheça as regras, diretrizes e responsabilidades aplicáveis ao acesso e utilização do portal da GAO Contabilidade & Assessoria.
          </p>
          <p className="text-xs text-white/60 mt-4">
            Última atualização: Setembro de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-12 text-gray-700 leading-relaxed text-sm md:text-base">

          {/* Card Resumo */}
          <div className="bg-[#024D44]/5 p-6 rounded-2xl border border-[#024D44]/15">
            <h3 className="text-lg font-bold text-[#024D44] mb-2 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[var(--color-gao-gold)]" /> Visão Geral do Usuário
            </h3>
            <p className="text-sm text-gray-600">
              Estes Termos de Uso regulam o acesso e a navegação no portal da <strong>GAO Contabilidade & Assessoria</strong>. Ao navegar por este site ou utilizar nossos formulários e canais de contato, você declara ter lido, compreendido e concordado com as condições descritas a seguir e com nossa{" "}
              <Link href="/politica-de-privacidade" className="text-[#024D44] font-semibold underline">
                Política de Privacidade
              </Link>{" "}
              e{" "}
              <Link href="/politica-de-cookies" className="text-[#024D44] font-semibold underline">
                Política de Cookies
              </Link>.
            </p>
          </div>

          {/* Seção 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              1. Identificação da Titular do Site
            </h2>
            <p className="mb-3">
              O presente portal da web é de propriedade e administração de:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li><strong>Titular:</strong> GAO Contabilidade & Assessoria</li>
              <li><strong>CNPJ:</strong> 33.317.915/0001-84</li>
              <li><strong>Canal de Atendimento:</strong>{" "}
                <a href="mailto:contato@gaocontabilidade.com.br" className="text-[#024D44] underline font-medium">
                  contato@gaocontabilidade.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Seção 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              2. Objeto e Finalidade do Portal
            </h2>
            <p className="mb-3">
              O site possui caráter primordialmente informativo, institucional e de aproximação comercial. Suas principais finalidades são:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Apresentar a gama de soluções contábeis, fiscais, trabalhistas e societárias oferecidas pela GAO Contabilidade;</li>
              <li>Disponibilizar conteúdos explicativos e orientativos a respeito de temas contábeis e atualizações legislativas (como a Reforma Tributária);</li>
              <li>Facilitar o direcionamento ágil de pedidos de proposta e diagnósticos através de integração segura com o canal oficial do WhatsApp corporativo.</li>
            </ul>
          </div>

          {/* Seção 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              3. Natureza Informativa e Isenção de Parecer Vinculante
            </h2>
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 mb-4 text-sm text-amber-900 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong>Aviso Profissional Importante:</strong> Os artigos, dados e materiais informativos disponibilizados neste site não configuram parecer técnico formal, consultoria tributária vinculante ou auditoria para o seu caso específico.
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A legislação fiscal, contábil e previdenciária brasileira é dinâmica e altamente dependente das particularidades de cada atividade econômica (enquadramento tributário, faturamento, localização geográfica e convenções coletivas). Por este motivo:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
              <li>Nenhuma decisão estratégica, financeira ou recolhimento de tributo deve ser tomado exclusivamente com base nas informações genéricas contidas no site;</li>
              <li>A contratação formal de assessoria técnica com análise prévia de documentações fiscais é indispensável para orientações seguras e individualizadas;</li>
              <li>A GAO Contabilidade isenta-se de responsabilidade por interpretações equivocadas ou decisões autônomas praticadas por terceiros sem a formalização de contrato de prestação de serviços.</li>
            </ul>
          </div>

          {/* Seção 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              4. Solicitações de Proposta e Ausência de Contrato Automático
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              O preenchimento e envio dos formulários de proposta comercial disponibilizados no site têm natureza de **sondagem preliminar**:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
              <li>O envio de uma solicitação via site ou WhatsApp **não constitui contratação automática** nem gera vínculo obrigacional de responsabilidade técnica por parte dos contadores da GAO;</li>
              <li>A prestação de serviços contábeis somente se formaliza mediante a elaboração de proposta técnica aceita, análise de viabilidade e assinatura do competente **Contrato de Prestação de Serviços Contábeis**, em observância às resoluções do Conselho Federal de Contabilidade (CFC);</li>
              <li>O usuário se compromete a fornecer dados verídicos e atualizados ao preencher as solicitações.</li>
            </ul>
          </div>

          {/* Seção 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              5. Propriedade Intelectual
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Todo o conjunto de elementos disponibilizados no portal — incluindo, sem limitação: marcas, logotipos, identidade visual, textos, ilustrações, diagramações, códigos-fonte e design de interfaces — é de propriedade exclusiva da <strong>GAO Contabilidade & Assessoria</strong> ou utilizado sob licença legítima, sendo protegido pela legislação brasileira de Direitos Autorais (Lei nº 9.610/1998) e Propriedade Industrial (Lei nº 9.279/1996).
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
              <li>É expressamente vedada a reprodução total ou parcial, modificação, distribuição, engenharia reversa, raspagem automatizada (*web scraping*) ou uso comercial não autorizado de qualquer conteúdo do portal sem consentimento prévio e por escrito;</li>
              <li>O acesso ao site concede ao visitante tão somente uma licença temporária, revogável, não exclusiva e intransferível para visualização pessoal das informações.</li>
            </ul>
          </div>

          {/* Seção 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              6. Condutas Vedadas aos Usuários
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Ao utilizar este site, o visitante compromete-se a não praticar atos que atentem contra a lei, a moral e a segurança dos sistemas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
              <li>Não introduzir vírus, worms, trojans ou outros códigos tecnológicos maliciosos no servidor ou ambiente web;</li>
              <li>Não tentar obter acesso não autorizado a sistemas, servidores, redes ou painéis administrativos;</li>
              <li>Não executar ataques de negação de serviço (DoS/DDoS) ou sobrecarregar a infraestrutura de rede (protegida pela Cloudflare e Vercel);</li>
              <li>Não utilizar formulários ou canais de contato para envio massivo de mensagens publicitárias não solicitadas (*spam*), correntes ou materiais difamatórios.</li>
            </ul>
          </div>

          {/* Seção 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              7. Links para Plataformas e Serviços de Terceiros
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nosso portal inclui links e integrações direcionadas a plataformas operadas por terceiros, tais como o aplicativo de mensagens **WhatsApp (Meta Platforms)**, redes sociais (Instagram e Facebook) e órgãos governamentais. A GAO Contabilidade não detém ingerência nem responsabilidade pelas políticas de privacidade, termos de serviço ou segurança dessas plataformas externas, recomendando a leitura de seus respectivos termos antes de utilizá-las.
            </p>
          </div>

          {/* Seção 8 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              8. Disponibilidade do Serviço e Limitações Técnicas
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empregamos infraestrutura de nível corporativo (hospedagem na Vercel e distribuição perimetral via Cloudflare) para manter o site disponível de forma contínua e segura. Todavia, em virtude da própria natureza da internet, não é possível garantir que o portal opere 100% livre de interrupções, lentidões momentâneas ou instabilidades decorrentes de fatores fora do nosso controle (como falhas em operadoras de telecomunicação ou ataques cibernéticos massivos de escala mundial).
            </p>
          </div>

          {/* Seção 9 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              9. Privacidade e Proteção de Dados
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              O tratamento de dados pessoais coletados ou gerados por ocasião da navegação rege-se pelas diretrizes expressas em nossa{" "}
              <Link href="/politica-de-privacidade" className="text-[#024D44] font-semibold underline">
                Política de Privacidade
              </Link>{" "}
              e{" "}
              <Link href="/politica-de-cookies" className="text-[#024D44] font-semibold underline">
                Política de Cookies
              </Link>, as quais integram estes Termos de Uso para todos os fins jurídicos.
            </p>
          </div>

          {/* Seção 10 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              10. Modificações e Vigência
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              A GAO Contabilidade reserva-se o direito de revisar, atualizar ou modificar estes Termos de Uso a qualquer momento, sem necessidade de aviso prévio individual, passando as novas disposições a vigorar a partir de sua publicação nesta página.
            </p>
          </div>

          {/* Seção 11 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              11. Legislação Aplicável e Foro de Eleição
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Estes Termos de Uso são regidos e interpretados de acordo com a legislação da República Federativa do Brasil, em especial o Marco Civil da Internet (Lei nº 12.965/2014) e o Código Civil (Lei nº 10.406/2002).
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Para dirimir quaisquer controvérsias oriundas da utilização deste site, fica eleito o Foro da Comarca de São Paulo/SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja ou venha a ser.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
