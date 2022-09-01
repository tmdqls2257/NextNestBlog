// Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { LinkButton } from "./button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button></Button>;
export const Link: ComponentStory<typeof Button> = () => {
  return <LinkButton href={"/blogs"}></LinkButton>;
};
