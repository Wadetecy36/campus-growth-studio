import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Studio", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent border-b border-white/10 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-paper hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper rounded"
          aria-label={`${SITE_CONFIG.brand.name} home`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-studio-accent animate-pulse" />
          <div className="flex flex-col">
            <span className="font-sans font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              {SITE_CONFIG.brand.name}
            </span>
            <span className="font-mono text-[9px] tracking-widest text-paper/45 uppercase">
              STUDIO // {SITE_CONFIG.brand.established}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase font-mono tracking-widest text-paper/70 hover:text-white transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-paper/40 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{SITE_CONFIG.brand.statusBadge}</span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-ink text-paper text-xs font-mono uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
          >
            <span>Start a project</span>
            <IconArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-paper text-[11px] font-mono uppercase tracking-wider"
          >
            Start
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-md border border-white/15 text-paper hover:text-white hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
          >
            {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[61px] z-50 bg-ink-950/98 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-6 pt-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-paper/40 border-b border-white/10 pb-2">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-paper hover:text-white transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-paper/40 tracking-widest">
                  #{link.label.toLowerCase()}
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-paper/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{SITE_CONFIG.brand.statusBadge}</span>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-paper text-ink font-mono text-xs font-bold uppercase tracking-wider shadow-lg active:scale-98 transition-transform"
            >
              <span>Start a project</span>
              <IconArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center">
              <a
                href={`mailto:${SITE_CONFIG.brand.contactEmail}`}
                className="text-xs font-mono text-paper/40 hover:text-paper transition-colors"
              >
                {SITE_CONFIG.brand.contactEmail}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
