import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { contact } from "@/features/contact/content";
import { ContactPage } from "@/features/contact/ui/contact-page";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: contact.metaTitle,
  description: contact.metaDescription,
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <ContactPage />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
