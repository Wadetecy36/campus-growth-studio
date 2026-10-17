# Antigravity Build Brief --- Campus Growth Studio Landing Page

> **Purpose:** Build a polished, responsive demo landing page for the
> new campus-focused digital growth startup. This file is the primary
> implementation brief for Google Antigravity. Treat the supplied
> screenshots and component reference as design inputs, not as assets to
> copy blindly.

------------------------------------------------------------------------

## 0. Mission and success criteria

Build a high-quality, production-minded **demo landing page** for a
small digital growth studio serving student founders, campus businesses,
creators, and small local brands.

The page must communicate three things within the first screen:

1.  **Who we help:** student-led businesses, creators, and ambitious
    small brands.
2.  **What we do:** websites, brand systems, conversion-focused landing
    pages, AI-assisted workflows, and digital growth systems.
3.  **Why trust us:** sharp design, fast execution, practical strategy,
    and measurable outcomes.

This is a demo, so use editable placeholder content where real brand
details are not yet known. Do not invent client logos, testimonials,
performance claims, awards, or case-study results. Clearly mark any
sample projects as concepts or demo work.

**Primary conversion:** "Start a project" / "Book a discovery call."\
**Secondary conversion:** "Explore our work."\
**Supporting conversion:** "Get a free digital presence audit" if it can
be presented simply without adding a nonfunctional form.

### Quality bar

-   Visually distinctive, not a generic agency template.
-   Excellent on mobile and desktop.
-   Fast, accessible, SEO-aware, and easy to maintain.
-   All visible controls work; no fake buttons or dead links.
-   Motion is purposeful, subtle, and respects reduced-motion
    preferences.
-   Keep dependencies minimal. Do not install libraries for effects that
    can be implemented cleanly with CSS or the existing stack.
-   Complete the implementation, run available checks, and report what
    was built, what was tested, and any remaining limitations.

------------------------------------------------------------------------

## 1. Reference material and how to combine it

### Reference A --- Forma editorial studio screenshot

Visual signals to borrow: - Warm, near-white / stone background. -
Minimal navigation and generous spacing. - Large, confident
typography. - Editorial contrast between a strong sans-serif and a
refined italic serif. - One large abstract visual with lots of negative
space. - Clear, restrained calls to action. - Small metadata labels and
thin rules.

Use this as the source for **brand refinement, typography, spacing, and
restraint**. Avoid reproducing the exact name, copy, layout, or
proprietary artwork.

### Reference B --- UIMIX dark technical screenshot

Visual signals to borrow: - Deep black background and a fine,
atmospheric field of dots. - Monochrome technical / generative visual. -
Hairline dividers, tiny system labels, and a precise grid. - Strong
contrast and a more experimental, developer-oriented mood. - A hero
split between a visual and a concise headline/message. - Small technical
metadata used as decoration, not as noise.

Use this as the source for **technical character, atmosphere, and
graphic texture**. Do not clutter the interface with random coordinates,
fake terminal output, or unreadable decorative text.

### Reference C --- 21st.dev ASCII hero component

Reference URL: https://21st.dev/@larsen66/components/hero-ascii-one

Inspect the reference and its implementation if web access is available.
Recreate the intended visual behavior in the current project, but adapt
it to the brand and performance budget. If the source is unavailable,
implement a lightweight ASCII / dot-matrix / particle-inspired visual
locally using CSS, SVG, Canvas, or text characters---choose the simplest
robust option.

Do not assume the exact source package or API exists in the repo. Check
first. If the reference requires a dependency, assess whether it is
worth the bundle and maintenance cost.

### Reference D --- Floating Dock component supplied in this brief

Implement the supplied Floating Dock component below the hero or as a
compact floating navigation element **only if it improves navigation and
does not obscure content**. It should not compete with the primary CTA.

Requirements: - Desktop: magnetic / proximity-scaled icon behavior with
clear labels on hover and keyboard focus. - Mobile: compact toggle that
reveals a vertical list; touch targets must be at least 44×44 CSS px. -
Use real, meaningful destinations. Prefer section anchors such as
`#work`, `#services`, `#process`, and `#contact`. - Provide accessible
labels, visible focus styles, and reduced-motion handling. - Do not add
a dock if it makes the page feel gimmicky or duplicates the header too
heavily. In that case, use the component for a small contextual dock
near the bottom of the hero or as a secondary navigation.

