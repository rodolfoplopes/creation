/**
 * Conteudo PT-only das paginas novas da Arquitetura V2 (ver ARQUITETURA BASE
 * SITE + indice 00-INDICE-E-ORDEM-DE-APROVACAO.md, pasta Creation_Textos_Site_PT_V1
 * no Drive do cliente). Paginas de "nucleo publicavel" apenas — Creation Marcas,
 * ONG.zero, BI de Eventos, Motor SROI, Insights ficam de fora do menu por ora.
 *
 * Isso e uma camada de STUB deliberada: texto e estrutura ja aprovaveis, mas
 * SEM tradução EN/ES ainda (o material fonte so existe em PT) e SEM o design
 * novo do Manual V7.1 — usa os primitivos visuais que ja existem no site
 * (Section/SectionHeader/FeatureCard/CTAButton), so pra validar arquitetura e
 * links. Rota bypassa useContent() de proposito: o contrato Content (types.ts)
 * exige paridade pt/en/es, e essas paginas ainda nao tem os 3 idiomas.
 */

export interface StubChild {
  title: string;
  description: string;
  href: string;
}

export interface StubPageData {
  eyebrow: string;
  title: string;
  intro: string;
  lead?: string;
  parentLabel?: string;
  parentHref?: string;
  childrenLabel?: string;
  children?: StubChild[];
  ctaLabel: string;
  ctaHref: string;
}

