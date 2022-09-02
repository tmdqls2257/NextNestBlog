import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconBox, { IconType } from "./IconBox";

export default {
  title: "Components/IconBox",
  component: IconBox,
} as ComponentMeta<typeof IconBox>;

export const icon: ComponentStory<typeof IconBox> = () => (
  <IconBox iconName={IconType.bookmark}></IconBox>
);
