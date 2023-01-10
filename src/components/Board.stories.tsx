import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Board } from "./Board";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Board",
  component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const BoardWithAllTriangle = Template.bind({});

BoardWithAllTriangle.args = {
  squares: ["△", "△", "△", "△", "△", "△", "△", "△", "△"],
  xIsNext: false,
  onPlay: () => {},
};
