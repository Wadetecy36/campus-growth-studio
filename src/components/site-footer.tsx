import React from "react";
import { SITE_CONFIG } from "@/data/site-content";
import { IconArrowUp } from "@tabler/icons-react";

const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ink-950 text-paper border-t border-white/10 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-studio-accent" />
              <span className="font-sans font-bold text-lg text-white">
                {SITE_CONFIG.brand.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-paper/60 font-sans max-w-sm leading-relaxed">
              {SITE_CONFIG.brand.descriptor}. Strategy with intent, design with precision, systems built to convert.
            </p>

            <div className="font-mono text-[10px] text-paper/40 space-y-1 pt-2">
              <div>LOCATION: {SITE_CONFIG.brand.location}</div>
              <div>COORDINATES: {SITE_CONFIG.brand.coordinates}</div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/40">
              NAVIGATION
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
              <li>
                <a href="#home" className="text-paper/70 hover:text-white transition-colors">
                  01 // Home
                </a>
              </li>
              <li>
                <a href="#work" className="text-paper/70 hover:text-white transition-colors">
                  02 // Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-paper/70 hover:text-white transition-colors">
                  03 // Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-paper/70 hover:text-white transition-colors">
                  04 // Process
                </a>
              </li>
              <li>
                <a href="#approach" className="text-paper/70 hover:text-white transition-colors">
                  05 // Studio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-paper/70 hover:text-white transition-colors">
                  06 // Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/40">
              INQUIRIES
            </span>
            <p className="text-xs text-paper/70 font-sans">
              Accepting select student & campus client cohorts for {CURRENT_YEAR}.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.brand.contactEmail}`}
              className="inline-block font-mono text-xs text-white hover:underline pt-1"
            >
              {SITE_CONFIG.brand.contactEmail}
            </a>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-paper/40">
          <div>
            © {CURRENT_YEAR} {SITE_CONFIG.brand.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>DEMO VERSION 1.0</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-1"
            >
              <span>Back to top</span>
              <IconArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
