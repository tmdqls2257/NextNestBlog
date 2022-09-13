import Header from "../elements/header/Header";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
