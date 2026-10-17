import React, { useState } from "react";
import { SITE_CONFIG } from "@/data/site-content";
import {
  IconMail,
  IconCopy,
  IconCheck,
  IconArrowRight,
  IconClock,
  IconShieldLock,
  IconSparkles,
} from "@tabler/icons-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    serviceType: "presence",
    message: "",
    auditRequested: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "triggered">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.brand.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name or company.";
    if (!formData.email.trim()) {
      errs.email = "Please provide a valid email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.project.trim()) errs.project = "Briefly describe your venture or brand.";
    if (!formData.message.trim()) errs.message = "Please share what you are looking to build.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose honest mailto URL
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.project} (${formData.name}) ${
        formData.auditRequested ? "[Audit Requested]" : ""
      }`
    );

    const bodyText = `Hi Campus Growth Studio team,

Name: ${formData.name}
Email: ${formData.email}
Project / Venture: ${formData.project}
Selected Focus: ${formData.serviceType}
Audit Requested: ${formData.auditRequested ? "Yes" : "No"}

Project Details:
${formData.message}

---
Sent via Campus Growth Studio inquiry portal`;

    const mailtoUrl = `mailto:${SITE_CONFIG.brand.contactEmail}?subject=${subject}&body=${encodeURIComponent(
      bodyText
    )}`;

    setSubmittedStatus("triggered");

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ink text-paper border-b border-white/10">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-studio-accent">
                06 // COMMENCE PROJECT
              </span>
              <span className="text-white/20">/</span>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/40">
                DISCOVERY INTAKE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
              Have something <span className="font-serif italic font-normal text-paper-muted">worth building</span>?
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-paper/70 leading-relaxed">
            Tell us about your venture, product drop, or digital presence. We typically reply with initial scoping insights within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Transparency */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xl font-sans font-bold text-white mb-3">
                Direct Communication
              </h3>
              <p className="text-sm text-paper/70 font-sans leading-relaxed mb-6">
                Prefer email directly? Reach out anytime with your project links or wireframes.
              </p>

              {/* Email Copy Card */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-white/15 bg-ink-900/90 backdrop-blur-sm mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-paper">
                    <IconMail className="w-5 h-5 text-studio-accent" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-paper/40 tracking-wider">
                      DIRECT INBOX
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.brand.contactEmail}`}
                      className="font-mono text-xs sm:text-sm text-white hover:underline"
                    >
                      {SITE_CONFIG.brand.contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy studio email address"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 text-xs font-mono text-paper transition-colors"
                >
                  {copied ? (
                    <>
                      <IconCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <IconCopy className="w-4 h-4 text-paper/60" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Points */}
              <div className="space-y-3 font-mono text-xs text-paper/70">
                <div className="flex items-center gap-2.5">
                  <IconClock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Response turnaround: &lt; 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconSparkles className="w-4 h-4 text-studio-accent shrink-0" />
                  <span>Student & campus founder pricing tiers available</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <IconShieldLock className="w-4 h-4 text-paper/40 shrink-0" />
                  <span>No spam, zero third-party data tracking</span>
                </div>
              </div>
            </div>

            {/* Free Audit Note */}
            <div className="p-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
              <h4 className="font-sans font-bold text-sm text-white mb-1">
                Looking for a 15-Minute Audit?
              </h4>
              <p className="text-xs text-paper/70 font-sans leading-relaxed">
                Check the "Include free audit" box in the form, and we'll record an asynchronous teardown of your current UX, mobile load speed, and checkout flow.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Honest Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/15 bg-ink-900/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-widest text-paper/50">
                  Project Inquiry Form
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  DIRECT EMAIL FALLBACK
                </span>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Chen / Pulse Media"
                    className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-sm font-sans text-white placeholder-paper/30 outline-none transition-colors ${
                      errors.name ? "border-rose-500 ring-1 ring-rose-500" : "border-white/15 focus:border-white"
                    }`}
                  />
                  {errors.name && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@university.edu"
                    className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-sm font-sans text-white placeholder-paper/30 outline-none transition-colors ${
                      errors.email ? "border-rose-500 ring-1 ring-rose-500" : "border-white/15 focus:border-white"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Venture / Brand Name */}
              <div>
                <label htmlFor="contact-project" className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-2">
                  Project or Venture Name *
                </label>
                <input
                  id="contact-project"
                  type="text"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder="e.g. QuadDrop Apparel, Campus Eats, Personal Creator Brand"
                  className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-sm font-sans text-white placeholder-paper/30 outline-none transition-colors ${
                    errors.project ? "border-rose-500 ring-1 ring-rose-500" : "border-white/15 focus:border-white"
                  }`}
                />
                {errors.project && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.project}</p>}
              </div>

              {/* Service Focus Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-2">
                  Primary Capability Needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: "presence", label: "Digital Presence" },
                    { id: "growth", label: "Growth Systems" },
                    { id: "automation", label: "AI & Automation" },
                  ].map((option) => (
                    <button
                      type="button"
                      key={option.id}
                      onClick={() => setFormData({ ...formData, serviceType: option.id })}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-mono uppercase tracking-wider text-center transition-all ${
                        formData.serviceType === option.id
                          ? "border-paper bg-white text-ink font-bold"
                          : "border-white/15 bg-white/5 text-paper/70 hover:border-white/30"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-paper/70 mb-2">
                  Project Overview & Goals *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your timeline, current links or friction points, and what success looks like for this build..."
                  className={`w-full px-4 py-3 rounded-xl border bg-black/40 text-sm font-sans text-white placeholder-paper/30 outline-none transition-colors resize-none ${
                    errors.message ? "border-rose-500 ring-1 ring-rose-500" : "border-white/15 focus:border-white"
                  }`}
                />
                {errors.message && <p className="text-[11px] font-mono text-rose-400 mt-1">{errors.message}</p>}
              </div>

              {/* Free Audit Checkbox */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  id="audit-checkbox"
                  type="checkbox"
                  checked={formData.auditRequested}
                  onChange={(e) => setFormData({ ...formData, auditRequested: e.target.checked })}
                  className="w-4 h-4 rounded border-white/20 bg-black/40 text-studio-accent focus:ring-offset-0 focus:ring-0 cursor-pointer"
                />
                <label htmlFor="audit-checkbox" className="text-xs font-sans text-paper/80 cursor-pointer select-none">
                  Include a complimentary 15-minute digital presence & conversion teardown
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-paper text-ink font-mono text-xs font-bold uppercase tracking-widest hover:bg-white active:scale-98 transition-all cursor-pointer shadow-xl"
                >
                  <span>Submit Inquiry (Opens Email Client)</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] font-mono text-paper/40 text-center mt-3">
                  Honest notice: In this demo environment, submitting pre-fills your email client with your exact project details for instant dispatch.
                </p>
              </div>

              {submittedStatus === "triggered" && (
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono flex items-center gap-3">
                  <IconCheck className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-bold block">Inquiry formatted successfully.</span>
                    <span>If your email client didn't open automatically, write directly to {SITE_CONFIG.brand.contactEmail}.</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
