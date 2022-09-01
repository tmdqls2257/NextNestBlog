// Card.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import LoadingAnimation, { HomeAnimation } from "./animations";

export default {
  title: "Components/LoadingAnimation",
  component: LoadingAnimation,
  HomeAnimation,
} as ComponentMeta<typeof LoadingAnimation>;

export const Loading: ComponentStory<typeof LoadingAnimation> = () => (
  <LoadingAnimation></LoadingAnimation>
);
export const Home: ComponentStory<typeof HomeAnimation> = () => {
  return <HomeAnimation></HomeAnimation>;
};