### Synthesis rule

Combine the references into **one coherent design system**: - Use the
dark technical visual language for the hero and selected high-impact
sections. - Use warm off-white / stone surfaces for content sections,
case studies, and process details. - Use editorial typography and
negative space to prevent the technical aesthetic from becoming noisy. -
Keep the palette restrained: near-black, warm ivory, neutral grays, and
one restrained accent only if needed. - Do not simply stack two
unrelated templates. Make transitions, typography, spacing, borders, and
motion feel intentionally related.

------------------------------------------------------------------------

## 2. Brand and positioning

Use **Campus Growth Studio** as a temporary working name unless an
existing brand name is found in the repository. Make the name and brand
copy easy to replace from one central content/config file.

Suggested positioning: \> Digital systems for the next generation of
ambitious brands.

Supporting line: \> We help student founders, creators, and small
businesses turn rough digital presence into a clearer brand, a better
customer journey, and a system built to grow.

Tone: - Smart, direct, young but credible. - Ambitious without sounding
like a venture-capital cliché. - Premium and design-conscious without
pretending to be a large agency. - Outcome-focused, with plain
language. - No inflated claims such as "10x growth," "industry-leading,"
or "guaranteed results."

Possible hero headline directions (choose the strongest one; do not
display all): - **Build the next version of your brand.** - **Small
brands. Serious systems.** - **Make your digital presence work
harder.** - **Built for the next wave of business.**

Possible editorial phrase: \> Strategy with intent. Design with
precision. Systems that move business forward.

Use concise copy. The visual design should do much of the work.

------------------------------------------------------------------------

## 3. Before coding: inspect the project

First inspect the repository and determine: - Framework, package
manager, existing routes, build tooling, and scripts. - Whether the
project already uses TypeScript, Tailwind CSS, and shadcn/ui. - Existing
component and global-style conventions. - Current installed animation
and icon libraries. - Whether reference screenshots or assets exist
locally. - Current lint, type-check, and build commands.

Do not overwrite or replace a working project structure unnecessarily.

### If the project is already configured

Preserve the existing architecture and conventions. Add only what is
required.

### If the project is not configured

Set up a minimal React + TypeScript + Tailwind project using the
appropriate existing tooling. If shadcn/ui is required, initialize it
using the current shadcn CLI workflow and confirm the component path and
import alias before adding components.

Typical component location: - `components/ui/floating-dock.tsx` -
`components/hero-ascii.tsx` - `components/site-header.tsx` -
`components/sections/...`

Typical utility location: - `lib/utils.ts`

Use `@/components/ui` only if the alias is correctly configured. If the
repository uses a different convention, follow it consistently rather
than creating duplicate structures.

Before installing anything, inspect `package.json`. Avoid duplicate
animation, icon, utility, or styling libraries.

------------------------------------------------------------------------

## 4. Page structure and user journey

Build a single-page experience with these sections in this order:

### A. Header / navigation

-   Wordmark on the left.
-   Links: Work, Services, Process, Studio/Approach, Contact.
-   A restrained theme toggle only if both themes are fully designed and
    tested. Otherwise, omit it.
-   One clear CTA: "Start a project."
-   Header should be visually quiet and not consume excessive vertical
    space.
-   Mobile navigation must be functional, keyboard accessible, and easy
    to dismiss.

### B. Hero --- the main event

Create a high-impact split hero inspired by the two reference
screenshots.

Desktop: - Strong visual on the left or as a large central background. -
Headline and supporting copy in a deliberate grid. - Eyebrow / metadata
label such as `INDEPENDENT DIGITAL GROWTH STUDIO`. - Primary CTA:
`Start a project`. - Secondary CTA: `Explore selected work`. - Small
supporting label such as `STRATEGY · DESIGN · DEVELOPMENT · AUTOMATION`.

