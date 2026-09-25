import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CookiePreferencesButton } from "@/components/cookie-preferences-button"
import Link from "next/link"
import { Cookie, ShieldCheck, CheckCircle2, Sliders, ExternalLink } from "lucide-react"

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[var(--color-gao-gold)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Cookie className="w-4 h-4" /> Diretrizes de Cookies e Rastreabilidade
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-4">
            Política de Cookies
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Transparência total sobre como utilizamos cookies e ferramentas analíticas (Google Analytics, Microsoft Clarity e Cloudflare) para aprimorar sua experiência.
          </p>
          <p className="text-xs text-white/60 mt-4">
            Última atualização: Setembro de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-12 text-gray-700 leading-relaxed text-sm md:text-base">

          {/* Banner de Gerenciamento Imediato */}
          <div className="bg-[#024D44]/5 p-6 rounded-2xl border border-[#024D44]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#024D44] flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[var(--color-gao-gold)]" /> Controle suas Preferências
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Você pode revisar ou revogar seu consentimento de cookies a qualquer momento com um único clique.
              </p>
            </div>
            <CookiePreferencesButton />
          </div>

          {/* Seção 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              1. O que são Cookies?
            </h2>
            <p className="mb-3">
              Cookies são pequenos arquivos de texto depositados e armazenados no seu computador, smartphone ou tablet pelo seu navegador da web quando você visita um site. Eles desempenham papéis fundamentais para a funcionalidade da internet moderna, tais como memorizar suas preferências, viabilizar recursos de segurança e gerar estatísticas agregadas para que o site funcione com mais estabilidade e fluidez.
            </p>
            <p>
              Além dos cookies tradicionais, podemos utilizar tecnologias análogas de armazenamento local (como <em>LocalStorage</em> do navegador) e telemetria analítica sem cookies (<em>cookieless</em>), projetadas com foco em privacidade.
            </p>
          </div>

          {/* Seção 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              2. Como Classificamos os Cookies em Nosso Portal
            </h2>
            <p className="mb-4">
              Em total conformidade com o <strong>Guia Orientativo de Cookies da ANPD</strong> (Autoridade Nacional de Proteção de Dados) e com a LGPD (Lei nº 13.709/2018), categorizamos os arquivos e recursos de medição em:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#024D44]" />
                  A. Cookies Estritamente Necessários (Essenciais)
                </h3>
                <p className="text-sm text-gray-600">
                  São indispensáveis para a navegação básica, segurança e operação do portal web. Sem eles, o site não consegue salvar suas escolhas de consentimento nem manter a proteção contra tráfego malicioso e ataques automatizados. Estes itens operam sob a base legal de <strong>Legítimo Interesse</strong> e cumprimento normativo, não dependendo de prévio consentimento.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-gao-gold)]" />
                  B. Cookies de Análise e Desempenho (Analytics)
                </h3>
                <p className="text-sm text-gray-600">
                  Permitem compreender como os visitantes interagem com o site — quais páginas são mais acessadas, quanto tempo os usuários permanecem e se há mensagens de erro. Em nosso site, são alimentados pelo <strong>Google Analytics 4</strong> e pelo <strong>Microsoft Clarity</strong>. Estes cookies <strong>somente são ativados com a sua manifestação expressa de consentimento</strong> ("Aceitar todos") em nosso banner de cookies.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  C. Telemetria Sem Cookies (Cookieless Analytics – Cloudflare)
                </h3>
                <p className="text-sm text-gray-600">
                  Utilizamos o <strong>Cloudflare Web Analytics</strong> na camada de rede. Esta solução é orientada à privacidade por design (<em>Privacy by Design</em>): não armazena cookies, não cria perfis de usuários e não rastreia você entre sites distintos, medindo unicamente a velocidade e taxa de sucesso do carregamento das páginas.
                </p>
              </div>
            </div>
          </div>

          {/* Seção 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              3. Tabela Detalhada de Cookies e Armazenamentos
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              A relação a seguir enumera os principais identificadores técnicos que podem ser emitidos ou processados durante o uso do site:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#024D44] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Identificador</th>
                    <th className="p-3 font-semibold">Provedor</th>
                    <th className="p-3 font-semibold">Categoria</th>
                    <th className="p-3 font-semibold">Finalidade</th>
                    <th className="p-3 font-semibold">Validade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600 bg-white">
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">gao_cookie_consent</td>
                    <td className="p-3">GAO Contabilidade</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-800 font-semibold">Necessário</span></td>
                    <td className="p-3">Armazena localmente (localStorage) a resposta do usuário no banner de cookies (aceito ou rejeitado).</td>
                    <td className="p-3">Persistente (até limpeza)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">__cf_bm / cf_clearance</td>
                    <td className="p-3">Cloudflare, Inc.</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-800 font-semibold">Necessário / Segurança</span></td>
                    <td className="p-3">Gerenciamento de tráfego, mitigação de robôs maliciosos e proteção contra ataques de negação de serviço (DDoS).</td>
                    <td className="p-3">Sessão até 1 ano</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">_ga</td>
                    <td className="p-3">Google LLC (GA4)</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-semibold">Analítico</span></td>
                    <td className="p-3">Distingue visitantes únicos de forma anônima para computar dados de audiência.</td>
                    <td className="p-3">Até 2 anos</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">_ga_* (ex: _ga_KRPRVERCJW)</td>
                    <td className="p-3">Google LLC (GA4)</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-semibold">Analítico</span></td>
                    <td className="p-3">Armazena e conta visualizações de páginas, retendo o estado de navegação da sessão ativa.</td>
                    <td className="p-3">Até 2 anos</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">_clck</td>
                    <td className="p-3">Microsoft (Clarity)</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-semibold">Analítico</span></td>
                    <td className="p-3">Persiste o ID de usuário do Clarity e configurações da sessão para compor mapas de calor anônimos.</td>
                    <td className="p-3">1 ano</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">_clsk</td>
                    <td className="p-3">Microsoft (Clarity)</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-semibold">Analítico</span></td>
                    <td className="p-3">Agrupa múltiplas visualizações de página de uma mesma navegação em um único fluxo de diagnóstico de usabilidade.</td>
                    <td className="p-3">1 dia</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-medium text-gray-800">CLARITY</td>
                    <td className="p-3">Microsoft (Clarity)</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 font-semibold">Analítico</span></td>
                    <td className="p-3">Conecta a atividade do usuário anônimo em relatórios agregados de otimização de interface.</td>
                    <td className="p-3">1 ano</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Seção 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              4. Como Funciona a Gestão do seu Consentimento
            </h2>
            <p className="mb-3 text-sm text-gray-600">
              No seu primeiro acesso ao site, exibimos nosso banner de consentimento. Implementamos o <strong>Google Consent Mode v2</strong> e bloqueio proativo de scripts:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 mb-4">
              <li><strong>Ao clicar em "Aceitar todos":</strong> os recursos do Google Analytics e Microsoft Clarity são ativados com armazenamento analítico autorizado.</li>
              <li><strong>Ao clicar em "Apenas essenciais":</strong> os cookies analíticos permanecem desativados, e o Microsoft Clarity não é executado na sua navegação, garantindo total respeito à sua escolha.</li>
            </ul>
            <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">Deseja alterar sua decisão atual agora?</span>
              <CookiePreferencesButton />
            </div>
          </div>

          {/* Seção 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              5. Como Gerenciar Cookies Diretamente no Navegador
            </h2>
            <p className="mb-3 text-sm text-gray-600">
              Caso prefira, você também pode desativar, bloquear ou excluir cookies diretamente no menu de configurações do seu navegador de internet. Seguem as orientações dos principais desenvolvedores:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-200 hover:border-[#024D44] flex items-center justify-between transition-all"
              >
                <span className="font-medium text-gray-800">Google Chrome</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://support.microsoft.com/pt-br/microsoft-edge/gerenciar-cookies-no-microsoft-edge-1084a2d7-82db-46f2-a9bd-838b0f830c97"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-200 hover:border-[#024D44] flex items-center justify-between transition-all"
              >
                <span className="font-medium text-gray-800">Microsoft Edge</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://support.mozilla.org/pt-BR/kb/protecao-aprimorada-contra-rastreamento-firefox-desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-200 hover:border-[#024D44] flex items-center justify-between transition-all"
              >
                <span className="font-medium text-gray-800">Mozilla Firefox</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-200 hover:border-[#024D44] flex items-center justify-between transition-all"
              >
                <span className="font-medium text-gray-800">Apple Safari</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Seção 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              6. Dúvidas e Atendimento
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              Para maiores esclarecimentos a respeito do tratamento de dados pessoais e de seus direitos como titular, consulte nossa{" "}
              <Link href="/politica-de-privacidade" className="text-[#024D44] font-semibold underline">
                Política de Privacidade
              </Link>{" "}
              ou entre em contato diretamente com o Encarregado pelo e-mail:{" "}
              <a href="mailto:contato@gaocontabilidade.com.br" className="text-[#024D44] font-bold underline">
                contato@gaocontabilidade.com.br
              </a>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
