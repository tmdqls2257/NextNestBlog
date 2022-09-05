import React, { useState } from "react";

import Header from "../elements/header/header";

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
