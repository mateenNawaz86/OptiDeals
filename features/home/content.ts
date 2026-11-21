import {
  BoxIcon,
  FilmIcon,
  GlobeIcon,
  HeadphonesIcon,
  LayoutIcon,
  MonitorIcon,
  SmartphoneIcon,
  TabletIcon,
  TagIcon,
  TrophyIcon,
  TvIcon,
  UsersIcon,
  ZapIcon,
  type Icon,
} from "@/components/ui/icons";
import { messages, whatsappHref } from "@/lib/site";

export const hero = {
  eyebrow: "Live TV · Movies · Series · Sports",
  title: { lead: "Best IPTV subscription", rest: "for every screen, worldwide" },
  body: "Stream 31,000+ live channels, 33,000 movies and 5,500 series in HD and 4K, with 8K packages available. Fast, reliable servers, instant activation and 24/7 support on your smart TV, phone, tablet or computer.",
  primaryCta: { label: "View plans", href: "/#pricing" },
  secondaryCta: { label: "Request a trial", href: whatsappHref(messages.trial) },
  points: ["Instant activation", "99.9% uptime", "24/7 WhatsApp support"],
  stats: [
    { value: "31K+", label: "Live channels" },
    { value: "33K", label: "Movies on demand" },
    { value: "5.5K", label: "Series and box sets" },
    { value: "8K", label: "Ultra HD packages" },
  ],
  /** Labels on the decorative player mock-up. */
  tabs: ["Live TV", "Movies", "Series", "Sports"],
};

/** Scrolling strip under the hero; every item is a fact stated elsewhere on the page. */
export const marquee = [
  "31,000+ live channels",
  "33,000 movies",
  "5,500 series",
  "Live sports in HD",
  "HD and 4K streams",
  "8K Ultra HD packages",
  "International channels",
  "Instant activation",
  "99.9% uptime",
  "24/7 support",
];

export interface Feature {
  title: string;
  body: string;
  icon: Icon;
}

export const features = {
  eyebrow: "Why OptiDeals",
  title: "Everything you watch, in one IPTV subscription",
  intro:
    "Live sport, films, box sets and international channels, backed by fast servers and a support team that is always on.",
  items: [
    {
      title: "Live sports channels",
      body: "Football, cricket, F1, boxing and more, with the major leagues and events in HD.",
      icon: TrophyIcon,
    },
    {
      title: "Movies and series on demand",
      body: "Thousands of movies and box sets ready to play, with new titles added regularly.",
      icon: FilmIcon,
    },
    {
      title: "Channels from around the world",
      body: "Channels from the USA, UK, Europe, Asia and beyond in a single subscription.",
      icon: GlobeIcon,
    },
    {
      title: "Instant activation",
      body: "Your account is activated quickly after purchase, so you can start watching straight away.",
      icon: ZapIcon,
    },
    {
      title: "24/7 real-time support",
      body: "Our team is on WhatsApp around the clock to help with setup, apps and any questions.",
      icon: HeadphonesIcon,
    },
    {
      title: "Affordable plans",
      body: "Flexible plans from one month to two years, to suit every budget.",
      icon: TagIcon,
    },
  ] satisfies Feature[],
};

/** Videos from the company's YouTube channel; ids are the `v=` part of the watch URL. */
export const video = {
  eyebrow: "Watch",
  title: "See why viewers choose B1G IPTV",
  intro:
    "Tired of high cable bills? In under two minutes, see what you get with a B1G IPTV subscription.",
  featured: {
    id: "hoc5Yo5KB0Q",
    title: "Why Choose B1G IPTV? | Benefits, Features & Subscription Guide",
    description:
      "With B1G IPTV, enjoy thousands of live TV channels, movies, sports and more, all in one subscription.",
    uploadDate: "2025-10-03T22:19:04-07:00",
    duration: "PT1M44S",
  },
  guidesTitle: "Setup guides",
  channelCta: "More on our YouTube channel",
  guides: [
    {
      id: "hoRj2mkjogk",
      title: "How to install IPTV on Firestick",
      length: "1:59",
    },
    {
      id: "Br-sPsdpGbo",
      title: "How to install B1G IPTV Player on Firestick",
      length: "1:55",
    },
    {
      id: "YkRt2c1RMW4",
      title: "IPTV Smarters Pro on Google TV: easy setup",
      length: "1:27",
    },
  ],
};

