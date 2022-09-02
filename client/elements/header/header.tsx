import React from "react";
import logo from "./Teogu.png";
// import logo from "./Teogu.png";
import { classNameJoiner } from "../../utils/className";
import IconBox, { IconType } from "../../common/IconBox/IconBox";

type HeaderProps = {
  onClick?: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  return (
    <header className={classNameJoiner("w-full flex items-center")}>
      <IconBox onClick={onClick} iconName={IconType.menu} />
      <img src={logo} alt="logo" width={80} />
    </header>
  );
};
export default Header;
