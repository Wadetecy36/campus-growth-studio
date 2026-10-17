import { useEffect, useState } from "react";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { SITE_CONFIG } from "@/data/site-content";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled ? "border-b border-white/10 bg-ink/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="site-container flex h-[72px] items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3" aria-label={`${SITE_CONFIG.brand.name} home`}>
          <span className="brand-mark" aria-hidden="true">+</span>
          <span>
            <span className="block text-sm font-semibold tracking-[-0.03em] text-white">Campus Growth</span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="button button-light button-small">
            Start a project <IconArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a href="#contact" className="button button-light button-small">Start</a>
          <button type="button" className="icon-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>
            {open ? <IconX size={20} aria-hidden="true" /> : <IconMenu2 size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu md:hidden">
          <nav aria-label="Mobile navigation" className="site-container flex flex-col gap-1 py-8">
            {navLinks.map((link, index) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 text-3xl font-serif text-paper">
                <span>{link.label}</span><span className="font-mono text-xs text-white/30">0{index + 1}</span>
              </a>
            ))}
          </nav>
          <div className="site-container border-t border-white/10 py-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">{SITE_CONFIG.brand.statusBadge}</div>
        </div>
      )}
    </header>
  );
}
