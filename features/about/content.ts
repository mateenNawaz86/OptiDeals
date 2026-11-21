import {
  GlobeIcon,
  MonitorIcon,
  ShieldCheckIcon,
  type Icon,
} from "@/components/ui/icons";
import { messages, whatsappHref } from "@/lib/site";

export const about = {
  metaTitle: "About Us: Trusted IPTV Provider Since 2020",
  metaDescription:
    "OptiDeals has delivered reliable, affordable IPTV in HD, 4K and 8K to customers worldwide since 2020. Meet the team behind your subscription.",
  eyebrow: "About us",
  title: { lead: "About", accent: "OptiDeals" },
  intro:
    "Your trusted IPTV provider since 2020, bringing live TV, movies, sports and international channels to viewers around the world.",
  story: {
    eyebrow: "Our story",
    title: "Entertainment the way it is meant to be",
    paragraphs: [
      "At OptiDeals, we bring you the best in IPTV entertainment. Since our launch in 2020, we have been committed to delivering high-quality, reliable and affordable IPTV services to customers around the world.",
      "Whether you are looking for live TV, movies, sports, news or international channels, we offer a wide range of content to meet every viewing preference. Our goal is simple: smooth streaming, crystal-clear quality and round-the-clock support.",
      "We believe in customer satisfaction, innovation and continuous improvement. Our team works hard to stay ahead of the curve with the latest IPTV technology, so you enjoy a premium viewing experience anytime, anywhere.",
    ],
  },
  journey: {
    eyebrow: "Our journey",
    title: "Premium IPTV, accessible and affordable to everyone",
    paragraphs: [
      "OptiDeals began with a clear vision: to make premium IPTV services accessible and affordable to everyone. Over the years, we have built a solid reputation for reliability, quality and excellent customer service.",
      "Our experience has taught us the ins and outs of IPTV, from choosing the best servers to keeping the service online around the clock and delivering fast, smooth streaming.",
      "We have served thousands of satisfied customers worldwide, helping individuals, families and businesses cut the cord and switch to smarter, more flexible TV. We keep learning, follow the industry closely and adapt quickly to new technology.",
    ],
  },
  facts: [
    { text: "2020", label: "Founded" },
    { count: { to: 5000, suffix: "+" }, text: "5,000+", label: "Satisfied customers" },
    {
      count: { to: 99.9, decimals: 1, suffix: "%" },
      text: "99.9%",
      label: "Service uptime",
    },
    { text: "24/7", label: "Customer support" },
  ] satisfies {
    text: string;
    label: string;
    count?: { to: number; decimals?: number; suffix?: string };
  }[],
  highlights: {
    eyebrow: "What you get",
    title: "Entertainment at your fingertips",
    items: [
      {
        title: "Worldwide service",
        body: "Watch from wherever you are, with channels from the USA, UK, Europe, Asia and beyond.",
        icon: GlobeIcon,
      },
      {
        title: "HD, 4K and 8K quality",
        body: "Live channels, movies and series streamed in sharp HD and 4K, with 8K packages for the biggest screens.",
        icon: MonitorIcon,
      },
      {
        title: "Secure payment",
        body: "Pay for your subscription with secure and safe payment methods.",
        icon: ShieldCheckIcon,
      },
    ] satisfies { title: string; body: string; icon: Icon }[],
  },
  cta: {
    eyebrow: "Join us",
    title: "Ready to start watching?",
    body: "Pick a plan that suits you, or message our team for a trial first.",
    primary: { label: "Chat on WhatsApp", href: whatsappHref(messages.general) },
    secondary: { label: "View plans", href: "/#pricing" },
  },
};
