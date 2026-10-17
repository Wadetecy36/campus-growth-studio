import { SITE_CONFIG } from "@/data/site-content";

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container"><div className="footer-top"><div><a href="#home" className="footer-brand"><span className="brand-mark" aria-hidden="true">+</span>{SITE_CONFIG.brand.name}</a><p className="mt-4 max-w-xs text-sm leading-6 text-white/45">Helping emerging businesses look clearer, sell better and grow online.</p></div><nav className="footer-nav" aria-label="Footer navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a></nav><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">Get in touch</p><a href={`mailto:${SITE_CONFIG.brand.contactEmail}`} className="mt-3 block text-sm text-white underline decoration-white/20 underline-offset-4">{SITE_CONFIG.brand.contactEmail}</a></div></div><div className="footer-bottom"><span>© {CURRENT_YEAR} {SITE_CONFIG.brand.name}</span><span>{SITE_CONFIG.brand.descriptor}</span></div></div></footer>;
}
