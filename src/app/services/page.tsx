import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom PC building services — gaming rigs, workstations, upgrades, water cooling, cable management, and consultations.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From consultation to final build, we offer end-to-end custom PC services tailored to your exact needs.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug} className="glass-card overflow-hidden flex flex-col">
                <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                    <FontAwesomeIcon icon={service.icon} className="size-5" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardContent>
                  <Link href={`/services/${service.slug}`} className="inline-flex w-full">
                    <Button variant="outline" className="w-full gap-2">
                      Learn More <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
