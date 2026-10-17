import { IconArrowUpRight } from "@tabler/icons-react";
import { SITE_CONFIG, ProjectConcept } from "@/data/site-content";
import { ParallaxFrame, Reveal } from "@/components/motion/reveal";

function ProjectPreview({ project }: { project: ProjectConcept }) {
  return (
    <div className={`project-preview project-preview-${project.accent}`}>
      <div className="preview-browser"><span /><span /><span /><em>{project.id}.studio / {project.type.toLowerCase()}</em></div>
      <div className="preview-content">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">{project.category}</p>
        <div className="mt-8 max-w-sm"><div className="preview-line preview-line-long" /><div className="preview-line preview-line-short" /></div>
        <div className="mt-10 flex gap-2"><span className="preview-chip">DISCOVER</span><span className="preview-chip preview-chip-muted">CHOOSE</span><span className="preview-chip preview-chip-muted">ACT</span></div>
      </div>
      <div className="preview-corner">{project.type}</div>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="dark-section">
      <div className="site-container">
        <Reveal className="section-intro">
          <div><p className="eyebrow text-studio-accent">01 / Selected directions</p><h2 className="section-heading mt-4 max-w-3xl text-white">Work that starts with the business, not the template.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-white/55">A few internal concepts showing how we think about real customer journeys. They are not client case studies.</p>
        </Reveal>
        <div className="project-list">
          {SITE_CONFIG.projects.map((project, index) => <Reveal key={project.id} delay={index * 0.06} className="project-item"><ParallaxFrame><ProjectPreview project={project} /></ParallaxFrame><div className="project-copy"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow text-studio-accent">0{index + 1} / {project.type}</p><h3 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-white sm:text-5xl">{project.title}</h3></div><IconArrowUpRight className="mt-1 shrink-0 text-white/45" size={22} aria-hidden="true" /></div><p className="mt-5 max-w-md text-sm leading-6 text-white/60">{project.summary}</p><p className="mt-8 max-w-md border-l border-white/20 pl-4 text-sm leading-6 text-white/45">{project.problem}</p><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">{project.deliverables.map((item) => <span key={item} className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/45">{item}</span>)}</div></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
