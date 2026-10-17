import { SITE_CONFIG } from "@/data/site-content";
import { Reveal } from "@/components/motion/reveal";

export function ProcessSection() {
  return (
    <section id="process" className="paper-section process-section">
      <div className="site-container">
        <Reveal className="section-intro"><div><p className="eyebrow text-studio-accent">03 / How we work</p><h2 className="section-heading mt-4 max-w-2xl">A clear path from rough idea to useful system.</h2></div><p className="max-w-sm text-sm leading-6 text-ink/60">Enough structure to keep the work moving. Enough room to respond to what we learn.</p></Reveal>
        <div className="process-list">{SITE_CONFIG.process.map((step, index) => <Reveal key={step.step} delay={index * 0.04} className="process-row"><span className="font-mono text-xs text-ink/35">{step.step}</span><h3>{step.title}</h3><p>{step.summary}</p></Reveal>)}</div>
      </div>
    </section>
  );
}
