import type { Metadata } from "next";
import { LegalPage } from "@/features/legal/ui/legal-page";

export const metadata: Metadata = {
  title: "Terms and conditions",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <LegalPage title="Terms and conditions" />;
}