Mobile: - Stack the hero cleanly. - Keep the headline visible early. -
Scale or simplify the generative visual so it does not push the CTA too
far below the fold. - No horizontal overflow.

Hero visual options, in priority order: 1. A locally implemented ASCII /
point-cloud / particle graphic inspired by the 21st.dev reference. 2. A
lightweight SVG or CSS-generated technical illustration. 3. A static
local asset if one already exists and has suitable licensing.

Do not make a large external image the only thing that gives the page
its identity. If using a canvas animation, cap particle count, avoid
continuous expensive work when offscreen, and stop or simplify animation
for reduced motion.

### C. Trust / capability strip

A minimal strip that communicates focus areas, not fake client logos: -
Brand & UI/UX - Websites & landing pages - AI & automation - Growth
systems

Use thin rules, small labels, or a horizontally scrolling strip only if
it remains accessible and non-distracting. Do not use marquee animation
by default.

### D. Selected work

Show 3 demo project cards with clearly identified concept/demo labels,
for example: - **Campus Commerce** --- a cleaner storefront concept for
a student-run product brand. - **The Daily Crumb** --- a
conversion-focused digital menu and ordering concept for a bakery. -
**Creator OS** --- a personal-brand site and inquiry flow for a creator.

These are fictional concepts, not claimed clients. Label them
`CONCEPT PROJECT` or `DEMO CONCEPT`. Use CSS-designed mockups, local
illustrations, or existing licensed assets. Do not invent testimonials,
business metrics, or real company identities.

Each card should include: - Project title. - Category. - One sentence
explaining the problem or goal. - A visual preview. - A working "View
concept" interaction, such as opening a modal / detail panel or
navigating to a project detail section. Do not link to `#` with no
behavior.

### E. Services

Keep the offer productized and understandable. Present three service
groups:

1.  **Digital Presence**
    -   Landing pages and business websites
    -   Mobile-first UX/UI
    -   Brand presentation and clear calls to action
2.  **Growth Systems**
    -   Lead capture and booking flows
    -   Product catalogs / digital menus
    -   Analytics and conversion improvements
3.  **AI & Automation**
    -   Repetitive workflow automation
    -   Inquiry and follow-up workflows
    -   Practical AI integrations

Do not imply that every service is already available as a fully mature
product. Use language like "built around your needs" where appropriate.

### F. Approach / process

Use a simple 4-step sequence: 1. **Discover** --- understand the
business, audience, and current friction. 2. **Define** --- agree on the
problem, scope, priorities, and success measure. 3. **Build** --- design
and implement the smallest useful solution. 4. **Improve** --- measure
behavior, refine, and add only what earns its place.

A horizontal timeline can become a vertical sequence on mobile. Use
subtle numbered markers and thin lines.

### G. Why this studio

Keep this grounded. Emphasize: - Direct collaboration. - Lean
execution. - Modern tools and thoughtful automation. - Design that
supports business goals. - A focus on useful outcomes over decoration.

Avoid unsupported claims about years of experience, team size, customer
count, or success rates.

### H. Contact / conversion

A confident, minimal closing section: - Headline such as
`Have something worth building?` - Brief invitation to explain the
project. - Main CTA opens a real email link or a working contact form. -
If no backend exists, implement a functional `mailto:` fallback and
explain that it opens the visitor's email client. Do not present a form
as successfully submitted when nothing is connected. - Fields, if a form
is included: name, email, business/project, and a short message.
Validate inputs and show clear error states. - Add a small privacy note
if collecting contact information.

### I. Footer

-   Brand wordmark.
-   Small service/location-neutral descriptor.
-   Links to page sections and contact.
-   Current year generated dynamically.
-   Social links only if actual URLs are configured. Do not invent
    social profiles.

------------------------------------------------------------------------

## 5. Floating Dock integration --- provided implementation

Use the following as the initial component reference. Clean it up for
production rather than blindly pasting it. Check current Motion
documentation and package compatibility if web access is available.

### Dependencies

-   `motion`
-   `@tabler/icons-react`

Install only if missing and only if this dock is used. Do not install
`motion` if the project already uses a compatible animation library that
can implement the same behavior without duplicate runtime cost.

### File: `components/ui/floating-dock.tsx`

