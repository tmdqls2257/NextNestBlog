import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import BlogLayout from "./BlogLayout";
export default {
  title: "Layouts/BlogLayout",
  component: BlogLayout,
} as ComponentMeta<typeof BlogLayout>;

export const layout: ComponentStory<typeof BlogLayout> = () => (
  <BlogLayout>{"hello"}</BlogLayout>
);
