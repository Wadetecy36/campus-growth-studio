import React from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { IconCheck } from "@tabler/icons-react";

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-paper-light text-ink border-b border-paper-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-paper-border">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-studio-muted">
                04 // METHODOLOGY
              </span>
              <span className="text-black/20">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-studio-primary font-bold">
                HOW WE BUILD
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-ink tracking-tight">
              A disciplined, <span className="font-serif italic font-normal text-stone-700">4-step</span> delivery framework.
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-studio-muted leading-relaxed">
            No endless slide decks or six-month delays. We turn strategy into working production systems through fast, structured iterations.
          </p>
        </div>

        {/* 4-Step Grid with Connecting Hairline Rule */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {SITE_CONFIG.process.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-xl border border-paper-border bg-paper p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-paper-border">
                  <span className="font-mono text-xs font-bold text-studio-muted">
                    STEP // {step.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-studio-accent font-semibold">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted font-sans leading-relaxed mb-6">
                  {step.summary}
                </p>

                {/* Sub-steps */}
                <div className="space-y-2 pt-2 border-t border-paper-border/60">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2 text-[11px] text-ink/80 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step completion pill */}
              <div className="mt-8 pt-4 border-t border-paper-border flex items-center justify-between text-[10px] font-mono text-studio-muted">
                <span>PHASE 0{idx + 1}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <IconCheck className="w-3 h-3" /> VERIFIABLE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
