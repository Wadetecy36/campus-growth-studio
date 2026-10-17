import React from "react";
import { SITE_CONFIG } from "@/data/site-content";
import {
  IconCheck,
  IconX,
  IconCode,
  IconRocket,
  IconUsers,
  IconTargetArrow,
} from "@tabler/icons-react";

export function ApproachSection() {
  const comparison = [
    {
      dimension: "Point of Contact",
      traditional: "Account executives and tiered project managers",
      studio: "Direct collaboration with senior designers & engineers",
    },
    {
      dimension: "Delivery Speed",
      traditional: "3 to 6 months with endless committee review rounds",
      studio: "Focused 2 to 3 week sprints with visible working software",
    },
    {
      dimension: "Tech Architecture",
      traditional: "Bloated page-builder templates with 80+ plugins",
      studio: "Handcrafted React, Tailwind, and high-performance APIs",
    },
    {
      dimension: "Primary Objective",
      traditional: "Vanity awards and billable agency hours",
      studio: "Measurable conversion rate and reduced operational drag",
    },
  ];

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <IconUsers className="w-5 h-5 text-paper" />;
      case 1:
        return <IconRocket className="w-5 h-5 text-paper" />;
      case 2:
        return <IconCode className="w-5 h-5 text-paper" />;
      case 3:
      default:
        return <IconTargetArrow className="w-5 h-5 text-paper" />;
    }
  };

  return (
    <section id="approach" className="relative py-24 sm:py-32 bg-ink text-paper border-b border-white/10">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dots-tech opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-studio-accent">
                05 // STUDIO PHILOSOPHY
              </span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/40">
                WHY CAMPUS GROWTH STUDIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
              Built for speed, <span className="font-serif italic font-normal text-paper-muted">clarity</span>, and craft.
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-paper/70 leading-relaxed">
            We operate like an embedded digital technical co-founder for your business. No fluff, no artificial overhead.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SITE_CONFIG.philosophy.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/15 bg-ink-900/80 p-6 flex flex-col justify-between hover:border-white/30 transition-colors"
            >
              <div>
                <div className="p-3 rounded-xl border border-white/15 bg-white/5 w-fit mb-5">
                  {getPillarIcon(idx)}
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-paper/70 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[10px] text-paper/40">
                PILLAR // 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: Traditional Agencies vs Studio */}
        <div className="rounded-2xl border border-white/15 bg-ink-900/60 p-6 sm:p-8 overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15 text-xs font-mono tracking-widest uppercase text-paper/50">
              <div className="w-1/4">Evaluation Point</div>
              <div className="w-3/8 text-rose-400/80">Traditional Agencies</div>
              <div className="w-3/8 text-emerald-400">Campus Growth Studio</div>
            </div>

            <div className="divide-y divide-white/10">
              {comparison.map((row) => (
                <div key={row.dimension} className="flex items-center justify-between py-4 text-xs sm:text-sm font-sans">
                  <div className="w-1/4 font-mono text-xs text-paper/60">{row.dimension}</div>
                  <div className="w-3/8 pr-4 text-paper/50 flex items-center gap-2">
                    <IconX className="w-4 h-4 text-rose-500/80 shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="w-3/8 pl-2 text-paper font-medium flex items-center gap-2">
                    <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{row.studio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
