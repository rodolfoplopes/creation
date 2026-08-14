import type { Content } from "./types";

export const es: Content = {
  brand: {
    name: "Creation",
    microcopy: "Claridad. Ritmo. Ejecución.",
    footerTagline: "Pensamos y realizamos proyectos innovadores.",
    locations: "Brasil | Estados Unidos",
  },

  nav: {
    home: "Inicio",
    consultoria: "Consultoría",
    producoes: "Producciones",
    impactoSocial: "Impacto Social",
    method: "Método",
    about: "Nosotros",
    contact: "Contacto",
    areasLabel: "Áreas",
    companyLabel: "Creation",
  },

  cta: {
    primary: "Agendar una llamada",
    secondary: "Conocer el método",
    href: "/contato",
    methodHref: "/metodo",
  },

  labels: {
    caseProblem: "Lo que estaba en juego",
    caseAction: "Lo que hicimos",
    forWhom: "Para quién",
    seeMethod: "Ver el método",
  },

  // LOCKED — frase-mae, fechada no doc.
  hero: {
    headline: "Pensamos y realizamos proyectos innovadores.",
    subheadline:
      "Desarrollamos proyectos de principio a fin: entendemos el problema, estructuramos la solución, ejecutamos y comprobamos el resultado.",
  },

  areas: {
    title: "Lo que hacemos",
    subtitle: "Tres áreas de trabajo, un mismo método detrás de todas.",
    items: [
      {
        eyebrow: "Consultoría",
        title: "Gestión de Proyectos e Innovación",
        description:
          "Estructuramos y conducimos proyectos desde el diagnóstico hasta la entrega, con la innovación como método.",
        href: "/consultoria",
        linkLabel: "Ver Consultoría",
      },
      {
        eyebrow: "Producciones",
        title: "Eventos y Audiovisual",
        description:
          "Producimos eventos, experiencias y contenido audiovisual, desde el concepto hasta la ejecución en el lugar.",
        href: "/producoes",
        linkLabel: "Ver Producciones",
      },
      {
        eyebrow: "Impacto Social",
        title: "Estructurar, medir, comprobar",
        description:
          "Estructuramos iniciativas sociales en el territorio y comprobamos el impacto que generan.",
        href: "/impacto-social",
        linkLabel: "Ver Impacto Social",
      },
    ],
  },

  // LOCKED — Ciclo Completo / Diagnostico / Estructuracion / Ejecucion /
  // Validacion, travado no doc.
  method: {
    badge: "MÉTODO",
    title: "Ciclo Completo",
    intro:
      "Todo proyecto que conducimos recorre el mismo camino, ya sea un evento, una consultoría, un programa social o una iniciativa de innovación. Son cuatro tiempos que van del entendimiento a la comprobación.",
    stages: [
      {
        number: "01",
        name: "Diagnóstico",
        tagline: "entender antes de actuar",
        description:
          "Antes de proponer cualquier cosa, entendemos el problema, el contexto y lo que el proyecto necesita alcanzar. Es común que el pedido inicial no sea el problema real, y es en el diagnóstico donde esa diferencia aparece.",
      },
      {
        number: "02",
        name: "Estructuración",
        tagline: "diseñar el plan",
        description:
          "Con el problema entendido, diseñamos el plan: alcance, gobernanza, equipos y la forma de medir el resultado. Cuando hay un camino obvio y un camino más consistente, es aquí donde optamos por el segundo, incluso cuando exige más de nosotros.",
      },
      {
        number: "03",
        name: "Ejecución",
        tagline: "poner la mano, hacer",
        description:
          "Conducimos la realización de principio a fin. No entregamos el plan y nos vamos: ponemos la mano, coordinamos y respondemos por el resultado hasta que el proyecto sucede.",
      },
      {
        number: "04",
        name: "Validación",
        tagline: "medir, mostrar",
        description:
          "Un proyecto no termina cuando sucede, sino cuando se comprueba lo que generó. Medimos y documentamos el resultado, y eso es lo que cierra el ciclo e informa el próximo diagnóstico.",
      },
    ],
    loopNote:
      "La comprobación de un proyecto alimenta el diagnóstico del siguiente. Por eso es un ciclo, y no una línea.",
  },

  targetAudience: {
    title: "Para quién trabajamos",
    subtitle: "Donde el propósito y el resultado se encuentran.",
    audiences: [
      {
        title: "Institutos y fundaciones",
        description: "Que necesitan estructurar programas y comprobar el impacto.",
      },
      {
        title: "Empresas en expansión",
        description: "Que necesitan estructura para ejecutar con claridad.",
      },
      {
        title: "Organizaciones culturales y creativas",
        description: "Que necesitan viabilizar proyectos y captar recursos.",
      },
      {
        title: "Sector público y marcas",
        description: "Que necesitan una operación responsable de toda la entrega.",
      },
    ],
  },

  about: {
    // LOCKED — titulo travado no doc.
    hero: {
      title: "Desarrollamos proyectos y los hacemos realidad",
      subtitle:
        "Creation es una casa que desarrolla proyectos de principio a fin. Entramos cuando una iniciativa necesita pasar de la idea a la forma, y conducimos el camino completo: entender, estructurar, ejecutar y comprobar el resultado.",
    },
    architectMetaphor: {
      title: "Trabajamos como arquitectos",
      body:
        "Un arquitecto no entrega el plano y desaparece. Diseña la estructura y responde por ella hasta que queda en pie. Así conducimos un proyecto: creamos la estructura que permite que todo lo demás suceda, y permanecemos hasta que sucede. El diseño y la obra son la misma responsabilidad, no dos etapas que se pasan de una mano a otra.",
    },
    mission: {
      title: "Misión",
      text: "Transformar iniciativas paralizadas en proyectos que suceden, con método, ritmo y propósito.",
    },
    vision: {
      title: "Visión",
      text: "Ser la casa detrás de los proyectos que cambian territorios, marcas y comunidades, en Brasil y fuera de él.",
    },
    // LOCKED — versao final dos 6 valores, frase por frase, travada no doc.
    values: {
      title: "Valores",
      subtitle: "Principios que nos mueven. Cada uno implica una elección que ya hicimos.",
      items: [
        { title: "Excelencia", description: "Buscamos ser y hacer mejor cada día." },
        {
          title: "Innovación",
          description: "Elegimos el camino nuevo aun cuando el obvio costaría menos.",
        },
        {
          title: "Método",
          description: "Una operación que depende de una persona no es una operación.",
        },
        { title: "Ejecución", description: "Entregamos lo que funciona, no lo que impresiona." },
        {
          title: "Impacto",
          description: "Si no se mide, no es impacto: es intención.",
        },
        { title: "Claridad", description: "No aceleramos lo que nadie entiende." },
      ],
    },
    forWhom: {
      title: "Para quién trabajamos",
      text: "Trabajamos donde el propósito y el resultado se encuentran: institutos, fundaciones, empresas en expansión, organizaciones culturales y creativas, y el sector público. Cada uno llega con un proyecto en mente y la misma necesidad: alguien que lo haga existir.",
      distinction:
        "Lo que nos distingue no es diagnosticar. Es conducir. Unimos el rigor de quien estructura con la mano de quien ejecuta, y entregamos proyectos pensados para funcionar después de que nos vamos.",
    },
    partnersTitle: "Nuestros socios",
    // LOCKED — fecho do manifesto travado no doc.
    manifesto: {
      title: "Manifiesto",
      paragraphs: [
        "Creemos que el mundo se mueve cuando las personas y las organizaciones recuperan la capacidad de imaginar, y de ejecutar. Es entre esas dos cosas, la idea y su realización, que existimos.",
        "La innovación no es un privilegio, es una herramienta. El impacto no es discurso, es resultado. Por eso construimos puentes entre la estrategia y la operación, entre la tecnología y las personas, entre quien decide y el territorio que necesita ser escuchado.",
      ],
      closing: "El futuro no se espera. El futuro se construye.",
    },
  },

  // LOCKED — titulo-tese travado no doc.
  consultoria: {
    hero: {
      eyebrow: "GESTIÓN DE PROYECTOS",
      title: "La responsabilidad que no se transfiere",
      intro:
        "La mayoría de los buenos proyectos no mueren por falta de una idea. Mueren por falta de quien los estructure, los conduzca y los lleve hasta el final. Ese es el papel que asumimos. Gestionamos el proyecto desde el diagnóstico inicial hasta la entrega, y seguimos siendo responsables de su conducción a lo largo de todas las etapas, no solo en la planificación.",
    },
    sections: [
      {
        title: "De principio a fin, junto a usted",
        body:
          "Estructuramos el proyecto, armamos el plan de trabajo, coordinamos los equipos de ejecución y acompañamos la entrega. Nuestro papel no se limita a la planificación inicial, ni a la ejecución aislada. Ambas etapas se conducen de forma integrada, porque la estructura sin ejecución no se realiza, y la ejecución sin estructura no se sostiene. Cuando el proyecto está establecido y opera de forma autónoma, concluimos nuestra participación.",
      },
      {
        title: "Cuando el camino fácil y el correcto no son el mismo",
        body:
          "Ante dos soluciones de costo equivalente, optamos por la más consistente, aunque exija más trabajo de nuestra parte. Esa elección no siempre es la más rápida, pero es la que sostiene el resultado en el tiempo. Es también lo que separa un proyecto que apenas cumple sus metas de uno que se convierte en una referencia para quien lo encargó.",
      },
      {
        title: "Dónde profundizamos",
        body:
          "Trabajamos con frecuencia en economía creativa, cultura y emprendimiento. En estos campos, la viabilidad pasa por leyes de incentivo y convocatorias públicas, donde la precisión técnica y formal determina si un proyecto es aprobado. Es donde nuestra experiencia en estructuración tiene el mayor efecto práctico.",
      },
    ],
    services: [
      {
        title: "Gestión de Proyectos",
        description: "Estructuración y conducción de proyectos desde el diagnóstico hasta la entrega.",
      },
      {
        title: "Inteligencia y Estrategia",
        description: "Diagnóstico, investigación y diseño de estrategia antes de la acción.",
      },
      {
        title: "Branding e Identidad",
        description: "Construcción de la identidad de marca, con contenido y storytelling.",
      },
      {
        title: "Gestión de Procesos de Negocio",
        description: "Diseño de procesos y gobernanza que sostienen la operación.",
      },
    ],
    // LOCKED — titulo-tese travado no doc.
    innovation: {
      eyebrow: "INNOVACIÓN",
      title: "La innovación no es un chispazo, es un método",
      intro:
        "Existe la idea de que la innovación nace de un chispazo, una idea mejor que surge de repente. Trabajamos desde lo contrario: innovar es construir metódicamente lo que aún no existe, y conducirlo hasta el prototipo o el negocio, no solo hasta la recomendación.",
      formats: [
        {
          title: "Design Sprints",
          description: "Programas cortos e intensivos que transforman un desafío en un prototipo comprobable en pocos días.",
        },
        {
          title: "Hackathons",
          description: "Maratones de desarrollo que reúnen equipos multidisciplinarios para construir soluciones reales en tiempo comprimido.",
        },
        {
          title: "Ideathons",
          description: "Sesiones estructuradas de generación y selección de ideas, del problema a la propuesta.",
        },
        {
          title: "Intraemprendimiento",
          description: "Programas que preparan equipos internos para conducir iniciativas con autonomía emprendedora.",
        },
      ],
    },
    // LOCKED — titulo travado no doc.
    creationMarcas: {
      eyebrow: "CREATION MARCAS",
      title: "Registrar antes es proteger primero",
      description:
        "Registro de marca ante el INPI y monitoreo continuo, integrados con la casa que construye la marca.",
      linkLabel: "Conocer Creation Marcas",
      href: "/creation-marcas",
    },
    forWhom:
      "Para organizaciones que ya tienen un proyecto en mente y necesitan a alguien que asuma la responsabilidad técnica de hacerlo realidad, desde institutos y productoras hasta empresas en expansión.",
  },

  // LOCKED — titulo-tese travado no doc ("Todo evento se define en la
  // operacion"). ES segue a estrutura PT (eventos na frente), sem o foco
  // EUA que so o EN carrega (doc: "sem foco EUA, isso e so do EN").
  producoes: {
    hero: {
      eyebrow: "PRODUCCIONES",
      title: "Todo evento se define en la operación",
      intro:
        "Un evento no se resuelve en la idea, se resuelve en la operación: los proveedores, el montaje, los permisos, el equipo y la logística del día. Asumimos esa operación desde la concepción hasta la ejecución en el lugar, y respondemos por el resultado de principio a fin.",
    },
    mediaGridTitle: "Algunos de los proyectos realizados",
    events: {
      title: "Eventos y Experiencias",
      intro:
        "Concebimos y producimos eventos y experiencias en vivo, reunidos bajo una sola operación en vez de dispersos entre proveedores.",
      categories: [
        {
          title: "Corporativo",
          description: "Convenciones, lanzamientos y eventos internos.",
          items: ["Convenciones", "Lanzamientos", "Celebraciones de equipo", "Eventos internos"],
        },
        {
          title: "Innovación",
          description: "Hackathons, sprints y demo days producidos como eventos.",
          items: ["Hackathons", "Design Sprints", "Ideathons", "Demo Days"],
        },
        {
          title: "Culturales",
          description: "Festivales, espectáculos, exposiciones y economía creativa.",
          items: ["Festivales", "Espectáculos", "Exposiciones"],
        },
        {
          title: "Institucionales y Sociales",
          description: "Eventos de impacto, seminarios y foros.",
          items: ["Eventos de impacto", "Seminarios", "Foros"],
        },
        {
          title: "Live Marketing y Activaciones",
          description: "Acciones de marca en vivo y experiencias.",
          items: ["Activaciones de marca", "Sampling", "Experiencias"],
        },
      ],
    },
    audiovisual: {
      title: "Audiovisual",
      intro:
        "Producimos contenido audiovisual desde la planificación hasta la entrega: dirección, equipo, equipamiento, locación y posproducción.",
      videoCaption: "Un ejemplo de nuestro trabajo en video.",
      items: [
        {
          title: "Web Content",
          description:
            "Videos pensados para el ritmo de las redes y canales digitales: formatos cortos, guionados para retener la atención en los primeros segundos, con entrega recurrente, no puntual.",
        },
        {
          title: "Short Films",
          description:
            "Piezas de mayor aliento, con guion y dirección propios, para contar una historia completa en pocos minutos: institucionales, de marca o documentales cortos.",
        },
        {
          title: "Campañas y Brand Content",
          description:
            "Producción publicitaria alineada con la campaña de marketing de la marca, del concepto al filme final, incluyendo los recortes para cada canal donde la campaña se difunde.",
        },
      ],
    },
    operational: {
      title: "Operativo",
      intro:
        "La capacidad de viabilizar una producción en el terreno, con la red y el conocimiento local que una producción de afuera no tiene.",
      fixer: {
        title: "Fixer",
        description:
          "Un fixer resuelve todo lo que una producción necesita en el terreno antes de que las cámaras enciendan: permisos, locación, seguridad, equipo y logística. Es la diferencia entre llegar y grabar, o llegar y perder días resolviendo lo que ya debería estar listo.",
        locationScoutHighlight:
          "Localizamos escenarios desde Río de Janeiro hasta la Costa Verde: metrópoli, playa y naturaleza tropical en un radio corto, lo que permite escenarios radicalmente distintos sin mover la operación.",
        items: [
          "Permisos y autorizaciones",
          "Location Scout",
          "Seguridad de set",
          "Alquiler de equipamiento",
          "Vehículos y transporte",
          "Equipo local",
          "Alojamiento y logística",
          "Story R&D e investigación",
        ],
      },
      hosting: {
        title: "Host y Receptivo",
        description:
          "Recibimos producciones que llegan desde fuera de Río de Janeiro, desde la llegada hasta el día a día en el set. Nos encargamos del alojamiento, el transporte, el montaje de una base de operaciones local y del contacto local durante toda la producción, de modo que el equipo que llega encuentra la logística ya resuelta, sin tener que gestionar proveedores a distancia.",
      },
    },
    creatorOpsRio: {
      eyebrow: "CREATION OPS RIO",
      title: "Producción ejecutiva en Río, para quienes vienen de afuera a crear",
      description:
        "Recepción, logística y producción local completa para content creators y marcas internacionales en Río de Janeiro.",
      linkLabel: "Conocer Creation Ops Rio",
      href: "/creator-ops-rio",
    },
    // LOCKED — titulo travado no doc.
    biEventos: {
      eyebrow: "BI DE EVENTOS",
      title: "Todo evento produce datos",
      description:
        "Panel completo de métricas del evento, como medidor externo independiente.",
      linkLabel: "Conocer el BI de Eventos",
      href: "/bi-de-eventos",
    },
    forWhom:
      "Para marcas, agencias y organizaciones que necesitan producir en Brasil y quieren una operación responsable de toda la entrega, desde el audiovisual hasta los eventos en vivo.",
  },

  // LOCKED — titulo-tese travado no doc.
  impactoSocial: {
    hero: {
      eyebrow: "IMPACTO SOCIAL",
      title: "Impacto que se construye",
      intro:
        "Los proyectos sociales suelen tener un propósito claro y una estructura frágil. Falta el diseño del programa, la gobernanza que lo sostiene y la medición que comprueba lo que se hizo. Ahí es donde actuamos. Estructuramos la iniciativa, conducimos la ejecución en el terreno y medimos el resultado, para que el impacto deje de ser intención y pase a ser una operación.",
    },
    sections: [
      {
        title: "De la intención a un programa que funciona",
        body:
          "Estructuramos fundaciones e institutos, diseñamos programas de impacto y conducimos proyectos sociales en el territorio. En algunos contratos entregamos el diseño y la organización opera; en otros, conducimos el día a día. Lo que se mantiene constante es la responsabilidad por la estructura, porque un buen programa social no depende de un esfuerzo aislado, sino de un modelo que se sostiene después de que nos vamos.",
      },
      {
        title: "El territorio en el centro, no en el margen",
        body:
          "Un proyecto social se sostiene cuando se construye con quienes viven el territorio, y no solo para ellos. Trabajamos con líderes locales, remuneramos a quienes participan y sometemos las decisiones a quienes conocen la realidad de cerca. Es el camino más exigente, y el único que produce un resultado que permanece después de que el proyecto termina.",
      },
    ],
    services: [
      {
        title: "Estructuración de ONGs",
        description: "Creación y estructuración de organizaciones sociales, del concepto a la captación.",
      },
      {
        title: "Programas de Impacto",
        description: "Diseño y conducción de programas sociales en el territorio.",
      },
      {
        title: "Informes de Impacto y ESG",
        description: "Medición y documentación del impacto, para rendición de cuentas y ESG.",
      },
      {
        title: "Gestión de Proyectos Sociales",
        description: "Coordinación y ejecución de proyectos sociales en el campo.",
      },
    ],
    // PT leve, conforme o doc (matchmaking forte so em EN).
    matchmaking: {
      title: "Un puente para quienes invierten en impacto",
      body:
        "Para quienes invierten en impacto social y necesitan un operador local que conozca el territorio, somos ese puente. Identificamos proyectos serios, estructuramos la operación en el terreno y medimos el retorno con datos reales.",
      strong: false,
    },
    ongZero: {
      eyebrow: "ONG.zero",
      title: "Construimos su ONG junto con usted",
      description:
        "Del concepto a la captación, construimos una ONG desde cero, junto con quien la idealiza, hasta que esté lista para operar.",
      linkLabel: "Conocer ONG.zero",
      href: "/ong-zero",
    },
    // LOCKED — titulo travado no doc.
    motorSroi: {
      eyebrow: "MOTOR SROI",
      title: "Mida el impacto social y compruebe su valor",
      description:
        "Cálculo de SROI e informes de impacto, para comprobar el retorno social con datos reales.",
      linkLabel: "Conocer el Motor SROI",
      href: "/motor-sroi",
    },
    cases: {
      title: "Casos",
      items: [],
    },
    forWhom:
      "Para institutos, fundaciones, empresas y financiadores que quieren estructurar la acción social en Brasil y comprobar el resultado que genera.",
  },

  // LOCKED — titulos travados no doc (secao "5 cases ES").
  cases: {
    title: "Casos",
    subtitle: "Lo que hicimos, y lo que quedó en pie.",
    items: [
      {
        eyebrow: "GESTIÓN DE PROYECTOS",
        title: "Cuatro ediciones, tres formatos",
        client: "Íons Innovation",
        problem:
          "Un hackathon de gran escala rara vez se repite igual, y Hacking.Rio llevó eso al límite: a lo largo de ediciones sucesivas, pasó de lo presencial a lo digital, y de lo digital al metaverso. Cada formato impone una operación propia, con reglas distintas de montaje, mediación y evaluación. El desafío no era producir un evento, sino sostener el mismo nivel de operación sobre estructuras técnicas que casi no tenían nada en común entre sí.",
        action:
          "Condujimos la Producción Ejecutiva de las ediciones, desde el montaje hasta la logística de proveedores, coordinando los equipos y la operación de cada formato de principio a fin. Con cada cambio de medio, rehicimos la operación a partir de las restricciones propias de ese formato, en vez de adaptar el modelo de la edición anterior, porque un evento presencial, un evento remoto y un ambiente en metaverso no se resuelven con la misma regla.",
        results: [
          { value: "4", label: "ediciones" },
          { value: "3", label: "formatos: presencial, digital, metaverso" },
          { value: "5.000+", label: "competidores en conjunto" },
          { value: "+170 mil", label: "personas alcanzadas" },
        ],
        support:
          "Eventos presenciales de gran escala, ediciones online y un ambiente en metaverso, con maratones de más de 40 horas por edición.",
        image: "/cases/hacking-rio.jpg",
      },
      {
        eyebrow: "GESTIÓN DE PROYECTOS",
        title: "El evento que nació de la interrupción",
        client: "Íons Innovation",
        problem:
          "A inicios de 2020, la preproducción de Hacking.Rio estaba en curso cuando la pandemia hizo inviable el evento presencial. En vez de suspender la operación y esperar, se decidió crear otra cosa: Hacking.Help, una maratón enteramente online, concebida y montada en el intervalo de semanas para reunir soluciones tecnológicas frente a la crisis.",
        action:
          "Participamos en la concepción del evento y condujimos la Producción Ejecutiva de principio a fin, desde la estructuración de la operación online hasta la coordinación de los equipos a lo largo de la maratón. Ante dos opciones de costo similar, adaptar el modelo presencial o rehacer la operación a partir de la restricción de cada etapa, optamos por la segunda, porque un evento remoto de 42 horas seguidas no perdona la improvisación.",
        results: [
          { value: "1.533", label: "competidores inscritos" },
          { value: "5", label: "países de habla portuguesa" },
          { value: "R$500 mil", label: "en medios ganados" },
        ],
        support:
          "Concebido y producido en semanas, en el primer momento de la pandemia. 42 horas seguidas de maratón online, 131 proyectos finalistas y más de 340 mentores. Cobertura en Forbes, G1, Band y BandNews.",
        image: "/cases/hacking-help.jpg",
      },
      {
        eyebrow: "EVENTOS",
        title: "Un foro internacional, montado en línea",
        client: "Íons Innovation",
        problem:
          "En 2020, reunir a ponentes de varios países en un foro de tecnología e innovación dejó de poder suceder de forma presencial. El desafío era mantener el alcance y la densidad de un evento internacional en un formato enteramente remoto, con programación en vivo y público disperso entre husos horarios y países.",
        action:
          "Condujimos la Producción Ejecutiva del foro online, desde la curaduría de la agenda hasta la operación de la transmisión en vivo. El programa reunió a ponentes globales en una maratón de contenido transmitida por canal abierto, estructurada para que la distancia no costara alcance.",
        results: [
          { value: "15.500", label: "inscritos" },
          { value: "172", label: "ponentes globales" },
          { value: "40h", label: "de contenido en vivo" },
        ],
        support: "FITI, Foro Internacional de Tecnología e Innovación, transmitido en vivo en 2020.",
        image: "/cases/hr-talks.jpg",
      },
      {
        eyebrow: "TERRITORIO",
        title: "Coordinar es estar en el territorio",
        client: "Rede Asta · Porto Sudeste",
        problem:
          "Un programa de generación de ingresos para mujeres emprendedoras en Itaguaí necesitaba funcionar en dos frentes a la vez: una escuela de negocios, con formación continua, y una temporada de ferias que pusiera los productos frente a compradores reales. Coordinar ambas exigía presencia constante en el territorio, articulación con las emprendedoras y una operación de campo que la distancia no resuelve.",
        action:
          "Asumimos la coordinación del proyecto en el territorio, conduciendo tanto la operación de la escuela de negocios como la realización de las ferias comerciales. La formación se acompañó de principio a fin, y los eventos de venta se planificaron y operaron junto a las emprendedoras, desde ferias mensuales hasta el Festival de Frutos del Mar y la Feria de Navidad. La coordinación se construyó con los líderes y artesanas locales, y no sobre ellas, porque un programa de territorio solo se sostiene cuando quienes viven allí lo conducen juntos.",
        results: [
          { value: "2", label: "frentes coordinados: escuela y ferias" },
          { value: "6", label: "eventos comerciales realizados" },
          { value: "R$19.649", label: "en ventas de las emprendedoras" },
        ],
        // Linha load-bearing (regra de ouro dos cases): nao apropriar a
        // medicao de impacto da Asta como se fosse da Creation.
        support:
          "Ferias mensuales, Festival de Frutos del Mar y Feria de Navidad, realizadas en el territorio de Itaguaí. Evaluación de impacto social conducida por Rede Asta.",
        image: "/cases/pertinho-de-casa.jpg",
      },
      {
        eyebrow: "TERRITORIO",
        title: "Una plataforma que crece al ritmo del territorio",
        client: "Rede Asta · Porto Sudeste",
        problem:
          "Una plataforma de ventas para pequeños emprendedores solo genera valor si de verdad se registran y venden a través de ella, y eso no sucede solo en un territorio sin un hábito digital consolidado. El desafío era sostener el crecimiento de registros y ventas trimestre a trimestre, sin que el ritmo dependiera de un único lanzamiento.",
        action:
          "Condujimos la captación de vendedores en el territorio, puerta a puerta y en ferias y eventos locales, y ayudamos a formar un Comité por la Economía Local con secretarías municipales, asociaciones comerciales e instituciones aliadas, para ampliar el apoyo institucional a la plataforma. Acompañamos y reportamos los números cada trimestre con honestidad, incluso cuando el crecimiento quedó por debajo de lo proyectado, y ajustamos la captación a partir de eso, en vez de inflar expectativas.",
        results: [
          { value: "241", label: "emprendedores registrados en la plataforma" },
          { value: "56", label: "barrios atendidos en Itaguaí y Seropédica" },
          { value: "R$30.650,11", label: "en facturación registrada hasta dic/2022" },
        ],
        support:
          "Seguimiento trimestral de registros y ventas en la plataforma, con crecimiento por debajo de la proyección inicial del proyecto. Evaluación de impacto social conducida por Rede Asta.",
        image: "/cases/pertinho-plataforma.jpg",
      },
      {
        eyebrow: "EVENTOS",
        title: "Tres días, dos espacios, un solo evento",
        client: "Centro Cultural Banco do Brasil RJ · 2023",
        problem:
          "Celebrar el Día Mundial de la Creatividad exigía realizar, en tres días y dos espacios distintos, una programación amplia y simultánea, presencial y con una capa online al mismo tiempo. El desafío estaba en la operación: coordinar escenarios, atracciones e invitados en lugares distintos, sin una estructura de producción dedicada montada de antemano.",
        action:
          "Asumimos el proyecto por completo, desde la concepción hasta la ejecución. Estructuramos la programación de los dos espacios, coordinamos los equipos y condujimos la realización a lo largo de los tres días, integrando lo presencial con una capa online que amplió el alcance más allá de la sala.",
        results: [
          { value: "1.000", label: "personas alcanzadas" },
          { value: "50+", label: "creadores en línea" },
          { value: "3 días", label: "en 2 espacios" },
        ],
        support:
          "9 paneles en vivo, 6 presentaciones artísticas, live painting y lanzamiento de libro, en el Parque da Catacumba y el CCBB Rio de Janeiro.",
        image: "/cases/world-creativity-day.jpg",
      },
    ],
  },

  creatorOpsRioPage: {
    eyebrow: "PRODUCCIÓN EJECUTIVA EN RÍO",
    title: "Creation Ops Rio",
    intro:
      "Producir en Río de Janeiro desde afuera cuesta tiempo y fricción: proveedores desconocidos, permisos, logística. Asumimos esa parte para que usted llegue y produzca.",
    experienceStatement:
      "Más de 15 años de experiencia en recepción y seguridad de dignatarios, organizaciones y grandes eventos.",
    whatChanges: {
      title: "Lo que cambia",
      before: [
        "Encontrar proveedores confiables a distancia",
        "Negociar permisos y licencias sin conocer el proceso local",
        "Coordinar alojamiento, transporte y equipo en husos horarios distintos",
      ],
      after: [
        "Un equipo local que ya resolvió esto antes",
        "Permisos y locaciones negociados por quien conoce el proceso",
        "Recepción completa: alojamiento, transporte y agenda organizados",
      ],
    },
    packages: {
      title: "Paquetes",
      subtitle: "Cada paquete atiende un tipo de operación distinto.",
      items: [
        {
          title: "Content Sprint",
          description: "Producción ágil para creadores, con equipo y equipamiento listos para grabar en pocos días.",
        },
        {
          title: "Brand Campaign",
          description: "Producción completa de campaña para marcas y agencias, del concepto a la entrega.",
        },
        {
          title: "Business Tourism VIP",
          description: "Recepción ejecutiva para viajes de negocios, con logística y agenda organizadas.",
        },
        {
          title: "Expatriados (próximamente)",
          description: "Apoyo de instalación para quienes se mudan a Río de Janeiro.",
        },
      ],
    },
    differentiator: {
      title: "Conocimiento local que no se improvisa",
      body:
        "Años de producción en Río de Janeiro significan una red de proveedores probada, conocimiento de los procesos de licenciamiento y una lectura real del territorio, el tipo de conocimiento que no se resuelve con una búsqueda rápida.",
    },
    howWeWork: {
      title: "Cómo trabajamos",
      body:
        "Seguimos el mismo Ciclo Completo de cualquier proyecto de Creation: entendemos el briefing, estructuramos la producción, ejecutamos en Río y cerramos con un informe de lo entregado.",
    },
    forWhom:
      "Para creadores, marcas y agencias internacionales que quieren producir en Río de Janeiro sin montar una operación desde cero.",
  },

  // LOCKED — titulo travado no doc.
  creationMarcasPage: {
    eyebrow: "MARCA",
    title: "Registrar antes es proteger primero",
    intro:
      "Una marca es de quien la registra primero. Cuanto más temprano el registro, menor el riesgo de que otra empresa reivindique el nombre antes que usted.",
    whyEarly: {
      title: "Por qué registrar temprano",
      body:
        "El derecho sobre una marca en Brasil nace del registro ante el INPI, no del uso. Esperar expone la marca al riesgo de que otra empresa la registre primero, aunque usted ya esté en el mercado.",
    },
    whatWeDo: {
      title: "Lo que hacemos",
      items: [
        {
          title: "Registro ante el INPI",
          description: "Solicitud de registro conducida de principio a fin, con seguimiento del proceso.",
        },
        {
          title: "Monitoreo continuo",
          description: "Seguimiento permanente para identificar intentos de registro conflictivos.",
        },
      ],
    },
    differentiator: {
      title: "Registrar con quien entiende de marca completa",
      body:
        "Además del registro, nos ocupamos de branding, identidad y contenido. Quien se ocupa del registro también entiende del resto de la marca, no solo del proceso jurídico.",
    },
    howItWorks: {
      title: "Cómo funciona",
      steps: [
        { title: "Consulta", description: "Verificación de disponibilidad de la marca en las clases relevantes." },
        { title: "Estrategia", description: "Definición de las clases y la estrategia de protección." },
        { title: "Solicitud", description: "Presentación de la solicitud de registro ante el INPI." },
        { title: "Seguimiento", description: "Monitoreo del proceso hasta la concesión del registro." },
      ],
    },
    forWhom:
      "Para empresas brasileñas y extranjeras que necesitan proteger la marca en Brasil, especialmente antes de expandir la operación en el país.",
  },

  ongZeroPage: {
    eyebrow: "ESTRUCTURACIÓN DE ONGS",
    title: "ONG.zero",
    intro: "Construimos la ONG junto con quien la idealiza. No entregamos algo listo para operar.",
    buildTogether: {
      title: "Construimos juntos, no entregamos algo hecho",
      body:
        "El fundador participa en cada etapa y sale capaz de conducir lo que se creó. Una organización que depende de Creation para existir no es una organización estructurada.",
    },
    stages: {
      title: "Las cinco etapas",
      items: [
        { title: "Concepto", description: "Definición de la causa, la tesis de impacto y el modelo de actuación." },
        { title: "Constitución", description: "Estatuto, registro y RUT: la parte jurídica de la fundación." },
        { title: "Organización", description: "Gobernanza, estructura interna y procesos." },
        {
          title: "Marca e Identidad",
          description: "Nombre, logo y narrativa, con apoyo de Creation Marcas cuando sea necesario.",
        },
        {
          title: "Captación y Sostenibilidad",
          description: "Convocatorias, donantes y leyes de incentivo, para que la organización se sostenga después del montaje.",
        },
      ],
    },
    forWhom: "Para quienes están estructurando una ONG, fundación o instituto desde cero.",
  },

  // LOCKED — titulo travado no doc.
  motorSroiPage: {
    eyebrow: "INTELIGENCIA",
    title: "Mida el impacto social y compruebe su valor",
    intro:
      "El Motor SROI calcula el retorno social de su proyecto con datos primarios y metodología auditable, y transforma esos datos en un informe presentable.",
    functions: {
      title: "Lo que hace el Motor SROI hoy",
      items: [
        {
          title: "Cálculo de SROI",
          description: "Retorno social calculado a partir de datos primarios, con metodología auditable.",
        },
        {
          title: "Informes de Impacto",
          description: "El dato se convierte en documento presentable para rendición de cuentas y captación.",
        },
      ],
    },
    whyRealData: {
      title: "Por qué medir con datos reales",
      body:
        "Los números ficticios no sobreviven a la primera pregunta de un inversor o socio. Por eso el Motor SROI trabaja solo con datos primarios, recolectados en el propio proyecto.",
    },
    forWhom:
      "Para institutos, fundaciones y empresas que necesitan comprobar, con metodología auditable, el retorno social de sus proyectos.",
  },

  // LOCKED — titulo travado no doc.
  biEventosPage: {
    eyebrow: "INTELIGENCIA",
    title: "Todo evento produce datos",
    intro:
      "El evento sucede una vez, pero los datos que produce pueden informar los siguientes. Hoy, esos datos suelen perderse dispersos entre distintos proveedores; el BI de Eventos los reúne todos en un solo panel.",
    whatWeMeasure: {
      title: "Lo que medimos",
      body:
        "Público y flujo, engagement, retorno y repercusión, y desempeño por área. Un instrumento de decisión, no un informe descriptivo.",
    },
    externalRead: {
      title: "Un medidor externo e independiente",
      body:
        "No exigimos haber producido el evento para medirlo. Es una lectura de quien no necesita demostrar su propio trabajo, el tipo de imparcialidad que da credibilidad al número.",
    },
    forWhom: "Para organizadores, patrocinadores y marcas que quieren saber, con datos, qué funcionó en el evento.",
  },

  contact: {
    title: "Hablemos",
    description:
      "Cuéntenos lo que necesita lograr. Respondemos con el camino para hacerlo realidad.",
    form: {
      name: "Nombre",
      namePlaceholder: "Su nombre",
      email: "Correo electrónico",
      emailPlaceholder: "usted@email.com",
      organization: "Organización",
      organizationPlaceholder: "Su organización",
      projectType: "Tipo de proyecto",
      projectTypePlaceholder: "Seleccione un área",
      projectTypes: [
        "Consultoría y Gestión de Proyectos",
        "Innovación",
        "Producciones y Eventos",
        "Audiovisual",
        "Impacto Social",
        "Creation Ops Rio",
        "Creation Marcas",
        "ONG.zero",
        "Otro",
      ],
      message: "Mensaje",
      messagePlaceholder: "Cuéntenos sobre su proyecto",
      submit: "Enviar",
      sending: "Enviando...",
    },
    aside: {
      title: "Hable con Creation",
      subtitle: "Respondemos en un día hábil.",
      alternativesTitle: "O contáctenos directamente",
      email: "contato@creation-pro.com",
      whatsapp: "WhatsApp",
      whatsappNumber: "+55 21 99917-6231",
      note: "Atendemos en Brasil y Estados Unidos.",
    },
  },

  footer: {
    description: "Pensamos y realizamos proyectos innovadores.",
    locations: "Brasil | Estados Unidos",
    companyTitle: "Creation",
    companyLinks: [
      { label: "Nosotros", href: "/quem-somos" },
      { label: "Método", href: "/metodo" },
      { label: "Contacto", href: "/contato" },
    ],
    solutionsTitle: "Áreas",
    solutionsLinks: [
      { label: "Consultoría", href: "/consultoria" },
      { label: "Producciones", href: "/producoes" },
      { label: "Impacto Social", href: "/impacto-social" },
      { label: "Creation Ops Rio", href: "/creator-ops-rio" },
      { label: "Creation Marcas", href: "/creation-marcas" },
      { label: "ONG.zero", href: "/ong-zero" },
    ],
    copyright: "Creation Produções LTDA. Todos los derechos reservados.",
  },
};