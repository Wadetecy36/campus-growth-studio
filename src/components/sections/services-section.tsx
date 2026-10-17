import { IconArrowUpRight } from "@tabler/icons-react";
import { SITE_CONFIG } from "@/data/site-content";
import { Reveal } from "@/components/motion/reveal";

export function ServicesSection() {
  return (
    <section id="services" className="dark-section border-y border-white/10">
      <div className="site-container">
        <Reveal className="section-intro">
          <div><p className="eyebrow text-studio-accent">02 / What we do</p><h2 className="section-heading mt-4 max-w-2xl text-white">More than a website. A clearer way to do business online.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-white/55">We bring presentation, customer journeys and lightweight systems into the same conversation.</p>
        </Reveal>
        <div className="service-list">
          {SITE_CONFIG.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05} className="service-row group">
              <span className="service-number">{service.number}</span>
              <div className="service-main"><h3>{service.title}</h3><p>{service.summary}</p></div>
              <ul className="service-deliverables">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
              <IconArrowUpRight className="service-arrow" size={20} aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
