import { expect, test } from "@playwright/test";

test("home page renders with brand and hero", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/OptiDeals/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Best IPTV");
});

test("region selector switches the pricing currency", async ({ page }) => {
  await page.goto("/");
  const pricing = page.locator("#pricing");
  await expect(pricing).toContainText("$19");
  await pricing.getByText("UK", { exact: true }).click();
  await expect(pricing).toContainText("£19");
  await pricing.getByText("Italy", { exact: true }).click();
  await expect(pricing).toContainText("€19");
});

test("buy now pre-fills the contact form", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Buy now: 12 months plan" }).click();
  await expect(page).toHaveURL(/\/contact\?service=subscription&plan=12-months/);
  await expect(page.getByLabel("Requested service")).toHaveValue("subscription");
  await expect(page.getByLabel("How can we help you?")).toHaveValue(/12 months plan/);
});

test("contact form validates and submits", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Please enter your first name.")).toBeVisible();

  await page.getByLabel("First name").fill("Ada");
  await page.getByLabel("Last name").fill("Lovelace");
  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByLabel("Phone number").fill("+44 20 7946 0958");
  await page.getByLabel("Date of birth").fill("1990-12-10");
  await page.getByLabel("Requested service").selectOption("trial");
  await page.getByLabel("How can we help you?").fill("I would like a trial.");
  await page.getByLabel(/I agree to the/).check();
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByRole("status")).toContainText("Thank you");
});

test("mobile menu opens and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("About us");
});
