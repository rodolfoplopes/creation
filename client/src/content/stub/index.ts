import type { SupportedLang } from "@/lib/lang";
import type { StubLangPack } from "./types";
import * as pt from "./pt";
import * as en from "./en";
import * as es from "./es";

export type { StubPageData, StubBlock, StubChild, HomeCapacidade, HomeEspecialidade, HomeSolucao, CaseStub } from "./types";

/**
 * Conteudo das paginas novas da Arquitetura V2, agora nos 3 idiomas —
 * traduzido a partir do material fonte PT (ver Drive do cliente,
 * Creation_Textos_Site_PT_V1). Um pacote por idioma (pt/en/es), cada um
 * com o mesmo shape (StubLangPack). Continua fora do contrato Content
 * tipado (types.ts principal): essas paginas usam sua propria estrutura,
 * simples o bastante pra nao precisar do useContent().
 */
export const stubPages: Record<SupportedLang, StubLangPack> = {
  pt: { stubData: pt.stubData, homeCapacidades: pt.homeCapacidades, homeEspecialidades: pt.homeEspecialidades, homeSolucoes: pt.homeSolucoes, casesStub: pt.casesStub },
  en: { stubData: en.stubData, homeCapacidades: en.homeCapacidades, homeEspecialidades: en.homeEspecialidades, homeSolucoes: en.homeSolucoes, casesStub: en.casesStub },
  es: { stubData: es.stubData, homeCapacidades: es.homeCapacidades, homeEspecialidades: es.homeEspecialidades, homeSolucoes: es.homeSolucoes, casesStub: es.casesStub },
};
