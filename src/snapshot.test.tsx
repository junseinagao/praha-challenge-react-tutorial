/// <reference types="vite/client"/>
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

describe("Storybook Snapshots", async () => {
  const modulesByStoryName = await Promise.all(
    Object.entries(import.meta.glob<StoryFile>("./**/*.stories.tsx")).map(
      ([key, fn]) => {
        const chunks = key.split("/");
        const filename = chunks[chunks.length - 1];
        const storyName = filename.replace(/\.stories\..*/, "");

        return [storyName, fn()];
      }
    )
  );

  describe.each(modulesByStoryName.map(([name, module]) => ({ name, module })))(
    "$name",
    async ({ module }) => {
      test.each(
        Object.values(composeStories(await (module as Promise<StoryFile>))).map(
          (Story) => [Story.storyName!, Story]
        )
      )("%s", (_, Story) => {
        const { container } = render(<Story />);
        expect(container).toBeTruthy();
        expect(container).toMatchSnapshot();
      });
    }
  );
});
