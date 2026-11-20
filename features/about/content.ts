import type { ComponentType, SVGProps } from "react";
import {
  FourKIcon,
  GlobeIcon,
  ShieldCheckIcon,
} from "@/components/assets/svgs/components";

export const about = {
  metaTitle: "About us",
  metaDescription:
    "OptiDeals has delivered reliable, affordable IPTV to customers worldwide since 2020.",
  title: "About us",
  story: {
    lead: "Welcome to OptiDeals – your trusted IPTV provider!",
    paragraphs: [
      "At OptiDeals, we bring you the best in IPTV entertainment with over 5 years of industry experience. Since our launch, we’ve been committed to delivering high-quality, reliable, and affordable IPTV services to customers around the world.",
      "Whether you’re looking for live TV, movies, sports, news, or international channels, we offer a wide range of content to meet every viewing preference. Our goal is simple: to provide smooth streaming, crystal-clear quality, and round-the-clock support.",
      "We believe in customer satisfaction, innovation, and continuous improvement. Our team works hard to stay ahead of the curve with the latest IPTV technology, ensuring you enjoy a premium viewing experience—anytime, anywhere.",
      "Join the thousands who trust OptiDeals as their go-to IPTV solution. Experience entertainment the way it’s meant to be. Your satisfaction is our priority.",
    ],
  },
  journey: {
    title: "Our journey",
    lead: "Founded in 2020, OptiDeals began with a clear vision: to make premium IPTV services accessible and affordable to everyone.",
    paragraphs: [
      "Over the years, we've built a solid reputation for reliability, quality, and excellent customer service. Our experience has taught us the ins and outs of IPTV—from choosing the best servers to ensuring 24/7 uptime and delivering fast, buffer-free streaming.",
      "We've served thousands of satisfied customers worldwide, helping individuals, families, and businesses cut the cord and switch to smarter, more flexible TV options. Thanks to continuous learning and deep industry knowledge, we stay ahead of trends and adapt quickly to new technologies, offering you the latest and most efficient IPTV solutions.",
    ],
  },
  highlights: {
    title: "Entertainment at your hand",
    items: [
      { title: "Worldwide", body: "Worldwide service", icon: GlobeIcon },
      { title: "Best quality", body: "HD and 4K quality", icon: FourKIcon },
      {
        title: "Secure payment",
        body: "Secure and safe payment methods",
        icon: ShieldCheckIcon,
      },
    ] satisfies {
      title: string;
      body: string;
      icon: ComponentType<SVGProps<SVGSVGElement>>;
    }[],
  },
  cta: {
    title: "Ready to start watching?",
    body: "Pick a plan that suits you, or ask our team for a trial first.",
    primary: { label: "View plans", href: "/#pricing" },
    secondary: { label: "Contact us", href: "/contact" },
  },
};