``` tsx
"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

type DockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type FloatingDockProps = {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
};

export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

function FloatingDockMobile({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="campus-dock-nav"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                aria-label={item.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ delay: index * 0.035 }}
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-neutral-900 text-neutral-100 shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="h-5 w-5">{item.icon}</span>
                <span className="sr-only">{item.title}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close navigation dock" : "Open navigation dock"}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-neutral-900 text-neutral-100 shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

function FloatingDockDesktop({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <nav
      aria-label="Quick navigation"
      className={cn("hidden md:flex", className)}
      onMouseMove={(event) => mouseX.set(event.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
    >
      {items.map((item) => (
        <DockIcon key={item.title} item={item} mouseX={mouseX} />
      ))}
    </nav>
  );
}

function DockIcon({
  item,
  mouseX,
}: {
  item: DockItem;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds || !Number.isFinite(value)) return 999;
    return value - (bounds.left + window.scrollX) - bounds.width / 2;
  });

  const size = useSpring(
    useTransform(distance, [-140, 0, 140], [40, 58, 40]),
    { mass: 0.15, stiffness: 170, damping: 16 },
  );

  return (
    <motion.a
      ref={ref}
      href={item.href}
      aria-label={item.title}
      title={item.title}
      style={{ width: size, height: size }}
      className="group relative flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-neutral-900 text-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <span className="flex h-5 w-5 items-center justify-center">
        {item.icon}
      </span>
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/15 bg-neutral-950 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        {item.title}
      </span>
    </motion.a>
  );
}
```

**Important implementation notes:** - Review the `window` reference
inside the transform callback. If it creates SSR or test issues, use a
safer coordinate strategy. The component is client-only, but do not
assume every execution context has `window`. - Ensure desktop hover
scaling works correctly with the actual coordinate system and scrolled
pages. Use `clientX` plus `getBoundingClientRect()` or another
consistent coordinate pair if needed. - Add a reduced-motion strategy.
For users who request reduced motion, keep the dock static and remove or
minimize spring and entrance transitions. - Confirm the `cn` utility
exists. If it does not, use the project's existing class utility or add
a minimal `clsx`/`tailwind-merge` helper only if justified. - Do not put
the dock in a fixed position that covers mobile CTAs, cookie controls,
form fields, or browser UI. Test it on short screens. - The code above
is a reference implementation, not a requirement to preserve every
implementation detail. Correct bugs and simplify where appropriate.

### Example usage

``` tsx
import {
  IconBriefcase,
  IconHome,
  IconMail,
  IconSettings,
} from "@tabler/icons-react";
import { FloatingDock } from "@/components/ui/floating-dock";

const dockItems = [
  { title: "Home", icon: <IconHome className="h-full w-full" />, href: "#home" },
  { title: "Work", icon: <IconBriefcase className="h-full w-full" />, href: "#work" },
  { title: "Services", icon: <IconSettings className="h-full w-full" />, href: "#services" },
  { title: "Contact", icon: <IconMail className="h-full w-full" />, href: "#contact" },
];

export function SiteDock() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center">
      <div className="pointer-events-auto">
        <FloatingDock
          items={dockItems}
          desktopClassName="items-end gap-3 rounded-full border border-white/10 bg-neutral-950/90 px-3 py-2 shadow-2xl backdrop-blur-xl"
          mobileClassName="rounded-full"
        />
      </div>
    </div>
  );
}
```

Adapt the placement after checking the page composition. The dock is
optional; do not let it undermine the hero.

------------------------------------------------------------------------

## 6. ASCII / generative hero implementation requirements

Build the hero graphic as a component with a clear API,
e.g. `HeroAsciiVisual`.

