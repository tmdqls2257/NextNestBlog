// // Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./navbar";

export default {
  title: "Elements/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const footer: ComponentStory<typeof Navbar> = () => <Navbar />;
