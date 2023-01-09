import React from "react";
import type { Parameters } from "@storybook/addons";
import "../src/assets/style.css";

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [(Story: React.FC<unknown>) => <Story />];
