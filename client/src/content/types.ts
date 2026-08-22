// ============================================================================
// CONTRATO DE CONTEUDO — v5 (Arquitetura V2, Manual V7.1)
// pt.ts, en.ts e es.ts implementam este shape.
// Adicionou chave aqui? O TypeScript obriga os 3 idiomas a terem.
// Divergencia entre linguas passa a ser impossivel.
//
// A IA de 3 areas de negocio (Consultoria/Producoes/Impacto Social — v4)
// foi dissolvida nesta versao. As paginas novas (Solucoes, Estrategia,
// Gestao, Operacoes, Inovacao, Impacto, Branding & Experiencias, Cases,
// Como Trabalhamos) sao PT-only por enquanto e vivem em stubData.ts —
// fora deste contrato tipado, que exige paridade pt/en/es.
//
// O que continua aqui: Home (hero/method/targetAudience), Sobre (about),
// as landings de sub-marca/produto (creatorOpsRioPage, creationMarcasPage,
// ongZeroPage, motorSroiPage, biEventosPage — sem destaque no menu ate
// validacao propria) e paginas institucionais (Contato, Footer).
// Profile: landing so-EN.
// ============================================================================

// ---- Primitivos reutilizaveis (preservados do contrato antigo) ----

export interface TitledItem {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

// Os quatro tempos do metodo Ciclo Completo.
export interface MethodStage {
  number: string;      // "01".."04"
  name: string;        // Diagnostico / Estruturacao / Execucao / Validacao
  tagline: string;     // frase curta ("entender antes de agir")
  description: string;
}

// ============================================================================
// CONTRATO PRINCIPAL
// ============================================================================

export interface Content {
  brand: {
    name: string;            // "Creation"
    microcopy: string;
    footerTagline: string;
    locations: string;       // "Brasil | Estados Unidos"
  };

  // Nav: so os rotulos que ainda vem do content tipado (Quem Somos/Contato).
  // A arquitetura V2 do menu (Solucoes/Estrategia/Gestao/Operacoes/
  // Especialidades/Cases/Como Trabalhamos) e PT-only por enquanto e vive
  // hardcoded em Header.tsx (ver stubData.ts) — nao neste contrato, que
  // exige paridade pt/en/es e essas paginas ainda nao tem traducao.
  nav: {
    about: string;
    contact: string;
  };

  cta: {
    primary: string;
    secondary: string;
    href: string;
    methodHref: string;
  };

  labels: {
    caseProblem: string;     // "O que travava"
    caseAction: string;      // "O que fizemos"
    forWhom: string;         // "Para quem"
    seeMethod: string;       // "Ver o metodo"
  };

  // ---- HOME ----
  hero: {
    // A frase de posicionamento (a coroa).
    headline: string;        // "Pensar e fazer sao a mesma responsabilidade."
    subheadline: string;
  };

  // Metodo resumido na home + pagina (absorvido em Consultoria, mas o bloco existe).
  method: {
    badge: string;
    title: string;           // "Ciclo Completo"
    intro: string;
    stages: MethodStage[];   // 4 tempos
    loopNote: string;        // "a prova alimenta o proximo diagnostico"
  };

  targetAudience: {
    title: string;
    subtitle: string;
    audiences: TitledItem[];
  };

  // ---- SOBRE (reconstruida fiel ao doc 30-Quem-Somos.md, agosto/2026) ----
  about: {
    hero: { eyebrow: string; title: string; paragraphs: string[] };       // fundacao 2009, Rodolfo Lopes
    journey: { title: string; paragraphs: string[] };                     // "Uma trajetoria construida entre disciplinas"
    orgCharts: { title: string; paragraphs: string[] };                   // "Projetos nao respeitam organogramas"
    beliefs: { title: string; items: TitledItem[] };                     // "No que acreditamos" (5 crencas)
    leadership: { title: string; name: string; role: string; bio: string }; // Rodolfo Lopes
    structure: { title: string; paragraphs: string[] };                  // "Uma estrutura que se forma em torno do projeto"
    forWhom: { title: string; items: string[]; note: string };
    closing: { title: string; body: string; casesLabel: string };        // "O que permanece desde 2009"
  };

