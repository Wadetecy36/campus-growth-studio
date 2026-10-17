import React, { useState, useEffect } from "react";
import { SITE_CONFIG, ProjectConcept } from "@/data/site-content";
import {
  IconArrowUpRight,
  IconX,
  IconCheck,
} from "@tabler/icons-react";

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectConcept | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-ink border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Restraint */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-studio-accent">
                02 // SELECTED WORK
              </span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/40">
                PROVEN CONCEPTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
              Systems designed to <span className="font-serif italic font-normal text-paper-muted">convert</span>.
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-paper/70 leading-relaxed">
            Every concept below is engineered for real campus scenarios. Click any project to inspect the architecture, user journey, and technical deliverables.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-ink-900/90 hover:border-white/40 transition-all duration-300 overflow-hidden shadow-xl"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-full border border-white/15 bg-white/5 font-mono text-[10px] tracking-widest uppercase text-paper/75">
                    {project.badge}
                  </span>
                  <span className="font-mono text-[11px] text-paper/45">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-paper-muted transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-paper/70 font-sans leading-relaxed line-clamp-2">
                  {project.oneLiner}
                </p>
              </div>

              {/* Rich CSS-rendered Visual Preview */}
              <div className="px-6 py-2">
                <div className="relative w-full h-48 rounded-xl border border-white/10 bg-black/60 p-3 overflow-hidden flex flex-col justify-between">
                  {/* Mock Browser/App Chrome */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[9px] font-mono text-paper/40">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <span className="truncate max-w-[140px] text-white/50">{project.id}.studio/demo</span>
                    <span className="text-emerald-400/80">LIVE</span>
                  </div>

                  {/* Dynamic Abstract Interface Preview depending on project */}
                  {project.id === "campus-commerce" && (
                    <div className="space-y-2 py-2">
                      <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-neutral-800 border border-white/20 flex items-center justify-center font-mono text-[9px]">
                            HOODIE
                          </div>
                          <div>
                            <div className="w-16 h-2 bg-white/60 rounded" />
                            <div className="w-10 h-1.5 bg-white/20 rounded mt-1" />
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-paper">$68.00</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="flex-1 py-1 px-2 rounded bg-white text-ink text-[9px] font-mono font-bold text-center">
                          APPLE PAY // 1-TAP
                        </div>
                        <div className="py-1 px-2 rounded border border-white/20 text-[9px] font-mono text-white/60">
                          M / L / XL
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "the-daily-crumb" && (
                    <div className="space-y-2 py-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <div className="text-[9px] font-mono text-emerald-400">BATCH 04 FRESH</div>
                          <div className="w-12 h-1.5 bg-white/40 rounded mt-1" />
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <div className="text-[9px] font-mono text-studio-accent">PICKUP: 8:45 AM</div>
                          <div className="w-10 h-1.5 bg-white/40 rounded mt-1" />
                        </div>
                      </div>
                      <div className="w-full py-1 rounded bg-stone-200 text-ink text-[9px] font-mono font-bold text-center">
                        EXPRESS PASS CONFIRMED
                      </div>
                    </div>
                  )}

                  {project.id === "creator-os" && (
                    <div className="space-y-2 py-2">
                      <div className="flex items-center justify-between border border-white/10 bg-white/5 p-2 rounded">
                        <div className="text-[9px] font-mono text-white/70">SPONSOR INQUIRY TIER</div>
                        <div className="text-[9px] font-mono text-emerald-400">QUALIFIED</div>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-white/40 px-1">
                        <span>CPM: $32</span>
                        <span>ENGAGEMENT: 8.4%</span>
                      </div>
                    </div>
                  )}

                  {/* Mock Stat Footprint */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono">
                    <span className="text-paper/50">{project.statLabel}</span>
                    <span className="text-white font-bold">{project.statValue}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Working Interactive Trigger */}
              <div className="p-6 pt-4 flex items-center justify-between border-t border-white/10 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-paper/60 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-paper/40">
                      +{project.techStack.length - 2}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-ink text-paper text-xs font-mono uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper cursor-pointer"
                >
                  <span>View concept</span>
                  <IconArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-ink-900 p-6 sm:p-8 text-paper shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 font-mono text-[10px] tracking-widest text-paper">
                    {selectedProject.badge}
                  </span>
                  <span className="font-mono text-xs text-paper/50">
                    {selectedProject.category}
                  </span>
                </div>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-sans font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close concept details modal"
                className="p-2 rounded-full border border-white/20 text-paper/70 hover:text-white hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              {/* Challenge / Problem */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-studio-accent mb-2">
                  01 // The Friction
                </h4>
                <p className="text-sm sm:text-base text-paper/80 font-sans leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Engineered Solution */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
                  02 // The System Solution
                </h4>
                <p className="text-sm sm:text-base text-paper/80 font-sans leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50 mb-3">
                  03 // Production Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-paper/90"
                    >
                      <IconCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-paper/50 mb-2">
                  04 // Recommended Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-white/15 bg-white/5 font-mono text-xs text-paper/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[11px] text-paper/40">
                PROVEN CONCEPT FRAMEWORK AVAILABLE
              </span>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-paper text-ink font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>Build a similar system</span>
                <IconArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
