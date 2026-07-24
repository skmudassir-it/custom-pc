"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { siteConfig, services } from "@/lib/data";

export default function ContactPage() {
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service,
      budget: (form.elements.namedItem("budget") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitted(true);
    setSending(false);
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-6">
              <FontAwesomeIcon icon={faPaperPlane} className="size-6" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Quote Request Sent!</h1>
            <p className="text-muted-foreground mb-8">Thanks for reaching out. We review every inquiry and typically respond within 24 hours. In the meantime, check out our past builds.</p>
            <a href="/projects" className="inline-flex"><Button variant="outline">View Our Projects</Button></a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Get a Quote</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Tell us what you need and we&apos;ll spec the perfect build.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Name *</label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email *</label>
                    <Input name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Service Interest</label>
                    <Select value={service} onValueChange={(v: string | null) => setService(v || "")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Budget Range</label>
                    <Input name="budget" placeholder="e.g. $2,000 - $3,000" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Tell Us About Your Build *</label>
                  <Textarea name="message" rows={5} placeholder="What games/apps will you use? Any specific preferences (colors, brands, size)?" required />
                </div>
                <Button type="submit" size="lg" disabled={sending} className="gap-2">
                  <FontAwesomeIcon icon={faPaperPlane} className="size-4" />
                  {sending ? "Sending..." : "Send Quote Request"}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faLocationDot} className="size-4 text-primary mt-1" />
                    <span className="text-muted-foreground">{siteConfig.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="size-4 text-primary" />
                    <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary">{siteConfig.phone}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary" />
                    <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary">{siteConfig.email}</a>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-3">Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Mon – Fri</span><span>10am – 7pm</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>11am – 5pm</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