  // ---- SUB-MARCAS / LANDINGS (paginas proprias) ----
  // Reconstruida fiel ao doc 20-Creation-Ops-Rio.md (agosto/2026).
  creatorOpsRioPage: {
    eyebrow: string;
    title: string;
    intro: string;
    territory: { title: string; paragraphs: string[] };            // "Conhecimento de territorio com disciplina de projeto"
    whatWeCanTake: { title: string; items: string[]; note: string }; // "O que podemos assumir" (11 itens)
    formats: {
      title: string;
      items: { title: string; description: string; indicatedFor?: string }[]; // Content Sprint, Brand Campaign, Production Support, Operacao sob medida
      note: string;
    };
    territories: { title: string; paragraphs: string[] };           // "Territorios prioritarios"
    process: { title: string; steps: TitledItem[] };                 // "Como o briefing vira operacao" (5 passos)
    forTeams: { title: string; paragraphs: string[] };                // "Para equipes de fora e para quem ja esta no Rio"
    closing: { title: string; body: string; ctaLabel: string };
  };

  creationMarcasPage: {
    eyebrow: string;
    title: string;
    intro: string;
    whyEarly: { title: string; body: string };
    whatWeDo: { title: string; items: TitledItem[] };  // Registro INPI, Monitoramento
    differentiator: { title: string; body: string };
    howItWorks: { title: string; steps: TitledItem[] };
    forWhom: string;
  };

  ongZeroPage: {
    eyebrow: string;
    title: string;
    intro: string;
    buildTogether: { title: string; body: string };    // constroi junto, nao chave-na-mao
    stages: { title: string; items: TitledItem[] };    // Conceito, Abertura, Organizacao, Marca, Captacao
    forWhom: string;
  };

  motorSroiPage: {
    eyebrow: string;
    title: string;                   // "Meca o impacto social e comprove o seu valor"
    intro: string;
    functions: { title: string; items: TitledItem[] };  // Calculo SROI, Relatorios (SO o presente)
    whyRealData: { title: string; body: string };
    forWhom: string;
  };

  biEventosPage: {
    eyebrow: string;
    title: string;                   // "Todo evento produz dados"
    intro: string;
    whatWeMeasure: { title: string; body: string };
    externalRead: { title: string; body: string };      // medidor externo independente
    forWhom: string;
  };

  // ---- CONTATO (preservado, ajustado projectTypes) ----
  // Reconstruido fiel ao doc 31-Contato.md (agosto/2026).
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      whatsapp: string;              // campo opcional, novo
      whatsappPlaceholder: string;
      organization: string;
      organizationPlaceholder: string;
      projectType: string;           // "Com o que podemos ajudar?"
      projectTypePlaceholder: string;
      projectTypes: string[];        // 12 opcoes reais do doc + "Outro"
      projectStage: string;          // "Em que momento o projeto esta?" — novo
      projectStagePlaceholder: string;
      projectStages: string[];
      location: string;              // "Onde o projeto acontecera?" — novo
      locationPlaceholder: string;
      deadline: string;              // "Existe uma data ou prazo importante?" — novo
      deadlinePlaceholder: string;
      message: string;               // "Conte o desafio"
      messagePlaceholder: string;
      consent: string;               // texto de consentimento — novo
      submit: string;
      sending: string;
      confirmationMessage: string;   // mensagem pos-envio — novo
    };
    aside: {
      title: string;
      subtitle: string;
      alternativesTitle: string;
      email: string;
      whatsapp: string;
      whatsappNumber: string;
      note: string;
    };
    process: {                       // "O que acontece depois do contato?" — novo
      title: string;
      steps: string[];
      note: string;
    };
  };

  // ---- FOOTER (preservado, links atualizados) ----
  footer: {
    description: string;
    locations: string;
    companyTitle: string;
    companyLinks: LinkItem[];
    solutionsTitle: string;
    solutionsLinks: LinkItem[];      // as 3 areas + sub-marcas
    copyright: string;
  };
}