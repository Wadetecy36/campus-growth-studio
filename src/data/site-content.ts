export interface ProjectConcept {
  id: string;
  title: string;
  category: string;
  badge: string;
  oneLiner: string;
  problem: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  previewAccent: string;
  statLabel: string;
  statValue: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  recommendedFor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  summary: string;
  details: string[];
}

export const SITE_CONFIG = {
  brand: {
    name: "Campus Growth Studio",
    shortName: "CGS",
    descriptor: "Digital Systems for Ambitious Brands",
    coordinates: "37.7749° N · 122.4194° W",
    statusBadge: "SELECT COHORT // OPEN FOR Q1/Q2",
    contactEmail: "hello@campusgrowth.studio",
    location: "Campus Ecosystem · Global Engineering",
    established: "EST. 2026",
  },
  hero: {
    eyebrow: "INDEPENDENT DIGITAL GROWTH STUDIO",
    systemStatus: "SYS_STATUS: OPTIMAL",
    headlinePart1: "Small brands.",
    headlineSerif: "Serious systems.",
    subheadline:
      "We help student founders, creators, and ambitious local businesses turn rough digital presence into a sharper brand, a high-converting customer journey, and a system built to scale.",
    editorialQuote:
      "Strategy with intent. Design with precision. Systems that move business forward.",
    primaryCta: "Start a project",
    secondaryCta: "Explore selected work",
    freeAuditCta: "Get a free digital presence audit",
    capabilityTags: [
      "BRAND & UI/UX",
      "CONVERSION WEBSITES",
      "PRACTICAL AUTOMATION",
      "GROWTH ENGINES",
    ],
  },
  capabilities: [
    {
      title: "Digital Presence",
      focus: "High-craft websites and landing pages engineered for speed and clarity.",
    },
    {
      title: "Growth Systems",
      focus: "Tactile booking funnels, digital menus, and streamlined commerce checkouts.",
    },
    {
      title: "AI & Automation",
      focus: "Intelligent intake pipelines and workflow triggers that save hours each week.",
    },
    {
      title: "Brand Architecture",
      focus: "Clean visual typography, design tokens, and memorable digital identity.",
    },
  ],
  projects: [
    {
      id: "campus-commerce",
      title: "Campus Commerce",
      category: "Apparel & Digital Goods",
      badge: "DEMO CONCEPT",
      oneLiner:
        "A friction-free mobile storefront and drop engine built for a high-volume student streetwear brand.",
      problem:
        "Student entrepreneurs frequently rely on chaotic Instagram DMs and clunky Linktree links, suffering from cart abandonment and inventory confusion during limited apparel drops.",
      solution:
        "Engineered an ultra-fast headless storefront with integrated size recommendations, one-tap Apple Pay/Google Pay checkout, and an automated SMS drop notification funnel.",
      deliverables: [
        "Headless mobile-first storefront",
        "Instant one-tap checkout flow",
        "Real-time drop countdown & inventory tracker",
        "Automated order confirmation pipeline",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Stripe Checkout", "Webhooks"],
      previewAccent: "from-zinc-900 via-neutral-900 to-black",
      statLabel: "Target Friction Reduction",
      statValue: "-68% drop-off",
    },
    {
      id: "the-daily-crumb",
      title: "The Daily Crumb",
      category: "Food & Artisan Bakery",
      badge: "DEMO CONCEPT",
      oneLiner:
        "Conversion-focused live batch menu, pre-order system, and allergen filters for a busy campus bakery.",
      problem:
        "Static PDF menus and long morning lines caused 40% of rushing students to walk away during peak 15-minute lecture transition periods.",
      solution:
        "Created an interactive live-availability menu with instant dietary toggles (gluten-free, vegan) and a scheduled 5-minute express pick-up window flow.",
      deliverables: [
        "Dynamic real-time batch menu",
        "Smart dietary and allergy filtration",
        "Time-slot pickup reservation engine",
        "Zero-app-install web checkout",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Edge State", "Cloudflare"],
      previewAccent: "from-stone-900 via-neutral-900 to-stone-950",
      statLabel: "Queue Wait Time Target",
      statValue: "< 90 sec pickup",
    },
    {
      id: "creator-os",
      title: "Creator OS",
      category: "Personal Brand & Media",
      badge: "DEMO CONCEPT",
      oneLiner:
        "An editorial portfolio and automated brand sponsorship qualification pipeline for a campus creator.",
      problem:
        "High-output campus creators lose lucrative sponsor opportunities because brand inquiries get buried in social DMs without rate qualification.",
      solution:
        "Designed an editorial portfolio showcasing video analytics, demographic charts, and an automated commercial qualification funnel that filters inquiries by budget.",
      deliverables: [
        "Editorial multi-channel portfolio",
        "Live audience metric dashboards",
        "Automated commercial rate-card gating",
        "Direct calendar booking integration",
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Form Engine"],
      previewAccent: "from-neutral-950 via-zinc-900 to-neutral-900",
      statLabel: "Inbound Triage Efficiency",
      statValue: "100% pre-filtered",
    },
  ] as ProjectConcept[],
  services: [
    {
      id: "presence",
      number: "01",
      title: "Digital Presence & Websites",
      tagline: "First impressions that command respect.",
      description:
        "We build fast, responsive, beautifully composed websites that clearly articulate your value proposition and turn passive visitors into engaged buyers.",
      deliverables: [
        "High-conversion landing pages & multi-page sites",
        "Mobile-first responsive architecture",
        "Curated typography and design systems",
        "SEO fundamentals, metadata, and Core Web Vitals optimization",
      ],
      timeline: "2 to 3 weeks",
      recommendedFor:
        "Founders launching new products or businesses wanting to upgrade from basic templates.",
    },
    {
      id: "growth",
      number: "02",
      title: "Growth & Conversion Systems",
      tagline: "Frictionless journeys from discovery to conversion.",
      description:
        "Beyond aesthetics, we structure the exact mechanisms that capture attention, book meetings, take orders, and retain customer interest.",
      deliverables: [
        "Custom lead capture and client booking funnels",
        "Product catalogs, dynamic menus, and commerce integrations",
        "Conversion rate optimization (CRO) & UX auditing",
        "Analytics setup with privacy-friendly tracking",
      ],
      timeline: "2 to 4 weeks",
      recommendedFor:
        "Brands with active interest that want to improve conversion rates and sales velocity.",
    },
    {
      id: "automation",
      number: "03",
      title: "AI & Practical Automation",
      tagline: "Automate the grind so you can focus on building.",
      description:
        "We implement practical workflow automations and intelligent triage pipelines that handle repetitive founder tasks without complexity or bloat.",
      deliverables: [
        "Automated client intake, onboarding, and notification pipelines",
        "Inquiry triage and custom email triggers",
        "Content formatting and asset preparation workflows",
        "Practical AI integrations suited to your specific operations",
      ],
      timeline: "1 to 2 weeks",
      recommendedFor:
        "Solo founders and small teams spending hours each week on repetitive administrative tasks.",
    },
  ] as ServiceItem[],
  process: [
    {
      step: "01",
      title: "Discover",
      phase: "Research & Audit",
      summary:
        "We dive deep into your current digital presence, student audience habits, and immediate conversion bottlenecks.",
      details: [
        "Audit existing touchpoints and competitor positioning",
        "Identify friction points where visitors drop off",
        "Clarify core value proposition and primary conversion goal",
      ],
    },
    {
      step: "02",
      title: "Define",
      phase: "Strategy & Architecture",
      summary:
        "We agree on the exact scope, user journeys, design direction, and verifiable success criteria before building.",
      details: [
        "Map key page architecture and content hierarchy",
        "Establish design tokens, typography, and visual language",
        "Finalize clear milestones and delivery timeline",
      ],
    },
    {
      step: "03",
      title: "Build",
      phase: "Design & Engineering",
      summary:
        "We design and code the smallest, most effective production-grade solution using clean, modern standards.",
      details: [
        "Iterative, high-fidelity responsive development",
        "Rigorous performance, accessibility, and mobile testing",
        "Frictionless forms, integrations, and automation hookups",
      ],
    },
    {
      step: "04",
      title: "Improve",
      phase: "Launch & Evolution",
      summary:
        "We deploy to production, inspect real user behavior, and calibrate conversion flow based on actual metrics.",
      details: [
        "Zero-downtime production deployment",
        "Post-launch telemetry and conversion check",
        "Clear documentation so you own and manage your system easily",
      ],
    },
  ] as ProcessStep[],
  philosophy: [
    {
      title: "Direct Collaboration",
      desc: "You work directly with the designers and engineers building your project. No account executive telephone games.",
    },
    {
      title: "Lean & Sprint-Driven",
      desc: "We ship in weeks, not quarters. Tightly scoped sprints keep momentum high and budgets grounded.",
    },
    {
      title: "Code Over Templates",
      desc: "Custom-built with modern React, Tailwind, and semantic code that loads in milliseconds and scales cleanly.",
    },
    {
      title: "Business Outcomes First",
      desc: "Every interaction, animation, and paragraph exists to clarify your offer and drive real qualified conversations.",
    },
  ],
};
