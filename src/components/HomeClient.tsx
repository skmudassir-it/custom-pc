"use client";

import { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleCheck, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Stats } from "@/components/layout/Stats";
import { services, projects, testimonials } from "@/lib/data";

export function HomeClient() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">Hand-Built in Austin, TX</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Custom PCs <span className="text-primary">Engineered</span> to Perfection
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every build is a masterpiece — hand-selected components, meticulous cable management, 
              and a 72-hour burn-in test. From esports rigs to AI workstations, we build it right.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="gap-2">
                  Start Your Build <FontAwesomeIcon icon={faArrowRight} className="size-4" />
                </Button>
              </Link>
              <Link href="/projects" className="inline-flex">
                <Button variant="outline" size="lg">View Our Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">From component selection to final delivery, we handle every detail.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="glass-card h-full">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline" className="gap-2">
                View All Services <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Recent Builds</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
            <p className="text-muted-foreground max-w-xl mx-auto">Showcase builds that push the limits of performance and design.</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 justify-center bg-transparent gap-2 flex-wrap">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Gaming">Gaming</TabsTrigger>
              <TabsTrigger value="Workstation">Workstation</TabsTrigger>
              <TabsTrigger value="Water Cooling">Water Cooling</TabsTrigger>
            </TabsList>
            {["all", "Gaming", "Workstation", "Water Cooling"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => tab === "all" || p.category === tab)
                    .map((project, i) => (
                      <Card key={i} className="glass-card overflow-hidden">
                        <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-base">{project.title}</CardTitle>
                          <CardDescription className="text-xs">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Badge variant="secondary" className="text-xs font-mono">{project.specs}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline" className="gap-2">
                View All Projects <FontAwesomeIcon icon={faArrowRight} className="size-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          </div>
          <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass-card h-full flex flex-col">
                    <CardContent className="flex-1 pt-6">
                      <FontAwesomeIcon icon={faQuoteLeft} className="size-5 text-primary/30 mb-3" />
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.text}</p>
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <span key={j} className="text-amber-400 text-sm">★</span>
                        ))}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to Build Your Dream PC?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">Book a free consultation and we&apos;ll spec out the perfect build for your needs and budget.</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary">Get Your Free Quote</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
