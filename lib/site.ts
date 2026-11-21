/** Site-wide identity, navigation and the WhatsApp contact channel. English only. */

export const site = {
  name: "OptiDeals",
  tagline: "IPTV subscriptions worldwide",
  /** Home page <title>; inner pages use "<page> | OptiDeals". */
  title: "OptiDeals | Best IPTV Subscription in HD, 4K & 8K",
  description:
    "Premium IPTV with 31,000+ live channels, 33,000 movies and 5,500 series in HD, 4K and 8K. Fast servers, instant activation and 24/7 WhatsApp support.",
  /** Shorter line for the footer. */
  blurb:
    "Live TV, movies, series and sports in HD, 4K and 8K, on every screen you own. Streaming worldwide since 2020.",
  foundingYear: 2020,
} as const;

/** Every enquiry, order and trial request goes through this WhatsApp number. */
export const whatsapp = {
  number: "447956038661",
  display: "+44 7956 038661",
} as const;

/** The company's YouTube channel: setup guides and product videos. */
export const youtube = {
  url: "https://www.youtube.com/@OptiverseSolutionsltd",
  name: "Optiverse Solutions LTD",
} as const;

/** WhatsApp chat link, optionally with the first message already typed for the visitor. */
export const whatsappHref = (message?: string) =>
  `https://wa.me/${whatsapp.number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

/** Ready-made opening messages, so the team knows what each chat is about. */
export const messages = {
  general: "Hi OptiDeals, I have a question about your IPTV service.",
  trial: "Hi OptiDeals, I'd like to request an IPTV trial.",
  subscription: "Hi OptiDeals, I'd like to buy an IPTV subscription.",
  plan: (period: string, price: string) =>
    `Hi OptiDeals, I'd like to buy the ${period} plan (${price}).`,
  setup: "Hi OptiDeals, I need help setting up my IPTV app.",
  reseller: "Hi OptiDeals, I'm interested in a reseller panel.",
  b1gReseller: "Hi OptiDeals, I'm interested in a B1G reseller panel.",
  skyGlass: "Hi OptiDeals, I'm interested in Sky Glass IPTV.",
  skyGlassReseller: "Hi OptiDeals, I'm interested in a Sky Glass reseller panel.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Apps", href: "/#apps" },
  { label: "Resellers", href: "/#resellers" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Things a visitor can ask for; each opens WhatsApp with a matching first message. */
export const services: NavLink[] = [
  { label: "New subscription", href: whatsappHref(messages.subscription) },
  { label: "IPTV trial request", href: whatsappHref(messages.trial) },
  { label: "Reseller panel", href: whatsappHref(messages.reseller) },
  { label: "B1G reseller panel", href: whatsappHref(messages.b1gReseller) },
  { label: "Sky Glass IPTV", href: whatsappHref(messages.skyGlass) },
  { label: "Sky Glass reseller panel", href: whatsappHref(messages.skyGlassReseller) },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Plans and pricing", href: "/#pricing" },
      { label: "Apps and devices", href: "/#apps" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Terms and conditions", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "YouTube channel", href: youtube.url },
    ],
  },
  { title: "Services", links: services },
];
