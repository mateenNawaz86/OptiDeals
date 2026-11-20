import type { Metadata } from "next";
import { about } from "@/features/about/content";
import { AboutPage } from "@/features/about/ui/about-page";

export const metadata: Metadata = {
  title: about.metaTitle,
  description: about.metaDescription,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