Requirements: - Visually interesting at desktop sizes but deliberately
simplified on mobile. - Use a restrained grayscale palette and high
contrast against the hero background. - Avoid a large, unoptimized image
or an unbounded animation loop. - If using Canvas: - Keep particle /
character count bounded. - Use `requestAnimationFrame` only while
animation is needed. - Pause when the component is offscreen or the tab
is hidden if practical. - Handle resize using `ResizeObserver` or a
debounced resize strategy. - Scale for device pixel ratio without
excessive memory use. - Respect `prefers-reduced-motion`. - Clean up
animation frames and observers on unmount. - Keep rendering decorative;
do not put essential text inside canvas. - If using SVG or CSS instead,
keep the markup and calculations maintainable. - Add a static fallback
that still looks intentional if the animation is disabled or fails. - Do
not fetch remote assets on every render. - Do not use a copyrighted
character or copied artwork from a reference screenshot. Make an
original abstract composition: a topographic sphere, orbital lines,
geometric form, or typographic particle field.

------------------------------------------------------------------------

## 7. Design tokens and visual direction

Create centralized CSS variables or Tailwind theme tokens instead of
scattering one-off values.

Suggested starting palette: - `--ink: #0A0A0A` - `--paper: #F0EEE9` -
`--paper-muted: #E5E1DA` - `--text-primary: #111111` -
`--text-muted: #77736D` - `--line-light: rgba(255,255,255,0.16)` -
`--line-dark: rgba(10,10,10,0.16)` - Accent: use only if it strengthens
hierarchy; otherwise remain monochrome.

Typography: - Use an existing local font if available. - Otherwise use a
reliable system stack or a small number of properly loaded web fonts. -
Pair a clean sans-serif with a restrained italic serif for one or two
display moments, not everywhere. - Use `clamp()` for responsive display
sizes. - Keep body text comfortably readable; avoid tiny text as a core
content channel. - Use uppercase tracking for metadata sparingly.

Layout: - Establish a consistent max-width container. - Use a deliberate
12-column desktop grid or a simpler grid aligned to the existing
framework. - Generous section spacing on desktop; tighter but still
breathable on mobile. - Use thin rules and subtle borders. - Avoid
over-rounded cards everywhere. Mix crisp rectangles, restrained radii,
and pill CTAs intentionally.

Motion: - Use a small set of consistent motion timings. - Keep hover
states fast and subtle. - Avoid scroll-jacking, forced smooth scrolling,
cursor replacements, or animations that delay access to content. -
Ensure the page remains attractive with all animation disabled.

------------------------------------------------------------------------

## 8. Technical implementation constraints

### Stack

Prefer the existing stack. If starting from scratch, use: - React -
TypeScript - Tailwind CSS - Existing router or a single-page entry
point - shadcn/ui only where it adds value - `motion` only for the dock
/ selected meaningful transitions - `@tabler/icons-react` only if the
dock uses it

Do not add a large UI kit or animation framework just to imitate a
screenshot.

### Code quality

-   Use semantic landmarks: `header`, `nav`, `main`, `section`,
    `footer`.
-   Use typed props and data structures.
-   Keep content separate from presentation when it improves
    maintainability.
-   Avoid giant monolithic components; split by page section.
-   Avoid `any`, dead code, unused imports, duplicated CSS, and
    placeholder `href="#"` links.
-   Avoid hydration errors and unstable client/server markup.
-   Make all interactive components keyboard accessible.
-   Use buttons for actions and anchors for navigation.
-   Provide meaningful alt text for informative imagery; use empty alt
    text for purely decorative imagery.
-   Include visible focus states and sufficient contrast.

### Responsive behavior

Test at approximately: - 360px wide phone - 390px wide phone - 768px
tablet - 1024px laptop - 1440px desktop

At each size verify: - No horizontal overflow. - Header works and does
not collide with the wordmark. - Hero copy and CTA remain legible. -
Generative visual scales or simplifies appropriately. - Project cards
stack cleanly. - Dock does not obstruct the interface. - Contact
controls remain usable.

### Performance

-   Avoid unnecessary dependencies.
-   Lazy-load below-the-fold images.
-   Avoid layout shift from missing image dimensions.
-   Use CSS transforms and opacity for animation where possible.
-   Do not animate large blur filters or expensive full-screen effects
    continuously.
-   Avoid autoplay video.
-   Keep the initial render fast and the first screen useful without
    waiting for animation.
-   Add `loading="lazy"` and appropriate image sizing for non-critical
    images.
-   If a heavy visual is necessary, load it after the core layout or
    provide a static first frame.

