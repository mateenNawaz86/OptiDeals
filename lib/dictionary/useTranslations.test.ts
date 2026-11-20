import { describe, expect, it } from "vitest";
import { getDictionaryTranslation } from "@/lib/dictionary/useTranslations";

const t = getDictionaryTranslation({
  greet: { named: "Hi {{name}}", indexed: "{0} of {1}" },
});

describe("getDictionaryTranslation", () => {
  it("returns the key when missing", () => {
    expect(t("nope.missing")).toBe("nope.missing");
  });

  it("interpolates named values", () => {
    expect(t("greet.named", { name: "Ada" })).toBe("Hi Ada");
  });

  it("interpolates indexed values, inline or as an array", () => {
    expect(t("greet.indexed", [1, 3])).toBe("1 of 3");
    expect(t("greet.indexed:2:5")).toBe("2 of 5");
  });
});
