import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaBand } from "@/components/ui/cta-band";
import { cta, faq, video } from "@/features/home/content";
import { plans } from "@/features/home/data/pricing";
import { AppsSection } from "@/features/home/ui/apps-section";
import { CompareSection } from "@/features/home/ui/compare-section";
import { FaqSection } from "@/features/home/ui/faq-section";
import { FeaturesSection } from "@/features/home/ui/features-section";
import { HeroSection } from "@/features/home/ui/hero-section";
import { MarqueeSection } from "@/features/home/ui/marquee-section";
import { PricingSection } from "@/features/home/ui/pricing-section";
import { ResellersSection } from "@/features/home/ui/resellers-section";
import { ShopBanner } from "@/features/home/ui/shop-banner";
import { StatsSection } from "@/features/home/ui/stats-section";
import { StepsSection } from "@/features/home/ui/steps-section";
import { VideoSection } from "@/features/home/ui/video-section";
import { absoluteUrl, faqJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  description: site.description,
  path: "/",
});

/** The subscription and its plans, priced from the GBP list the owner sets. */
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${site.name} IPTV subscription`,
  description: site.description,
  image: absoluteUrl("/opengraph-image.png"),
  brand: { "@type": "Brand", name: site.name },
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.period} plan`,
    price: plan.prices.GBP,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: `${absoluteUrl()}/#pricing`,
  })),
};

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.featured.title,
  description: video.featured.description,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.featured.id}/maxresdefault.jpg`,
  uploadDate: video.featured.uploadDate,
  duration: video.featured.duration,
  embedUrl: `https://www.youtube-nocookie.com/embed/${video.featured.id}`,
  contentUrl: `https://www.youtube.com/watch?v=${video.featured.id}`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <FeaturesSection />
      <VideoSection />
      <StepsSection />
      <PricingSection />
      <CompareSection />
      <StatsSection />
      <AppsSection />
      <ShopBanner />
      <ResellersSection />
      <FaqSection />
      <CtaBand id="cta-title" {...cta} />
      <JsonLd data={productJsonLd} />
      <JsonLd data={videoJsonLd} />
      <JsonLd data={faqJsonLd(faq.items)} />
    </>
  );
}