### Accessibility

-   Target WCAG AA contrast for meaningful text and controls.
-   Respect `prefers-reduced-motion`.
-   Use `aria-expanded` and accessible names for disclosure controls.
-   Ensure keyboard users can reach and operate all actions.
-   Do not rely on color alone to communicate state.
-   Ensure the mobile menu and dock can be opened, used, and dismissed
    by keyboard.
-   Keep decorative graphics hidden from screen readers where
    appropriate.

### SEO and sharing

Set: - A specific page title. - Meta description. - Canonical URL only
if the actual deployment URL is known. - Open Graph title / description
/ image when a real preview asset is available. - Theme color. - Favicon
only if an actual brand asset exists. - Clear heading hierarchy with one
primary H1. - Descriptive section headings. - Structured data only if
accurate and useful; do not fabricate an address, reviews, or business
details.

Suggested metadata: - Title:
`Campus Growth Studio — Digital Systems for Ambitious Brands` -
Description:
`Websites, brand experiences, and practical growth systems for student founders, creators, and small businesses.`

------------------------------------------------------------------------

## 9. Functional requirements and acceptance checklist

Before declaring the task complete, verify all of the following:

### Design

-   [ ] Visual system coherently combines editorial warmth with dark
    technical character.
-   [ ] Hero is distinctive and has a clear message and CTA.
-   [ ] Sections have consistent spacing, type hierarchy, and border
    treatment.
-   [ ] Demo projects are clearly marked as concepts.
-   [ ] No fake logos, fake testimonials, or unsupported results.

### Functionality

-   [ ] Header navigation reaches the correct sections.
-   [ ] Mobile menu opens and closes.
-   [ ] Primary CTA reaches contact or a real configured booking
    destination.
-   [ ] Secondary CTA reaches selected work.
-   [ ] Project cards open a meaningful detail view or navigate to real
    sections.
-   [ ] Dock links work and do not block other controls.
-   [ ] Contact form validates and has honest success/error behavior, or
    uses a clear mailto fallback.
-   [ ] Theme toggle, if present, actually changes the full theme and
    persists only if persistence is implemented correctly.

### Engineering

-   [ ] TypeScript check passes.
-   [ ] Lint passes if configured.
-   [ ] Production build passes.
-   [ ] No console errors during normal use.
-   [ ] No missing asset requests.
-   [ ] No horizontal overflow at target viewport widths.
-   [ ] Reduced-motion mode remains usable.
-   [ ] No unnecessary dependencies were introduced.

### Final handoff

At the end, provide: 1. A concise summary of the page and its design
choices. 2. Files created or modified. 3. Dependencies added and why. 4.
Commands run and whether they passed. 5. Known limitations or items that
need real brand details. 6. The exact command to run the app locally.

Do not claim a check passed unless you actually ran it.

------------------------------------------------------------------------

## 10. Execution order for Antigravity

Follow this sequence rather than jumping directly into styling:

1.  **Inspect** the repository, scripts, dependencies, and existing
    architecture.
2.  **Report briefly** what stack and conventions are present, then
    proceed without waiting unless a truly blocking decision is missing.
3.  **Plan** the component tree, tokens, and page sections.
4.  **Implement** the hero visual and core page structure first.
5.  **Add** the Floating Dock only if it fits the interaction model.
6.  **Implement** all real navigation, CTA, project-card, and contact
    behavior.
7.  **Polish** typography, responsive spacing, hover/focus states, and
    motion.
8.  **Test** the target viewports, reduced-motion mode, type check,
    lint, and production build.
9.  **Fix** discovered issues instead of merely listing them.
10. **Summarize** the completed work and remaining real-world inputs.

Do not stop after producing a plan or static mockup. Implement the
working landing page in the current repository.

------------------------------------------------------------------------

## 11. Final strategic constraint

This is a startup demo, not a visual-effects showcase. The site must
convert attention into qualified conversations. Every decorative effect
must support positioning, clarity, trust, or navigation. If an effect
adds weight without improving one of those outcomes, remove it.

**Priority order:** clarity → credibility → conversion → performance →
visual spectacle.
