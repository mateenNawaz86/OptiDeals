/** Regions offered in the pricing selector; each shows the price list for its currency. */
export const regions = [
  { id: "uk", label: "UK", currency: "GBP" },
  { id: "usa", label: "USA", currency: "USD" },
  { id: "italy", label: "Italy", currency: "EUR" },
  { id: "france", label: "France", currency: "EUR" },
  { id: "global", label: "Global", currency: "GBP" },
] as const;

export type Region = (typeof regions)[number];
export type RegionId = Region["id"];
export type Currency = Region["currency"];

export const DEFAULT_REGION_ID: RegionId = "uk";

export const getRegion = (id: RegionId): Region =>
  regions.find((region) => region.id === id) ?? regions[0];

export interface Plan {
  id: string;
  period: string;
  /** Length of the subscription, used for the saving against paying monthly. */
  months: number;
  /**
   * Whole-number price in each currency. GBP is the owner's price list; USD and EUR are
   * its equivalents rounded to whole numbers. Never use decimals here.
   */
  prices: Record<Currency, number>;
  /** Premium 8K package; absent on the standard HD and 4K plans. */
  tier?: "8k";
  /** Simultaneous devices, shown only when a plan includes more than one. */
  devices?: number;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    id: "1-month",
    period: "Monthly",
    months: 1,
    prices: { GBP: 15, USD: 19, EUR: 18 },
  },
  {
    id: "3-months",
    period: "3 months",
    months: 3,
    prices: { GBP: 25, USD: 30, EUR: 29 },
  },
  {
    id: "6-months",
    period: "6 months",
    months: 6,
    prices: { GBP: 40, USD: 49, EUR: 47 },
  },
  {
    id: "12-months",
    period: "12 months",
    months: 12,
    prices: { GBP: 60, USD: 75, EUR: 70 },
    featured: true,
  },
  {
    id: "12-months-2-devices",
    period: "12 months · 2 devices",
    months: 12,
    prices: { GBP: 80, USD: 100, EUR: 95 },
    devices: 2,
  },
  {
    id: "24-months",
    period: "24 months",
    months: 24,
    prices: { GBP: 100, USD: 130, EUR: 115 },
  },
  {
    id: "8k-12-months",
    period: "8K · 12 months",
    months: 12,
    prices: { GBP: 80, USD: 100, EUR: 95 },
    tier: "8k",
  },
  {
    id: "8k-24-months",
    period: "8K · 24 months",
    months: 24,
    prices: { GBP: 140, USD: 175, EUR: 165 },
    tier: "8k",
    featured: true,
  },
];

export const standardPlans = plans.filter((plan) => !plan.tier);
export const premiumPlans = plans.filter((plan) => plan.tier === "8k");

/** Included in every plan. */
export const planIncludes = [
  "31K live channels",
  "33K movies",
  "5.5K series",
  "HD and 4K quality",
  "Wi-Fi/network speed 10 Mbps",
];

/** Included in the 8K package, on top of the full library. */
export const premiumIncludes = [
  "8K Ultra HD streams on supported channels",
  "4K and HD on every other channel",
  "31K live channels",
  "33K movies and 5.5K series",
  "Made for 8K and large 4K TVs",
  "Wi-Fi/network speed 50 Mbps recommended",
];

/** Splits a whole-number price into currency symbol and amount, e.g. `£` + `15`. */
export function formatPrice(amount: number, currency: string) {
  const parts = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).formatToParts(amount);
  const symbol = parts.find((part) => part.type === "currency")?.value ?? "";
  const value = parts
    .filter((part) => part.type === "integer" || part.type === "group")
    .map((part) => part.value)
    .join("");
  return { symbol, value, label: `${symbol}${value}` };
}

/**
 * Whole-percent saving against buying the shortest plan of the same tier for the same length
 * of time (monthly for standard plans, 12 months for 8K), or null when there is nothing to
 * compare: the shortest plan itself, and multi-device plans, which are a different product.
 * Rounded down so the saving is never overstated.
 */
export function savingPercent(plan: Plan, currency: Currency): number | null {
  if (plan.devices) return null;
  const base = plans.find(
    (candidate) => candidate.tier === plan.tier && !candidate.devices,
  );
  if (!base || plan.months <= base.months) return null;
  const full = (base.prices[currency] / base.months) * plan.months;
  const saving = Math.floor((1 - plan.prices[currency] / full) * 100);
  return saving > 0 ? saving : null;
}
