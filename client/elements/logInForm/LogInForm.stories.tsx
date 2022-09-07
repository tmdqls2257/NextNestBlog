import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogInForm from "./LogInForm";
import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";

export default {
  title: "Elements/LogInForm",
  component: LogInForm,
} as ComponentMeta<typeof LogInForm>;

export const footer: ComponentStory<typeof LogInForm> = () => (
  <Provider store={RootStore}>
    <LogInForm />
  </Provider>
);
