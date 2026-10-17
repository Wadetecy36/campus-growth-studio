import { SITE_CONFIG } from "@/data/site-content";
import { Reveal } from "@/components/motion/reveal";

export function StatementSection() {
  return (
    <section className="statement-section">
      <Reveal className="site-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <p className="eyebrow text-studio-accent">{SITE_CONFIG.statement.eyebrow}</p>
        <div>
          <h2 className="section-heading max-w-4xl">{SITE_CONFIG.statement.title}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/65">{SITE_CONFIG.statement.body}</p>
        </div>
      </Reveal>
    </section>
  );
}
