import { test, expect } from "@playwright/test";

test.describe("Game", () => {
  test("'Winner: ${winner name}' is shown when game is finished", async ({
    page,
  }) => {
    await page.goto("http://localhost:4173/");

    await page.locator('[data-test="square-button-0"]').click();
    await page.locator('[data-test="square-button-3"]').click();
    await page.locator('[data-test="square-button-1"]').click();
    await page.locator('[data-test="square-button-4"]').click();
    await page.locator('[data-test="square-button-2"]').click();
    await expect(page.locator(".status")).toHaveText(/Winner: ./);
  });

  test("'Draw!' is shown when game is draw. ", async ({ page }) => {
    await page.goto("http://localhost:4173/");
    await page.locator('[data-test="square-button-0"]').click();
    await page.locator('[data-test="square-button-1"]').click();
    await page.locator('[data-test="square-button-2"]').click();
    await page.locator('[data-test="square-button-3"]').click();
    await page.locator('[data-test="square-button-4"]').click();
    await page.locator('[data-test="square-button-8"]').click();
    await page.locator('[data-test="square-button-7"]').click();
    await page.locator('[data-test="square-button-6"]').click();
    await page.locator('[data-test="square-button-5"]').click();
    await expect(page.locator(".status")).toHaveText("Draw!");
  });
});
