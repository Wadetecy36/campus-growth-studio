export interface ProjectConcept {
  id: string;
  title: string;
  category: string;
  type: string;
  summary: string;
  problem: string;
  deliverables: string[];
  techStack: string[];
  accent: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
}

export interface NicheItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  brand: {
    name: "Campus Growth Studio",
    shortName: "CGS",
    descriptor: "Digital growth for emerging businesses",
    statusBadge: "OPEN FOR SELECT PROJECTS",
    contactEmail: "hello@campusgrowth.studio",
    established: "EST. 2026",
  },
  hero: {
    eyebrow: "DIGITAL GROWTH STUDIO",
    headline: "Build a business people can find, trust and buy from.",
    subheadline:
      "We design websites, digital experiences and practical growth systems for small businesses, creators and ambitious product brands.",
    primaryCta: "Start a project",
    secondaryCta: "View selected work",
    capabilityTags: ["WEB DESIGN", "DIGITAL PRESENCE", "AUTOMATION", "GROWTH SYSTEMS"],
  },
  statement: {
    eyebrow: "THE DIGITAL FRONT DOOR",
    title: "A better-looking business is only the beginning.",
    body:
      "Your customers may discover you through Instagram, WhatsApp, a referral or a walk past your storefront. We connect those moments to a digital experience that feels clear, credible and easy to act on.",
  },
  services: [
    {
      id: "presence",
      number: "01",
      title: "Digital presence",
      summary: "The foundation customers see before they decide to enquire, visit or buy.",
      deliverables: ["Positioning and content structure", "Website and landing pages", "Mobile-first design system"],
    },
    {
      id: "experiences",
      number: "02",
      title: "Web experiences",
      summary: "Purposeful digital journeys for businesses that need more than a brochure site.",
      deliverables: ["Product and service presentation", "Menus, booking and enquiry flows", "Ecommerce and checkout direction"],
    },
    {
      id: "automation",
      number: "03",
      title: "Practical automation",
      summary: "Small systems that make the work behind the customer experience feel lighter.",
      deliverables: ["Lead capture and notifications", "Booking and intake workflows", "Useful AI-assisted operations"],
    },
    {
      id: "growth",
      number: "04",
      title: "Growth foundations",
      summary: "A sharper offer, clearer journey and better places for attention to go next.",
      deliverables: ["Conversion and UX reviews", "Search and discoverability basics", "Launch guidance and iteration"],
    },
  ] as ServiceItem[],
  niches: [
    { id: "food", label: "FOOD", title: "Menus people can actually use.", description: "Turn menus, locations and social traffic into a digital experience customers can act on." },
    { id: "beauty", label: "BEAUTY", title: "Make trust visible.", description: "Make products and services easier to discover, understand and choose." },
    { id: "product", label: "PRODUCT", title: "Give the product a proper stage.", description: "Present collections, drops and offers with the clarity they deserve." },
    { id: "hospitality", label: "HOSPITALITY", title: "Turn browsing into bookings.", description: "Help guests understand the experience before they arrive or enquire." },
    { id: "personal-brand", label: "PERSONAL BRAND", title: "Turn attention into an asset.", description: "Give creators and experts a professional home for their work and opportunities." },
    { id: "local", label: "LOCAL BUSINESS", title: "Be easier to find and trust.", description: "Connect your reputation, location and contact path in one clear place." },
  ] as NicheItem[],
  projects: [
    {
      id: "campus-commerce",
      title: "Campus Commerce",
      category: "Fashion / Product",
      type: "CONCEPT",
      summary: "A mobile-first storefront direction for a student streetwear label moving beyond social DMs.",
      problem: "A product drop needs a clearer path from attention to selection, size and checkout.",
      deliverables: ["Drop-led storefront", "Product storytelling", "Checkout journey"],
      techStack: ["React", "TypeScript", "Commerce"],
      accent: "lime",
    },
    {
      id: "daily-crumb",
      title: "The Daily Crumb",
      category: "Food / Hospitality",
      type: "CONCEPT",
      summary: "A live menu and pickup experience for an independent bakery serving a busy campus audience.",
      problem: "When the menu changes daily, customers need the right information at the right moment.",
      deliverables: ["Live menu structure", "Dietary filters", "Pickup flow"],
      techStack: ["React", "Content system", "Checkout"],
      accent: "orange",
    },
    {
      id: "creator-os",
      title: "Creator OS",
      category: "Personal brand / Media",
      type: "EXPERIMENT",
      summary: "An editorial home for a creator turning audience attention into considered brand opportunities.",
      problem: "A strong body of work needs a clear home where people can understand the offer and take the next step.",
      deliverables: ["Editorial portfolio", "Offer architecture", "Enquiry qualification"],
      techStack: ["React", "Motion", "Form flow"],
      accent: "blue",
    },
  ] as ProjectConcept[],
  process: [
    { step: "01", title: "Discover", summary: "Understand the business, audience, offer and the moments that matter." },
    { step: "02", title: "Design", summary: "Shape the visual direction, content hierarchy and customer journey." },
    { step: "03", title: "Build", summary: "Turn the experience into a fast, responsive and maintainable product." },
    { step: "04", title: "Launch", summary: "Connect the necessary tools, test the edges and put it in front of people." },
    { step: "05", title: "Grow", summary: "Use real questions and customer behaviour to decide what improves next." },
  ] as ProcessStep[],
};
