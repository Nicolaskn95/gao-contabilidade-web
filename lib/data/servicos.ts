export const servicos = [
  {
    slug: "contabilidade-geral",
    title: "Contabilidade Geral",
    subtitle: "Informação contábil para decisões mais seguras",
    description: "Transformamos os dados contábeis da sua empresa em informações confiáveis para acompanhar resultados, compreender a situação patrimonial e apoiar decisões estratégicas, mantendo a conformidade com as normas contábeis vigentes.",
    included: [
      "Escrituração contábil",
      "Balanço Patrimonial, DRE e demais demonstrações contábeis",
      "Conciliações e fechamento contábil",
      "Relatórios gerenciais e apoio à tomada de decisão"
    ],
    showReformaBanner: false,
    relatedSlugs: ["fiscal", "consultoria-tributaria", "departamento-pessoal"]
  },
  {
    slug: "fiscal",
    title: "Fiscal",
    subtitle: "Conformidade fiscal e segurança nas operações",
    description: "Mais do que apurar tributos e cumprir obrigações, acompanhamos a rotina fiscal da sua empresa para garantir a correta tributação das operações, reduzir riscos fiscais e manter o negócio preparado para as constantes mudanças da legislação.",
    included: [
      "Apuração de tributos federais, estaduais e municipais",
      "Elaboração e validação das obrigações acessórias federais, estaduais e municipais",
      "Acompanhamento de mudanças na legislação fiscal",
      "Escrituração fiscal e obrigações acessórias",
      "Análise da tributação das operações",
      "Orientação sobre emissão e escrituração de documentos fiscais",
      "Monitoramento da regularidade fiscal",
      "Acompanhamento das alterações tributárias"
    ],
    showReformaBanner: true,
    relatedSlugs: ["contabilidade-geral", "consultoria-tributaria", "legalizacao-societaria"]
  },
  {
    slug: "departamento-pessoal",
    title: "Departamento Pessoal",
    subtitle: "Segurança e eficiência nas rotinas trabalhistas",
    description: "Cuidamos das rotinas trabalhistas e previdenciárias da sua empresa, desde a admissão até o desligamento dos colaboradores, garantindo o correto cumprimento das obrigações e maior segurança para o empregador.",
    included: [
      "Folha de pagamento e encargos trabalhistas",
      "Admissões, rescisões e férias",
      "eSocial e obrigações acessórias trabalhistas",
      "Orientação e suporte nas rotinas de benefícios",
      "Pró-labore",
      "Encargos previdenciários e trabalhistas",
      "Atendimento às rotinas do empregador"
    ],
    showReformaBanner: false,
    relatedSlugs: ["contabilidade-geral", "fiscal", "consultoria-tributaria"]
  },
  {
    slug: "legalizacao-societaria",
    title: "Legalização Societária",
    subtitle: "Sua empresa regular em todas as etapas",
    description: "Cuidamos dos processos de constituição, alteração, regularização e encerramento da empresa, acompanhando os procedimentos perante os órgãos competentes para manter sua estrutura cadastral e societária adequada às atividades do negócio.",
    included: [
      "Constituição de empresas",
      "Alterações contratuais e mudanças societárias",
      "Regularização de empresas",
      "Regularização cadastral",
      "Inscrições e licenças",
      "Baixa de empresas"
    ],
    showReformaBanner: false,
    relatedSlugs: ["contabilidade-geral", "fiscal", "consultoria-tributaria"]
  },
  {
    slug: "consultoria-tributaria",
    title: "Consultoria Tributária",
    subtitle: "Estratégia tributária para decisões mais eficientes",
    description: "Analisamos a estrutura e as operações da empresa para identificar oportunidades, reduzir riscos e apoiar decisões tributárias com segurança, considerando a legislação vigente, as características do negócio e os impactos da Reforma Tributária.",
    included: [
      "Planejamento tributário e revisão do regime de tributação",
      "Diagnóstico e revisão tributária",
      "Recuperação de créditos tributários",
      "Compliance tributário",
      "Regularização fiscal",
      "Transação tributária",
      "Consultoria para reorganização societária com foco tributário",
      "Apoio técnico em fiscalizações e autos de infração na esfera administrativa",
      "Diagnóstico de impactos da Reforma Tributária",
      "Reforma Tributária e planejamento da transição 2026-2033",
      "Pareceres técnicos e análises fundamentadas na legislação vigente"
    ],
    showReformaBanner: true,
    relatedSlugs: ["fiscal", "contabilidade-geral", "legalizacao-societaria"]
  },
  {
    slug: "pessoa-fisica",
    title: "Pessoa Física",
    subtitle: "Orientação tributária para proteger suas decisões e seu patrimônio",
    description: "Atuamos na apuração, declaração e regularização da situação fiscal da pessoa física, oferecendo suporte tributário para rendimentos, patrimônio, operações específicas e situações que exigem análise individualizada.",
    included: [
      "Declaração de Imposto de Renda",
      "Regularização fiscal perante a Receita Federal",
      "Ganho de capital e operações patrimoniais",
      "Rendimentos e bens no Brasil e no exterior",
      "Saída definitiva do país",
      "Planejamento tributário pessoal",
      "Suporte tributário a profissionais liberais e autônomos"
    ],
    showReformaBanner: false,
    relatedSlugs: ["consultoria-tributaria", "legalizacao-societaria", "contabilidade-geral"]
  }
]
