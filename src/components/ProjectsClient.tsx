"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";

const categories = ["All", "Gaming", "Workstation", "Small Form Factor", "Water Cooling", "Specialty"];

export function ProjectsClient() {
  const [filter, setFilter] = useState("All");

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="All" onValueChange={(v: string | null) => setFilter(v || "All")}>
          <TabsList className="mb-10 justify-center bg-transparent gap-2 flex-wrap">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((p) => cat === "All" || p.category === cat)
                  .map((project, i) => (
                    <Card key={i} className="glass-card overflow-hidden">
                      <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-1">{project.category}</Badge>
                        <CardTitle className="text-base">{project.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{project.specs}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
