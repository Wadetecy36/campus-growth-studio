import React from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { HeroAsciiVisual } from "@/components/hero-ascii";
import { IconArrowRight, IconSparkles, IconLayersIntersect } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 lg:pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-white/10"
    >
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dots-tech opacity-30 pointer-events-none" />

      {/* Decorative Technical Top Rule with Lat/Long and status */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-y border-white/10 text-[10px] font-mono tracking-widest text-paper/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-studio-accent" />
            <span>{SITE_CONFIG.hero.eyebrow}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>{SITE_CONFIG.brand.coordinates}</span>
            <span className="text-white/20">|</span>
            <span className="text-paper/60">{SITE_CONFIG.hero.systemStatus}</span>
          </div>
        </div>
      </div>

      {/* Split Main Hero Grid */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3D ASCII Topographic Visual */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl border border-white/15 bg-ink-900/80 p-2 sm:p-4 backdrop-blur-sm shadow-2xl overflow-hidden group">
              {/* Header bar of visual module */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 px-2 text-[10px] font-mono text-paper/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full border border-white/30" />
                  <span className="tracking-wider text-paper/80 font-medium">TOPOGRAPHIC_FIELD.V1</span>
                </div>
                <span className="tracking-widest text-[9px] text-paper/40">INTERACTIVE // MOUSE TILT</span>
              </div>

              {/* ASCII Visual Component */}
              <div className="relative w-full aspect-square max-h-[380px] sm:max-h-[460px] flex items-center justify-center">
                <HeroAsciiVisual className="rounded-lg" />
              </div>

              {/* Footer info strip of visual module */}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10 px-2 text-[9px] font-mono text-paper/45">
                <span>MODEL: TOROIDAL HARMONIC</span>
                <span className="text-emerald-400/80">RENDER: CLIENT CANVAS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Conversion CTA */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-center lg:pl-4">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 w-fit mb-5">
              <IconSparkles className="w-3.5 h-3.5 text-studio-accent" />
              <span className="font-mono text-[11px] tracking-wider uppercase text-paper/80">
                CAMPUS & CREATOR ECOSYSTEM
              </span>
            </div>

            {/* Main Headline with Editorial Contrast */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-[1.08] mb-6">
              <span>{SITE_CONFIG.hero.headlinePart1}</span>{" "}
              <span className="font-serif italic font-normal tracking-normal text-paper-muted underline decoration-white/20 underline-offset-8">
                {SITE_CONFIG.hero.headlineSerif}
              </span>
            </h1>

            {/* Clear Positioning Paragraph */}
            <p className="text-base sm:text-lg text-paper/75 leading-relaxed font-sans max-w-xl mb-8">
              {SITE_CONFIG.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-paper text-ink font-mono text-xs font-bold uppercase tracking-wider shadow-xl hover:bg-white active:scale-98 transition-all"
              >
                <span>{SITE_CONFIG.hero.primaryCta}</span>
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-ink-900/60 hover:bg-white/5 text-paper text-xs font-mono uppercase tracking-wider transition-all"
              >
                <IconLayersIntersect className="w-4 h-4 text-paper/60" />
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Editorial Manifesto Quote */}
            <div className="border-l-2 border-studio-accent/70 pl-4 py-1">
              <p className="font-serif italic text-sm sm:text-base text-paper/70">
                "{SITE_CONFIG.hero.editorialQuote}"
              </p>
              <span className="block font-mono text-[10px] text-paper/40 tracking-widest uppercase mt-1">
                CAMPUS GROWTH STUDIO — CORE PRINCIPLE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Capability Strip */}
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
          {SITE_CONFIG.hero.capabilityTags.map((tag, idx) => (
            <div
              key={tag}
              className="flex items-center gap-2.5 p-3 rounded-lg border border-white/10 bg-ink-900/40 text-[11px] font-mono tracking-wider text-paper/70"
            >
              <span className="text-white/30 text-[10px]">0{idx + 1}</span>
              <span className="w-1 h-1 rounded-full bg-paper/40" />
              <span className="truncate">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
