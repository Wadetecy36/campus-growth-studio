import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import { HeroAsciiVisual } from "@/components/hero-ascii";
import { SITE_CONFIG } from "@/data/site-content";
import { ParallaxFrame, Reveal } from "@/components/motion/reveal";

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-container relative flex min-h-[780px] flex-col justify-between pb-8 pt-28 lg:min-h-[calc(100svh-1px)] lg:pt-32">
        <div className="flex items-center justify-between border-y border-white/10 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          <span className="flex items-center gap-2"><span className="status-dot" />{SITE_CONFIG.hero.eyebrow}</span>
          <span className="hidden sm:block">WEB · PRESENCE · SYSTEMS</span>
        </div>

        <div className="grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-16">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-6 text-studio-accent">For businesses ready to look the part.</p>
            <h1 className="display-heading max-w-4xl text-white">{SITE_CONFIG.hero.headline}</h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">{SITE_CONFIG.hero.subheadline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="button button-light">{SITE_CONFIG.hero.primaryCta}<IconArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="#work" className="button button-outline">{SITE_CONFIG.hero.secondaryCta}<IconArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
          </Reveal>

          <ParallaxFrame className="ascii-module">
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
              <span>ASCII FIELD / 01</span><span>LOCAL RENDER</span>
            </div>
            <div className="aspect-square min-h-[280px] w-full sm:min-h-[380px]"><HeroAsciiVisual /></div>
            <div className="border-t border-white/10 px-3 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">A visual language for businesses in motion.</div>
          </ParallaxFrame>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/10 pt-5 sm:grid-cols-4">
          {SITE_CONFIG.hero.capabilityTags.map((tag, index) => <div key={tag} className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-white/55"><span className="text-white/25">0{index + 1}</span>{tag}</div>)}
        </div>
      </div>
    </section>
  );
}
