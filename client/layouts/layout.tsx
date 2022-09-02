import React, { useState } from "react";
import IconBox, { IconType } from "../common/IconBox/IconBox";
import Header from "../elements/header/header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  //   const { isOpen, setIsOpen } = useState(false);

  const onClick = () => {};

  return (
    <div className="bg-violet dark:bg-magenta min-h-screen">
      <Header onClick={onClick} />
      {children}
    </div>
  );
};
export default Layout;
