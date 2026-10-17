import { useState } from "react";
import type { FormEvent } from "react";
import { IconArrowUpRight, IconCopy, IconCheck } from "@tabler/icons-react";
import { SITE_CONFIG } from "@/data/site-content";

const businessTypes = ["Food or hospitality", "Beauty or cosmetics", "Product or ecommerce", "Personal brand", "Local or professional service", "Other"];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", business: "", email: "", type: businessTypes[0], need: "", message: "" });
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const copyEmail = async () => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.brand.contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError("Please add your name, email and a short message."); return; }
    setError("");
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nBusiness: ${form.business}\nEmail / WhatsApp: ${form.email}\nBusiness type: ${form.type}\nWhat is needed: ${form.need}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${SITE_CONFIG.brand.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div><p className="eyebrow text-studio-accent">05 / Start a conversation</p><h2 className="section-heading mt-5 max-w-xl text-white">Your business deserves a better digital front door.</h2><p className="mt-7 max-w-md text-base leading-7 text-white/60">Tell us what you are building. We will help work out what the digital experience should make easier.</p><div className="mt-12 border-t border-white/10 pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">Direct inbox</p><div className="mt-3 flex flex-wrap items-center gap-3"><a href={`mailto:${SITE_CONFIG.brand.contactEmail}`} className="text-sm text-white underline decoration-white/25 underline-offset-4">{SITE_CONFIG.brand.contactEmail}</a><button type="button" onClick={copyEmail} className="copy-button" aria-label="Copy studio email">{copied ? <IconCheck size={14} /> : <IconCopy size={14} />} {copied ? "Copied" : "Copy"}</button></div></div></div>
        <form onSubmit={submit} className="contact-form" noValidate><div className="grid gap-5 sm:grid-cols-2"><Field label="Your name *" value={form.name} onChange={(value) => update("name", value)} placeholder="Your name" /><Field label="Business" value={form.business} onChange={(value) => update("business", value)} placeholder="Business or brand" /></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Email or WhatsApp *" type="email" value={form.email} onChange={(value) => update("email", value)} placeholder="How should we reach you?" /><label className="field-label">Business type<select value={form.type} onChange={(event) => update("type", event.target.value)}>{businessTypes.map((type) => <option key={type}>{type}</option>)}</select></label></div><Field label="What do you need?" value={form.need} onChange={(value) => update("need", value)} placeholder="A website, better presentation, a booking flow..." /><label className="field-label">Tell us a little about it *<textarea value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="What are you trying to make easier for your customers?" rows={5} /></label>{error && <p className="text-sm text-red-700" role="alert">{error}</p>}<button type="submit" className="button button-dark w-full justify-center sm:w-auto">Send project enquiry <IconArrowUpRight size={16} aria-hidden="true" /></button><p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/40">This opens your own email client. No backend is implied.</p></form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (value: string) => void; placeholder: string; type?: string }) {
  return <label className="field-label">{label}<input type={type} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>;
}
