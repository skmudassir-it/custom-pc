import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex mb-8">
            <Button variant="ghost" className="gap-2">
              <FontAwesomeIcon icon={faArrowLeft} className="size-3.5" /> Back to Services
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="w-full h-64 sm:h-80 bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <FontAwesomeIcon icon={service.icon} className="size-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{service.title}</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.detailDescription}</p>
              <div className="grid sm:grid-cols-2 gap-2 mb-8">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <FontAwesomeIcon icon={faCircleCheck} className="size-4 text-primary mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex">
                <Button size="lg" className="gap-2">Get a Quote for This Service</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">Other Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <div className="glass-card p-6">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <FontAwesomeIcon icon={s.icon} className="size-4" />
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.description.slice(0, 80)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
