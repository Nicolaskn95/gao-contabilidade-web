# GAO Contabilidade & Assessoria — Documento de Conteúdo e Estrutura do Site

> **Como usar este documento:** todo texto dentro de blocos de citação (">") ou marcado como **"Texto para o site"** é conteúdo pronto para publicação. Trechos marcados como **"🔧 Nota para o desenvolvedor"** são orientações técnicas e NÃO devem ser publicados. Itens marcados como **⚠️ PENDENTE DE VALIDAÇÃO/CONFIGURAÇÃO ANTES DA PUBLICAÇÃO** exigem definição final (jurídica ou técnica) antes de irem ao ar.

---

## 1. Estrutura e menu do site

**Páginas principais:**
- Home
- Serviços (com 6 páginas internas + 1 landing dedicada)
  - Contabilidade Geral
  - Fiscal
  - Departamento Pessoal
  - Legalização Societária
  - Consultoria Tributária
  - Pessoa Física
- Reforma Tributária (landing page própria)
- Quem Somos
- Equipe

**Menu de navegação (segue a ordem da página):**
`Home` · `Serviços` · `Quem Somos` · `Equipe` · `Reforma Tributária` (âncora que desce até a seção na Home e também disponível como página própria) · botão de destaque `Solicitar proposta`

🔧 **Nota para o desenvolvedor:** o item "Reforma Tributária" no menu deve levar à landing page dedicada (seção 5), não apenas à âncora da Home.

---

## 2. Home — ordem final das seções

`Hero → Pilares (Agilidade/Clareza/Estratégia) → Por que escolher a GAO? (diferenciais) → Serviços → Segmentos → Quem Somos → Equipe → Reforma Tributária (destaque) → CTA final`

![Wireframe completo da Home](wireframes/home.png)

**Referência visual aprovada**
Este wireframe representa a estrutura, hierarquia e organização de conteúdo aprovadas. O design final deverá respeitar a identidade visual da GAO e poderá ser refinado pelo desenvolvedor/designer.

🔧 **Nota para o desenvolvedor:** este wireframe foi gerado em ferramenta de prototipagem interna da conversa e não possui URL própria compartilhável — por isso a imagem acima (e o arquivo `home.png` incluído no pacote de entrega) é a referência oficial, não um link.

### 2.1 Hero

> **Contabilidade estratégica para o seu negócio**
> Transformamos números em estratégias. Oferecemos assessoria contábil completa para empresas de todos os segmentos, com foco em crescimento sustentável e conformidade fiscal.
> Botão: **Conheça nossos serviços** (âncora para seção Serviços)

### 2.2 Pilares

> **Agilidade** — Prazos e obrigações sempre em dia
> **Clareza** — Informação que você entende, sem jargão
> **Estratégia** — Decisões baseadas em dados, não achismo

### 2.3 Por que escolher a GAO? (diferenciais)

> **Consultoria tributária estratégica** — Análises que vão além do cumprimento das obrigações.
> **Especialização em Reforma Tributária** — Preparação e planejamento para os impactos da transição tributária.
> **Atendimento próximo e consultivo** — Orientação clara e acompanhamento das necessidades de cada negócio.
> **Tecnologia aplicada à gestão contábil e fiscal** — Ferramentas que apoiam análises, controles e maior eficiência nos processos.
> **Visão integrada do negócio** — Contábil, fiscal, tributário, societário e trabalhista analisados de forma conectada.

### 2.4 Serviços (cards resumidos, cada um linkado à página interna — ver seção 3)

> Contabilidade Geral · Fiscal · Departamento Pessoal · Legalização Societária · Consultoria Tributária · Pessoa Física

### 2.5 Segmentos

> **Veja nossos principais segmentos de atuação no mercado.**
> E-commerce · Clínicas médicas · Serviços em Geral · Indústrias · Comércios em Geral · Transportadoras

### 2.6 Quem Somos (resumo na Home — texto completo na seção 6)

> **Contabilidade próxima, estratégica e conectada ao seu negócio.**
> Unimos conhecimento técnico, tecnologia e atuação consultiva nas áreas contábil, fiscal, trabalhista, societária e tributária.

### 2.7 Equipe (cards resumidos na Home — perfis completos na seção 4)

