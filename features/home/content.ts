import type { ComponentType, SVGProps } from "react";
import {
  ActivationIcon,
  EntertainmentIcon,
  MoviesIcon,
  RatesIcon,
  SupportIcon,
} from "@/components/assets/svgs/components";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const hero = {
  titleLines: ["Best IPTV", "Subscription for all", "over the world"],
  body: "OptiDeals is a leading IPTV service provider offering high-quality live TV, movies, and series through internet streaming. It supports global channels with fast, reliable servers and 24/7 customer support. The service is compatible with smart TVs, Android, iOS, and MAC devices. OptiDeals delivers a seamless entertainment experience with affordable packages.",
  primaryCta: { label: "View plans", href: "/#pricing" },
  secondaryCta: { label: "Request a trial", href: "/contact?service=trial" },
  image: {
    src: "/images/hero-illustration.png",
    width: 1210,
    height: 756,
    alt: "People working around a large screen showing streaming content",
  },
};

export interface Feature {
  title: string;
  body: string;
  /** Vector icon, or a raster one from /public (the sports icon is a masked image in the design). */
  icon: Icon | { src: string; width: number; height: number };
  highlighted?: boolean;
}

export const features = {
  title: "Exclusive features and unrivalled benefits",
  intro: "Everything you need for a better TV experience, in one subscription.",
  items: [
    {
      title: "Sports channels",
      body: "Live football, cricket, F1, boxing and more, with the major leagues and events in HD.",
      icon: { src: "/images/icon-sports.png", width: 67, height: 71 },
    },
    {
      title: "Global movies & series",
      body: "Thousands of movies and box sets on demand, with new titles added regularly.",
      icon: MoviesIcon,
    },
    {
      title: "Global entertainment",
      body: "Channels from the USA, UK, Europe, Asia and beyond in a single subscription.",
      icon: EntertainmentIcon,
      highlighted: true,
    },
    {
      title: "Instant activation",
      body: "Your account is activated quickly after purchase, so you can start watching straight away.",
      icon: ActivationIcon,
    },
    {
      title: "Real-time support",
      body: "Our team is available 24/7 to help with setup, apps and any questions you have.",
      icon: SupportIcon,
    },
    {
      title: "Affordable rates",
      body: "Flexible plans from one month to two years, to suit every budget.",
      icon: RatesIcon,
    },
  ] satisfies Feature[],
};

export const pricing = {
  title: "Plans & pricing",
  intro:
    "Choose your region to see prices in your currency. Every plan includes the full library.",
  regionLegend: "Region",
  brand: "B1G IPTV",
  offer: "Big offer",
  ribbon: "Best value",
  cta: "Buy now",
  note: "Best for worldwide users",
};

export const stats = [
  { value: "+4 years", label: "Experience in business" },
  { value: "+5,000", label: "Satisfied clients" },
  { value: "99.9%", label: "Service uptime" },
];

export const apps = {
  title: "Workable apps",
  intro: "Use your subscription with these popular IPTV player apps.",
  items: [
    { name: "IPTV Smarters Pro", src: "/images/apps/iptv-smarters.png" },
    { name: "IBO Player Pro", src: "/images/apps/ibo-player-pro.png" },
    { name: "BOB TV", src: "/images/apps/bob-tv.png" },
    { name: "B1G", src: "/images/apps/b1g.png" },
    { name: "SET IPTV", src: "/images/apps/set-iptv.png" },
    { name: "TiviMate", src: "/images/apps/tivimate.png" },
  ],
};

export const shop = {
  title: "Sky Glass",
  cta: { label: "Shop Sky Glass", href: "/contact?service=skyGlass" },
  image: {
    src: "/images/shop-banner.jpg",
    alt: "Sky Glass Air TV on a living room sideboard",
  },
};

export const faq = {
  title: "Frequently asked questions",
  intro: "Still have questions? Ask away.",
  items: [
    {
      question: "What is IPTV?",
      answer:
        "IPTV (Internet Protocol Television) delivers live TV channels, movies and series over your internet connection instead of satellite or cable.",
    },
    {
      question: "How does IPTV work?",
      answer:
        "After you subscribe, you receive login details for our servers. Enter them in an IPTV app on your device and it streams the channels and on-demand content over your internet connection.",
    },
    {
      question: "Which devices are supported?",
      answer:
        "Smart TVs, Android and iOS phones and tablets, MAC devices and streaming boxes, using apps such as IPTV Smarters Pro, IBO Player Pro, SET IPTV or TiviMate.",
    },
    {
      question: "What channels and content can I watch?",
      answer:
        "Over 31,000 live channels including sports, news and international channels, plus 33,000 movies and 5,500 series.",
    },
    {
      question: "Do you offer a trial?",
      answer:
        "Yes. Request a trial through the contact form and our team will send you test access.",
    },
    {
      question: "What is the quality of your service?",
      answer:
        "Streams are delivered in HD and 4K on fast, reliable servers with 99.9% uptime and 24/7 customer support.",
    },
  ],
  more: { label: "Contact our team", href: "/contact" },
};
