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
    headline: string;        // "Pensamos e realizamos projetos inovadores."
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

  // ---- SOBRE ----
  about: {
    hero: { title: string; subtitle: string };
    architectMetaphor: { title: string; body: string };   // "Trabalhamos como arquitetos"
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    values: { title: string; subtitle: string; items: TitledItem[] };  // 6 valores
    forWhom: { title: string; text: string; distinction: string };
    partnersTitle: string;
    manifesto: {
      title: string;
      paragraphs: string[];
      closing: string;       // "O futuro nao se espera. O futuro se constroi."
    };
    // presenca (Sobre EN menciona Brasil+EUA de leve)
    presenceNote?: string;
  };

  // ---- SUB-MARCAS / LANDINGS (paginas proprias) ----
  creatorOpsRioPage: {
    eyebrow: string;
    title: string;
    intro: string;
    experienceStatement: string; // credencial real ("+15 anos de experiencia..."), nao numero de projeto
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
      projectTypes: string[];        // atualizado p/ as novas areas
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
    solutionsLinks: LinkItem[];      // as 3 areas + sub-marcas
    copyright: string;
  };
}