import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Showcase of custom PC builds — gaming rigs, workstations, water cooling, and specialty systems hand-built by NexusBuild.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Builds</h1>
          <div className="gradient-divider w-24 mx-auto mt-4 mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Every build is a unique creation — explore our portfolio of gaming rigs, workstations, and specialty systems.</p>
        </div>
      </section>
      <ProjectsClient />
    </>
  );
}
