import { describe, expect, it } from "vitest";
import { messages, services, whatsappHref } from "./site";

describe("whatsappHref", () => {
  it("links to the OptiDeals WhatsApp number", () => {
    expect(whatsappHref()).toBe("https://wa.me/447956038661");
  });

  it("encodes the opening message", () => {
    const href = new URL(whatsappHref(messages.plan("12 months · 2 devices", "£100")));
    expect(href.origin + href.pathname).toBe("https://wa.me/447956038661");
    expect(href.searchParams.get("text")).toBe(
      "Hi OptiDeals, I'd like to buy the 12 months · 2 devices plan (£100).",
    );
  });

  it("is where every service link goes", () => {
    for (const service of services) {
      expect(service.href.startsWith("https://wa.me/447956038661?text=")).toBe(true);
    }
  });
});