Card por pessoa: foto + nome + cargo + "+ de X anos de experiência" + indicação discreta "Conheça a trajetória". Card inteiro clicável (não botão), pensando em mobile. Leva à página de Equipe (seção 4).

### 2.8 Reforma Tributária (destaque na Home)

> **Sua empresa está preparada para a nova realidade tributária?**
> A Reforma Tributária muda muito mais do que a forma de calcular impostos. Os impactos alcançam preços, margens, fluxo de caixa, aproveitamento de créditos, contratos, cadastros, sistemas e a própria estratégia tributária das empresas.
>
> **Como a GAO pode apoiar sua empresa:**
> - Diagnóstico dos impactos da Reforma Tributária
> - Planejamento da transição de 2026 a 2033
> - Simulações e projeções da carga tributária
> - Análise dos impactos de IBS e CBS
> - Revisão de processos e parametrizações fiscais
> - Análise de créditos tributários
> - Avaliação dos impactos sobre preços, margens e fluxo de caixa
> - Apoio na definição de estratégias para o período de transição
>
> Botão: **Prepare sua empresa para a Reforma Tributária** → leva à landing page própria (seção 5)

🔧 **Nota para o desenvolvedor:** seção visualmente destacada, funcionando como um "segundo hero" — fundo dourado (#EDBD53), texto em verde institucional escuro (#412402), contrastando com o hero principal em verde (#024D44). Posicionada após Equipe e antes do CTA final.

### 2.9 CTA final da Home

> **Solicite uma proposta** — Sem compromisso
> Botão: **Enviar proposta via WhatsApp**

---

## 3. Páginas internas de serviços

🔧 **Nota para o desenvolvedor:** todas seguem o mesmo template: breadcrumb → título/texto de abertura → "O que está incluído" → banner de Reforma Tributária (somente em Consultoria Tributária e Fiscal) → "Também pode te interessar" (3 serviços relacionados, ver mapa abaixo) → CTA final ("Solicitar proposta").

**Mapa de relacionamento ("também pode te interessar") por página:**

| Página | Relacionados |
|---|---|
| Contabilidade Geral | Fiscal · Consultoria Tributária · Departamento Pessoal |
| Fiscal | Contabilidade Geral · Consultoria Tributária · Legalização Societária |
| Departamento Pessoal | Contabilidade Geral · Fiscal · Consultoria Tributária |
| Legalização Societária | Contabilidade Geral · Fiscal · Consultoria Tributária |
| Consultoria Tributária | Fiscal · Contabilidade Geral · Legalização Societária |
| Pessoa Física | Consultoria Tributária · Legalização Societária · Contabilidade Geral |

![Wireframe/template das páginas internas de Serviços](wireframes/servico.png)

**Referência visual aprovada**
Este wireframe representa a estrutura, hierarquia e organização de conteúdo aprovadas — usado aqui como template padrão para as 6 páginas de serviço, com Consultoria Tributária como exemplo aplicado. O design final deverá respeitar a identidade visual da GAO e poderá ser refinado pelo desenvolvedor/designer.

🔧 **Nota para o desenvolvedor:** sem URL própria compartilhável — usar a imagem acima e o arquivo `servico.png` do pacote de entrega como referência.

### 3.1 Contabilidade Geral

> **Informação contábil para decisões mais seguras**
> Transformamos os dados contábeis da sua empresa em informações confiáveis para acompanhar resultados, compreender a situação patrimonial e apoiar decisões estratégicas, mantendo a conformidade com as normas contábeis vigentes.
>
> **O que está incluído:**
> - Escrituração contábil
> - Balanço Patrimonial, DRE e demais demonstrações contábeis
> - Conciliações e fechamento contábil
> - Relatórios gerenciais e apoio à tomada de decisão

### 3.2 Fiscal

> **Conformidade fiscal e segurança nas operações**
> Mais do que apurar tributos e cumprir obrigações, acompanhamos a rotina fiscal da sua empresa para garantir a correta tributação das operações, reduzir riscos fiscais e manter o negócio preparado para as constantes mudanças da legislação.
>
> **O que está incluído:**
> - Apuração de tributos federais, estaduais e municipais
> - Elaboração e validação das obrigações acessórias federais, estaduais e municipais
> - Acompanhamento de mudanças na legislação fiscal
> - Emissão e conferência de guias de recolhimento
> - Análise da tributação das operações
> - Orientação sobre emissão e escrituração de documentos fiscais
> - Monitoramento da regularidade fiscal
> - Acompanhamento das alterações tributárias
>
> **[Banner]** Sua empresa está pronta para a Reforma Tributária? **Saiba mais →** (link para landing de Reforma Tributária)

### 3.3 Departamento Pessoal

> **Segurança e eficiência nas rotinas trabalhistas**
> Cuidamos das rotinas trabalhistas e previdenciárias da sua empresa, desde a admissão até o desligamento dos colaboradores, garantindo o correto cumprimento das obrigações e maior segurança para o empregador.
>
> **O que está incluído:**
> - Folha de pagamento e encargos trabalhistas
> - Admissões, rescisões e férias
> - eSocial e obrigações acessórias trabalhistas
> - Orientação e suporte nas rotinas de benefícios
> - Pró-labore
> - Encargos previdenciários e trabalhistas
> - Atendimento às rotinas do empregador

### 3.4 Legalização Societária

> **Sua empresa regular em todas as etapas**
> Cuidamos dos processos de constituição, alteração, regularização e encerramento da empresa, acompanhando os procedimentos perante os órgãos competentes para manter sua estrutura cadastral e societária adequada às atividades do negócio.
>
> **O que está incluído:**
> - Constituição de empresas
> - Alterações contratuais e mudanças societárias
> - Regularização de empresas
> - Regularização cadastral
> - Inscrições e licenças
> - Baixa de empresas

### 3.5 Consultoria Tributária

> **Estratégia tributária para decisões mais eficientes**
> Analisamos a estrutura e as operações da empresa para identificar oportunidades, reduzir riscos e apoiar decisões tributárias com segurança, considerando a legislação vigente, as características do negócio e os impactos da Reforma Tributária.
>
> **O que está incluído:**
> - Planejamento tributário e revisão do regime de tributação
> - Diagnóstico e revisão tributária
> - Recuperação de créditos tributários
> - Compliance tributário
> - Regularização fiscal
> - Transação tributária
> - Consultoria para reorganização societária com foco tributário
> - Apoio técnico em fiscalizações e autos de infração na esfera administrativa
> - Diagnóstico de impactos da Reforma Tributária
> - Reforma Tributária e planejamento da transição 2026-2033
> - Pareceres técnicos e análises fundamentadas na legislação vigente
>
> **[Banner]** Sua empresa está pronta para a Reforma Tributária? **Saiba mais →** (link para landing de Reforma Tributária)

### 3.6 Pessoa Física

> **Orientação tributária para proteger suas decisões e seu patrimônio**
> Atuamos na apuração, declaração e regularização da situação fiscal da pessoa física, oferecendo suporte tributário para rendimentos, patrimônio, operações específicas e situações que exigem análise individualizada.
>
> **O que está incluído:**
> - Declaração de Imposto de Renda
> - Regularização fiscal perante a Receita Federal
> - Ganho de capital e operações patrimoniais
> - Rendimentos e bens no Brasil e no exterior
> - Saída definitiva do país
> - Planejamento tributário pessoal
> - Suporte tributário a profissionais liberais e autônomos

---

## 4. Página de Equipe

🔧 **Nota para o desenvolvedor:** fotos = as mesmas já usadas nas assinaturas de e-mail da equipe (arquivo já compartilhado anteriormente no branding da GAO). Layout: foto circular à esquerda, dados à direita, para as 5 pessoas em sequência.

### Gisele Alves
**CEO | Contadora Responsável** · + de 14 anos de experiência
Formação: Ciências Contábeis · MBA em Controladoria de Empresas
> Contadora com mais de 14 anos de experiência e MBA em Controladoria de Empresas. À frente da gestão da GAO, atua na condução estratégica do escritório, no relacionamento com clientes e no acompanhamento das necessidades empresariais, buscando oferecer uma assessoria próxima e integrada.
Especialidades: Gestão contábil e empresarial · Controladoria · Gestão e estruturação de processos · Atendimento e relacionamento com clientes · Assessoria contábil empresarial

### Isabela Gonzales
**Especialista Fiscal e Consultora Tributária** · + de 11 anos de experiência
Formação: Ciências Contábeis · duas pós-graduações em Direito Tributário · pós-graduação em Reforma Tributária (em andamento)
> Profissional com mais de 11 anos de experiência nas áreas fiscal e tributária, com formação em Ciências Contábeis e duas pós-graduações em Direito Tributário. Atua em consultoria e planejamento tributário, compliance, regularização fiscal e análise estratégica das operações, com especialização voltada aos impactos e à implementação da Reforma Tributária.
Especialidades: Consultoria e planejamento tributário · Reforma Tributária · Compliance e revisão tributária · Regularização fiscal e transação tributária · Tributação de operações · Planejamento e reorganização societária com foco tributário

### Amanda Carolini
**Responsável por Legalização Societária** · + de 8 anos de experiência
Formação: a confirmar
> Profissional com mais de 8 anos de experiência em legalização societária, atuando em processos de constituição, alteração, regularização e encerramento de empresas, além do acompanhamento de registros, inscrições e procedimentos perante os órgãos competentes.
Especialidades: Constituição e abertura de empresas · Alterações contratuais e societárias · Regularização cadastral · Inscrições e licenças · Baixa e encerramento de empresas · Processos perante órgãos de registro e fiscalização

### Fernanda Massone
**Responsável pelo Departamento Pessoal** · + de 10 anos de experiência
Formação: a confirmar
> Profissional com mais de 10 anos de experiência em Departamento Pessoal, com atuação em folha de pagamento, cálculos e obrigações trabalhistas, eSocial, regularização de vínculos e atendimento a fiscalizações. Possui também experiência no tratamento de rotinas decorrentes de reclamatórias trabalhistas.
Especialidades: Folha de pagamento e encargos · Admissões, férias e rescisões · eSocial e obrigações trabalhistas · Cálculos trabalhistas · Regularização de vínculos · Reclamatórias trabalhistas e seus reflexos em folha · Atendimento a fiscalizações

### Viviane Lucena
**Responsável pelo Departamento Contábil** · + de 6 anos de experiência
Formação: Ciências Contábeis · MBA em Contabilidade, Compliance & Direito Tributário
> Profissional com mais de 6 anos de experiência na área contábil, com atuação em escrituração, conciliações, fechamento e elaboração e análise de demonstrações contábeis. Possui experiência na implantação e melhoria de processos, com foco em conformidade, qualidade das informações e eficiência das rotinas contábeis.
Especialidades: Escrituração e fechamento contábil · Conciliações contábeis · Demonstrações contábeis e financeiras · Análise de demonstrativos · Obrigações acessórias contábeis · Implantação e melhoria de processos contábeis

![Wireframe da página de Equipe](wireframes/equipe.png)

**Referência visual aprovada**
Este wireframe representa a estrutura, hierarquia e organização de conteúdo aprovadas. O design final deverá respeitar a identidade visual da GAO e poderá ser refinado pelo desenvolvedor/designer.

🔧 **Nota para o desenvolvedor:** sem URL própria compartilhável — usar a imagem acima e o arquivo `equipe.png` do pacote de entrega como referência.

---

## 5. Landing page — Reforma Tributária

🔧 **Nota para o desenvolvedor:** página institucional única (não há, por ora, versão separada para campanhas de tráfego pago — pode ser avaliado no futuro). Ordem: impacto → transição → como a GAO ajuda → especialização técnica → FAQ → conteúdos relacionados → conversão. CTA principal sempre direciona para WhatsApp.

### 5.1 Hero

> **O que a Reforma Tributária muda para a sua empresa**
> Preços, margens, fluxo de caixa, créditos, contratos e sistemas. A GAO ajuda sua empresa a entender os impactos e se preparar para cada etapa da transição.
> Botão: **Avaliar os impactos na minha empresa** (WhatsApp)

### 5.2 O que muda na prática

> Preços e margens · Fluxo de caixa · Créditos (IBS/CBS) · Contratos · Sistemas e cadastros · Transição gradual

### 5.3 Linha do tempo da transição (2026–2033)

🔧 **Nota para o desenvolvedor:** base: EC 132/2023 e LC 214/2025 (compilada). Incluir texto de aviso abaixo da linha do tempo: *"Os percentuais indicados referem-se especificamente à redução gradual de ICMS e ISS entre 2029 e 2032."* — importante para não gerar interpretação equivocada pelo empresário.

> **2026 | Início da transição e fase de testes**
> CBS 0,9% + IBS 0,1% no período de teste. Adaptação de documentos, cadastros e sistemas.
>
> **2027–2028 | Nova tributação federal**
> Extinção de PIS/Cofins. CBS passa a operar no novo modelo. IBS segue em fase inicial, com alíquota total de 0,1%.
>
> **2029 | Início da substituição de ICMS e ISS**
> ICMS e ISS reduzidos a 90% das alíquotas atuais. O IBS começa a assumir gradualmente sua participação.
>
> **2030 | Avanço da transição**
> ICMS e ISS reduzidos a 80% das alíquotas atuais.
>
> **2031 | Ampliação do IBS**
> ICMS e ISS reduzidos a 70% das alíquotas atuais.
>
> **2032 | Último ano de convivência**
> ICMS e ISS reduzidos a 60% das alíquotas atuais — último ano de convivência com o modelo anterior.
>
> **2033 | Novo modelo plenamente vigente**
> Extinção do ICMS e do ISS. Vigência integral do novo sistema, estruturado em CBS e IBS, além do Imposto Seletivo nas hipóteses previstas em lei.

🔧 **Nota para o desenvolvedor:** existe uma versão ainda mais detalhada desse cronograma (com percentuais exatos de CBS/IBS, menção ao Imposto Seletivo e às regras da Zona Franca de Manaus) mantida como material de referência técnica interna da GAO — disponível caso se decida por um conteúdo mais aprofundado no futuro (ex: Blog/Insights).

### 5.4 Como a GAO prepara sua empresa para a Reforma Tributária

> - Diagnóstico dos impactos da Reforma Tributária
> - Planejamento da transição de 2026 a 2033
> - Simulações e projeções da carga tributária
> - Análise dos impactos de IBS e CBS
> - Revisão de processos e parametrizações fiscais
> - Análise de créditos tributários
> - Avaliação dos impactos sobre preços, margens e fluxo de caixa
> - Apoio na definição de estratégias para o período de transição

### 5.5 Especialização técnica (bloco discreto)

> A GAO conta com equipe dedicada ao tema, incluindo formação específica em Direito Tributário e Reforma Tributária, aplicada à realidade de cada cliente.

🔧 **Nota para o desenvolvedor:** apresentar de forma discreta, sem foto grande nem protagonismo de uma única pessoa — o foco é a capacidade técnica da GAO como um todo, não uma pessoa específica.

### 5.6 FAQ

> **O que muda com a Reforma Tributária?**
> O atual sistema de tributação sobre o consumo será substituído gradualmente por um novo modelo baseado principalmente na CBS, de competência federal, e no IBS, de competência compartilhada entre Estados, Distrito Federal e Municípios, além do Imposto Seletivo nas hipóteses previstas em lei. A transição afeta tributação, créditos, documentos fiscais, sistemas, contratos, formação de preços, margens e fluxo de caixa das empresas.
>
> **Minha empresa precisa agir agora, mesmo com a transição terminando em 2033?**
> Sim. A transição já começou em 2026 e exige adequações progressivas. Sistemas, cadastros fiscais, documentos, contratos, precificação e projeções tributárias precisam ser avaliados com antecedência para que a empresa consiga tomar decisões considerando os efeitos de cada etapa da transição.
>
> **O que são CBS e IBS?**
> A CBS (Contribuição sobre Bens e Serviços) é o novo tributo federal sobre o consumo e substituirá PIS e Cofins. O IBS (Imposto sobre Bens e Serviços) substituirá gradualmente ICMS e ISS. Ambos seguem um modelo não cumulativo, com possibilidade de apropriação de créditos conforme as hipóteses, requisitos e limitações estabelecidos na legislação.
>
> **Minha empresa vai pagar mais ou menos impostos com a Reforma Tributária?**
> Depende. O impacto varia conforme o setor, regime tributário, estrutura de custos e despesas, cadeia de fornecedores e clientes, possibilidade de aproveitamento de créditos e características das operações da empresa. Por isso, simulações e análises individualizadas são importantes para estimar os efeitos da Reforma Tributária sobre cada negócio.
>
> **A Reforma Tributária afeta empresas do Simples Nacional?**
> Sim. O Simples Nacional foi mantido, mas as empresas optantes também serão impactadas pelo novo sistema. A legislação prevê tratamento específico para IBS e CBS, inclusive com reflexos na geração e no aproveitamento de créditos ao longo da cadeia. A melhor estratégia dependerá das características da empresa, de seus clientes, fornecedores e operações.
>
> **Como a GAO pode ajudar minha empresa nesse processo?**
> A GAO realiza análises dos impactos da Reforma Tributária considerando a realidade de cada negócio, com simulações e projeções tributárias, avaliação de créditos, revisão de processos e parametrizações fiscais, análise dos efeitos sobre preços, margens e fluxo de caixa e apoio na definição de estratégias para o período de transição.

### 5.7 Conteúdos relacionados

> Em breve: artigos e atualizações sobre a Reforma Tributária no Blog/Insights da GAO.

🔧 **Nota para o desenvolvedor:** por ora, apenas essa chamada — sem link ativo, já que o Blog/Insights ainda não existe.

### 5.8 Formulário de conversão

🔧 **Nota para o desenvolvedor:** formulário específico (diferente do formulário padrão do site), campos:
- Nome completo
- Empresa
- WhatsApp
- E-mail
- Segmento/atividade
- Regime tributário atual
- Faixa de faturamento
- Número de funcionários
- "Sua empresa já iniciou alguma análise ou planejamento para a Reforma Tributária?" (Sim / Não / Em andamento)

> Botão: **Enviar via WhatsApp**

🔧 **Nota para o desenvolvedor:** sem menu lateral fixo por enquanto. Se a página ficar muito extensa no desenvolvimento final, avaliar menu horizontal discreto com âncoras entre as seções.

![Wireframe completo da landing page de Reforma Tributária](wireframes/reforma.png)

**Referência visual aprovada**
Este wireframe representa a estrutura, hierarquia e organização de conteúdo aprovadas. O design final deverá respeitar a identidade visual da GAO e poderá ser refinado pelo desenvolvedor/designer.

🔧 **Nota para o desenvolvedor:** sem URL própria compartilhável — usar a imagem acima e o arquivo `reforma.png` do pacote de entrega como referência.

---

## 6. Quem Somos

> **Contabilidade próxima, estratégica e conectada ao seu negócio.**
> A GAO nasceu com o propósito de oferecer uma contabilidade diferente do modelo tradicional, mais próxima do empresário e das decisões que fazem parte da rotina do negócio.
> Unimos conhecimento técnico, tecnologia e uma atuação consultiva para oferecer soluções nas áreas contábil, fiscal, trabalhista, societária e tributária, transformando informações em suporte para decisões mais seguras.
> Mais do que cumprir obrigações, buscamos compreender cada empresa, suas necessidades e seus objetivos para atuar como parceiros na gestão e no crescimento do negócio.

**Missão**
> Oferecer soluções contábeis e tributárias com excelência técnica, proximidade e visão estratégica, apoiando nossos clientes no cumprimento de suas obrigações e na tomada de decisões mais seguras para seus negócios.

**Visão**
> Ser reconhecida pela excelência e pela atuação estratégica em contabilidade e consultoria tributária, construindo relações duradouras e contribuindo para negócios mais estruturados, seguros e preparados para as transformações do ambiente empresarial e tributário.

**Valores**
> - Ética: integridade e responsabilidade em todas as relações e decisões.
> - Transparência: comunicação clara, objetiva e acessível.
> - Compromisso: responsabilidade com cada entrega e com as necessidades dos nossos clientes.
> - Agilidade: eficiência no atendimento e cumprimento dos prazos.
> - Excelência técnica: conhecimento aplicado com precisão e segurança.
> - Atualização constante: acompanhamento contínuo das mudanças contábeis, fiscais, tributárias e empresariais.
> - Proximidade: relacionamento próximo e consultivo, baseado no conhecimento de cada negócio.

🔧 **Nota para o desenvolvedor:** posicionamento de marca a manter em todo o site — GAO Contabilidade & Assessoria é a marca-guarda-chuva (contabilidade estratégica + proximidade + excelência técnica + visão consultiva). Consultoria Tributária e Reforma Tributária são especialidades/diferenciais de destaque, não devem ser tratadas como a identidade central da empresa.

---

## 7. Segmentos de atuação

> E-commerce · Clínicas médicas · Serviços em Geral · Indústrias · Comércios em Geral · Transportadoras

---

## 8. CTAs e direcionamentos

| CTA | Localização | Direciona para |
|---|---|---|
| Conheça nossos serviços | Hero da Home | Âncora para seção Serviços |
| Solicitar proposta | Header (todas as páginas) | Formulário/WhatsApp de proposta |
| Prepare sua empresa para a Reforma Tributária | Destaque na Home | Landing page de Reforma Tributária |
| Saiba mais → (banner) | Páginas de Fiscal e Consultoria Tributária | Landing page de Reforma Tributária |
| Solicitar proposta | Final de cada página de serviço | Formulário/WhatsApp de proposta |
| Conheça a trajetória (implícito no card) | Cards da Equipe na Home | Página interna de Equipe |
| Avaliar os impactos na minha empresa | Hero da landing de Reforma Tributária | WhatsApp |
| Enviar via WhatsApp | Formulário da landing de Reforma Tributária | WhatsApp, com dados do formulário |
| Enviar proposta via WhatsApp | CTA final da Home | WhatsApp |

---

## 9. Relacionamento entre páginas e links internos

- Cards de Serviços na Home → páginas internas de cada serviço
- Banner de Reforma Tributária → aparece **apenas** em Fiscal e Consultoria Tributária → leva à landing de Reforma Tributária
- "Também pode te interessar" em cada página de serviço → ver mapa completo na seção 3
- Cards de Equipe na Home → página interna de Equipe (card inteiro clicável)
- Botão de Reforma Tributária no menu e no destaque da Home → sempre a mesma landing page dedicada (nunca direto para Consultoria Tributária ou WhatsApp sem passar pela landing)

---

## 10. Rodapé

⚠️ **PENDENTE DE VALIDAÇÃO/CONFIGURAÇÃO ANTES DA PUBLICAÇÃO** — estrutura abaixo é a definida até o momento, mas não está fechada até validação jurídica final.

> GAO Contabilidade & Assessoria
> CNPJ: 33.317.915/0001-84
> Links: Política de Privacidade · Política de Cookies · Termos de Uso

🔧 **Notas para o desenvolvedor:**
- CRC **não** será exibido no rodapé por enquanto (nem da empresa, nem do responsável técnico) — validar antes de publicar se há exigência específica de divulgação de registro profissional.
- Banner de consentimento de cookies obrigatório no primeiro acesso (LGPD), a ser configurado conforme as ferramentas de rastreamento que forem efetivamente utilizadas.

---

## 11. Textos legais

⚠️ **PENDENTE DE VALIDAÇÃO/CONFIGURAÇÃO ANTES DA PUBLICAÇÃO** — as três minutas abaixo são versões preliminares. As bases legais da Política de Privacidade e a lista de cookies da Política de Cookies dependem da definição final das ferramentas de terceiros que o desenvolvedor utilizará (Google Analytics, Meta Pixel, CRM de WhatsApp etc.) e de como o formulário/tratamento de leads funcionará. Recomenda-se validação jurídica antes da publicação.

### 11.1 Política de Privacidade (minuta preliminar)

> **1. Introdução**
> Esta Política de Privacidade descreve como a GAO Contabilidade & Assessoria (CNPJ 33.317.915/0001-84) coleta, usa, armazena e protege os dados pessoais dos usuários deste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
>
> **2. Dados coletados**
> Ao preencher os formulários do site, coletamos dados como nome completo, empresa, WhatsApp, e-mail e demais informações fornecidas voluntariamente. Também podemos coletar dados de navegação por meio de cookies (ver Política de Cookies).
>
> **3. Finalidade do tratamento**
> Os dados são utilizados para: (i) elaborar e enviar propostas comerciais; (ii) realizar contato via WhatsApp e e-mail; (iii) melhorar a experiência de navegação no site; (iv) cumprir obrigações legais e regulatórias, quando aplicável.
>
> **4. Base legal**
> *A definir com precisão após configuração final do formulário e do tratamento de leads — evitar indicar consentimento, legítimo interesse e procedimentos pré-contratuais de forma genérica para o mesmo tratamento.*
>
> **5. Compartilhamento de dados**
> Os dados não são vendidos a terceiros. Podem ser compartilhados com prestadores de serviço envolvidos na operação do site, sempre sob obrigações de confidencialidade.
>
> **6. Direitos do titular**
> Nos termos do art. 18 da LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação dos dados e informações sobre compartilhamento, mediante contato em contato@gaocontabilidade.com.br.
>
> **7. Armazenamento e segurança**
> Os dados são armazenados em ambiente com medidas técnicas e administrativas de segurança, pelo tempo necessário às finalidades descritas ou conforme exigência legal.
>
> **8. Alterações**
> Esta política pode ser atualizada periodicamente. A versão vigente estará sempre disponível nesta página, com data da última atualização.

### 11.2 Política de Cookies (minuta preliminar)

> **1. O que são cookies**
> Cookies são pequenos arquivos armazenados no navegador do usuário, usados para reconhecer visitas, lembrar preferências e coletar dados estatísticos de uso do site.
>
> **2. Tipos de cookies utilizados**
> *Lista a definir após confirmação das ferramentas efetivamente utilizadas no site (ex: Google Analytics, Meta Pixel, ferramentas de formulário/CRM).*
>
> **3. Consentimento**
> Cookies não essenciais só são ativados mediante consentimento do usuário, dado por meio do banner de cookies exibido no primeiro acesso.
>
> **4. Gerenciamento**
> O usuário pode alterar suas preferências de cookies a qualquer momento pelo banner/configurações do site, ou diretamente nas configurações do navegador.

### 11.3 Termos de Uso (minuta preliminar)

> **1. Aceitação**
> Ao acessar este site, o usuário concorda com estes Termos de Uso. Caso não concorde, recomenda-se não utilizar o site.
>
> **2. Identificação**
> Este site é de titularidade da GAO Contabilidade & Assessoria, CNPJ 33.317.915/0001-84.
>
> **3. Finalidade do site**
> O site tem finalidade institucional e comercial, apresentando os serviços da GAO e permitindo solicitação de proposta comercial.
>
> **4. Propriedade intelectual**
> Todo o conteúdo (textos, marca, logotipo, layout) é de propriedade da GAO ou usado sob licença, sendo vedada a reprodução sem autorização prévia.
>
> **5. Limitação de responsabilidade**
> As informações disponibilizadas no site têm caráter informativo geral e não substituem consultoria contábil, fiscal ou tributária personalizada. A GAO não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo do site, sem análise específica da situação do cliente.
>
> **6. Links externos**
> O site pode conter links para sites de terceiros, sobre os quais a GAO não possui controle nem responsabilidade.
>
> **7. Alterações**
> A GAO pode alterar estes Termos a qualquer momento, sendo a versão vigente sempre a publicada nesta página.
>
> **8. Foro**
> Fica eleito o foro da comarca de Sorocaba/SP, com renúncia a qualquer outro, para dirimir eventuais controvérsias decorrentes destes Termos.

---

## 12. Identidade visual aplicada

🔧 **Nota para o desenvolvedor:** paleta institucional já definida no Manual de Identidade Visual da GAO:
- Verde institucional: `#024D44`
- Dourado: `#EDBD53`
- Verde sálvia: `#C8D8B8`
- Bege/nude: `#E8D8C8`
- Tipografia oficial: Lato Bold (títulos) e Calibri (corpo/documentos)

Os wireframes de referência visual completos (Home, páginas de serviço, Equipe, landing de Reforma Tributária) foram apresentados e aprovados ao longo do processo de definição de conteúdo — servem como guia de hierarquia e organização, não como leiaute final: cabe ao designer/desenvolvedor refinar visualmente sobre essa base já validada de arquitetura de conteúdo.

---

*Documento compilado a partir do processo de definição de conteúdo e estrutura do site da GAO Contabilidade & Assessoria. Itens marcados como pendentes devem ser resolvidos antes da publicação.*
