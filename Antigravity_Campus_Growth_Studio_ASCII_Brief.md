# Antigravity Build Brief — Campus Growth Studio

## Goal
Refine the existing `Wadetecy36/campus-growth-studio` Vite + React + TypeScript project into a polished, responsive studio landing page. This is an implementation task, not a redesign document. Inspect the current repository first, then make changes directly and verify them.

## Use only these visual references
1. **21st.dev ASCII hero**: https://21st.dev/@larsen66/components/hero-ascii-one
   - Integrate the actual component implementation from the reference where practical.
   - Preserve its distinctive ASCII / point-cloud visual. Do not replace it with a generic stock image or random particle animation.
2. **UIMIX-inspired composition from the supplied code**
   - Black background, white/grey generative visual, fine borders, corner-frame details, restrained mono typography, small technical labels, and high-contrast CTA buttons.
   - Keep the atmosphere, but adapt all copy, identity, labels, and CTAs to Campus Growth Studio. Do not retain UIMIX branding, fake coordinates, or the Sisyphus story.
   - Use the supplied Unicorn Studio project only if authorized, loads reliably, and is appropriate. Otherwise use the 21st.dev ASCII visual as the main hero visual. Do not hide or remove third-party branding/credits through DOM scraping or CSS tricks; use supported provider settings and licensing.

## Design direction
Create one coherent art direction, not a collage of templates:
- Dark, near-black canvas with subtle white/grey detail.
- Bold editorial headline with disciplined line breaks and generous negative space.
- One main visual focal point: the ASCII visual. Avoid multiple competing hero illustrations.
- Thin rules, restrained frame corners, subtle dot/dither textures, and small mono metadata only where they improve hierarchy.
- Keep the page premium and intentional. Remove decorative labels, borders, status indicators, section numbers, and animations that do not serve a clear purpose.
- Do not add sections or libraries just to make the page look complicated.
- Maintain readable contrast, comfortable line lengths, and visible focus states.

## Repository constraints
- Existing stack: Vite, React, TypeScript, Tailwind CSS, Motion, and Tabler icons. Reuse the existing stack and components.
- Do not convert the project to Next.js.
- The supplied UIMIX snippet uses Next.js-style `'use client'` and `<style jsx>`; adapt CSS to the repository's current styling approach.
- Inspect the current ASCII component and compare it with the 21st.dev source before replacing anything.
- Install only dependencies actually needed by the chosen component. Avoid duplicate animation libraries.
- Use the project's established component and style paths. Keep component APIs typed and avoid `any`.

## Landing page implementation
1. **Header**: simple studio wordmark and a few working anchor links. Do not add a second persistent navigation system unless the existing floating dock proves genuinely useful.
2. **Hero**: ASCII visual plus a concise, specific positioning statement for a studio helping student-led and small businesses improve their digital presence. One primary CTA and one secondary link. Avoid generic filler like “we build the future.”
3. **Work / selected projects**: use existing project data and clearly label concept work as concepts. Do not fabricate clients, testimonials, results, metrics, or case-study outcomes.
4. **Services**: state clear deliverables in plain language (for example, websites, landing pages, brand presentation, and marketing support only if genuinely offered).
5. **Process**: short, practical steps, not a long manifesto.
6. **Contact**: working contact action using verified project details. If email, location, or social links are placeholders, label them clearly or omit them until verified.
7. Keep useful existing sections where they fit. Do not rebuild working pieces without a reason.

## Responsive and motion requirements
- Desktop: preserve the strong asymmetrical composition and keep the ASCII art as the focal point.
- Mobile: recompose rather than shrink the desktop layout. Prevent clipped headlines, horizontal scrolling, overlapping controls, and oversized canvas rendering.
- Respect `prefers-reduced-motion`; provide a static or low-motion fallback.
- Pause or reduce expensive animation when the visual is off-screen or the tab is hidden where practical.
- Avoid `Math.random()` during React render for decorative bars or particles; use deterministic values or CSS.
- Do not inject duplicate scripts/styles on every mount. Any third-party script must load once, clean up safely, and fail gracefully.
- Keep pointer events enabled for actual controls; do not apply blanket `pointer-events: none` to an entire interactive widget.

## Content and trust
- Replace UIMIX-specific wording and technical fiction with the studio's real brand voice.
- Remove unsupported numerical claims, fake performance results, fake client names, and unverified contact/location information.
- Make all buttons and links work. No `href="#"` placeholders in the finished page.
- Ensure labels and alt text are meaningful. Decorative visuals should be hidden from assistive technology when appropriate.

## Execution order
1. Inspect repository, current page, existing ASCII component, package scripts, and asset licensing/availability.
2. Write a short implementation plan (maximum 8 bullets), then proceed without waiting for approval unless a critical ambiguity blocks work.
3. Implement the hero and visual system first; then refine surrounding sections for consistency.
4. Test desktop and mobile layouts, navigation, CTA/contact links, console errors, and production build.
5. Run available lint/typecheck/build scripts. Fix errors introduced by the changes.
6. Summarize changed files, design decisions, dependencies added/removed, checks actually run, and anything that still needs user input.

## Acceptance criteria
- The hero clearly reflects the supplied ASCII/UIMIX direction without copying unrelated brand identity.
- Visual hierarchy is clear at a glance; there is one dominant focal point and no cluttered “developer dashboard” feel.
- Responsive layout works without horizontal overflow at narrow widths.
- No fake claims or unverified contact details are presented as fact.
- Navigation and CTAs are functional.
- No unnecessary framework migration or heavy new dependency.
- The production build passes, or any pre-existing failure is explicitly identified.
