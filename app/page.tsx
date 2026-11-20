import { AppsSection } from "@/features/home/ui/apps-section";
import { FaqSection } from "@/features/home/ui/faq-section";
import { FeaturesSection } from "@/features/home/ui/features-section";
import { HeroSection } from "@/features/home/ui/hero-section";
import { PricingSection } from "@/features/home/ui/pricing-section";
import { ShopBanner } from "@/features/home/ui/shop-banner";
import { StatsSection } from "@/features/home/ui/stats-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <StatsSection />
      <AppsSection />
      <ShopBanner />
      <FaqSection />
    </>
  );
}
