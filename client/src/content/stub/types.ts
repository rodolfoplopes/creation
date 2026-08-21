/**
 * Tipos compartilhados do conteudo das paginas novas da Arquitetura V2
 * (ver stub/pt.ts, stub/en.ts, stub/es.ts). Um arquivo por idioma, todos
 * implementando este mesmo shape — igual ao padrao pt.ts/en.ts/es.ts do
 * content/types.ts principal, so que fora do contrato tipado Content
 * (essas paginas vivem soltas, referenciadas via stubPages[lang]).
 */

export interface StubChild {
  title: string;
  description: string;
  href: string;
}

export interface StubBulletBlock {
  type: "bullets";
  heading: string;
  intro?: string;
  items: string[];
}

export interface StubCardBlock {
  type: "cards";
  heading: string;
  intro?: string;
  items: { title: string; description: string }[];
}

export interface StubStepBlock {
  type: "steps";
  heading: string;
  intro?: string;
  items: { number: string; title: string; description: string }[];
}

export type StubBlock = StubBulletBlock | StubCardBlock | StubStepBlock;

export interface StubPageImage {
  src: string;
  alt: string;
}

export interface StubPageData {
  eyebrow: string;
  title: string;
  intro: string;
  lead?: string;
  image?: StubPageImage;
  parentLabel?: string;
  parentHref?: string;
  blocks?: StubBlock[];
  childrenLabel?: string;
  children?: StubChild[];
  ctaLabel: string;
  ctaHref: string;
}

export interface HomeCapacidade {
  title: string;
  tagline: string;
  description: string;
  items: string[];
  href: string;
  linkLabel: string;
}

export interface HomeEspecialidade {
  title: string;
  tagline: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface HomeSolucao {
  title: string;
  description: string;
  href: string;
}

export interface CaseStub {
  title: string;
  client: string;
  context: string;
  numbers: string[];
}

export interface StubLangPack {
  stubData: Record<string, StubPageData>;
  homeCapacidades: HomeCapacidade[];
  homeEspecialidades: HomeEspecialidade[];
  homeSolucoes: HomeSolucao[];
  casesStub: CaseStub[];
}
