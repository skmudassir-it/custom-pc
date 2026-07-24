import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShield, faHeart, faHandshake, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "NexusBuild Custom PCs — boutique PC building in Austin, TX. We engineer every system with precision and passion.",
};

const values = [
  { icon: faBolt, title: "Performance First", description: "Every component is selected for maximum real-world performance, not just spec sheets." },
  { icon: faShield, title: "Zero Compromises", description: "We never cut corners on PSUs, cooling, or build quality. Stability matters more than margins." },
  { icon: faHeart, title: "Built With Passion", description: "We're PC enthusiasts who love what we do. Every build gets the same attention we'd give our own." },
  { icon: faHandshake, title: "Lifetime Partnership", description: "Your build isn't a transaction — it's the start of a relationship. Free consultations for life." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About NexusBuild</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We believe every PC should be a masterpiece — not a commodity. Our story.</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl flex items-center justify-center">
              <FontAwesomeIcon icon={faMicrochip} className="size-20 text-primary/40" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                NexusBuild was born in a garage in Austin, Texas, where our founder — a former hardware engineer — 
                realized that off-the-shelf PCs were never truly optimized. Mass-produced systems compromise on PSUs, 
                cooling, and cable management because those don't show up on a spec sheet.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We started building for friends and family in 2019, and word spread fast. Gamers loved the attention to 
                detail. Architects and researchers loved the stability. Today, we're a team of six master builders 
                who treat every PC like a commissioned artwork.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our 72-hour burn-in test isn't marketing — it's our guarantee that your system will run flawlessly 
                from day one. We've shipped over 500 builds and maintain a 4.9-star rating because we never stop 
                caring about the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">What We Stand For</h2>
            <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} className="glass-card text-center">
                <CardHeader>
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-base">{v.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{v.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
