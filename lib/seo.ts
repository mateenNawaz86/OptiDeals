import type { Metadata } from "next";
import { config } from "./config";
import { email, site, whatsapp, whatsappHref } from "./site";

/** Absolute URL for a site path, without a trailing slash on the home page. */
export const absoluteUrl = (path = "/") =>
  `${config.siteUrl}${path === "/" ? "" : path}`;

/**
 * Per-page metadata. Next merges metadata shallowly, so a page that sets `openGraph` must
 * repeat the shared fields; this keeps title, description, canonical and social cards in step.
 */
export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  /** Omit on the home page to use the site's default title. */
  title?: string;
  description: string;
  path: string;
  /** False for pages that should stay out of search results. */
  index?: boolean;
}): Metadata {
  const socialTitle = title ? `${title} | ${site.name}` : site.title;
  // Stated here because a page-level `openGraph` replaces the image inherited from app/.
  const image = {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: `${site.name}: ${site.tagline}`,
  };

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    ...(index ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_GB",
      url: path,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

type JsonLdNode = Record<string, unknown>;

export const organizationJsonLd = (): JsonLdNode => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${absoluteUrl()}/#organization`,
  name: site.name,
  url: absoluteUrl(),
  logo: absoluteUrl("/apple-icon.png"),
  description: site.description,
  foundingDate: String(site.foundingYear),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: `+${whatsapp.number}`,
    email: email.address,
    url: whatsappHref(),
    availableLanguage: "English",
  },
});

export const websiteJsonLd = (): JsonLdNode => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${absoluteUrl()}/#website`,
  name: site.name,
  url: absoluteUrl(),
  inLanguage: "en",
  publisher: { "@id": `${absoluteUrl()}/#organization` },
});

export const breadcrumbJsonLd = (
  trail: { name: string; path: string }[],
): JsonLdNode => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqJsonLd = (
  items: { question: string; answer: string }[],
): JsonLdNode => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});
