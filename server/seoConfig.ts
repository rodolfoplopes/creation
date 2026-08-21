export type SupportedLang = 'en' | 'es' | 'pt';

interface SEOConfig {
  title: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  jsonLd?: object;
}

interface PageSEO {
  [lang: string]: SEOConfig;
}

const baseUrl = 'https://creation-pro.com';

// FIX: nome "Creator Ops Rio" -> "Creation Ops Rio" (renomeado na sessao de
// hoje). URL "/producoes/creator-ops-rio" -> "/creator-ops-rio" (URL curta,
// tambem da sessao de hoje).
const creationOpsRioJsonLd = {
  en: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creation Ops Rio",
    "provider": {
      "@type": "Organization",
      "name": "Creation",
      "url": baseUrl,
    },
    "description": "Complete executive production for international creators and brands in Rio de Janeiro. From strategy to execution: permits, locations, crew and logistics.",
    "areaServed": {
      "@type": "City",
      "name": "Rio de Janeiro",
    },
    "serviceType": "Executive Production",
    "url": `${baseUrl}/en/creator-ops-rio`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
    },
  },
  es: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creation Ops Rio",
    "provider": {
      "@type": "Organization",
      "name": "Creation",
      "url": baseUrl,
    },
    "description": "Producción ejecutiva completa para creadores y marcas internacionales en Río de Janeiro. De la estrategia a la ejecución: permisos, locaciones, equipo y logística.",
    "areaServed": {
      "@type": "City",
      "name": "Río de Janeiro",
    },
    "serviceType": "Producción Ejecutiva",
    "url": `${baseUrl}/es/creator-ops-rio`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
    },
  },
  pt: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creation Ops Rio",
    "provider": {
      "@type": "Organization",
      "name": "Creation",
      "url": baseUrl,
    },
    "description": "Cuidamos da operação inteira de uma produção no Rio de Janeiro, da estratégia à execução: autorizações, locações, equipe e logística.",
    "areaServed": {
      "@type": "City",
      "name": "Rio de Janeiro",
    },
    "serviceType": "Produção Executiva",
    "url": `${baseUrl}/pt/creator-ops-rio`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
    },
  },
};

