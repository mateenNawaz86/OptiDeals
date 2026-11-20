import { describe, expect, it } from "vitest";
import { formatPrice, getRegion, regions } from "./pricing";

describe("formatPrice", () => {
  it("uses the region's currency symbol", () => {
    expect(formatPrice(19, "USD").label).toBe("$19");
    expect(formatPrice(19, "GBP").label).toBe("£19");
    expect(formatPrice(130, "EUR")).toEqual({
      symbol: "€",
      value: "130",
      label: "€130",
    });
  });

  it("groups thousands", () => {
    expect(formatPrice(1250, "USD").value).toBe("1,250");
  });
});

describe("regions", () => {
  it("covers each region tab from the design", () => {
    expect(regions.map((region) => region.label)).toEqual([
      "USA",
      "UK",
      "Italy",
      "France",
      "Global",
    ]);
    expect(getRegion("uk").currency).toBe("GBP");
  });
});
