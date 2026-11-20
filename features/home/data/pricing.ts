/** Regions offered in the pricing selector; prices stay the same, only the currency changes. */
export const regions = [
  { id: "usa", label: "USA", currency: "USD" },
  { id: "uk", label: "UK", currency: "GBP" },
  { id: "italy", label: "Italy", currency: "EUR" },
  { id: "france", label: "France", currency: "EUR" },
  { id: "global", label: "Global", currency: "USD" },
] as const;

export type Region = (typeof regions)[number];
export type RegionId = Region["id"];

export const DEFAULT_REGION_ID: RegionId = "usa";

export const getRegion = (id: RegionId): Region =>
  regions.find((region) => region.id === id) ?? regions[0];

export interface Plan {
  id: string;
  period: string;
  price: number;
  featured?: boolean;
}

export const plans: Plan[] = [
  { id: "1-month", period: "Monthly", price: 19 },
  { id: "3-months", period: "3 months", price: 30 },
  { id: "6-months", period: "6 months", price: 49 },
  { id: "12-months", period: "12 months", price: 75, featured: true },
  { id: "12-months-2-devices", period: "12 months · 2 devices", price: 100 },
  { id: "24-months", period: "24 months", price: 130 },
];

/** Included in every plan. */
export const planIncludes = [
  "31K live channels",
  "33K movies",
  "5.5K series",
  "Wi-Fi/network speed 10 Mbps",
];

/** Splits a whole-number price into currency symbol and amount, e.g. `£` + `19`. */
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
