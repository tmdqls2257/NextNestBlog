// // Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconBox, { IconType } from "./IconBox";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/IconBox",
  component: IconBox,
} as ComponentMeta<typeof IconBox>;

export const icon: ComponentStory<typeof IconBox> = () => (
  <IconBox iconName={IconType.bookmark}></IconBox>
);
