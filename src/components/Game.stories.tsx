import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Game } from "./Game";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Game",
  component: Game,
} as ComponentMeta<typeof Game>;

const Template: ComponentStory<typeof Game> = (args) => <Game />;

export const GameWithNoProps = Template.bind({});

GameWithNoProps.args = {};
