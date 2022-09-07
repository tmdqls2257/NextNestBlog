import Header from "../elements/header/Header";
import React, { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const onClick = () => {};

  return (
    <div className=" min-h-screen">
      <Header onClick={onClick} />
      {children}
    </div>
  );
};
export default Layout;
