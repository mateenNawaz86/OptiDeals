import type { Metadata } from "next";
import { contact } from "@/features/contact/content";
import { ContactPage } from "@/features/contact/ui/contact-page";

export const metadata: Metadata = {
  title: contact.metaTitle,
  description: contact.metaDescription,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
