"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { useState } from "react"

export function ProposalSection() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    funcionarios: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, funcionarios: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "5515996890947"
    const message = `Olá! Gostaria de solicitar uma proposta de serviços contábeis.

*Dados da Empresa:*
Nome: ${formData.nome}
Empresa: ${formData.empresa}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}
Número de Funcionários: ${formData.funcionarios}

Aguardo retorno. Obrigado!`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const benefits = [
    "Análise completa da situação fiscal da sua empresa",
    "Proposta personalizada de acordo com seu segmento",
    "Planejamento tributário estratégico",
    "Migração sem burocracia e sem custos adicionais",
    "Suporte especializado durante todo o processo",
    "Tecnologia de ponta para gestão contábil",
  ]

  return (
    <section
      id="proposta"
      className="py-24 bg-gradient-to-br from-[#024D44]/5 via-white to-[var(--color-gao-gold)]/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-[var(--color-gao-gold)] uppercase tracking-wider">Sem Compromisso</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#024D44] mb-4 text-balance">Solicite uma proposta</h2>
          </div>

          <Card className="border border-border/50 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">O que está incluído na proposta:</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-[#024D44] flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="empresa">Empresa *</Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="(15) 99999-9999"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Comercial *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="contato@empresa.com.br"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="funcionarios">Número de Funcionários Atual *</Label>
                      <Select value={formData.funcionarios} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="mt-1 w-full">
                          <SelectValue placeholder="Selecione o número de funcionários" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1 a 5">1 a 5 funcionários</SelectItem>
                          <SelectItem value="6 a 10">6 a 10 funcionários</SelectItem>
                          <SelectItem value="11 a 20">11 a 20 funcionários</SelectItem>
                          <SelectItem value="21 a 50">21 a 50 funcionários</SelectItem>
                          <SelectItem value="51 a 100">51 a 100 funcionários</SelectItem>
                          <SelectItem value="acima de 100">Acima de 100 funcionários</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--color-gao-gold)] hover:bg-[var(--color-gao-gold)]/90 text-[#024D44] font-bold text-lg py-6 mt-4"
                    >
                      Enviar proposta via WhatsApp
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao enviar, você será direcionado para nosso WhatsApp
                    </p>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
