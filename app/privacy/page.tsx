import type { Metadata } from "next";
import { LegalPage } from "@/features/legal/ui/legal-page";
import { pageMetadata } from "@/lib/seo";

// Placeholder text: kept out of search results until the final copy is published.
export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description: "Privacy policy for the OptiDeals IPTV service.",
  path: "/privacy",
  index: false,
});

export default function Page() {
  return <LegalPage title="Privacy policy" />;
}