// FIX: rotas inteiras reescritas para bater com a arquitetura de 3 areas
// de hoje. Removidas: /servicos, /impacto, /producoes/creator-ops-rio
// (paginas que nao existem mais, sem redirect por decisao de projeto).
// Adicionadas: /consultoria, /impacto-social, /creator-ops-rio (url curta),
// /creation-marcas, /ong-zero, /motor-sroi, /bi-de-eventos.
// Titulo/descricao reaproveitam o texto ja aprovado em pt.ts/en.ts/es.ts
// (hero de cada pagina), condensados para o tamanho de meta tag.
export const seoConfig: Record<string, PageSEO> = {
  '/': {
    pt: {
      title: 'Creation — Pensamos e realizamos projetos inovadores',
      description: 'Desenvolvemos projetos do início ao fim: entendemos o problema, estruturamos a solução, executamos e comprovamos o resultado.',
    },
    en: {
      title: 'Creation — We think and build innovative projects',
      description: 'We develop projects from start to finish: we understand the problem, structure the solution, execute it and prove the result.',
    },
    es: {
      title: 'Creation — Pensamos y realizamos proyectos innovadores',
      description: 'Desarrollamos proyectos de principio a fin: entendemos el problema, estructuramos la solución, ejecutamos y comprobamos el resultado.',
    },
  },
  // Arquitetura V2 (Manual V7.1 + indice de aprovacao do cliente): rotas
  // antigas (/consultoria, /producoes, /impacto-social, /metodo) removidas
  // daqui — hoje so existem como redirect client-side (App.tsx), entao cai
  // no defaultSEO, o que e mais correto que mostrar meta tag de uma pagina
  // que nao existe mais. Paginas novas sao stubs PT-only (stubData.ts);
  // por isso title/description so tem PT de verdade, en/es reusam o rotulo
  // curto ja traduzido no menu (Header.tsx).
  '/solucoes': {
    pt: {
      title: 'Soluções | Estratégia, gestão e operação de projetos | Creation',
      description: 'Soluções que começam pelo desafio, não pelo catálogo: estratégia, gestão, operações, inovação, impacto e branding & experiências.',
    },
    en: {
      title: 'Solutions | Creation',
      description: 'Strategy, management, operations, innovation, impact and branding & experiences.',
    },
    es: {
      title: 'Soluciones | Creation',
      description: 'Estrategia, gestión, operaciones, innovación, impacto y branding & experiencias.',
    },
  },
  '/solucoes/estrategia': {
    pt: {
      title: 'Estratégia | Clareza antes da ação | Creation',
      description: 'Inteligência de mercado, diagnóstico e planejamento, estruturação e viabilização de projetos.',
    },
    en: { title: 'Strategy | Creation', description: 'Market intelligence, diagnosis and planning, project structuring.' },
    es: { title: 'Estrategia | Creation', description: 'Inteligencia de mercado, diagnóstico y planificación, estructuración de proyectos.' },
  },
  '/solucoes/gestao': {
    pt: {
      title: 'Gestão | A responsabilidade que não se transfere | Creation',
      description: 'Gestão de Projetos e PMO, gestão de processos de negócios, governança e indicadores.',
    },
    en: { title: 'Management | Creation', description: 'Project management and PMO, business process management, governance and KPIs.' },
    es: { title: 'Gestión | Creation', description: 'Gestión de proyectos y PMO, gestión de procesos, gobernanza e indicadores.' },
  },
  '/operacoes': {
    pt: {
      title: 'Operações | É na execução que o projeto se decide | Creation',
      description: 'Gestão de eventos, produção executiva, location & fixer, receptivo, drivers e locações.',
    },
    en: { title: 'Operations | Creation', description: 'Event management, executive production, location & fixer, ground transport.' },
    es: { title: 'Operaciones | Creation', description: 'Gestión de eventos, producción ejecutiva, location & fixer, receptivo y choferes.' },
  },
  '/inovacao': {
    pt: {
      title: 'Inovação | Ideias ganham valor quando se tornam projetos | Creation',
      description: 'Programas de inovação, desafios, hackathons, ideathons e jornadas.',
    },
    en: { title: 'Innovation | Creation', description: 'Innovation programs, challenges, hackathons, ideathons and journeys.' },
    es: { title: 'Innovación | Creation', description: 'Programas de innovación, desafíos, hackathons, ideathons y jornadas.' },
  },
  '/impacto': {
    pt: {
      title: 'Impacto | Impacto que se constrói e se comprova | Creation',
      description: 'Programas de responsabilidade social, marketing de causa e desenvolvimento territorial.',
    },
    en: { title: 'Impact | Creation', description: 'Social responsibility programs, cause marketing and territorial development.' },
    es: { title: 'Impacto | Creation', description: 'Programas de responsabilidad social, marketing de causa y desarrollo territorial.' },
  },
  '/branding-experiencias': {
    pt: {
      title: 'Branding & Experiências | Estratégia que pode ser vista, vivida e lembrada | Creation',
      description: 'Identidade, narrativa, conteúdo, ativações e experiências de marca.',
    },
    en: { title: 'Branding & Experiences | Creation', description: 'Identity, narrative, content, activations and brand experiences.' },
    es: { title: 'Branding y Experiencias | Creation', description: 'Identidad, narrativa, contenido, activaciones y experiencias de marca.' },
  },
  '/cases': {
    pt: {
      title: 'Cases | Projetos em que pensar e fazer fizeram parte da mesma entrega | Creation',
      description: 'Uma seleção de trabalhos em inovação, eventos, produção executiva e desenvolvimento territorial.',
    },
    en: { title: 'Cases | Creation', description: 'A selection of work in innovation, events, executive production and territorial development.' },
    es: { title: 'Cases | Creation', description: 'Una selección de trabajos en innovación, eventos, producción ejecutiva y desarrollo territorial.' },
  },
  '/como-trabalhamos': {
    pt: {
      title: 'Como Trabalhamos | Entender. Estruturar. Realizar. Comprovar. | Creation',
      description: 'A abordagem da Creation para conduzir projetos do entendimento à prova de resultado.',
    },
    en: { title: 'How We Work | Creation', description: "Creation's approach to leading projects from understanding to proof of results." },
    es: { title: 'Cómo Trabajamos | Creation', description: 'El enfoque de Creation para conducir proyectos del entendimiento a la comprobación de resultados.' },
  },
  '/quem-somos': {
    pt: {
      title: 'Quem Somos | Creation',
      description: 'Desenvolvemos projetos e os fazemos acontecer, do início ao fim: entender, estruturar, executar e comprovar o resultado.',
    },
    en: {
      title: 'About | Creation',
      description: 'We develop projects and make them happen, start to finish: understand, structure, execute and prove the result.',
    },
    es: {
      title: 'Nosotros | Creation',
      description: 'Desarrollamos proyectos y los hacemos realidad, de principio a fin: entender, estructurar, ejecutar y comprobar el resultado.',
    },
  },
  '/contato': {
    pt: {
      title: 'Contato | Creation',
      description: 'Conte o que você precisa realizar. Respondemos com o caminho para fazer acontecer.',
    },
    en: {
      title: 'Contact | Creation',
      description: "Tell us what you need to get done. We'll respond with the path to make it happen.",
    },
    es: {
      title: 'Contacto | Creation',
      description: 'Cuéntenos lo que necesita lograr. Respondemos con el camino para hacerlo realidad.',
    },
  },
  '/creator-ops-rio': {
    pt: {
      title: 'Creation Ops Rio | Produção executiva no Rio de Janeiro',
      description: 'Recepção, logística e produção local completa para content creators e marcas internacionais no Rio de Janeiro.',
      jsonLd: creationOpsRioJsonLd.pt,
    },
    en: {
      title: 'Creation Ops Rio | Executive Production in Rio de Janeiro',
      description: 'Full local reception, logistics and production for content creators and international brands in Rio de Janeiro.',
      jsonLd: creationOpsRioJsonLd.en,
    },
    es: {
      title: 'Creation Ops Rio | Producción Ejecutiva en Río de Janeiro',
      description: 'Recepción, logística y producción local completa para creadores de contenido y marcas internacionales en Río de Janeiro.',
      jsonLd: creationOpsRioJsonLd.es,
    },
  },
  '/creation-marcas': {
    pt: {
      title: 'Creation Marcas | Registro e proteção de marca',
      description: 'Registro de marca no INPI e monitoramento contínuo, do pedido à vigilância. Registrar antes é proteger primeiro.',
    },
    en: {
      title: 'Creation Marcas | Trademark registration and protection',
      description: 'Trademark registration and continuous monitoring in Brazil. Registering early is protecting first.',
    },
    es: {
      title: 'Creation Marcas | Registro y protección de marca',
      description: 'Registro de marca y monitoreo continuo en Brasil. Registrar antes es proteger primero.',
    },
  },
  '/ong-zero': {
    pt: {
      title: 'ONG.zero | Estruturação de ONGs',
      description: 'Construímos uma ONG do zero, junto com quem a idealiza, do conceito à captação, até estar pronta para operar.',
    },
    en: {
      title: 'ONG.zero | NGO structuring',
      description: 'We build an NGO from the ground up, together with the person behind it, until it is ready to run.',
    },
    es: {
      title: 'ONG.zero | Estructuración de ONGs',
      description: 'Construimos una ONG desde cero, junto con quien la idealiza, hasta que esté lista para operar.',
    },
  },
  '/motor-sroi': {
    pt: {
      title: 'Motor SROI | Meça o impacto social',
      description: 'Calcule o retorno social dos seus projetos e transforme o resultado em relatórios prontos para apresentar.',
    },
    en: {
      title: 'SROI Engine | Measure your social impact',
      description: "Calculate your projects' social return and turn the data into reports ready to present.",
    },
    es: {
      title: 'Motor SROI | Mida el impacto social',
      description: 'Calcule el retorno social de sus proyectos y transforme el resultado en informes listos para presentar.',
    },
  },
  '/bi-de-eventos': {
    pt: {
      title: 'BI de Eventos | Todo evento produz dados',
      description: 'Reunimos as métricas do seu evento em um painel único, como leitura de desempenho independente.',
    },
    en: {
      title: 'BI for Events | Every event produces data',
      description: 'We bring your event metrics together in a single dashboard, as an independent performance read.',
    },
    es: {
      title: 'BI de Eventos | Todo evento produce datos',
      description: 'Reunimos las métricas de su evento en un panel único, como lectura de desempeño independiente.',
    },
  },
  // EN-only de proposito: PT/ES redirecionam pra Home (regra do App.tsx).
  // Sem entrada pt/es aqui -> cai no defaultSEO, que e o que bate com o
  // que um usuario real de fato ve nesses dois idiomas (a Home).
  '/profile': {
    en: {
      title: 'Creation Profile | Strategic positioning for executives',
      description: 'Strategic positioning, narrative construction and image architecture for executives and high-impact leaders.',
    },
  },
};

