import type { Content } from "./types";

export const en: Content = {
  brand: {
    name: "Creation",
    microcopy: "Clarity. Rhythm. Execution.",
    footerTagline: "We think and build innovative projects.",
    locations: "Brazil | United States",
  },

  nav: {
    home: "Home",
    consultoria: "Consulting",
    producoes: "Productions",
    impactoSocial: "Social Impact",
    method: "Method",
    about: "About",
    contact: "Contact",
    areasLabel: "Areas",
    companyLabel: "Creation",
  },

  cta: {
    primary: "Book a call",
    secondary: "See the Method",
    href: "/contato",
    methodHref: "/metodo",
  },

  labels: {
    caseProblem: "What was at stake",
    caseAction: "What we did",
    forWhom: "Who it's for",
    seeMethod: "See the method",
  },

  // LOCKED — frase-mae, fechada no doc.
  hero: {
    headline: "We think and build innovative projects.",
    subheadline:
      "We develop projects from start to finish: we understand the problem, structure the solution, execute it and prove the result.",
  },

  areas: {
    title: "What we do",
    subtitle: "Three areas of practice, one method behind them all.",
    items: [
      {
        eyebrow: "Consulting",
        title: "Project Management and Innovation",
        description:
          "We structure and lead projects from diagnosis to delivery, with innovation as method.",
        href: "/consultoria",
        linkLabel: "See Consulting",
      },
      {
        eyebrow: "Productions",
        title: "Events and Audiovisual",
        description:
          "We produce events, experiences and audiovisual content, from concept to execution on site.",
        href: "/producoes",
        linkLabel: "See Productions",
      },
      {
        eyebrow: "Social Impact",
        title: "Structure, measure, prove",
        description:
          "We structure social initiatives in the field and prove the impact they generate.",
        href: "/impacto-social",
        linkLabel: "See Social Impact",
      },
    ],
  },

  // LOCKED — Full Cycle / Diagnosis / Structuring / Execution / Validation (doc).
  method: {
    badge: "METHOD",
    title: "Full Cycle",
    intro:
      "Every project we lead follows the same path, whether it's an event, a consulting engagement, a social program or an innovation initiative. There are four stages, from understanding to proof.",
    stages: [
      {
        number: "01",
        name: "Diagnosis",
        tagline: "understand before acting",
        description:
          "Before proposing anything, we understand the problem, the context and what the project needs to achieve. The initial request is often not the real problem, and that difference surfaces during diagnosis.",
      },
      {
        number: "02",
        name: "Structuring",
        tagline: "design the plan",
        description:
          "With the problem understood, we design the plan: scope, governance, teams and how to measure the result. When there's an obvious path and a more consistent one, this is where we choose the latter, even when it demands more of us.",
      },
      {
        number: "03",
        name: "Execution",
        tagline: "do the work",
        description:
          "We lead the delivery from end to end. We don't hand over the plan and leave: we do the work, coordinate and remain accountable for the result until the project happens.",
      },
      {
        number: "04",
        name: "Validation",
        tagline: "measure, show",
        description:
          "A project doesn't end when it happens, but when what it generated is proven. We measure and document the result, and that's what closes the cycle and informs the next diagnosis.",
      },
    ],
    loopNote:
      "The proof of one project feeds the diagnosis of the next. That's why it's a cycle, not a line.",
  },

  targetAudience: {
    title: "Who we work with",
    subtitle: "Where purpose and results meet.",
    audiences: [
      {
        title: "Institutes and foundations",
        description: "That need to structure programs and prove impact.",
      },
      {
        title: "Expanding businesses",
        description: "That need structure to execute with clarity.",
      },
      {
        title: "Cultural and creative organizations",
        description: "That need to get projects off the ground and raise funding.",
      },
      {
        title: "Public sector and brands",
        description: "That need an operation accountable for the entire delivery.",
      },
    ],
  },

  about: {
    // LOCKED — titulo travado no doc.
    hero: {
      title: "We develop projects and make them happen",
      subtitle:
        "Creation is a house that develops projects from start to finish. We step in when an initiative needs to move from idea to shape, and we lead the whole path: understand, structure, execute and prove the result.",
    },
    architectMetaphor: {
      title: "We work like architects",
      body:
        "An architect doesn't hand over the blueprint and disappear. They design the structure and answer for it until it stands. That's how we lead a project: we create the structure that lets everything else happen, and we stay until it does. The design and the build are the same responsibility, not two stages handed off from one team to another.",
    },
    mission: {
      title: "Mission",
      text: "To turn stalled initiatives into projects that happen, with method, rhythm and purpose.",
    },
    vision: {
      title: "Vision",
      text: "To be the house behind the projects that change territories, brands and communities, in Brazil and beyond.",
    },
    // DRAFT — traducao das 6 frases travadas em PT (nomes dos valores: doc
    // confirma Excellence/Innovation/Method/Execution/Impact/Clarity).
    values: {
      title: "Values",
      subtitle: "Principles that move us. Each one implies a choice we've already made.",
      items: [
        { title: "Excellence", description: "We strive to be and do better every day." },
        {
          title: "Innovation",
          description: "We choose the new path even when the obvious one would cost less.",
        },
        {
          title: "Method",
          description: "An operation that depends on one person is not an operation.",
        },
        { title: "Execution", description: "We deliver what runs, not what impresses." },
        {
          title: "Impact",
          description: "If it isn't measured, it isn't impact: it's intention.",
        },
        { title: "Clarity", description: "We don't accelerate what nobody understands." },
      ],
    },
    forWhom: {
      title: "Who we work with",
      text: "We work where purpose and results meet: institutes, foundations, expanding businesses, cultural and creative organizations, and the public sector. Each one arrives with a project in mind and the same need: someone to make it real.",
      distinction:
        "What sets us apart isn't diagnosing. It's leading. We combine the rigor of those who structure with the hand of those who execute, and we deliver projects built to keep working after we leave.",
    },
    partnersTitle: "Our partners",
    // LOCKED — fecho do manifesto travado no doc.
    manifesto: {
      title: "Manifesto",
      paragraphs: [
        "We believe the world moves when people and organizations regain the ability to imagine, and to execute. It's between those two things, the idea and its realization, that we exist.",
        "Innovation is not a privilege, it's a tool. Impact is not rhetoric, it's a result. That's why we build bridges between strategy and operation, between technology and people, between those who decide and the territory that needs to be heard.",
      ],
      closing: "The future is not awaited. The future is built.",
    },
  },

  // LOCKED — titulo-tese travado no doc.
  consultoria: {
    hero: {
      eyebrow: "PROJECT MANAGEMENT",
      title: "The responsibility that cannot be handed off",
      intro:
        "Most good projects don't die from lack of an idea. They die from lack of someone to structure them, lead them and carry them through to the end. That's the role we take on. We manage the project from initial diagnosis to delivery, and we stay accountable for leading it through every stage, not just the planning.",
    },
    sections: [
      {
        title: "End to end, with us alongside you",
        body:
          "We structure the project, build the work plan, coordinate the execution teams and follow through to delivery. Our role isn't limited to initial planning, nor to isolated execution. Both stages are led together, because structure without execution doesn't happen, and execution without structure doesn't hold. When the project is established and runs on its own, we conclude our part.",
      },
      {
        title: "When the easy path and the right one aren't the same",
        body:
          "Faced with two solutions of equal cost, we choose the more consistent one, even when it takes more work on our part. That choice isn't always the fastest, but it's the one that holds up over time. It's also what separates a project that merely meets its goals from one that becomes a reference for whoever commissioned it.",
      },
      {
        title: "Where we go deeper",
        body:
          "We work frequently in the creative economy, culture and entrepreneurship. In these fields, viability runs through incentive laws and public grants, where technical and formal precision decides whether a project gets approved. It's where our structuring experience has the greatest practical effect.",
      },
    ],
    services: [
      {
        title: "Project Management",
        description: "Structuring and leading projects from diagnosis to delivery.",
      },
      {
        title: "Intelligence and Strategy",
        description: "Diagnosis, research and strategy design before any action.",
      },
      {
        title: "Branding and Identity",
        description: "Building brand identity, with content and storytelling.",
      },
      {
        title: "Business Process Management",
        description: "Designing operational processes and governance that sustain the operation.",
      },
    ],
    // LOCKED — titulo-tese travado no doc.
    innovation: {
      eyebrow: "INNOVATION",
      title: "Innovation is not a spark, it is a method",
      intro:
        "There's a belief that innovation comes from a spark, a better idea that suddenly appears. We work from the opposite premise: innovating means methodically building what doesn't exist yet, and carrying it through to a prototype or a business, not just a recommendation.",
      formats: [
        {
          title: "Design Sprints",
          description: "Short, intensive programs that turn a challenge into a testable prototype in a few days.",
        },
        {
          title: "Hackathons",
          description: "Development marathons that bring multidisciplinary teams together to build real solutions in compressed time.",
        },
        {
          title: "Ideathons",
          description: "Structured sessions to generate and select ideas, from problem to proposal.",
        },
        {
          title: "Intrapreneurship",
          description: "Programs that prepare internal teams to lead initiatives with entrepreneurial autonomy.",
        },
      ],
    },
    // LOCKED — titulo travado no doc.
    creationMarcas: {
      eyebrow: "CREATION MARCAS",
      title: "Registering early is protecting first",
      description:
        "Trademark registration with INPI and continuous monitoring, integrated with the house that builds the brand.",
      linkLabel: "Learn about Creation Marcas",
      href: "/creation-marcas",
    },
    forWhom:
      "For organizations that already have a project in mind and need someone to take on the technical responsibility of making it real, from institutes and production companies to expanding businesses.",
  },

  // LOCKED — titulo-tese travado no doc ("Production holds up on the ground").
  // Unica frente que opera fisicamente nos EUA (equipe local la); a prosa
  // carrega esse recorte Brasil+EUA, mesmo sem reordenar a estrutura do
  // componente (Eventos continua antes de Audiovisual na renderizacao).
  producoes: {
    hero: {
      eyebrow: "PRODUCTIONS",
      title: "Production holds up on the ground",
      intro:
        "An event isn't settled by the idea, it's settled by the production: the vendors, the build, the permits, the crew and the logistics of the day. We take on that production from concept to on-site execution, in Brazil and in the United States, and we answer for the result from start to finish.",
    },
    mediaGridTitle: "Some of the projects we've delivered",
    events: {
      title: "Events and Experiences",
      intro:
        "We conceive and produce live events and experiences, brought together under one operation instead of scattered across vendors.",
      categories: [
        {
          title: "Corporate",
          description: "Conventions, launches and internal events.",
          items: ["Conventions", "Launches", "Team celebrations", "Internal events"],
        },
        {
          title: "Innovation",
          description: "Hackathons, sprints and demo days produced as events.",
          items: ["Hackathons", "Design Sprints", "Ideathons", "Demo Days"],
        },
        {
          title: "Cultural",
          description: "Festivals, shows, exhibitions and the creative economy.",
          items: ["Festivals", "Shows", "Exhibitions"],
        },
        {
          title: "Institutional and Social",
          description: "Impact events, seminars and forums.",
          items: ["Impact events", "Seminars", "Forums"],
        },
        {
          title: "Live Marketing and Activations",
          description: "Live brand actions and experiences.",
          items: ["Brand activations", "Sampling", "Experiences"],
        },
      ],
    },
    audiovisual: {
      title: "Audiovisual",
      intro:
        "We produce audiovisual content from planning to delivery: direction, crew, equipment, location and post-production, in Brazil and in the United States.",
      videoCaption: "An example of our work on video.",
      items: [
        {
          title: "Web Content",
          description:
            "Videos built for the pace of social and digital channels: short formats, scripted to hold attention in the first seconds, delivered on a recurring cadence rather than as one-off pieces.",
        },
        {
          title: "Short Films",
          description:
            "Longer-form pieces with their own script and direction, telling a complete story in a few minutes: institutional films, brand films or short documentaries.",
        },
        {
          title: "Campaigns and Brand Content",
          description:
            "Advertising production aligned with the brand's marketing campaign, from concept to final film, including the cuts for each channel where the campaign runs.",
        },
      ],
    },
    operational: {
      title: "Operational",
      intro:
        "The ability to make a production happen on the ground, with the local network and knowledge that an out-of-town production doesn't have.",
      fixer: {
        title: "Fixer",
        description:
          "A fixer handles everything a production needs on the ground before the cameras roll: permits, locations, security, crew and logistics. It's the difference between arriving to shoot and arriving to spend days sorting out what should already be in place.",
        locationScoutHighlight:
          "We scout locations from Rio de Janeiro to the Costa Verde: metropolis, beach and tropical nature within a short radius, allowing radically different backdrops without moving the production.",
        locationGridLabel: "Some of the locations we've mapped",
        items: [
          "Permits and legal",
          "Location Scout",
          "Set security",
          "Equipment rental",
          "Vehicles and transport",
          "Local crew",
          "Accommodation and logistics",
          "Story R&D and research",
        ],
      },
      hosting: {
        title: "Host and Reception",
        description:
          "We receive productions coming from outside Rio de Janeiro, from arrival through the day-to-day on set. We handle accommodation, transport, setting up a local operations base, and stay as the local point of contact throughout the production, so the crew that arrives finds the logistics already handled, with no vendor to manage from a distance.",
      },
    },
    creatorOpsRio: {
      eyebrow: "CREATION OPS RIO",
      title: "Executive production in Rio, for those coming from outside to create",
      description:
        "Reception, logistics and complete local production for content creators and international brands in Rio de Janeiro.",
      linkLabel: "Learn about Creation Ops Rio",
      href: "/creator-ops-rio",
    },
    // LOCKED — titulo travado no doc.
    biEventos: {
      eyebrow: "BI FOR EVENTS",
      title: "Every event produces data",
      description:
        "A complete dashboard of event metrics, as an independent external measure.",
      linkLabel: "Learn about BI for Events",
      href: "/bi-de-eventos",
    },
    forWhom:
      "For brands, agencies and organizations that need to produce in Brazil or in the United States and want a single operation accountable for the entire delivery, from audiovisual to live events.",
  },

  // LOCKED — titulo-tese travado no doc.
  impactoSocial: {
    hero: {
      eyebrow: "SOCIAL IMPACT",
      title: "Impact that is built with the territory",
      intro:
        "Social projects tend to have clear purpose and fragile structure. What's missing is the program design, the governance that sustains it, and the measurement that proves what was done. That's where we come in. We structure the initiative, lead the execution on the ground, and measure the result, so impact stops being intention and becomes an operation.",
    },
    sections: [
      {
        title: "From intention to a program that works",
        body:
          "We structure foundations and institutes, design impact programs, and lead social projects on the ground. In some engagements we deliver the design and the organization runs it; in others, we lead the day to day. What stays constant is the responsibility for the structure, because a good social program doesn't depend on isolated effort, but on a model that holds up after we leave.",
      },
      {
        title: "The territory at the center, not the margin",
        body:
          "A social project holds up when it's built with the people who live in the territory, not just for them. We work with local leaders, we pay everyone who takes part, and we submit decisions to the people who know the reality up close. It's the more demanding path, and the only one that produces a result that remains after the project ends.",
      },
    ],
    services: [
      {
        title: "NGO Structuring",
        description: "Creating and structuring social organizations, from concept to fundraising.",
      },
      {
        title: "Impact Programs",
        description: "Designing and leading social programs on the ground.",
      },
      {
        title: "Impact and ESG Reports",
        description: "Measuring and documenting impact, for accountability and ESG.",
      },
      {
        title: "Social Project Management",
        description: "Coordinating and executing social projects in the field.",
      },
    ],
    // Secao forte em EN (strong: true), conforme o doc: "A local operator
    // for those investing from abroad". Impacto NAO opera nos EUA; e a
    // ponte local no Brasil para quem investe de fora.
    matchmaking: {
      title: "A local operator for those investing from abroad",
      body:
        "For those who invest in social impact and need a local operator who knows the territory, we are that bridge. We identify serious projects, structure the operation on the ground in Brazil, and measure the return with real data.",
      strong: true,
    },
    ongZero: {
      eyebrow: "ONG.zero",
      title: "We build your NGO together with you",
      description:
        "From concept to fundraising, we build an NGO from the ground up, together with the person behind it, until it's ready to run.",
      linkLabel: "Learn about ONG.zero",
      href: "/ong-zero",
    },
    // LOCKED — titulo travado no doc.
    motorSroi: {
      eyebrow: "SROI ENGINE",
      title: "Measure your social impact and prove its value",
      description:
        "SROI calculation and impact reports, to prove social return with real data.",
      linkLabel: "Learn about the SROI Engine",
      href: "/motor-sroi",
    },
    cases: {
      title: "Cases",
      items: [],
    },
    forWhom:
      "For institutes, foundations, companies and funders who want to structure social action in Brazil and prove the results it generates.",
  },

  // LOCKED — titulos e numeros travados no doc (secao "5 cases EN").
  cases: {
    title: "Cases",
    subtitle: "What we did, and what held up.",
    items: [
      {
        eyebrow: "PROJECT MANAGEMENT",
        title: "Four editions, three formats",
        client: "Íons Innovation",
        problem:
          "A large-scale hackathon rarely repeats itself the same way twice, and Hacking.Rio took that to the limit: across successive editions, it moved from in-person to digital, and from digital to the metaverse. Each format demands its own operation, with different rules for build, mediation and judging. The challenge wasn't producing an event, it was sustaining the same level of operation on technical structures that had almost nothing in common with one another.",
        action:
          "We led the Executive Production of the editions, from build to vendor logistics, coordinating teams and the operation of each format end to end. With every shift in medium, we rebuilt the operation from that format's own constraints, instead of adapting the previous edition's model, because an in-person event, a remote event and a metaverse environment don't get solved with the same ruler. It's the decision that costs more hours of preparation and never shows up on stage, but it's what keeps the experience at the right level when the ground shifts with every edition.",
        results: [
          { value: "4", label: "editions" },
          { value: "3", label: "formats: in-person, digital, metaverse" },
          { value: "5,000+", label: "competitors combined" },
          { value: "+170k", label: "people reached" },
        ],
        support:
          "Large-scale in-person events, online editions and a metaverse environment, with marathons of more than 40 hours per edition.",
        image: "/cases/hacking-rio.jpg",
      },
      {
        eyebrow: "PROJECT MANAGEMENT",
        title: "The event born from the interruption",
        client: "Íons Innovation",
        problem:
          "In early 2020, pre-production for Hacking.Rio was already underway when the pandemic ruled out the in-person event. Instead of suspending the operation and waiting, the decision was to build something else: Hacking.Help, a fully online marathon conceived and assembled within weeks to bring technology solutions to bear on the crisis. The challenge was running a large-scale hackathon in a format nobody had yet, with teams, mentors and judges all at once, on a platform that had to be built for the moment.",
        action:
          "We took part in conceiving the event and led the Executive Production end to end, from structuring the online operation to coordinating teams throughout the marathon. The program was built around a dedicated digital platform, with video conference rooms for mentoring, ambience and the judging phases. Facing two options of similar cost, adapting the in-person model or rebuilding the operation from each stage's own constraint, we chose the latter, because a 42-hour straight remote event doesn't forgive improvisation.",
        results: [
          { value: "1,533", label: "registered competitors" },
          { value: "5", label: "Portuguese-speaking countries" },
          { value: "R$500k", label: "in earned media" },
        ],
        support:
          "Conceived and produced within weeks, in the first moment of the pandemic. 42 straight hours of online marathon, 131 finalist projects and more than 340 mentors. Coverage in Forbes, G1, Band and BandNews.",
        image: "/cases/hacking-help.jpg",
      },
      {
        eyebrow: "EVENTS",
        title: "An international forum, built online",
        client: "Íons Innovation",
        problem:
          "In 2020, bringing speakers from several countries together for a technology and innovation forum stopped being possible in person. The challenge was keeping the reach and depth of an international event in a fully remote format, with live programming and an audience spread across time zones and countries.",
        action:
          "We led the Executive Production of the online forum, from curating the lineup to running the live broadcast. The program brought global speakers together in a content marathon broadcast on open channels, structured so that distance wouldn't cost reach.",
        results: [
          { value: "15,500", label: "registrations" },
          { value: "172", label: "global speakers" },
          { value: "40h", label: "of live content" },
        ],
        support: "FITI, the International Technology and Innovation Forum, broadcast live in 2020.",
        image: "/cases/hr-talks.jpg",
      },
      {
        eyebrow: "TERRITORY",
        title: "To coordinate is to be in the territory",
        client: "Rede Asta · Porto Sudeste",
        problem:
          "An income-generation program for women entrepreneurs in Itaguaí needed to run on two fronts at once: a business school, with ongoing training, and a season of fairs putting products in front of real buyers. Coordinating both required a constant presence in the territory, close work with the entrepreneurs, and a field operation that distance can't solve.",
        action:
          "We took on the coordination of the project in the territory, leading both the business school's operation and the commercial fairs. Training was followed end to end, and sales events were planned and run alongside the entrepreneurs, from monthly fairs to the Seafood Festival and the Christmas Fair. Coordination was built with local leaders and craftswomen, not over them, because a territory program only holds up when the people who live there lead it together.",
        results: [
          { value: "2", label: "fronts coordinated: school and fairs" },
          { value: "6", label: "commercial events held" },
          { value: "R$19,649", label: "in sales for the entrepreneurs" },
        ],
        // Linha load-bearing (regra de ouro dos cases): nao apropriar a
        // medicao de impacto da Asta como se fosse da Creation.
        support:
          "Monthly fairs, the Seafood Festival and the Christmas Fair, held in the Itaguaí territory. Social impact evaluation conducted by Rede Asta.",
        image: "/cases/pertinho-de-casa.jpg",
      },
      {
        eyebrow: "TERRITORY",
        title: "A platform that grows at the territory's pace",
        client: "Rede Asta · Porto Sudeste",
        problem:
          "A sales platform for small entrepreneurs only creates value if they actually register and sell through it, and that doesn't happen on its own in a territory without an established digital habit. The challenge was sustaining registration and sales growth quarter over quarter, without the pace depending on a single launch moment.",
        action:
          "We ran seller recruitment on the ground, door to door and at local fairs and events, and helped form a Local Economy Committee with municipal offices, business associations and partner institutions to broaden institutional support for the platform. We tracked and reported the numbers honestly every quarter, including when growth fell short of projections, and adjusted outreach from that rather than inflating expectations.",
        results: [
          { value: "241", label: "sellers registered on the platform" },
          { value: "56", label: "neighborhoods reached across Itaguaí and Seropédica" },
          { value: "R$30,650.11", label: "in revenue recorded through Dec/2022" },
        ],
        support:
          "Quarterly tracking of platform registrations and sales, with growth below the project's initial projection. Social impact evaluation conducted by Rede Asta.",
        image: "/cases/pertinho-plataforma.jpg",
      },
      {
        eyebrow: "EVENTS",
        title: "Three days, two venues, one event",
        client: "Centro Cultural Banco do Brasil RJ · 2023",
        problem:
          "Celebrating World Creativity Day meant delivering, across three days and two different venues, a broad program running simultaneously in person and with an online layer. The challenge was in the operation: coordinating stages, acts and guests across separate locations, with no dedicated production structure set up beforehand.",
        action:
          "We took on the project in full, from concept to execution. We structured the program across both venues, coordinated the teams, and led the run of show over the three days, pairing the in-person event with an online layer that extended reach beyond the room.",
        results: [
          { value: "1,000", label: "people reached" },
          { value: "50+", label: "online creators" },
          { value: "3 days", label: "across 2 venues" },
        ],
        support:
          "9 live panels, 6 artistic performances, live painting and a book launch, at Parque da Catacumba and CCBB Rio de Janeiro.",
        image: "/cases/world-creativity-day.jpg",
      },
    ],
  },

  creatorOpsRioPage: {
    eyebrow: "EXECUTIVE PRODUCTION IN RIO",
    title: "Creation Ops Rio",
    intro:
      "Producing in Rio de Janeiro from outside costs time and friction: unfamiliar vendors, permits, logistics. We take that part on so you can arrive and produce.",
    experienceStatement:
      "15+ years of experience in reception and security for dignitaries, organizations and large-scale events.",
    whatChanges: {
      title: "What changes",
      before: [
        "Finding trustworthy vendors from a distance",
        "Negotiating permits and licenses without knowing the local process",
        "Coordinating accommodation, transport and crew across time zones",
      ],
      after: [
        "A local team that has solved this before",
        "Permits and locations negotiated by people who know the process",
        "Full reception: accommodation, transport and schedule handled",
      ],
    },
    packages: {
      title: "Packages",
      subtitle: "Each package fits a different kind of operation.",
      items: [
        {
          title: "Content Sprint",
          description: "Agile production for creators, with crew and equipment ready to shoot within days.",
        },
        {
          title: "Brand Campaign",
          description: "Full campaign production for brands and agencies, from concept to delivery.",
        },
        {
          title: "Business Tourism VIP",
          description: "Executive reception for business trips, with logistics and schedule handled.",
        },
        {
          title: "Expatriates (coming soon)",
          description: "Settling-in support for those relocating to Rio de Janeiro.",
        },
      ],
    },
    differentiator: {
      title: "Local knowledge that can't be improvised",
      body:
        "Years of production in Rio de Janeiro mean a tested vendor network, knowledge of licensing processes, and a real read on the territory, the kind of knowledge a quick search doesn't solve.",
    },
    howWeWork: {
      title: "How we work",
      body:
        "We follow the same Full Cycle as any Creation project: we understand the brief, structure the production, execute in Rio, and close with a report of what was delivered.",
    },
    forWhom:
      "For creators, brands and international agencies who want to produce in Rio de Janeiro without building an operation from scratch.",
  },

  // LOCKED — titulo travado no doc.
  creationMarcasPage: {
    eyebrow: "BRAND",
    title: "Registering early is protecting first",
    intro:
      "A brand belongs to whoever registers it first. The earlier the registration, the lower the risk of another company claiming the name before you.",
    whyEarly: {
      title: "Why register early",
      body:
        "Trademark rights in Brazil are born from registration with INPI, not from use. Waiting exposes the brand to the risk of another company registering it first, even if you're already in the market.",
    },
    whatWeDo: {
      title: "What we do",
      items: [
        {
          title: "INPI Registration",
          description: "The registration application handled from start to finish, with process follow-up.",
        },
        {
          title: "Continuous Monitoring",
          description: "Ongoing monitoring to identify conflicting registration attempts.",
        },
      ],
    },
    differentiator: {
      title: "Registering with people who understand the whole brand",
      body:
        "Beyond registration, we handle branding, identity and content. Whoever handles the registration also understands the rest of the brand, not just the legal process.",
    },
    howItWorks: {
      title: "How it works",
      steps: [
        { title: "Search", description: "Checking brand availability across the relevant classes." },
        { title: "Strategy", description: "Defining the classes and the protection strategy." },
        { title: "Filing", description: "Filing the registration application with INPI." },
        { title: "Follow-up", description: "Monitoring the process through to registration approval." },
      ],
    },
    forWhom:
      "For Brazilian and foreign companies that need to protect their brand in Brazil, especially before expanding operations in the country.",
  },

  ongZeroPage: {
    eyebrow: "NGO STRUCTURING",
    title: "ONG.zero",
    intro: "We build the NGO together with the person behind it. We don't hand over something ready-made to run.",
    buildTogether: {
      title: "We build together, we don't hand over ready-made",
      body:
        "The founder takes part in every stage and comes out able to lead what was created. An organization that depends on Creation to exist is not a structured organization.",
    },
    stages: {
      title: "The five stages",
      items: [
        { title: "Concept", description: "Defining the cause, the theory of impact and the operating model." },
        { title: "Formation", description: "Bylaws, registration and tax ID: the legal side of the foundation." },
        { title: "Organization", description: "Governance, internal structure and processes." },
        {
          title: "Brand and Identity",
          description: "Name, logo and narrative, with Creation Marcas support when needed.",
        },
        {
          title: "Fundraising and Sustainability",
          description: "Grants, donors and incentive laws, so the organization sustains itself after setup.",
        },
      ],
    },
    forWhom: "For those structuring an NGO, foundation or institute from the ground up.",
  },

  // LOCKED — titulo travado no doc.
  motorSroiPage: {
    eyebrow: "INTELLIGENCE",
    title: "Measure your social impact and prove its value",
    intro:
      "The SROI Engine calculates your project's social return using primary data and an auditable methodology, and turns that data into a presentable report.",
    functions: {
      title: "What the SROI Engine does today",
      items: [
        {
          title: "SROI Calculation",
          description: "Social return calculated from primary data, with an auditable methodology.",
        },
        {
          title: "Impact Reports",
          description: "The data becomes a presentable document for accountability and fundraising.",
        },
      ],
    },
    whyRealData: {
      title: "Why measure with real data",
      body:
        "Made-up numbers don't survive an investor's or partner's first question. That's why the SROI Engine works only with primary data, collected on the project itself.",
    },
    forWhom:
      "For institutes, foundations and companies that need to prove, with an auditable methodology, the social return of their projects.",
  },

  // LOCKED — titulo travado no doc.
  biEventosPage: {
    eyebrow: "INTELLIGENCE",
    title: "Every event produces data",
    intro:
      "An event happens once, but the data it produces can inform the next ones. Today that data tends to get lost, scattered across different vendors; BI for Events brings it all together in a single dashboard.",
    whatWeMeasure: {
      title: "What we measure",
      body:
        "Attendance and flow, engagement, return and reach, and performance by area. A decision-making instrument, not a descriptive report.",
    },
    externalRead: {
      title: "An external, independent measure",
      body:
        "We don't need to have produced the event to measure it. It's a read from someone who has nothing to prove about their own work, the kind of independence that gives the number credibility.",
    },
    forWhom: "For organizers, sponsors and brands who want to know, with data, what worked at the event.",
  },

  contact: {
    title: "Let's talk",
    description:
      "Tell us what you need to get done. We'll respond with the path to make it happen.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      organization: "Organization",
      organizationPlaceholder: "Your organization",
      projectType: "Project type",
      projectTypePlaceholder: "Select an area",
      projectTypes: [
        "Consulting and Project Management",
        "Innovation",
        "Productions and Events",
        "Audiovisual",
        "Social Impact",
        "Creation Ops Rio",
        "Creation Marcas",
        "ONG.zero",
        "Other",
      ],
      message: "Message",
      messagePlaceholder: "Tell us about your project",
      submit: "Send",
      sending: "Sending...",
    },
    aside: {
      title: "Talk to Creation",
      subtitle: "We respond within one business day.",
      alternativesTitle: "Or reach us directly",
      email: "contato@creation-pro.com",
      whatsapp: "WhatsApp",
      whatsappNumber: "+55 21 99917-6231",
      note: "We serve clients in Brazil and the United States.",
    },
  },

  footer: {
    description: "We think and build innovative projects.",
    locations: "Brazil | United States",
    companyTitle: "Creation",
    companyLinks: [
      { label: "About", href: "/quem-somos" },
      { label: "Method", href: "/metodo" },
      { label: "Contact", href: "/contato" },
    ],
    solutionsTitle: "Areas",
    solutionsLinks: [
      { label: "Consulting", href: "/consultoria" },
      { label: "Productions", href: "/producoes" },
      { label: "Social Impact", href: "/impacto-social" },
      { label: "Creation Ops Rio", href: "/creator-ops-rio" },
      { label: "Creation Marcas", href: "/creation-marcas" },
      { label: "ONG.zero", href: "/ong-zero" },
    ],
    copyright: "Creation Produções LTDA. All rights reserved.",
  },
};