import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import { RevealObserver } from "@/components/effects/reveal-observer";
import { Spotlight } from "@/components/effects/spotlight";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { config } from "@/lib/config";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/** Body text. */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

/** Display face for headings and the wordmark. */
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // data-scroll-behavior: route changes jump to the top instantly; in-page anchors stay smooth.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${sora.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col overflow-x-clip">
        {/* Scroll-reveal content must stay visible when JavaScript is off. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="text-night-950 sr-only z-[60] rounded-md bg-white px-4 py-2 font-semibold shadow-lg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <RevealObserver />
        <Spotlight />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
