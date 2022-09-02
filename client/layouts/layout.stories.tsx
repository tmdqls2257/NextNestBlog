import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Layout from "./layout";
export default {
  title: "Layouts/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const layout: ComponentStory<typeof Layout> = () => (
  <Layout>{"hello"}</Layout>
);
