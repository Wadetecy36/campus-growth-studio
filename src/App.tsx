import React from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { StatementSection } from "@/components/sections/statement-section";
import { WorkSection } from "@/components/sections/work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteAsciiBackdrop } from "@/components/site-ascii-backdrop";

export function App() {
  return (
    <div className="site-shell min-h-screen bg-ink text-paper selection:bg-paper selection:text-ink font-sans flex flex-col justify-between">
      <SiteAsciiBackdrop />
      {/* Persistent Quiet Navigation Header */}
      <SiteHeader />

      {/* Main Semantic Landmark */}
      <main id="main-content">
        <HeroSection />
        <StatementSection />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <ApproachSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <SiteFooter />

    </div>
  );
}

export default App;
