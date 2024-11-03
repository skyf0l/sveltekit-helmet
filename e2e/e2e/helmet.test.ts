import { expect, test } from "@playwright/test";

test("csp set", async ({ page }) => {
  const response = await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();

  expect(response?.headers()["content-security-policy"]).toContain(
    "example.com",
  );
});