export const steps = {
  eyebrow: "How it works",
  title: "Start watching in three simple steps",
  intro:
    "No dish, no cable and no engineer visit. All you need is an internet connection.",
  items: [
    {
      title: "Choose your plan",
      body: "Pick a subscription from one month to two years, or ask for a trial first.",
    },
    {
      title: "Message us on WhatsApp",
      body: "Tap any button on this page. We activate your account and send your login details.",
    },
    {
      title: "Open your app and watch",
      body: "Enter your details in a supported IPTV app on your device and start streaming.",
    },
  ],
};

export const pricing = {
  eyebrow: "Plans and pricing",
  title: "Simple pricing, with the full library in every plan",
  intro:
    "Choose your region to see prices in your currency. The longer the plan, the more you save.",
  regionLegend: "Region",
  brand: "B1G IPTV",
  ribbon: "Best value",
  cta: "Buy on WhatsApp",
  saving: "compared with paying monthly",
  premium: {
    eyebrow: "8K Ultra HD",
    title: "8K package: our sharpest picture yet",
    intro:
      "Four times the detail of 4K on supported channels, for viewers with an 8K or large 4K TV and a fast connection. Includes the full library of channels, movies and series.",
    brand: "B1G IPTV 8K",
    ribbon: "Best 8K value",
    saving: "compared with two 12-month plans",
    oneOff: "A full year of 8K Ultra HD",
  },
  multiDevice: "Watch on two devices at once",
  oneOff: "One month of full access",
  note: "Not sure yet? Ask for a trial before you buy.",
  noteCta: { label: "Request a trial", href: whatsappHref(messages.trial) },
};

export const compare = {
  eyebrow: "IPTV vs cable",
  title: "Why viewers are switching to IPTV",
  intro:
    "The same big-screen experience, without the dish, the box or the engineer visit.",
  columns: { ours: "OptiDeals IPTV", theirs: "Cable or satellite" },
  rows: [
    {
      label: "Setup",
      ours: "No dish, no cable, no engineer visit",
      theirs: "Dish or cable installation",
    },
    {
      label: "Live channels",
      ours: "31,000+ from around the world",
      theirs: "Limited to your package",
    },
    {
      label: "Movies and series",
      ours: "33,000 movies and 5,500 series included",
      theirs: "Often a paid extra",
    },
    {
      label: "Devices",
      ours: "Smart TV, phone, tablet, Mac and streaming box",
      theirs: "Usually tied to a set-top box",
    },
    {
      label: "Plans",
      ours: "Flexible, from 1 to 24 months",
      theirs: "Often long contracts",
    },
    {
      label: "Support",
      ours: "24/7 on WhatsApp",
      theirs: "Varies by provider",
    },
  ],
};

export const stats = [
  { text: "2020", label: "Streaming since" },
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
}[];

export const apps = {
  eyebrow: "Apps and devices",
  title: "Works with the IPTV apps you already use",
  intro:
    "Use your subscription with popular IPTV player apps on smart TVs, phones, tablets and computers.",
  items: [
    { name: "IPTV Smarters Pro", src: "/images/apps/iptv-smarters.png" },
    { name: "IBO Player Pro", src: "/images/apps/ibo-player-pro.png" },
    { name: "BOB TV", src: "/images/apps/bob-tv.png" },
    { name: "B1G", src: "/images/apps/b1g.png" },
    { name: "SET IPTV", src: "/images/apps/set-iptv.png" },
    { name: "TiviMate", src: "/images/apps/tivimate.png" },
  ],
  devicesTitle: "Supported devices",
  devices: [
    { label: "Smart TVs", icon: TvIcon },
    { label: "Android phones and tablets", icon: SmartphoneIcon },
    { label: "iPhone and iPad", icon: TabletIcon },
    { label: "Mac", icon: MonitorIcon },
    { label: "Streaming boxes", icon: BoxIcon },
  ] satisfies { label: string; icon: Icon }[],
};

