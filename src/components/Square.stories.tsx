import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Square } from "./Square";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Square",
  component: Square,
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = (args) => <Square {...args} />;

export const SquareWithTriangle = Template.bind({});

SquareWithTriangle.args = {
  value: "△",
};

export const SquareWithO = Template.bind({});

SquareWithO.args = {
  value: "O",
};

export const SquareWithX = Template.bind({});

SquareWithX.args = {
  value: "X",
};
