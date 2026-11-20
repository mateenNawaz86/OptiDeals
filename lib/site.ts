/** Site-wide identity, navigation and service list. English only. */

export const site = {
  name: "OptiDeals",
  tagline: "IPTV subscriptions worldwide",
  description:
    "Premium IPTV subscriptions worldwide: 31K+ live channels, 33K movies and 5.5K series in HD and 4K, with fast servers and 24/7 support.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Apps", href: "/#apps" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Services a visitor can ask about; ids are what the contact API receives. */
export const services = [
  { id: "subscription", label: "New subscription" },
  { id: "trial", label: "IPTV trial request" },
  { id: "reseller", label: "Reseller panel" },
  { id: "skyGlass", label: "Sky Glass IPTV" },
  { id: "b1gReseller", label: "B1G reseller panel" },
  { id: "skyGlassReseller", label: "Sky Glass reseller panel" },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const serviceIds = services.map((service) => service.id) as [
  ServiceId,
  ...ServiceId[],
];

export const isServiceId = (value: unknown): value is ServiceId =>
  typeof value === "string" && (serviceIds as string[]).includes(value);

export const contactHref = (query?: Record<string, string>) =>
  query ? `/contact?${new URLSearchParams(query).toString()}` : "/contact";

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Quick links",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Terms and conditions", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
  {
    title: "Services",
    links: services
      .filter((service) => service.id !== "subscription")
      .map((service) => ({
        label: service.label,
        href: contactHref({ service: service.id }),
      })),
  },
];
