import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import BlogDetail from "../pages/blogs/[id]";

export default {
  title: "pages/BlogDetail",
  component: BlogDetail,
} as ComponentMeta<typeof BlogDetail>;

export const blogLayout: ComponentStory<typeof BlogDetail> = () => (
  <BlogDetail />
);

blogLayout.story = {
  parameters: {
    nextRouter: {
      path: "/blogs/[id]",
      asPath: "/blogs/lifeiscontent",
      query: {
        id: "lifeiscontent",
        title: "storybook title",
        content: "storybook content",
      },
    },
  },
};
