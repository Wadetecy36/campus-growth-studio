import React from "react";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { WorkSection } from "@/components/sections/work-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ApproachSection } from "@/components/sections/approach-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteDock } from "@/components/site-dock";

export function App() {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-paper selection:text-ink font-sans flex flex-col justify-between">
      {/* Persistent Quiet Navigation Header */}
      <SiteHeader />

      {/* Main Semantic Landmark */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <ProcessSection />
        <ApproachSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Floating Magnetic Dock Component */}
      <SiteDock />
    </div>
  );
}

export default App;
