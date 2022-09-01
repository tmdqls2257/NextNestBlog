// Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../pages/index.tsx";

export default {
  title: "Components/Home",
  component: Home,
  Home,
} as ComponentMeta<typeof Home>;

export const Loading: ComponentStory<typeof Home> = () => <Home></Home>;
