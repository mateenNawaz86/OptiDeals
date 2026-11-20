import type { Metadata } from "next";
import { LegalPage } from "@/features/legal/ui/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <LegalPage title="Privacy policy" />;
}
