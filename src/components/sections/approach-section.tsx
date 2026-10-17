import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { SITE_CONFIG } from "@/data/site-content";
import { Reveal } from "@/components/motion/reveal";

export function ApproachSection() {
  const [activeId, setActiveId] = useState(SITE_CONFIG.niches[0].id);
  const reducedMotion = useReducedMotion();
  const active = SITE_CONFIG.niches.find((item) => item.id === activeId) ?? SITE_CONFIG.niches[0];

  return (
    <section id="approach" className="paper-section">
      <div className="site-container">
        <Reveal className="section-intro">
          <div><p className="eyebrow text-studio-accent">04 / Who we build for</p><h2 className="section-heading mt-4 max-w-3xl">Built for businesses that are ready to look the part.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-ink/60">Different businesses, same need: make it easier for the right people to understand, trust and choose you.</p>
        </Reveal>
        <div className="niche-layout">
          <div className="niche-nav" role="tablist" aria-label="Business types">
            {SITE_CONFIG.niches.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={activeId === item.id} onClick={() => setActiveId(item.id)} className={`niche-tab ${activeId === item.id ? "is-active" : ""}`}><span>0{index + 1}</span>{item.label}</button>)}
          </div>
          <motion.div key={active.id} className="niche-feature" role="tabpanel" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <p className="eyebrow text-studio-accent">{active.label}</p>
            <h3 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-ink sm:text-7xl">{active.title}</h3>
            <p className="mt-8 max-w-md text-lg leading-8 text-ink/65">{active.description}</p>
            <a href="#contact" className="button button-dark mt-10">Talk about your business <span aria-hidden="true">↗</span></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
