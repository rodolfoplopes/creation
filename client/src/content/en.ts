import type { Content } from "./types";

export const en: Content = {
  brand: {
    name: "Creation",
    microcopy: "Clarity. Rhythm. Execution.",
    footerTagline: "Thinking and doing are the same responsibility.",
    locations: "Brazil | United States",
  },

  nav: {
    about: "About",
    contact: "Contact",
  },

  cta: {
    primary: "Book a call",
    secondary: "See the Method",
    href: "/contato",
    methodHref: "/como-trabalhamos",
  },

  labels: {
    caseProblem: "What was at stake",
    caseAction: "What we did",
    forWhom: "Who it's for",
    seeMethod: "See the method",
  },

  // LOCKED — frase-mae, fechada no doc.
  hero: {
    headline: "Thinking and doing are the same responsibility.",
    subheadline:
      "Creation brings together strategy, management and operational capacity to turn challenges into clear, viable and well-executed projects, from understanding to delivery.",
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
        "Strategy",
        "Management",
        "Operations",
        "Innovation",
        "Impact",
        "Branding & Experiences",
        "Creation Ops Rio",
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
    description: "Thinking and doing are the same responsibility.",
    locations: "Brazil | United States",
    companyTitle: "Creation",
    companyLinks: [
      { label: "About", href: "/quem-somos" },
      { label: "How We Work", href: "/como-trabalhamos" },
      { label: "Contact", href: "/contato" },
    ],
    solutionsTitle: "Solutions",
    solutionsLinks: [
      { label: "Solutions", href: "/solucoes" },
      { label: "Strategy", href: "/solucoes/estrategia" },
      { label: "Management", href: "/solucoes/gestao" },
      { label: "Operations", href: "/operacoes" },
      { label: "Creation Ops Rio", href: "/creator-ops-rio" },
    ],
    copyright: "Creation Produções LTDA. All rights reserved.",
  },
};