"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EquipePage() {
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    // Definir hash inicial no carregamento da página
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash)
      
      // Tentar interceptar mudanças de hash futuras
      const handleHashChange = () => setActiveHash(window.location.hash)
      window.addEventListener('hashchange', handleHashChange)
      return () => window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const equipe = [
    {
      name: "Gisele Alves",
      role: "CEO | Contadora Responsável",
      experience: "+ de 14 anos de experiência",
      formation: "Ciências Contábeis · MBA em Controladoria de Empresas",
      description: "Contadora com mais de 14 anos de experiência e MBA em Controladoria de Empresas. À frente da gestão da GAO, atua na condução estratégica do escritório, no relacionamento com clientes e no acompanhamento das necessidades empresariais, buscando oferecer uma assessoria próxima e integrada.",
      specialties: "Gestão contábil e empresarial · Controladoria · Gestão e estruturação de processos · Atendimento e relacionamento com clientes · Assessoria contábil empresarial",
      initials: "GA"
    },
    {
      name: "Isabela Gonzales",
      role: "Especialista Fiscal e Consultora Tributária",
      experience: "+ de 11 anos de experiência",
      formation: "Ciências Contábeis · duas pós-graduações em Direito Tributário · pós-graduação em Reforma Tributária (em andamento)",
      description: "Profissional com mais de 11 anos de experiência nas áreas fiscal e tributária. Atua em consultoria e planejamento tributário, compliance, regularização fiscal e análise estratégica das operações, com especialização voltada aos impactos e à implementação da Reforma Tributária.",
      specialties: "Consultoria e planejamento tributário · Reforma Tributária · Compliance e revisão tributária · Regularização fiscal e transação tributária · Tributação de operações · Planejamento e reorganização societária com foco tributário",
      initials: "IG"
    },
    {
      name: "Amanda Carolini",
      role: "Responsável por Legalização Societária",
      experience: "+ de 8 anos de experiência",
      formation: "Gestão Financeira, com cursos de aperfeiçoamento na área societária.",
      description: "Profissional com mais de 8 anos de experiência em legalização societária, atuando em processos de constituição, alteração, regularização e encerramento de empresas, além do acompanhamento de registros, inscrições e procedimentos perante os órgãos competentes.",
      specialties: "Constituição e abertura de empresas · Alterações contratuais e societárias · Regularização cadastral · Inscrições e licenças · Baixa e encerramento de empresas · Processos perante órgãos de registro e fiscalização",
      initials: "AC"
    },
    {
      name: "Fernanda Massone",
      role: "Responsável pelo Departamento Pessoal",
      experience: "+ de 10 anos de experiência",
      formation: "Graduação em Ciências Contábeis, com cursos de aperfeiçoamento nas áreas trabalhista e previdenciária.",
      description: "Profissional com mais de 10 anos de experiência em Departamento Pessoal, com atuação em folha de pagamento, cálculos e obrigações trabalhistas, eSocial, regularização de vínculos e atendimento a fiscalizações. Possui também experiência no tratamento de rotinas decorrentes de reclamatórias trabalhistas.",
      specialties: "Folha de pagamento e encargos · Admissões, férias e rescisões · eSocial e obrigações trabalhistas · Cálculos trabalhistas · Regularização de vínculos · Reclamatórias trabalhistas e seus reflexos em folha · Atendimento a fiscalizações",
      initials: "FM"
    },
    {
      name: "Viviane Lucena",
      role: "Responsável pelo Departamento Contábil",
      experience: "+ de 6 anos de experiência",
      formation: "Ciências Contábeis · MBA em Contabilidade, Compliance & Direito Tributário",
      description: "Profissional com mais de 6 anos de experiência na área contábil, com atuação em escrituração, conciliações, fechamento e elaboração e análise de demonstrações contábeis. Possui experiência na implantação e melhoria de processos, com foco em conformidade, qualidade das informações e eficiência das rotinas contábeis.",
      specialties: "Escrituração e fechamento contábil · Conciliações contábeis · Demonstrações contábeis e financeiras · Análise de demonstrativos · Obrigações acessórias contábeis · Implantação e melhoria de processos contábeis",
      initials: "VL"
    }
  ]

  return (
    <main className="min-h-screen bg-muted/30">
      <Header />
      
      {/* Hero Equipe */}
      <section className="pt-32 pb-16 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-gao-gold)] mb-6">
            Nossa Equipe
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Conheça os profissionais que dedicam conhecimento e experiência para transformar números em estratégia para o seu negócio.
          </p>
        </div>
      </section>

      {/* Lista de Membros */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            {equipe.map((membro, index) => {
              const id = membro.name.toLowerCase().replace(/\s+/g, '-')
              const isActive = activeHash === `#${id}`
              
              return (
              <div key={index} id={id} className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 border shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start scroll-mt-32 transition-all duration-700 ${isActive ? 'border-[var(--color-gao-gold)] shadow-[0_8px_30px_rgba(212,175,55,0.25)] -translate-y-2' : 'border-border/50'}`}>
                <Avatar className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 border-4 border-muted shrink-0 shadow-sm">
                  <AvatarImage src={`/equipe-${index}.jpg`} alt={membro.name} className={`object-cover ${index === 1 ? 'object-top' : ''}`} />
                  <AvatarFallback className="bg-[#024D44] text-white text-2xl sm:text-3xl font-bold">{membro.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left w-full">
                  <div className="text-center md:text-left mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">{membro.name}</h2>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-1 sm:gap-2">
                      <span className="font-semibold text-[#024D44] text-base sm:text-lg">{membro.role}</span>
                      <span className="text-muted-foreground hidden sm:inline">•</span>
                      <span className="text-xs sm:text-sm font-bold text-[var(--color-gao-gold)]">{membro.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 font-medium leading-relaxed bg-muted/20 p-3 rounded-xl border border-border/40">
                    <span className="text-foreground font-semibold">Formação:</span> {membro.formation}
                  </p>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {membro.description}
                  </p>
                  
                  <div>
                    <h3 className="text-xs sm:text-sm text-[#024D44] font-bold mb-3 uppercase tracking-wider text-center md:text-left">Especialidades</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2">
                      {membro.specialties.split('·').map((spec, i) => (
                        <span key={i} className="bg-[#024D44]/5 text-[#024D44] text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border border-[#024D44]/20 shadow-xs">
                          {spec.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
