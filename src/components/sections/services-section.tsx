import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/site-content";
import {
  IconCheck,
  IconClock,
  IconArrowRight,
  IconSparkles,
  IconCompass,
  IconArrowsExchange,
  IconCpu,
} from "@tabler/icons-react";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("presence");

  const serviceIcons: Record<string, React.ReactNode> = {
    presence: <IconCompass className="w-5 h-5 text-studio-primary" />,
    growth: <IconArrowsExchange className="w-5 h-5 text-studio-primary" />,
    automation: <IconCpu className="w-5 h-5 text-studio-primary" />,
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-paper text-ink border-b border-paper-border">
      {/* Subtle paper grid pattern */}
      <div className="absolute inset-0 bg-paper-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-paper-border">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-studio-muted">
                03 // CORE CAPABILITIES
              </span>
              <span className="text-black/20">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-studio-primary font-bold">
                PRODUCTIZED OFFER
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-ink tracking-tight">
              Focused on <span className="font-serif italic font-normal text-stone-700">outcomes</span>, not vanity deliverables.
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-studio-muted leading-relaxed">
            Every engagement is sprint-scoped and custom-engineered around your exact campus or creator business model.
          </p>
        </div>

        {/* 3-Column Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SITE_CONFIG.services.map((svc) => (
            <div
              key={svc.id}
              className={`relative flex flex-col justify-between rounded-2xl border p-8 transition-all duration-200 ${
                activeTab === svc.id
                  ? "border-ink bg-white shadow-elevated ring-1 ring-ink/10"
                  : "border-paper-border bg-paper-light hover:border-ink/40"
              }`}
              onClick={() => setActiveTab(svc.id)}
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-paper-border">
                  <span className="font-mono text-sm font-bold text-studio-muted">
                    {svc.number}
                  </span>
                  <div className="p-2 rounded-full bg-paper border border-paper-border">
                    {serviceIcons[svc.id]}
                  </div>
                </div>

                <h3 className="text-2xl font-sans font-bold text-ink mb-2">
                  {svc.title}
                </h3>
                <p className="font-serif italic text-base text-stone-700 mb-4">
                  "{svc.tagline}"
                </p>
                <p className="font-sans text-xs sm:text-sm text-studio-muted leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-studio-muted">
                    Core Deliverables:
                  </span>
                  {svc.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-ink/85">
                      <IconCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-6 border-t border-paper-border space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-studio-muted">
                  <div className="flex items-center gap-1.5">
                    <IconClock className="w-3.5 h-3.5" />
                    <span>Sprint: {svc.timeline}</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold">SPRINT BASED</span>
                </div>

                <a
                  href="#contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-ink bg-ink text-paper hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <span>Inquire about this</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Collaboration Banner */}
        <div className="rounded-2xl border border-paper-border bg-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-paper border border-paper-border text-ink">
              <IconSparkles className="w-6 h-6 text-studio-accent" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg text-ink">
                Need a tailored digital presence audit first?
              </h4>
              <p className="font-sans text-xs sm:text-sm text-studio-muted mt-0.5">
                We'll review your current site, mobile flow, and competitor positioning with a direct 15-minute diagnostic.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-ink text-ink hover:bg-ink hover:text-paper text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap"
          >
            <span>Request free audit</span>
            <IconArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
