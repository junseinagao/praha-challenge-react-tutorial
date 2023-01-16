import React from "react";
import type { Parameters, DecoratorFunction } from "@storybook/addons";
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

const baseDecorator: DecoratorFunction<JSX.Element> = (Story) => <Story />;

export const decorators: Array<DecoratorFunction<JSX.Element>> = [
  baseDecorator,
];
