import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-8xl font-bold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">Looks like this build doesn&apos;t exist. Maybe it needs more RGB?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex">
            <Button>Back Home</Button>
          </Link>
          <Link href="/contact" className="inline-flex">
            <Button variant="outline">Get a Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
