import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Elements/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const footer: ComponentStory<typeof Header> = () => <Header />;
