import { describe, expect, it } from "vitest";
import { combineClasses } from "@/utils/utils";

describe("combineClasses", () => {
  it("lets overrides win over conflicting defaults", () => {
    expect(combineClasses("p-4 text-sm", "p-2")).toBe("text-sm p-2");
  });

  it("drops defaults prefixed with !!", () => {
    expect(combineClasses("p-4 border", "!!border")).toBe("p-4");
  });
});