const defaultSEO: PageSEO = {
  pt: {
    title: 'Creation — Pensamos e realizamos projetos inovadores',
    description: 'Desenvolvemos projetos do início ao fim: entendemos o problema, estruturamos a solução, executamos e comprovamos o resultado.',
  },
  en: {
    title: 'Creation — We think and build innovative projects',
    description: 'We develop projects from start to finish: we understand the problem, structure the solution, execute it and prove the result.',
  },
  es: {
    title: 'Creation — Pensamos y realizamos proyectos innovadores',
    description: 'Desarrollamos proyectos de principio a fin: entendemos el problema, estructuramos la solución, ejecutamos y comprobamos el resultado.',
  },
};

export function getSEOForPath(path: string): { lang: SupportedLang; seo: SEOConfig; canonicalUrl: string } {
  const langMatch = path.match(/^\/(en|es|pt)(\/.*)?$/);
  const lang: SupportedLang = langMatch ? (langMatch[1] as SupportedLang) : 'en';
  const cleanPath = langMatch && langMatch[2] ? langMatch[2] : '/';

  const pageConfig = seoConfig[cleanPath] || defaultSEO;
  const seo = pageConfig[lang] || pageConfig['en'] || defaultSEO['en'];

  const canonicalUrl = `${baseUrl}/${lang}${cleanPath === '/' ? '' : cleanPath}`;

  return { lang, seo, canonicalUrl };
}

