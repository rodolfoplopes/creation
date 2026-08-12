// ============================================================================
// CONTRATO DE CONTEUDO — v4 (arquitetura de 4 areas)
// pt.ts, en.ts e es.ts implementam este shape.
// Adicionou chave aqui? O TypeScript obriga os 3 idiomas a terem.
// Divergencia entre linguas passa a ser impossivel.
//
// TAXONOMIA OFICIAL (nova):
//   Consultoria     -> rosto Gestao de Projetos; absorve o metodo Ciclo Completo;
//                      capacidade Inovacao (submenu); landing Creation Marcas.
//   Producoes       -> Eventos e Experiencias (5 categorias) + Audiovisual +
//                      capacidade Operacional (Fixer/Host); landing Creator Ops Rio;
//                      produto BI de Eventos.
//   Impacto Social  -> Estruturacao de ONGs (landing ONG.zero) + Programas +
//                      Relatorios/ESG + Projetos Sociais; produto Motor SROI.
//
//   Metodo: Ciclo Completo (Diagnostico -> Estruturacao -> Execucao -> Validacao).
//   Sub-marcas: Creator Ops Rio, Creation Marcas, ONG.zero. Produtos: Motor SROI, BI de Eventos.
//   Profile: landing so-EN (fora do menu de areas).
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

export interface CaseResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  eyebrow: string;
  title: string;
  client: string;
  problem: string;
  action: string;
  results: CaseResult[];
  // Linha de prova/atribuicao no rodape do case (ex.: "Avaliacao de impacto
  // social conduzida pela Rede Asta"). NAO opcional de proposito: quando um
  // case usa credito de terceiro, essa linha e obrigatoria (regra de ouro
  // dos cases, creation-cases.md) e nao pode ser omitida por descuido.
  support: string;
  image: string;
}

// Um servico dentro de uma area (nome + descricao curta).
export interface ServiceItem {
  title: string;
  description: string;
}

// Uma categoria que agrupa servicos (ex.: Eventos > [Corporativo, Inovacao, ...]).
export interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
}

// Os quatro tempos do metodo Ciclo Completo.
export interface MethodStage {
  number: string; // "01".."04"
  name: string; // Diagnostico / Estruturacao / Execucao / Validacao
  tagline: string; // frase curta ("entender antes de agir")
  description: string;
}

// Bloco padrao de "frente" (area): hero + secoes de corpo.
// Usado por consultoria, producoes, impactoSocial.
export interface FrontHero {
  eyebrow: string; // ex.: "GESTAO DE PROJETOS"
  title: string; // o titulo-tese da frente
  intro: string; // abertura
  lead?: string; // 2o paragrafo opcional
}

export interface FrontSection {
  title: string;
  body: string;
}

// Card de sub-marca/landing referenciado de dentro de uma area.
export interface SubBrandCard {
  eyebrow: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

// ---- Card de area na Home (as 3 areas) ----
export interface AreaCard {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

// ============================================================================
// CONTRATO PRINCIPAL
// ============================================================================

export interface Content {
  brand: {
    name: string; // "Creation"
    microcopy: string;
    footerTagline: string;
    locations: string; // "Brasil | Estados Unidos"
  };

  // Menu (mega-menu full-screen). Areas + institucionais.
  nav: {
    home: string;
    consultoria: string;
    producoes: string;
    impactoSocial: string;
    method: string;
    about: string;
    contact: string;
    // rotulos de agrupamento dentro do mega-menu
    areasLabel: string; // "Areas" / "Areas" / "Areas"
    companyLabel: string; // "A Creation"
  };

  cta: {
    primary: string;
    secondary: string;
    href: string;
    methodHref: string;
  };

  labels: {
    caseProblem: string; // "O que travava"
    caseAction: string; // "O que fizemos"
    forWhom: string; // "Para quem"
    seeMethod: string; // "Ver o metodo"
  };

  // ---- HOME ----
  hero: {
    // A frase de posicionamento (a coroa).
    headline: string; // "Pensamos e realizamos projetos inovadores."
    subheadline: string;
  };

  areas: {
    title: string;
    subtitle: string;
    items: AreaCard[]; // Consultoria, Producoes, Impacto Social
  };

  // Metodo resumido na home + pagina (absorvido em Consultoria, mas o bloco existe).
  method: {
    badge: string;
    title: string; // "Ciclo Completo"
    intro: string;
    stages: MethodStage[]; // 4 tempos
    loopNote: string; // "a prova alimenta o proximo diagnostico"
  };

  targetAudience: {
    title: string;
    subtitle: string;
    audiences: TitledItem[];
  };

  // ---- SOBRE ----
  about: {
    hero: { title: string; subtitle: string };
    architectMetaphor: { title: string; body: string }; // "Trabalhamos como arquitetos"
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: { title: string; subtitle: string; items: TitledItem[] }; // 6 valores
    forWhom: { title: string; text: string; distinction: string };
    partnersTitle: string;
    manifesto: {
      title: string;
      paragraphs: string[];
      closing: string; // "O futuro nao se espera. O futuro se constroi."
    };
    // presenca (Sobre EN menciona Brasil+EUA de leve)
    presenceNote?: string;
  };

