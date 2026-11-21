import { expect, test } from "@playwright/test";

const WHATSAPP = "https://wa.me/447956038661";

test("home page renders with brand and hero", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/OptiDeals/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Best IPTV");
});

test("region selector switches the pricing currency", async ({ page }) => {
  await page.goto("/");
  const pricing = page.locator("#pricing");
  await expect(pricing).toContainText("£15");
  await pricing.getByText("USA", { exact: true }).click();
  await expect(pricing).toContainText("$19");
  await pricing.getByText("Italy", { exact: true }).click();
  await expect(pricing).toContainText("€18");
});

test("buy button opens WhatsApp with the plan and price filled in", async ({
  page,
}) => {
  await page.goto("/");
  const buy = page.getByRole("link", { name: "Buy on WhatsApp: 12 months plan" });
  await expect(buy).toHaveAttribute("target", "_blank");
  const href = new URL((await buy.getAttribute("href")) ?? "");
  expect(href.origin + href.pathname).toBe(WHATSAPP);
  expect(href.searchParams.get("text")).toBe(
    "Hi OptiDeals, I'd like to buy the 12 months plan (£60).",
  );

  // The message follows the selected currency.
  await page.locator("#pricing").getByText("UK", { exact: true }).click();
  await expect(buy).toHaveAttribute("href", /%C2%A360/);
});

test("contact page is WhatsApp only, with no form", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("WhatsApp");
  await expect(page.locator("form")).toHaveCount(0);
  await expect(
    page.getByRole("main").getByRole("link", { name: "Chat on WhatsApp" }),
  ).toHaveAttribute("href", new RegExp(`^${WHATSAPP}`));
  await expect(page.getByRole("link", { name: /Request a trial/ })).toHaveAttribute(
    "href",
    /wa\.me\/447956038661\?text=.*trial/,
  );
});

test("external links only go to WhatsApp or the YouTube channel", async ({ page }) => {
  for (const path of ["/", "/about", "/contact", "/terms"]) {
    await page.goto(path);
    const hrefs = await page
      .locator('a[href^="http"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute("href") ?? ""));
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(
        href.startsWith(WHATSAPP) || href.startsWith("https://www.youtube.com/"),
      ).toBe(true);
    }
  }
});

test("nav anchor scrolls the section to just below the header", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("navigation", { name: "Main" }).getByText("Pricing").click();
  await expect(page).toHaveURL(/#pricing$/);
  await expect
    .poll(async () => {
      const top = await page
        .locator("#pricing")
        .evaluate((section) => section.getBoundingClientRect().top);
      const header = await page
        .locator("header")
        .evaluate((element) => element.getBoundingClientRect().height);
      return Math.abs(top - header);
    })
    .toBeLessThanOrEqual(2);
});

test("mobile menu opens and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("About OptiDeals");
});

test("featured video loads the YouTube player only after pressing play", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("#video");
  await expect(section.locator("iframe")).toHaveCount(0);
  await section.getByRole("button", { name: /^Play video/ }).click();
  await expect(section.locator("iframe")).toHaveAttribute(
    "src",
    /youtube-nocookie\.com\/embed\/hoc5Yo5KB0Q/,
  );
});