export const stubData: Record<string, StubPageData> = {
  solucoes: {
    eyebrow: "SOLUÇÕES",
    title: "Soluções que começam pelo desafio, não pelo catálogo.",
    intro:
      "A Creation combina estratégia, gestão e capacidade operacional de acordo com o contexto, o momento e a estrutura de cada projeto.",
    lead: "Podemos assumir uma frente específica ou conectar todo o percurso, do entendimento inicial à entrega e à análise dos resultados.",
    childrenLabel: "Capacidades e especialidades",
    children: [
      {
        title: "Estratégia",
        description:
          "Clareza para decidir: inteligência de mercado, diagnóstico e planejamento, estruturação e viabilização de projetos.",
        href: "/solucoes/estrategia",
      },
      {
        title: "Gestão",
        description:
          "Ritmo para avançar: gestão de projetos e PMO, processos de negócio, governança e indicadores.",
        href: "/solucoes/gestao",
      },
      {
        title: "Operações",
        description:
          "Execução para realizar: gestão de eventos, produção executiva, location & fixer, receptivo e logística.",
        href: "/operacoes",
      },
      {
        title: "Inovação",
        description:
          "Projetos, programas, hackathons e jornadas para transformar desafios em soluções aplicáveis.",
        href: "/inovacao",
      },
      {
        title: "Impacto",
        description:
          "Programas de responsabilidade social, desenvolvimento territorial e mensuração de resultados.",
        href: "/impacto",
      },
      {
        title: "Branding & Experiências",
        description:
          "Estratégia de marca, narrativa, ativações e experiências que conectam posicionamento e presença.",
        href: "/branding-experiencias",
      },
      {
        title: "Creation Ops Rio",
        description:
          "Operação local integrada no Rio de Janeiro para agências, produtoras, marcas e equipes internacionais.",
        href: "/creator-ops-rio",
      },
    ],
    ctaLabel: "Conte seu projeto",
    ctaHref: "/contato",
  },

  estrategia: {
    eyebrow: "ESTRATÉGIA",
    title: "Clareza antes da ação.",
    intro:
      "Investigamos o contexto, organizamos as informações e estruturamos as escolhas que permitem ao projeto avançar com direção.",
    lead: "Estratégia, para a Creation, não é um documento isolado da execução. É a definição do que precisa acontecer, por que esse caminho faz sentido e quais condições tornarão a realização possível.",
    parentLabel: "Soluções",
    parentHref: "/solucoes",
    childrenLabel: "O que podemos assumir",
    children: [
      {
        title: "Inteligência de Mercado",
        description:
          "Pesquisa e análise para compreender mercado, concorrência, públicos, tendências, riscos e oportunidades antes de decidir.",
        href: "/solucoes/inteligencia-de-mercado",
      },
      {
        title: "Diagnóstico e Planejamento",
        description:
          "Leitura estruturada da situação atual, definição do problema, prioridades, objetivos e plano de ação.",
        href: "/solucoes/diagnostico-e-planejamento",
      },
      {
        title: "Estruturação e Viabilização de Projetos",
        description:
          "Transformação de uma intenção em escopo, governança, orçamento, cronograma, indicadores e estratégia de recursos.",
        href: "/solucoes/estruturacao-de-projetos",
      },
    ],
    ctaLabel: "Converse sobre o desafio",
    ctaHref: "/contato",
  },

  "inteligencia-de-mercado": {
    eyebrow: "INTELIGÊNCIA DE MERCADO",
    title: "Decidir melhor começa por entender o mercado real.",
    intro:
      "Opiniões internas, tendências e dados isolados não formam uma estratégia. A inteligência de mercado conecta evidências para responder perguntas específicas sobre demanda, concorrência, públicos, contexto e oportunidade.",
    lead: "O trabalho começa pela decisão que precisa ser tomada. A pesquisa é desenhada para reduzir incerteza útil, não para acumular informação.",
    parentLabel: "Estratégia",
    parentHref: "/solucoes/estrategia",
    ctaLabel: "Apresente sua pergunta de negócio",
    ctaHref: "/contato",
  },

  "diagnostico-e-planejamento": {
    eyebrow: "DIAGNÓSTICO E PLANEJAMENTO",
    title: "Antes do plano, o problema certo.",
    intro:
      "Planejar cedo demais pode organizar a resposta errada. O diagnóstico esclarece o que está acontecendo, por que isso importa e quais condições precisam mudar.",
    lead: "O planejamento transforma essa leitura em prioridades, ações, responsáveis e critérios de acompanhamento.",
    parentLabel: "Estratégia",
    parentHref: "/solucoes/estrategia",
    ctaLabel: "Converse sobre o contexto",
    ctaHref: "/contato",
  },

  "estruturacao-de-projetos": {
    eyebrow: "ESTRUTURAÇÃO E VIABILIZAÇÃO DE PROJETOS",
    title: "Uma ideia só vira projeto quando consegue ser executada.",
    intro:
      "Estruturamos iniciativas para que possam ser compreendidas, decididas, financiadas, geridas e realizadas.",
    lead: "Isso significa transformar intenção em objetivos, escopo, entregas, governança, recursos, cronograma, riscos e indicadores coerentes entre si.",
    parentLabel: "Estratégia",
    parentHref: "/solucoes/estrategia",
    ctaLabel: "Estruture seu projeto",
    ctaHref: "/contato",
  },

  gestao: {
    eyebrow: "GESTÃO",
    title: "A responsabilidade que não se transfere.",
    intro:
      "Um plano não cria ritmo sozinho. Projetos avançam quando decisões têm responsáveis, informações circulam, riscos são tratados e as equipes sabem o que precisa acontecer em seguida.",
    lead: "A Creation estrutura e conduz esse sistema de gestão, conectando estratégia, pessoas, processos e entregas.",
    parentLabel: "Soluções",
    parentHref: "/solucoes",
    childrenLabel: "O que podemos assumir",
    children: [
      {
        title: "Gestão de Projetos e PMO",
        description:
          "Planejamento, governança, coordenação, acompanhamento e encerramento de projetos ou portfólios.",
        href: "/solucoes/gestao-de-projetos",
      },
      {
        title: "Gestão de Processos de Negócios",
        description:
          "Mapeamento, redesenho e implantação de processos para reduzir dependência de pessoas, retrabalho e perda de informação.",
        href: "/solucoes/gestao-de-processos",
      },
      {
        title: "Governança e Indicadores",
        description:
          "Papéis, fóruns, critérios de decisão, indicadores e rotinas para transformar acompanhamento em ação.",
        href: "/solucoes/governanca-e-indicadores",
      },
    ],
    ctaLabel: "Converse sobre a gestão do projeto",
    ctaHref: "/contato",
  },

  "gestao-de-projetos": {
    eyebrow: "GESTÃO DE PROJETOS E PMO",
    title: "Projetos avançam quando decisões têm dono.",
    intro:
      "Coordenamos o sistema que conecta objetivo, escopo, equipes, orçamento, prazo, riscos e entregas.",
    lead: "A gestão transforma informação dispersa em decisões visíveis e mantém o trabalho em movimento até a conclusão.",
    parentLabel: "Gestão",
    parentHref: "/solucoes/gestao",
    ctaLabel: "Fale sobre seu projeto",
    ctaHref: "/contato",
  },

  "gestao-de-processos": {
    eyebrow: "GESTÃO DE PROCESSOS DE NEGÓCIOS",
    title: "O trabalho precisa funcionar além das pessoas que o sustentam.",
    intro:
      "Quando um processo existe apenas na memória de quem o executa, a organização fica vulnerável a atrasos, retrabalho, perda de informação e decisões inconsistentes.",
    lead: "Mapeamos como o trabalho acontece, redesenhamos o que precisa mudar e acompanhamos a implantação até que o novo fluxo possa ser operado pela equipe.",
    parentLabel: "Gestão",
    parentHref: "/solucoes/gestao",
    ctaLabel: "Converse sobre seus processos",
    ctaHref: "/contato",
  },

  "governanca-e-indicadores": {
    eyebrow: "GOVERNANÇA E INDICADORES",
    title: "Decisão, responsabilidade e evidência no mesmo sistema.",
    intro:
      "Governança define quem decide, com base em qual informação e dentro de que limite. Indicadores mostram o que precisa de atenção.",
    lead: "Quando os dois elementos estão desconectados, relatórios se acumulam e problemas continuam sem responsável. Estruturamos o sistema que liga informação a decisão e decisão a acompanhamento.",
    parentLabel: "Gestão",
    parentHref: "/solucoes/gestao",
    ctaLabel: "Converse sobre sua governança",
    ctaHref: "/contato",
  },

  operacoes: {
    eyebrow: "OPERAÇÕES",
    title: "É na execução que o projeto se decide.",
    intro:
      "Um bom plano precisa funcionar no tempo, no orçamento e no território reais. A Creation coordena pessoas, fornecedores, recursos, licenças, deslocamentos e decisões para que cada frente avance com clareza até a entrega.",
    lead: "Atuamos como núcleo de operação ou como extensão da equipe do cliente, com responsabilidade definida e acompanhamento próximo.",
    parentLabel: "Soluções",
    parentHref: "/solucoes",
    childrenLabel: "Nossas frentes de atuação",
    children: [
      {
        title: "Gestão de Eventos",
        description:
          "Planejamento e coordenação do ciclo completo de eventos corporativos, culturais, institucionais, de inovação e de impacto.",
        href: "/operacoes/gestao-de-eventos",
      },
      {
        title: "Produção Executiva",
        description:
          "Orçamento, cronograma, fornecedores, equipes, infraestrutura e acompanhamento da realização, da pré-produção ao encerramento.",
        href: "/operacoes/producao-executiva",
      },
      {
        title: "Location & Fixer",
        description:
          "Pesquisa de locações, articulação local, licenças, apoio a equipes e solução de necessidades de produção no Rio de Janeiro e na Costa Verde.",
        href: "/operacoes/location-fixer-rio-de-janeiro",
      },
      {
        title: "Receptivo, Drivers & Locações",
        description:
          "Deslocamentos, veículos, motoristas, hospedagem, espaços, equipamentos e suporte de chegada para equipes, convidados e produções.",
        href: "/operacoes/receptivo-drivers-locacoes",
      },
    ],
    ctaLabel: "Apresente sua operação",
    ctaHref: "/contato",
  },

  "gestao-de-eventos": {
    eyebrow: "GESTÃO DE EVENTOS",
    title: "Um evento começa muito antes da montagem.",
    intro:
      "Objetivo, público, experiência, conteúdo, orçamento e operação precisam apontar para a mesma direção.",
    lead: "A Creation estrutura e coordena eventos do conceito ao encerramento, conectando decisão estratégica e realização.",
    parentLabel: "Operações",
    parentHref: "/operacoes",
    ctaLabel: "Planeje seu evento",
    ctaHref: "/contato",
  },

  "producao-executiva": {
    eyebrow: "PRODUÇÃO EXECUTIVA",
    title: "Produção executiva é transformar muitas dependências em uma entrega.",
    intro:
      "Quando o projeto precisa sair do papel, cada contratação, prazo, acesso e decisão passa a afetar o conjunto.",
    lead: "A Creation organiza essas dependências e coordena a realização com visão de orçamento, cronograma, qualidade e risco.",
    parentLabel: "Operações",
    parentHref: "/operacoes",
    ctaLabel: "Converse sobre sua produção",
    ctaHref: "/contato",
  },

  "location-fixer-rio-de-janeiro": {
    eyebrow: "LOCATION & FIXER",
    title: "Você chega com o projeto. A operação local já sabe o caminho.",
    intro:
      "Locações, autorizações, acessos, equipes e deslocamentos mudam de um território para outro.",
    lead: "A Creation oferece pesquisa de locações e suporte de produção local para equipes que precisam realizar filmagens, campanhas, eventos e projetos no Rio de Janeiro e na Costa Verde.",
    parentLabel: "Operações",
    parentHref: "/operacoes",
    ctaLabel: "Envie seu briefing",
    ctaHref: "/contato",
  },

  "receptivo-drivers-locacoes": {
    eyebrow: "RECEPTIVO, DRIVERS & LOCAÇÕES",
    title: "A logística começa antes da chegada.",
    intro:
      "Equipes, convidados e recursos precisam estar no lugar certo, no horário certo e com informação suficiente para seguir o plano.",
    lead: "A Creation coordena a logística de chegada, permanência e deslocamento para produções, eventos e projetos especiais.",
    parentLabel: "Operações",
    parentHref: "/operacoes",
    ctaLabel: "Planeje sua logística",
    ctaHref: "/contato",
  },

  inovacao: {
    eyebrow: "INOVAÇÃO",
    title: "Ideias ganham valor quando se tornam projetos.",
    intro:
      "Inovação não começa em uma dinâmica e não termina em uma apresentação. Ela precisa de um problema relevante, critérios de decisão, pessoas mobilizadas e um caminho para testar, aprender e implementar.",
    lead: "A Creation estrutura e realiza iniciativas de inovação conectadas à estratégia e à capacidade real da organização.",
    parentLabel: "Soluções",
    parentHref: "/solucoes",
    ctaLabel: "Converse sobre seu desafio",
    ctaHref: "/contato",
  },

  impacto: {
    eyebrow: "IMPACTO",
    title: "Impacto que se constrói e se comprova.",
    intro:
      "Intenção social não substitui estratégia, gestão nem evidência. A Creation ajuda empresas, organizações e parceiros a transformar compromissos em programas estruturados.",
    lead: "Com públicos definidos, responsabilidades claras e acompanhamento compatível com o que se pretende mudar.",
    parentLabel: "Soluções",
    parentHref: "/solucoes",
    childrenLabel: "Frentes de atuação",
    children: [
      {
        title: "Marketing de Causa",
        description:
          "Estratégia que conecta marca, causa e ação, com parceria, governança, experiência e comunicação responsável.",
        href: "/impacto/marketing-de-causa",
      },
    ],
    ctaLabel: "Converse sobre sua iniciativa",
    ctaHref: "/contato",
  },

  "marketing-de-causa": {
    eyebrow: "MARKETING DE CAUSA",
    title: "Uma causa não pode ser apenas uma campanha.",
    intro:
      "Quando uma marca se associa a uma questão social, assume responsabilidade sobre o que promete, como atua e quem envolve.",
    lead: "A Creation estrutura iniciativas que conectam posicionamento, parceria, experiência e entrega concreta.",
    parentLabel: "Impacto",
    parentHref: "/impacto",
    ctaLabel: "Converse sobre sua iniciativa",
    ctaHref: "/contato",
  },

  "branding-experiencias": {
    eyebrow: "BRANDING & EXPERIÊNCIAS",
    title: "Estratégia que pode ser vista, vivida e lembrada.",
    intro:
      "Uma marca se torna concreta nos encontros que produz. A Creation conecta posicionamento, conceito e operação para criar experiências coerentes com o que a organização quer representar.",
    lead: "E capazes de funcionar no mundo real.",
    parentLabel: "Soluções",
    parentHref: "/solucoes",
    ctaLabel: "Converse sobre sua marca",
    ctaHref: "/contato",
  },

  "como-trabalhamos": {
    eyebrow: "COMO TRABALHAMOS",
    title: "Entender. Estruturar. Realizar. Comprovar.",
    intro:
      "Projetos diferentes exigem equipes, ferramentas e percursos diferentes. O que permanece é uma forma disciplinada de transformar uma necessidade em direção, estrutura, entrega e evidência.",
    lead: "Não chamamos essa abordagem de metodologia proprietária. O valor está em escolher e aplicar o método adequado a cada decisão, não em inventar nomes para etapas conhecidas.",
    childrenLabel: "As quatro etapas",
    children: [
      {
        title: "01 — Entender",
        description:
          "Investigamos o contexto, os públicos envolvidos, as necessidades, as restrições e o resultado esperado antes de propor uma solução.",
        href: "/contato",
      },
      {
        title: "02 — Estruturar",
        description:
          "Transformamos o entendimento em escopo, prioridades, governança, equipe, orçamento, cronograma, riscos e indicadores.",
        href: "/contato",
      },
      {
        title: "03 — Realizar",
        description:
          "Mobilizamos pessoas, parceiros e recursos, coordenamos decisões e conduzimos a execução do projeto até a entrega.",
        href: "/contato",
      },
      {
        title: "04 — Comprovar",
        description:
          "Monitoramos, documentamos e analisamos os resultados para demonstrar as entregas, avaliar o valor gerado e orientar os próximos passos.",
        href: "/contato",
      },
    ],
    ctaLabel: "Conte seu projeto",
    ctaHref: "/contato",
  },
};

