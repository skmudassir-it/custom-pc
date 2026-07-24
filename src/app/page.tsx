import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { HomeClient } from "@/components/HomeClient";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return <HomeClient />;
}