export const shop = {
  eyebrow: "Also available",
  title: "Sky Glass IPTV",
  body: "Interested in Sky Glass? Message our team and we will come back to you with options and availability.",
  cta: { label: "Ask about Sky Glass", href: whatsappHref(messages.skyGlass) },
  video: {
    label: "Watch the guide",
    href: "https://www.youtube.com/watch?v=II7-VurQSGw",
  },
  image: {
    src: "/images/shop-banner.jpg",
    width: 2878,
    height: 1518,
    alt: "Sky Glass Air TV on a living room sideboard",
  },
};

export const resellers = {
  eyebrow: "For resellers",
  title: "Start your own IPTV business with a reseller panel",
  intro:
    "Sell subscriptions under your own name. Message us for panel options, pricing and how to get started.",
  items: [
    {
      title: "Reseller panel",
      body: "Create and manage your customers' subscriptions from one panel.",
      icon: LayoutIcon,
      href: whatsappHref(messages.reseller),
    },
    {
      title: "B1G reseller panel",
      body: "Offer B1G IPTV subscriptions to your own customers.",
      icon: UsersIcon,
      href: whatsappHref(messages.b1gReseller),
    },
    {
      title: "Sky Glass reseller panel",
      body: "Add Sky Glass IPTV to the services you resell.",
      icon: TvIcon,
      href: whatsappHref(messages.skyGlassReseller),
    },
  ] satisfies { title: string; body: string; icon: Icon; href: string }[],
  itemCta: "Ask on WhatsApp",
};

export const faq = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  intro: "Quick answers about IPTV, devices and getting started.",
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
      question: "How do I order a subscription?",
      answer:
        "Choose a plan and tap Buy on WhatsApp. The chat opens with your plan already filled in, and our team takes care of payment and activation with you.",
    },
    {
      question: "Which devices are supported?",
      answer:
        "Smart TVs, Android and iOS phones and tablets, Mac devices and streaming boxes, using apps such as IPTV Smarters Pro, IBO Player Pro, SET IPTV or TiviMate.",
    },
    {
      question: "What channels and content can I watch?",
      answer:
        "Over 31,000 live channels including sports, news and international channels, plus 33,000 movies and 5,500 series.",
    },
    {
      question: "What internet speed do I need for IPTV?",
      answer:
        "We recommend a Wi-Fi or network connection of at least 10 Mbps for smooth streaming.",
    },
    {
      question: "How quickly is my subscription activated?",
      answer:
        "Your account is activated quickly after purchase, and our team sends your login details so you can start watching straight away.",
    },
    {
      question: "Can I watch on more than one device?",
      answer:
        "Yes. Choose the 12-month plan for 2 devices to watch on two devices, or message our team to discuss what you need.",
    },
    {
      question: "Do you offer an 8K package?",
      answer:
        "Yes. The 8K package streams supported channels in 8K Ultra HD and everything else in 4K and HD, with the full library included. It is available for 12 or 24 months. For 8K we recommend an 8K or large 4K TV and a connection of around 50 Mbps.",
    },
    {
      question: "Do you offer a trial?",
      answer:
        "Yes. Request a trial on WhatsApp and our team will send you test access.",
    },
    {
      question: "What is the quality of your service?",
      answer:
        "Streams are delivered in HD and 4K, and in 8K Ultra HD on the 8K package, on fast, reliable servers with 99.9% uptime and 24/7 customer support.",
    },
  ],
  moreTitle: "Still have questions?",
  moreBody: "Our support team is on WhatsApp 24/7 and happy to help.",
  more: { label: "Chat on WhatsApp", href: whatsappHref(messages.general) },
};

export const cta = {
  eyebrow: "Ready when you are",
  title: "Upgrade your TV tonight",
  body: "Pick a plan and start streaming today, or message us for a trial first. A real person replies on WhatsApp, 24/7.",
  primary: { label: "Chat on WhatsApp", href: whatsappHref(messages.general) },
  secondary: { label: "View plans", href: "/#pricing" },
};