export interface CaseStub {
  title: string;
  client: string;
  context: string;
  numbers: string[];
}

export const casesStub: CaseStub[] = [
  {
    title: "Hacking.Rio",
    client: "Íons Innovation",
    context:
      "Produção e operação executiva de quatro edições em três formatos diferentes (presencial, digital e metaverso), integrando participantes, mentores, parceiros e fornecedores.",
    numbers: ["4 edições", "3 formatos", "+5 mil competidores", "+170 mil pessoas alcançadas"],
  },
  {
    title: "Hacking.Help",
    client: "Íons Innovation",
    context:
      "Concepção e produção executiva de uma maratona on-line criada rapidamente para manter a mobilização de propósito social durante a pandemia.",
    numbers: ["1.533 competidores", "5 países de língua portuguesa", "R$ 500 mil em mídia espontânea estimada"],
  },
  {
    title: "HR Talks",
    client: "Íons Innovation",
    context:
      "Produção executiva de uma programação digital internacional de longa duração, coordenando agenda, palestrantes e transmissão ao vivo.",
    numbers: ["15.500 inscritos", "172 palestrantes globais", "40 horas de conteúdo ao vivo"],
  },
  {
    title: "Pertinho de Casa — Escola e Feiras",
    client: "Rede Asta e Porto Sudeste",
    context:
      "Coordenação territorial de uma escola de negócios e feiras de comercialização para fortalecer empreendedores locais.",
    numbers: ["2 frentes de atuação", "6 eventos de comercialização", "R$ 19.649 em vendas acompanhadas"],
  },
  {
    title: "Pertinho de Casa — Plataforma",
    client: "Rede Asta e Porto Sudeste",
    context:
      "Recrutamento de vendedores, articulação do Comitê pela Economia Local e acompanhamento trimestral da plataforma.",
    numbers: ["241 empreendedores", "56 bairros de Itaguaí e Seropédica", "R$ 30.650,11 em faturamento registrado"],
  },
  {
    title: "World Creativity Day",
    client: "Centro Cultural Banco do Brasil Rio de Janeiro",
    context:
      "Concepção e execução de programação presencial e on-line sobre criatividade, distribuída por espaços e dias diferentes.",
    numbers: ["3 dias de programação", "2 espaços", "+1 mil pessoas alcançadas", "+50 inspiradores on-line"],
  },
];
