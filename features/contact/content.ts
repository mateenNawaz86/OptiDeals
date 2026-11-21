import {
  HeadphonesIcon,
  LayoutIcon,
  PlayIcon,
  TagIcon,
  TvIcon,
  type Icon,
} from "@/components/ui/icons";
import { messages, whatsappHref } from "@/lib/site";

export const contact = {
  metaTitle: "Contact Us on WhatsApp: 24/7 IPTV Support",
  metaDescription:
    "Message the OptiDeals team on WhatsApp 24/7 for IPTV subscriptions, trials, reseller panels or setup help. A real person replies.",
  eyebrow: "Contact us",
  title: { lead: "Talk to us on", accent: "WhatsApp" },
  intro:
    "No forms and no waiting on email. Message our team for subscriptions, trials or setup help and a real person replies, 24/7.",
  cta: { label: "Chat on WhatsApp", href: whatsappHref(messages.general) },
  numberLabel: "WhatsApp number",
  topicsEyebrow: "Pick a topic",
  topicsTitle: "What can we help you with?",
  topicsIntro:
    "Choose a topic and WhatsApp opens with your first message already written. Just press send.",
  topicCta: "Open chat",
  topics: [
    {
      title: "Buy a subscription",
      body: "Order a new plan or renew your current one.",
      icon: TagIcon,
      href: whatsappHref(messages.subscription),
    },
    {
      title: "Request a trial",
      body: "Try the service before you buy.",
      icon: PlayIcon,
      href: whatsappHref(messages.trial),
    },
    {
      title: "Setup and app help",
      body: "Get your app or device working.",
      icon: HeadphonesIcon,
      href: whatsappHref(messages.setup),
    },
    {
      title: "Reseller panels",
      body: "Reseller, B1G and Sky Glass panels.",
      icon: LayoutIcon,
      href: whatsappHref(messages.reseller),
    },
    {
      title: "Sky Glass IPTV",
      body: "Ask about options and availability.",
      icon: TvIcon,
      href: whatsappHref(messages.skyGlass),
    },
  ] satisfies { title: string; body: string; icon: Icon; href: string }[],
  promises: [
    { value: "24/7", label: "Support hours" },
    { value: "1 tap", label: "To start a chat" },
    { value: "Real people", label: "No bots, no forms" },
  ],
};
