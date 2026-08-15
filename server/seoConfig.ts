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
const defaultImage = '/og-image-default.png';

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
    "image": `${baseUrl}/og-creator-ops-rio.png`,
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
    "image": `${baseUrl}/og-creator-ops-rio.png`,
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
    "image": `${baseUrl}/og-creator-ops-rio.png`,
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
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    en: {
      title: 'Creation — We think and build innovative projects',
      description: 'We develop projects from start to finish: we understand the problem, structure the solution, execute it and prove the result.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
    es: {
      title: 'Creation — Pensamos y realizamos proyectos innovadores',
      description: 'Desarrollamos proyectos de principio a fin: entendemos el problema, estructuramos la solución, ejecutamos y comprobamos el resultado.',
      image: defaultImage,
      imageWidth: 1200,
      imageHeight: 630,
    },
  },
  '/consultoria': {
    pt: {
      title: 'Consultoria | Creation',
      description: 'Gestão de Projetos e Inovação. Estruturamos e conduzimos projetos do diagnóstico à entrega, com inovação como método.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'Consulting | Creation',
      description: 'Project Management and Innovation. We structure and lead projects from diagnosis to delivery, with innovation as method.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Consultoría | Creation',
      description: 'Gestión de Proyectos e Innovación. Estructuramos y conducimos proyectos desde el diagnóstico hasta la entrega.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/producoes': {
    pt: {
      title: 'Produções | Creation',
      description: 'Eventos, experiências e audiovisual. Da concepção à execução no local, com uma operação só, do início ao fim.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'Productions | Creation',
      description: 'Events, experiences and audiovisual. From concept to on-site execution, under a single operation from start to finish.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Producciones | Creation',
      description: 'Eventos, experiencias y audiovisual. De la concepción a la ejecución en el lugar, con una sola operación de principio a fin.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/impacto-social': {
    pt: {
      title: 'Impacto Social | Creation',
      description: 'Estruturamos iniciativas sociais no território e comprovamos o impacto que geram.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'Social Impact | Creation',
      description: 'We structure social initiatives in the field and prove the impact they generate.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Impacto Social | Creation',
      description: 'Estructuramos iniciativas sociales en el territorio y comprobamos el impacto que generan.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/metodo': {
    pt: {
      title: 'Método | Creation',
      description: 'Ciclo Completo: diagnóstico, estruturação, execução e prova. O método por trás de todo projeto que conduzimos.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'Method | Creation',
      description: 'Full Cycle: diagnosis, structuring, execution and validation. The method behind every project we lead.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Método | Creation',
      description: 'Ciclo Completo: diagnóstico, estructuración, ejecución y validación. El método detrás de cada proyecto que conducimos.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/quem-somos': {
    pt: {
      title: 'Quem Somos | Creation',
      description: 'Desenvolvemos projetos e os fazemos acontecer, do início ao fim: entender, estruturar, executar e comprovar o resultado.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'About | Creation',
      description: 'We develop projects and make them happen, start to finish: understand, structure, execute and prove the result.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Nosotros | Creation',
      description: 'Desarrollamos proyectos y los hacemos realidad, de principio a fin: entender, estructurar, ejecutar y comprobar el resultado.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/contato': {
    pt: {
      title: 'Contato | Creation',
      description: 'Conte o que você precisa realizar. Respondemos com o caminho para fazer acontecer.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'Contact | Creation',
      description: "Tell us what you need to get done. We'll respond with the path to make it happen.",
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Contacto | Creation',
      description: 'Cuéntenos lo que necesita lograr. Respondemos con el camino para hacerlo realidad.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/creator-ops-rio': {
    pt: {
      title: 'Creation Ops Rio | Produção executiva no Rio de Janeiro',
      description: 'Recepção, logística e produção local completa para content creators e marcas internacionais no Rio de Janeiro.',
      image: '/og-creator-ops-rio.png',
      imageWidth: 1200, imageHeight: 630,
      jsonLd: creationOpsRioJsonLd.pt,
    },
    en: {
      title: 'Creation Ops Rio | Executive Production in Rio de Janeiro',
      description: 'Full local reception, logistics and production for content creators and international brands in Rio de Janeiro.',
      image: '/og-creator-ops-rio.png',
      imageWidth: 1200, imageHeight: 630,
      jsonLd: creationOpsRioJsonLd.en,
    },
    es: {
      title: 'Creation Ops Rio | Producción Ejecutiva en Río de Janeiro',
      description: 'Recepción, logística y producción local completa para creadores de contenido y marcas internacionales en Río de Janeiro.',
      image: '/og-creator-ops-rio.png',
      imageWidth: 1200, imageHeight: 630,
      jsonLd: creationOpsRioJsonLd.es,
    },
  },
  '/creation-marcas': {
    pt: {
      title: 'Creation Marcas | Registro e proteção de marca',
      description: 'Registro de marca no INPI e monitoramento contínuo, do pedido à vigilância. Registrar antes é proteger primeiro.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'Creation Marcas | Trademark registration and protection',
      description: 'Trademark registration and continuous monitoring in Brazil. Registering early is protecting first.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Creation Marcas | Registro y protección de marca',
      description: 'Registro de marca y monitoreo continuo en Brasil. Registrar antes es proteger primero.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/ong-zero': {
    pt: {
      title: 'ONG.zero | Estruturação de ONGs',
      description: 'Construímos uma ONG do zero, junto com quem a idealiza, do conceito à captação, até estar pronta para operar.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'ONG.zero | NGO structuring',
      description: 'We build an NGO from the ground up, together with the person behind it, until it is ready to run.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'ONG.zero | Estructuración de ONGs',
      description: 'Construimos una ONG desde cero, junto con quien la idealiza, hasta que esté lista para operar.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/motor-sroi': {
    pt: {
      title: 'Motor SROI | Meça o impacto social',
      description: 'Calcule o retorno social dos seus projetos e transforme o resultado em relatórios prontos para apresentar.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'SROI Engine | Measure your social impact',
      description: "Calculate your projects' social return and turn the data into reports ready to present.",
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'Motor SROI | Mida el impacto social',
      description: 'Calcule el retorno social de sus proyectos y transforme el resultado en informes listos para presentar.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  '/bi-de-eventos': {
    pt: {
      title: 'BI de Eventos | Todo evento produz dados',
      description: 'Reunimos as métricas do seu evento em um painel único, como leitura de desempenho independente.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    en: {
      title: 'BI for Events | Every event produces data',
      description: 'We bring your event metrics together in a single dashboard, as an independent performance read.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
    es: {
      title: 'BI de Eventos | Todo evento produce datos',
      description: 'Reunimos las métricas de su evento en un panel único, como lectura de desempeño independiente.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
  // EN-only de proposito: PT/ES redirecionam pra Home (regra do App.tsx).
  // Sem entrada pt/es aqui -> cai no defaultSEO, que e o que bate com o
  // que um usuario real de fato ve nesses dois idiomas (a Home).
  '/profile': {
    en: {
      title: 'Creation Profile | Strategic positioning for executives',
      description: 'Strategic positioning, narrative construction and image architecture for executives and high-impact leaders.',
      image: defaultImage, imageWidth: 1200, imageHeight: 630,
    },
  },
};

const defaultSEO: PageSEO = {
  pt: {
    title: 'Creation — Pensamos e realizamos projetos inovadores',
    description: 'Desenvolvemos projetos do início ao fim: entendemos o problema, estruturamos a solução, executamos e comprovamos o resultado.',
    image: defaultImage,
    imageWidth: 1200,
    imageHeight: 630,
  },
  en: {
    title: 'Creation — We think and build innovative projects',
    description: 'We develop projects from start to finish: we understand the problem, structure the solution, execute it and prove the result.',
    image: defaultImage,
    imageWidth: 1200,
    imageHeight: 630,
  },
  es: {
    title: 'Creation — Pensamos y realizamos proyectos innovadores',
    description: 'Desarrollamos proyectos de principio a fin: entendemos el problema, estructuramos la solución, ejecutamos y comprobamos el resultado.',
    image: defaultImage,
    imageWidth: 1200,
    imageHeight: 630,
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
  const imageUrl = seo.image?.startsWith('http') ? seo.image : `${baseUrl}${seo.image}`;
  const imageWidth = seo.imageWidth || 1200;
  const imageHeight = seo.imageHeight || 630;

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
    <meta property="og:description" content="${escapeHtml(seo.description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(seo.title)}" />
    <meta name="twitter:description" content="${escapeHtml(seo.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:image:alt" content="${escapeHtml(seo.title)}" />
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

