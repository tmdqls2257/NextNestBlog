// Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => {
  const data = {
    title: "test2 입니다.",
    contents: "test2",
    description: "text2",
    deletedAt: null,
    likeCount: 0,
    id: "de992305-c065-4644-804f-2879952e0a54",
    createdAt: "2022-09-03T03:08:48.730Z",
    updatedAt: "2022-09-03T03:08:48.730Z",
  };
  return <Card blogData={data}></Card>;
};
