import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for custom PC builds — Starter, Performance, and Ultimate tiers for every budget.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Transparent Pricing</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">No hidden fees. Every build includes consultation, assembly, testing, and warranty.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className={`glass-card relative ${tier.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-extrabold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground text-sm ml-1">starting</span>
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <FontAwesomeIcon icon={faCircleCheck} className="size-4 text-primary mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full mt-8">
                    <Button className={`w-full ${tier.popular ? "" : "bg-primary/90 hover:bg-primary"}`}>
                      Get Started <FontAwesomeIcon icon={faArrowRight} className="size-3.5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How long does a build take?", a: "Typical build time is 5-10 business days after parts arrive, plus a 72-hour burn-in test. Rush builds available for an additional fee." },
              { q: "Do you ship nationwide?", a: "Yes! We ship to all 50 states with custom foam-in-place packaging that protects even the heaviest GPUs during transit." },
              { q: "What warranty do you offer?", a: "All builds include a minimum 1-year warranty on assembly and our labor. Individual components carry their manufacturer warranties (typically 3-5 years)." },
              { q: "Can I supply my own parts?", a: "Absolutely. We offer a build-only service where we assemble, cable-manage, and test with parts you provide. We'll verify compatibility first." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, bank transfer, and financing through Affirm. 50% deposit required to start, balance due before shipping." },
            ].map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
