import { describe, expect, it } from "vitest";
import {
  formatPrice,
  getRegion,
  plans,
  regions,
  savingPercent,
  type Currency,
  type Plan,
} from "./pricing";

const currencies: Currency[] = ["GBP", "USD", "EUR"];

const plan = (id: string): Plan => {
  const found = plans.find((candidate) => candidate.id === id);
  if (!found) throw new Error(`No plan "${id}"`);
  return found;
};

describe("formatPrice", () => {
  it("uses the region's currency symbol", () => {
    expect(formatPrice(19, "USD").label).toBe("$19");
    expect(formatPrice(15, "GBP").label).toBe("£15");
    expect(formatPrice(115, "EUR")).toEqual({
      symbol: "€",
      value: "115",
      label: "€115",
    });
  });

  it("groups thousands", () => {
    expect(formatPrice(1250, "USD").value).toBe("1,250");
  });
});

describe("regions", () => {
  it("covers each region tab from the design", () => {
    expect(regions.map((region) => region.label)).toEqual([
      "UK",
      "USA",
      "Italy",
      "France",
      "Global",
    ]);
    expect(getRegion("uk").currency).toBe("GBP");
  });
});

describe("plans", () => {
  it("uses the owner's price list in pounds", () => {
    expect(plan("1-month").prices.GBP).toBe(15);
    expect(plan("3-months").prices.GBP).toBe(25);
    expect(plan("6-months").prices.GBP).toBe(40);
    expect(plan("12-months").prices.GBP).toBe(60);
    expect(plan("24-months").prices.GBP).toBe(100);
  });

  it("never uses decimals, in any currency", () => {
    for (const item of plans) {
      for (const currency of currencies) {
        expect(Number.isInteger(item.prices[currency])).toBe(true);
      }
    }
  });

  it("gets cheaper per month as single-device plans get longer", () => {
    for (const currency of currencies) {
      const perMonth = plans
        .filter((item) => !item.devices && !item.tier)
        .map((item) => item.prices[currency] / item.months);
      expect(perMonth).toEqual([...perMonth].sort((a, b) => b - a));
    }
  });

  it("prices two devices above one device for the same length", () => {
    for (const currency of currencies) {
      expect(plan("12-months-2-devices").prices[currency]).toBeGreaterThan(
        plan("12-months").prices[currency],
      );
    }
  });
});

describe("8K package", () => {
  it("costs £80 for one year and £140 for two", () => {
    expect(plan("8k-12-months").prices.GBP).toBe(80);
    expect(plan("8k-24-months").prices.GBP).toBe(140);
  });

  it("is priced above the standard plan of the same length in every currency", () => {
    for (const currency of currencies) {
      expect(plan("8k-12-months").prices[currency]).toBeGreaterThan(
        plan("12-months").prices[currency],
      );
      expect(plan("8k-24-months").prices[currency]).toBeGreaterThan(
        plan("24-months").prices[currency],
      );
    }
  });

  it("shows the two-year saving against two one-year 8K plans", () => {
    expect(savingPercent(plan("8k-12-months"), "GBP")).toBeNull();
    expect(savingPercent(plan("8k-24-months"), "GBP")).toBe(12);
  });
});

describe("savingPercent", () => {
  it("is a whole percent against paying monthly, rounded down", () => {
    expect(savingPercent(plan("3-months"), "GBP")).toBe(44);
    expect(savingPercent(plan("6-months"), "GBP")).toBe(55);
    expect(savingPercent(plan("12-months"), "GBP")).toBe(66);
    expect(savingPercent(plan("24-months"), "GBP")).toBe(72);
  });

  it("is not shown for the monthly or multi-device plans", () => {
    expect(savingPercent(plan("1-month"), "GBP")).toBeNull();
    expect(savingPercent(plan("12-months-2-devices"), "GBP")).toBeNull();
  });
});
