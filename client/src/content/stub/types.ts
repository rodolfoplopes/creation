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
  // Descricao do tipo de foto que deve entrar aqui, quando ainda nao ha
  // uma foto real definida (data.image). Renderizado como uma caixa de
  // placeholder visivel na pagina, pra facilitar a selecao de fotos.
  imageHint?: string;
  // Card de metodologia/ferramenta pronto (biblioteca "Creation - Metodos
  // & Ferramentas", ver Drive) — alternativa a foto quando a pagina e
  // sobre um metodo especifico (SWOT, Canvas, PMBOK, BPMN, OKR...).
  // Renderizado sem o tratamento fotografico do PhotoFrame (e um grafico
  // de marca ja finalizado, nao uma foto a ser recortada/tingida).
  diagramImage?: StubPageImage;
  // Card de metodologia como reforco visual secundario — pagina ja tem
  // foto real no hero (data.image), esse card entra depois dos blocks,
  // antes de children/CTA, com um rotulo curto (secondaryDiagramLabel).
  secondaryDiagram?: StubPageImage;
  secondaryDiagramLabel?: string;
  parentLabel?: string;
  parentHref?: string;
  blocks?: StubBlock[];
  childrenLabel?: string;
  children?: StubChild[];
  // Quando true, StubPageLayout renderiza CicloCompletoSection (variant="full")
  // no lugar do grid de "children" — usado so por "como-trabalhamos".
  cicloCompleto?: boolean;
  ctaBody?: string;
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
  image: StubPageImage;
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
  note?: string; // disclaimer de atribuicao/evidencia (ex: avaliacao conduzida por terceiro, resultado abaixo da projecao)
  image?: StubPageImage;
  // Ancora de grupo pra receber o CTA dos slides "Inovacao"/"Impacto" do
  // carrossel da home (Tarefa 8, comando tecnico 26/09/2026). O primeiro
  // case de cada grupo em Cases.tsx recebe id={group}.
  group?: "inovacao" | "impacto";
}

// Ciclo Completo interativo (ver CicloCompletoSection.tsx) — versao
// visual/diagramada do mesmo conteudo ja aprovado em
// stubData["como-trabalhamos"] (Entender/Estruturar/Realizar/Comprovar).
// "family" referencia as cores terciarias do adendo V7.1
// (tailwind.config.ts): cada etapa usa a familia com o papel semantico
// mais proximo (Iris=conhecimento, Lapis=estrutura, Amber=movimento,
// Kelp=resultado).
export interface CicloStage {
  number: string;
  name: string;
  role: string;
  family: "iris" | "lapis" | "amber" | "kelp";
  lead: string;
  leftHeading: string;
  left: string[];
  rightHeading: string;
  right: string[];
  out: string;
}

// Titulo/subtitulo da secao Especialidades da Home — movido de hardcode
// em EspecialidadesSection.tsx pra arquivo de conteudo (Tarefa 3.1b,
// comando tecnico 26/09/2026).
export interface HomeEspecialidadesSection {
  title: string;
  subtitle: string;
}

export interface StubLangPack {
  stubData: Record<string, StubPageData>;
  homeCapacidades: HomeCapacidade[];
  homeEspecialidades: HomeEspecialidade[];
  homeEspecialidadesSection: HomeEspecialidadesSection;
  homeSolucoes: HomeSolucao[];
  casesStub: CaseStub[];
  cicloCompletoStages: CicloStage[];
}
