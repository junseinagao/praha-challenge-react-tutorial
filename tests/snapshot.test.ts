import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { StoryIndex } from "@storybook/store";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storybookDir = resolve(__dirname, "..", "storybook-static");
const data: StoryIndex = JSON.parse(
  readFileSync(resolve(storybookDir, "stories.json")).toString()
);
test.describe.parallel("visual regression testing", () => {
  Object.values(data.stories).forEach((story) => {
    test(`snapshot test ${story.title}: ${story.name}`, async ({ page }) => {
      await page.goto(`http://localhost:8080/iframe.html?id=${story.id}`, {
        waitUntil: "networkidle",
      });
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot([
        story.title,
        `${story.id}.png`,
      ]);
    });
  });
});