export function generateOGMetaTags(path: string): string {
  const { lang, seo, canonicalUrl } = getSEOForPath(path);

  // Sem imagem por decisao explicita (as antigas foram removidas por nao
  // agradar visualmente). Card de compartilhamento sai so com titulo e
  // descricao — melhor que apontar pra um arquivo que nao existe mais.
  let imageTags = '';
  if (seo.image) {
    const imageUrl = seo.image.startsWith('http') ? seo.image : `${baseUrl}${seo.image}`;
    const imageWidth = seo.imageWidth || 1200;
    const imageHeight = seo.imageHeight || 630;
    imageTags = `
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:image:alt" content="${escapeHtml(seo.title)}" />`;
  }

  const jsonLdBlock = seo.jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`
    : '';

  return `
    <meta name="description" content="${escapeHtml(seo.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <title>${escapeHtml(seo.title)}</title>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Creation" />
    <meta property="og:locale" content="${getLocale(lang)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(seo.title)}" />
    <meta property="og:description" content="${escapeHtml(seo.description)}" />${imageTags}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    ${jsonLdBlock}
  `;
}

function getLocale(lang: SupportedLang): string {
  switch (lang) {
    case 'en': return 'en_US';
    case 'es': return 'es_ES';
    case 'pt': return 'pt_BR';
    default: return 'en_US';
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
