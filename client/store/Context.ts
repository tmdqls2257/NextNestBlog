import React from "react";

import { RootStore } from "./RootStore";

export const StoreContext = React.createContext(new RootStore());
export const StoreProvider = StoreContext.Provider;

// eslint-disable-next-line react-hooks/rules-of-hooks
export const userStores = () => React.useContext(StoreContext);
