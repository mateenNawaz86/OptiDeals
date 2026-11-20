import { expect, test } from "@playwright/test";

test("root redirects to the localized dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/de\/dashboard$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
