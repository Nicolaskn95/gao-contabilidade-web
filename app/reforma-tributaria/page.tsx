"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, ArrowRight, CircleDollarSign, TrendingDown, BookOpen, Search, Monitor, RefreshCw, ShieldCheck } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function ReformaTributariaPage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    segmento: "",
    regime: "",
    faturamento: "",
    funcionarios: "",
    jaIniciou: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    const elements = document.querySelectorAll('.timeline-item')
    elements.forEach(el => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = "5515996890947"
    const message = `Olá! Gostaria de uma avaliação sobre os impactos da Reforma Tributária na minha empresa.

*Dados:*
Nome: ${formData.nome}
Empresa: ${formData.empresa}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Segmento: ${formData.segmento}
Regime Atual: ${formData.regime}
Faturamento: ${formData.faturamento}
Funcionários: ${formData.funcionarios}
Já iniciou análise?: ${formData.jaIniciou}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const oQueMuda = [
    { icon: CircleDollarSign, text: "Preços e margens" },
    { icon: TrendingDown, text: "Fluxo de caixa" },
    { icon: RefreshCw, text: "Créditos (IBS/CBS)" },
    { icon: BookOpen, text: "Contratos" },
    { icon: Monitor, text: "Sistemas e cadastros" },
    { icon: Search, text: "Transição gradual" }
  ]

  const cronograma = [
    { ano: "2026", titulo: "Início da transição e fase de testes", desc: "CBS 0,9% + IBS 0,1% no período de teste. Adaptação de documentos, cadastros e sistemas." },
    { ano: "2027–2028", titulo: "Nova tributação federal", desc: "Extinção de PIS/Cofins. CBS passa a operar no novo modelo. IBS segue em fase inicial, com alíquota total de 0,1%." },
    { ano: "2029", titulo: "Início da substituição de ICMS e ISS", desc: "ICMS e ISS reduzidos a 90% das alíquotas atuais. O IBS começa a assumir gradualmente sua participação." },
    { ano: "2030", titulo: "Avanço da transição", desc: "ICMS e ISS reduzidos a 80% das alíquotas atuais." },
    { ano: "2031", titulo: "Ampliação do IBS", desc: "ICMS e ISS reduzidos a 70% das alíquotas atuais." },
    { ano: "2032", titulo: "Último ano de convivência", desc: "ICMS e ISS reduzidos a 60% das alíquotas atuais — último ano de convivência com o modelo anterior." },
    { ano: "2033", titulo: "Novo modelo plenamente vigente", desc: "Extinção do ICMS e do ISS. Vigência integral do novo sistema, estruturado em CBS e IBS, além do Imposto Seletivo nas hipóteses previstas em lei." }
  ]

  const apoios = [
    "Diagnóstico dos impactos da Reforma Tributária",
    "Planejamento da transição de 2026 a 2033",
    "Simulações e projeções da carga tributária",
    "Análise dos impactos de IBS e CBS",
    "Revisão de processos e parametrizações fiscais",
    "Análise de créditos tributários",
    "Avaliação dos impactos sobre preços, margens e fluxo de caixa",
    "Apoio na definição de estratégias para o período de transição"
  ]

  const faqs = [
    {
      q: "O que muda com a Reforma Tributária?",
      a: "O atual sistema de tributação sobre o consumo será substituído gradualmente por um novo modelo baseado principalmente na CBS e no IBS, além da criação do Imposto Seletivo. A Reforma também prevê mudanças no IPI, cujas alíquotas serão reduzidas a zero a partir de 2027, ressalvadas as hipóteses previstas na legislação. A transição também trará impactos sobre créditos tributários, documentos fiscais, sistemas, contratos, formação de preços, margens e fluxo de caixa das empresas."
    },
    {
      q: "Minha empresa precisa agir agora, mesmo com a transição terminando em 2033?",
      a: "Sim. A transição já começou em 2026 e exige adequações progressivas. Sistemas, cadastros fiscais, documentos, contratos, precificação e projeções tributárias precisam ser avaliados com antecedência para que a empresa consiga tomar decisões considerando os efeitos de cada etapa da transição."
    },
    {
      q: "O que são CBS e IBS?",
      a: "A CBS (Contribuição sobre Bens e Serviços) é o novo tributo federal sobre o consumo e substituirá PIS e Cofins. O IBS (Imposto sobre Bens e Serviços) substituirá gradualmente ICMS e ISS. Ambos seguem um modelo não cumulativo, com possibilidade de apropriação de créditos conforme as hipóteses, requisitos e limitações estabelecidos na legislação."
    },
    {
      q: "Minha empresa vai pagar mais ou menos impostos com a Reforma Tributária?",
      a: "Depende. O impacto varia conforme o setor, regime tributário, estrutura de custos e despesas, cadeia de fornecedores e clientes, possibilidade de aproveitamento de créditos e características das operações da empresa. Por isso, simulações e análises individualizadas são importantes para estimar os efeitos da Reforma Tributária sobre cada negócio."
    },
    {
      q: "A Reforma Tributária afeta empresas do Simples Nacional?",
      a: "Sim. O Simples Nacional foi mantido, mas as empresas optantes também serão impactadas pela Reforma Tributária. A partir de 2027, será possível permanecer no Simples Nacional tradicional (ou “puro”), com IBS e CBS recolhidos dentro do DAS, ou optar pelo chamado Simples Nacional híbrido, mantendo os demais tributos no Simples e recolhendo IBS e CBS pelo regime regular, fora do DAS.\n\nA escolha pode afetar a apropriação e a transferência de créditos de IBS e CBS, além da carga tributária e da competitividade da empresa ao longo da cadeia. Por isso, a melhor alternativa deverá ser analisada conforme o perfil da empresa, seus clientes, fornecedores e operações."
    },
    {
      q: "Como a GAO pode ajudar minha empresa nesse processo?",
      a: "A GAO realiza análises dos impactos da Reforma Tributária considerando a realidade de cada negócio, com simulações e projeções tributárias, avaliação de créditos, revisão de processos e parametrizações fiscais, análise dos efeitos sobre preços, margens e fluxo de caixa e apoio na definição de estratégias para o período de transição."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--color-gao-gold)] text-[#024D44]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            O que a Reforma Tributária muda para a sua empresa
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10 text-pretty">
            Preços, margens, fluxo de caixa, créditos, contratos e sistemas. A GAO ajuda sua empresa a entender os impactos e se preparar para cada etapa da transição.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#024D44] hover:bg-[#024D44]/90 text-white text-base px-8 py-6 font-bold shadow-lg transition-all"
          >
            <a href="#avaliacao">
              Avaliar os impactos na minha empresa
            </a>
          </Button>
        </div>
      </section>

      {/* O que muda */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#024D44] mb-12">O que muda na prática</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {oQueMuda.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-border/50 shadow-sm">
                <item.icon className="w-10 h-10 text-[var(--color-gao-gold)] mb-4" />
                <span className="font-semibold text-foreground text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#024D44] mb-4">
            Linha do tempo da transição (2026–2033)
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Acompanhe o cronograma de implementação do novo modelo tributário.
          </p>

          <div className="relative max-w-[800px] mx-auto before:content-[''] before:absolute before:w-[3px] before:bg-gradient-to-b before:from-[var(--color-gao-gold)] before:via-[#024D44] before:to-[var(--color-gao-gold)] before:top-0 before:bottom-0 before:left-[20px] md:before:left-1/2 before:-translate-x-1/2 before:rounded-sm">
            
            {cronograma.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <div key={index} className={`timeline-item opacity-0 translate-y-12 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 relative w-full md:w-1/2 py-6 pl-[3.5rem] pr-4 md:px-10 text-left group transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${isLeft ? 'md:left-0 md:text-right' : 'md:left-1/2 md:text-left'}`}>
                  
                  {/* Dot */}
                  <div className={`absolute w-[18px] h-[18px] bg-white border-[3px] border-[#024D44] rounded-full top-[2rem] z-10 transition-all duration-300 group-hover:bg-[var(--color-gao-gold)] group-hover:border-white group-hover:scale-[1.4] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] left-[11px] md:left-auto ${isLeft ? 'md:-right-[9px]' : 'md:-left-[9px]'}`}></div>
                  
                  {/* Content */}
                  <div className="bg-white p-6 rounded-xl border border-border/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#024D44]/50 group-hover:shadow-[0_15px_30px_-5px_rgba(2,77,68,0.15)] text-left">
                    <span className="inline-block text-[0.8rem] font-bold uppercase tracking-[0.05em] text-[var(--color-gao-gold)] mb-2">{item.ano}</span>
                    <h3 className="text-[1.15rem] font-bold text-[#024D44] mb-2">{item.titulo}</h3>
                    <p className="text-[0.95rem] text-muted-foreground leading-[1.5]">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-16 opacity-80 italic max-w-2xl mx-auto">
            *Os percentuais indicados referem-se especificamente à redução gradual de ICMS e ISS entre 2029 e 2032.
          </p>
        </div>
      </section>

      {/* Como a GAO ajuda & Especialização */}
      <section className="py-24 bg-[#024D44] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gao-gold)] mb-8 leading-tight">
                Como a GAO prepara sua empresa para a Reforma Tributária
              </h2>
              <ul className="space-y-4">
                {apoios.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 opacity-90">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-gao-gold)] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-[var(--color-gao-gold)] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" /> Especialização técnica
              </h3>
              <p className="opacity-90 leading-relaxed text-pretty">
                A GAO conta com equipe dedicada ao tema, incluindo formação específica em Direito Tributário e Reforma Tributária, aplicada à realidade de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-[#024D44] mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50 border-b">
                <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-[var(--color-gao-gold)] hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 whitespace-pre-line">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Conteúdos Relacionados */}
      <section className="py-12 bg-muted/30 border-y border-border/50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground font-medium">
            Em breve: artigos e atualizações sobre a Reforma Tributária no Blog/Insights da GAO.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section id="avaliacao" className="py-24 bg-gradient-to-br from-muted/50 via-white to-[var(--color-gao-gold)]/10 relative">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#024D44] mb-4">
                Inicie o planejamento da sua empresa
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha os dados abaixo e entraremos em contato para avaliar o seu cenário.
              </p>
            </div>

            <Card className="border border-border/50 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input id="nome" name="nome" required value={formData.nome} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input id="empresa" name="empresa" required value={formData.empresa} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input id="whatsapp" name="whatsapp" type="tel" required value={formData.whatsapp} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="segmento">Segmento/Atividade *</Label>
                      <Input id="segmento" name="segmento" required value={formData.segmento} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regime">Regime Tributário Atual *</Label>
                      <Select value={formData.regime} onValueChange={(val) => handleSelectChange("regime", val)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Simples Nacional">Simples Nacional</SelectItem>
                          <SelectItem value="Lucro Presumido">Lucro Presumido</SelectItem>
                          <SelectItem value="Lucro Real">Lucro Real</SelectItem>
                          <SelectItem value="Não sei">Não sei</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="faturamento">Faixa de Faturamento *</Label>
                      <Select value={formData.faturamento} onValueChange={(val) => handleSelectChange("faturamento", val)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Até R$ 360 mil/ano">Até R$ 360 mil/ano</SelectItem>
                          <SelectItem value="De R$ 360 mil a R$ 4,8 milhões/ano">De R$ 360 mil a R$ 4,8 milhões/ano</SelectItem>
                          <SelectItem value="De R$ 4,8 milhões a R$ 78 milhões/ano">De R$ 4,8 milhões a R$ 78 milhões/ano</SelectItem>
                          <SelectItem value="Acima de R$ 78 milhões/ano">Acima de R$ 78 milhões/ano</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funcionarios">Número de Funcionários *</Label>
                      <Select value={formData.funcionarios} onValueChange={(val) => handleSelectChange("funcionarios", val)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Sem funcionários">Sem funcionários</SelectItem>
                          <SelectItem value="1 a 5">1 a 5</SelectItem>
                          <SelectItem value="6 a 20">6 a 20</SelectItem>
                          <SelectItem value="21 a 50">21 a 50</SelectItem>
                          <SelectItem value="Acima de 50">Acima de 50</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Sua empresa já iniciou alguma análise ou planejamento para a Reforma Tributária? *</Label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="jaIniciou" value="Sim" required onChange={handleInputChange} className="accent-[#024D44] w-4 h-4" />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="jaIniciou" value="Não" onChange={handleInputChange} className="accent-[#024D44] w-4 h-4" />
                        <span>Não</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="jaIniciou" value="Em andamento" onChange={handleInputChange} className="accent-[#024D44] w-4 h-4" />
                        <span>Em andamento</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-proposta w-full mt-6"
                  >
                    <span className="w-full justify-center">
                      Enviar via WhatsApp
                      <ArrowRight className="icon ml-2 h-5 w-5" />
                    </span>
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </main>
  )
}
