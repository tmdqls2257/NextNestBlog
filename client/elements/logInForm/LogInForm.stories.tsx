import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogInForm from "./LogInForm";

export default {
  title: "Elements/LogInForm",
  component: LogInForm,
} as ComponentMeta<typeof LogInForm>;

export const footer: ComponentStory<typeof LogInForm> = () => <LogInForm />;