  // ---- CONSULTORIA (rosto Gestao de Projetos; absorve metodo + Inovacao) ----
  consultoria: {
    hero: FrontHero;
    sections: FrontSection[]; // "de ponta a ponta", "caminho dificil", "especialidade"
    services: ServiceItem[]; // Gestao de Projetos, Inteligencia, Branding, Processos
    // capacidade Inovacao como bloco dentro de Consultoria
    innovation: {
      eyebrow: string;
      title: string; // "Inovacao nao e lampejo, e metodo"
      intro: string;
      formats: ServiceItem[]; // Design Sprints, Hackathons, Ideathons, Intraempreendedorismo
    };
    creationMarcas: SubBrandCard; // landing Creation Marcas
    forWhom: string;
  };

  // ---- PRODUCOES (Eventos + Audiovisual + Operacional) ----
  producoes: {
    hero: FrontHero;
    // Bloco Eventos e Experiencias (5 categorias)
    events: {
      title: string;
      intro: string;
      categories: ServiceCategory[]; // Corporativo, Inovacao, Culturais, Institucionais, Live Mkt
    };
    // Bloco Audiovisual
    audiovisual: {
      title: string;
      intro: string;
      items: ServiceItem[]; // Web Content, Short Films, Campanhas/Brand Content
    };
    // Capacidade Operacional (Fixer + Host)
    operational: {
      title: string;
      intro: string;
      fixer: {
        title: string;
        locationScoutHighlight: string; // destaque Rio + Costa Verde
        items: string[]; // Permits, Location Scout, Security, Rentals, Vehicles, Crew, Accommodation, Story R&D
      };
      hosting: { title: string; description: string };
    };
    creatorOpsRio: SubBrandCard; // landing Creator Ops Rio
    biEventos: SubBrandCard; // produto BI de Eventos
    forWhom: string;
  };

  // ---- IMPACTO SOCIAL (ONGs/ONG.zero + Programas + ESG + Projetos Sociais) ----
  impactoSocial: {
    hero: FrontHero;
    sections: FrontSection[]; // "de intencao a programa", "territorio no centro"
    services: ServiceItem[]; // Estruturacao de ONGs, Programas, Relatorios/ESG, Projetos Sociais
    // matchmaking: secao forte em EN/ES, leve em PT
    matchmaking: {
      title: string;
      body: string;
      strong: boolean; // controla se e secao destacada
    };
    ongZero: SubBrandCard; // landing ONG.zero
    motorSroi: SubBrandCard; // produto Motor SROI
    cases: { title: string; items: CaseStudy[] };
    forWhom: string;
  };

  // ---- CASES (todos, referenciaveis pela home e por cada area) ----
  cases: {
    title: string;
    subtitle: string;
    items: CaseStudy[]; // os 5 cases
  };

  // ---- SUB-MARCAS / LANDINGS (paginas proprias) ----
  creatorOpsRioPage: {
    eyebrow: string;
    title: string;
    intro: string;
    whatChanges: { title: string; before: string[]; after: string[] };
    packages: { title: string; subtitle: string; items: TitledItem[] }; // Content Sprint, Brand Campaign, Business Tourism VIP, Expatriates(em breve)
    differentiator: { title: string; body: string };
    howWeWork: { title: string; body: string };
    forWhom: string;
  };

  creationMarcasPage: {
    eyebrow: string;
    title: string;
    intro: string;
    whyEarly: { title: string; body: string };
    whatWeDo: { title: string; items: TitledItem[] }; // Registro INPI, Monitoramento
    differentiator: { title: string; body: string };
    howItWorks: { title: string; steps: TitledItem[] };
    forWhom: string;
  };

  ongZeroPage: {
    eyebrow: string;
    title: string;
    intro: string;
    buildTogether: { title: string; body: string }; // constroi junto, nao chave-na-mao
    stages: { title: string; items: TitledItem[] }; // Conceito, Abertura, Organizacao, Marca, Captacao
    forWhom: string;
  };

  motorSroiPage: {
    eyebrow: string;
    title: string; // "Meca o impacto social e comprove o seu valor"
    intro: string;
    functions: { title: string; items: TitledItem[] }; // Calculo SROI, Relatorios (SO o presente)
    whyRealData: { title: string; body: string };
    forWhom: string;
  };

  biEventosPage: {
    eyebrow: string;
    title: string; // "Todo evento produz dados"
    intro: string;
    whatWeMeasure: { title: string; body: string };
    externalRead: { title: string; body: string }; // medidor externo independente
    forWhom: string;
  };

  // ---- CONTATO (preservado, ajustado projectTypes) ----
  contact: {
    title: string;
    description: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      organization: string;
      organizationPlaceholder: string;
      projectType: string;
      projectTypePlaceholder: string;
      projectTypes: string[]; // atualizado p/ as novas areas
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
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
  };

  // ---- FOOTER (preservado, links atualizados) ----
  footer: {
    description: string;
    locations: string;
    companyTitle: string;
    companyLinks: LinkItem[];
    solutionsTitle: string;
    solutionsLinks: LinkItem[]; // as 3 areas + sub-marcas
    copyright: string;
  };
}
