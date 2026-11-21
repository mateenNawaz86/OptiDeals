import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { about } from "@/features/about/content";
import { AboutPage } from "@/features/about/ui/about-page";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: about.metaTitle,
  description: about.metaDescription,
  path: "/about",
});

export default function Page() {
  return (
    <>
      <AboutPage />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
