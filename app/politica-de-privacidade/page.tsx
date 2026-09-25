import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import Link from "next/link"
import { ShieldCheck, Mail, FileText, Lock, Eye, RefreshCw } from "lucide-react"

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[var(--color-gao-gold)] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" /> Conformidade com a LGPD (Lei nº 13.709/2018)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            Saiba como a GAO Contabilidade coleta, utiliza, armazena e protege seus dados pessoais com transparência, responsabilidade e segurança jurídica.
          </p>
          <p className="text-xs text-white/60 mt-4">
            Última atualização: Setembro de 2026
          </p>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-12 text-gray-700 leading-relaxed text-sm md:text-base">

          {/* Card Resumo */}
          <div className="bg-[#024D44]/5 p-6 rounded-2xl border border-[#024D44]/15">
            <h3 className="text-lg font-bold text-[#024D44] mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[var(--color-gao-gold)]" /> Compromisso com a sua Privacidade
            </h3>
            <p className="text-sm text-gray-600">
              A <strong>GAO Contabilidade & Assessoria</strong> preza pela estrita confidencialidade dos seus dados corporativos e individuais. Esta política reflete nossas diretrizes de governança em privacidade em total alinhamento com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e as boas práticas de segurança cibernética.
            </p>
          </div>

          {/* Seção 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              1. Identificação do Controlador
            </h2>
            <p className="mb-3">
              O presente portal web é mantido e operado pela pessoa jurídica:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li><strong>Razão Social / Nome Fantasia:</strong> GAO Contabilidade & Assessoria</li>
              <li><strong>CNPJ:</strong> 33.317.915/0001-84</li>
              <li><strong>Canal Oficial de Privacidade (DPO / Encarregado):</strong>{" "}
                <a href="mailto:contato@gaocontabilidade.com.br" className="text-[#024D44] underline font-medium">
                  contato@gaocontabilidade.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Seção 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              2. Dados Pessoais Coletados e Formas de Coleta
            </h2>
            <p className="mb-4">
              Coletamos a menor quantidade de dados pessoais possível, limitando-nos estritamente ao necessário para atender às suas solicitações e assegurar a qualidade dos serviços prestados:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">A. Dados Fornecidos Voluntariamente (Formulários de Contato e Proposta)</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Ao solicitar uma proposta comercial, diagnóstico tributário ou enviar uma mensagem através de nossos formulários no site, coletamos:
                </p>
                <ul className="list-disc pl-6 text-sm space-y-1 text-gray-600">
                  <li><strong>Nome Completo:</strong> para identificação e tratamento personalizado;</li>
                  <li><strong>Nome da Empresa / Razão Social:</strong> para contextualização do segmento de atuação;</li>
                  <li><strong>Número de Telefone / WhatsApp:</strong> para envio do retorno da proposta e comunicação direta;</li>
                  <li><strong>E-mail Comercial:</strong> para formalização de orçamentos e comunicações corporativas;</li>
                  <li><strong>Porte / Número de Funcionários:</strong> para dimensionamento do escopo de serviços contábeis e fiscais;</li>
                  <li><strong>Mensagem Livre:</strong> informações adicionais que você opte por compartilhar voluntariamente.</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-3 bg-muted/40 p-2.5 rounded-lg">
                  <em>Nota operacional:</em> Nossos formulários realizam o direcionamento seguro das informações diretamente para o WhatsApp oficial de atendimento da GAO Contabilidade, eliminando o armazenamento intermediário em bancos de dados abertos na web.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">B. Dados de Navegação e Dispositivo Coletados Automaticamente</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Quando você navega em nosso site, certas métricas técnicas e de usabilidade são geradas para garantir estabilidade, segurança e mensuração de audiência:
                </p>
                <ul className="list-disc pl-6 text-sm space-y-1 text-gray-600">
                  <li><strong>Endereço IP (Internet Protocol):</strong> processado de forma anonimizada ou truncada pelas ferramentas de análise;</li>
                  <li><strong>Informações do Dispositivo e Navegador:</strong> modelo de dispositivo, resolução de tela, versão do sistema operacional e navegador;</li>
                  <li><strong>Registros de Acesso (Logs):</strong> data, hora e duração da sessão, conforme estipulado pelo Art. 15 do Marco Civil da Internet;</li>
                  <li><strong>Comportamento de Navegação (Analytics e Mapas de Calor):</strong> páginas visitadas, tempo de permanência, rolagem de página e cliques, através de cookies e scripts de telemetria analítica (Google Analytics e Microsoft Clarity), condicionados ao seu consentimento.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              3. Finalidades e Bases Legais do Tratamento (Art. 7º da LGPD)
            </h2>
            <p className="mb-4">
              Cada tratamento de dados realizado pela GAO Contabilidade possui uma finalidade explícita e vinculação estrita a uma base legal autorizada pela LGPD:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-[#024D44] text-white">
                  <tr>
                    <th className="p-3 font-semibold">Finalidade do Tratamento</th>
                    <th className="p-3 font-semibold">Dados Utilizados</th>
                    <th className="p-3 font-semibold">Base Legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600 bg-white">
                  <tr>
                    <td className="p-3 font-medium text-gray-800">Elaboração e envio de propostas de serviços contábeis</td>
                    <td className="p-3">Nome, e-mail, telefone, empresa, número de colaboradores</td>
                    <td className="p-3">Execução de procedimentos preliminares a pedido do titular (Art. 7º, V)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-800">Atendimento ao cliente e suporte via WhatsApp e e-mail</td>
                    <td className="p-3">Nome, contato telefônico e histórico de conversa</td>
                    <td className="p-3">Procedimentos pré-contratuais (Art. 7º, V) e Legítimo Interesse (Art. 7º, IX)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-800">Métricas de tráfego, audiência e mapas de calor (Google Analytics e Clarity)</td>
                    <td className="p-3">Cookies analíticos, cliques, páginas acessadas, tela</td>
                    <td className="p-3">Consentimento livre e informado do titular (Art. 7º, I)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-800">Segurança de rede, mitigação de fraudes e telemetria de performance (Cloudflare)</td>
                    <td className="p-3">Endereço IP truncado, dados técnicos de requisição</td>
                    <td className="p-3">Legítimo Interesse (Art. 7º, IX) e Cumprimento de Obrigação Legal (Art. 7º, II)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-800">Guarda obrigatória de registros de conexão</td>
                    <td className="p-3">IP, data e hora da conexão</td>
                    <td className="p-3">Cumprimento de Obrigação Legal – Art. 15 do Marco Civil da Internet (Art. 7º, II)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Seção 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              4. Ferramentas de Terceiros e Operadores de Dados
            </h2>
            <p className="mb-3">
              Para viabilizar uma experiência moderna, segura e com máxima performance, utilizamos provedores de tecnologia e infraestrutura reconhecidos globalmente:
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <strong className="text-gray-900 block mb-0.5">Google Analytics 4 (Google LLC)</strong>
                Utilizado para avaliar volumes de visitação, canais de aquisição de tráfego e comportamento agregado de usuários. Possui mascaramento de IP ativado e está integrado ao Google Consent Mode v2, respeitando as preferências registradas no banner de cookies.
              </li>
              <li className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <strong className="text-gray-900 block mb-0.5">Microsoft Clarity (Microsoft Corporation)</strong>
                Ferramenta de análise de experiência do usuário (mapas de calor, tempo de visualização e gravações de sessão anônimas). O Clarity mascara automaticamente dados confidenciais digitados e é ativado exclusivamente mediante o seu consentimento.
              </li>
              <li className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <strong className="text-gray-900 block mb-0.5">Cloudflare (Cloudflare, Inc.)</strong>
                Serviço de segurança contra-ataques DDoS, aceleração de entrega (CDN) e Web Analytics sem cookies (privacy-first), coletando telemetria técnica de tráfego sem rastreamento comportamental invasivo.
              </li>
              <li className="p-3 rounded-lg bg-gray-50 border border-gray-100">
                <strong className="text-gray-900 block mb-0.5">WhatsApp / Meta Platforms</strong>
                Canal de mensageria instantânea com criptografia de ponta a ponta utilizado para recepção e atendimento ágil das propostas enviadas pelo usuário.
              </li>
            </ul>
            <p className="text-sm font-semibold text-[#024D44] mt-3">
              A GAO Contabilidade não comercializa, não aluga e não compartilha seus dados pessoais com terceiros para fins de marketing não autorizado.
            </p>
          </div>

          {/* Seção 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              5. Armazenamento, Segurança e Retenção dos Dados
            </h2>
            <p className="mb-3">
              Adotamos medidas técnicas, organizacionais e administrativas para proteger os dados pessoais sob nossa guarda contra acessos não autorizados, incidentes de destruição, perda ou alteração ilícita:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 mb-4">
              <li><strong>Criptografia em Trânsito (HTTPS / TLS 1.3):</strong> todas as comunicações entre o seu navegador e o site são criptografadas com certificados de segurança de chave forte;</li>
              <li><strong>Proteção de Borda:</strong> filtros de tráfego malicioso e firewalls de aplicação Web (WAF) fornecidos pela Cloudflare;</li>
              <li><strong>Minimização de Armazenamento:</strong> não mantemos bases de dados públicas ou desprotegidas contendo os leads de formulários, operando com comunicação direta via canais corporativos verificados.</li>
            </ul>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Prazos de Retenção:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
              <li><strong>Registros de Conexão:</strong> armazenados pelo prazo mínimo obrigatório de 6 (seis) meses, em observância ao Art. 15 da Lei nº 12.965/2014;</li>
              <li><strong>Dados de Proposta e Contato:</strong> mantidos pelo período necessário para atender à solicitação orçamentária ou enquanto durar a relação negocial preliminar, sendo descartados de forma segura caso a negociação não se concretize e não haja obrigação legal em sentido contrário.</li>
            </ul>
          </div>

          {/* Seção 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              6. Transferência Internacional de Dados
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Em razão da utilização de infraestruturas em nuvem de escala global (como Google, Microsoft e Cloudflare), determinados dados e metadados de conexão podem ser processados em servidores situados fora do território brasileiro (notadamente nos Estados Unidos e países da União Europeia). Estas transferências são realizadas em conformidade com o Art. 33 da LGPD, adotando cláusulas contratuais padrão, rigorosos compromissos de confidencialidade e elevados protocolos de segurança da informação.
            </p>
          </div>

          {/* Seção 7 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              7. Direitos do Titular de Dados Pessoais (Art. 18 da LGPD)
            </h2>
            <p className="mb-3 text-sm text-gray-600">
              Nos termos da Lei Geral de Proteção de Dados, você, na condição de titular dos seus dados pessoais, possui os seguintes direitos garantidos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                <strong>I. Confirmação e Acesso:</strong> direito de confirmar a existência de tratamento e acessar os seus dados mantidos pela GAO.
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                <strong>II. Correção:</strong> direito de solicitar a alteração ou retificação de dados incorretos, incompletos ou desatualizados.
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                <strong>III. Anonimização ou Eliminação:</strong> direito de requerer o bloqueio ou eliminação de dados excessivos, desnecessários ou tratados em desconformidade com a lei.
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                <strong>IV. Portabilidade:</strong> solicitar a portabilidade dos seus dados para outro prestador de serviços contábeis, mediante requisição expressa.
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                <strong>V. Revogação do Consentimento:</strong> retirar seu consentimento a qualquer momento para as atividades que dependam dessa autorização (como cookies analíticos).
              </div>
              <div className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                <strong>VI. Informação de Compartilhamento:</strong> obter clareza sobre as entidades públicas e privadas com as quais os dados eventualmente foram compartilhados.
              </div>
            </div>
          </div>

          {/* Seção 8 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              8. Canal de Contato do Encarregado (DPO) e Ausência de Banco de Dados Cadastral
            </h2>

            {/* Esclarecimento prático sobre ausência de base de dados */}
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/70 mb-4 text-sm text-gray-700">
              <strong className="text-blue-900 block mb-1">
                Informação Importante ao Titular: Não Mantemos Banco de Dados Cadastral no Site
              </strong>
              Nosso site opera como uma plataforma institucional e informativa. <strong>Não mantemos sistema de login, perfis de usuários nem banco de dados na aplicação web que retenha dados pessoais cadastrais dos visitantes</strong>. Os formulários de proposta apenas geram uma mensagem pré-formatada diretamente no seu aplicativo do WhatsApp. Por essa razão, em relação à navegação deste portal, não existem cadastros ou registros pessoais persistidos em banco de dados interno passíveis de exclusão.
            </div>

            <p className="mb-4 text-sm text-gray-600">
              Caso você tenha enviado mensagens e iniciado um diálogo pelo nosso canal oficial do WhatsApp ou por e-mail comercial e deseje solicitar o encerramento do contato ou o descarte do histórico das conversas de atendimento, ou ainda deseje esclarecer qualquer dúvida sobre privacidade, entre em contato direto com o nosso Encarregado pelo Tratamento de Dados Pessoais (DPO):
            </p>

            <div className="bg-[#024D44]/5 p-6 rounded-xl border border-[#024D44]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-[#024D44] text-base">Encarregado de Proteção de Dados (DPO) - GAO Contabilidade</p>
                <p className="text-sm text-gray-600 mt-1">E-mail: <strong className="text-gray-900">contato@gaocontabilidade.com.br</strong></p>
                <p className="text-xs text-muted-foreground mt-1">Assunto recomendado: <em>"LGPD - Dúvidas sobre Privacidade / Exclusão de Atendimento"</em></p>
              </div>
              <a
                href="mailto:contato@gaocontabilidade.com.br?subject=LGPD%20-%20Duvidas%20sobre%20Privacidade%20/%20Exclusao%20de%20Atendimento"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#024D44] text-white text-sm font-semibold hover:bg-[#024D44]/90 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-[var(--color-gao-gold)]" />
                Falar com o DPO
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Havendo registros de conversas mantidos diretamente nos canais de atendimento (WhatsApp corporativo ou e-mail), procederemos à eliminação do histórico mediante sua solicitação, exceto nas hipóteses de guarda obrigatória por exigência legal ou fiscal decorrente de prestação efetiva de serviços contratados.
            </p>
          </div>

          {/* Seção 9 */}
          <div>
            <h2 className="text-2xl font-bold text-[#024D44] mb-4 pb-2 border-b border-gray-200">
              9. Atualizações desta Política
            </h2>
            <p className="text-sm text-gray-600">
              Buscando constante aprimoramento em nossas rotinas de conformidade e segurança da informação, esta Política de Privacidade pode ser atualizada a qualquer tempo. As modificações entrarão em vigor a partir da data de publicação neste endereço. Recomendamos a consulta periódica deste documento.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Para mais detalhes sobre os arquivos de navegação e cookies, consulte também nossa{" "}
              <Link href="/politica-de-cookies" className="text-[#024D44] font-semibold underline">
                Política de Cookies
              </Link>.
            </p>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
