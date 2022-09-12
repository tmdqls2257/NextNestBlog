import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Post from "../pages/blogs/post";

export default {
  title: "pages/Post",
  component: Post,
} as ComponentMeta<typeof Post>;

export const layout: ComponentStory<typeof Post> = () => <Post />;
