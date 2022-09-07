import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { StoreProvider } from "store/Context";
import { RootStore } from "store/RootStore";
import { Provider } from "mobx-react";
// import UserStore from "store/userStore";
// import { StoreProvider } from "store/Context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={RootStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
