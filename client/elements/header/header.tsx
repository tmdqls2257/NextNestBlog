import React, { useState } from "react";

// import logo from "./Teogu.png";
import { classNameJoiner } from "../../utils/className";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import Button, { LinkButton } from "../../common/button/button";
import { userStores } from "../../store/Context";
import { observer } from "mobx-react";

type HeaderProps = {
  onClick?: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  const { userStore } = userStores();

  const onLogOut = () => {
    userStore.logOut();
  };
  return (
    <header className={classNameJoiner("w-full flex items-center")}>
      <IconBox onClick={onClick} iconName={IconType.menu} />
      <img src={"/Teogu.png"} alt="logo" width={80} />

      <LinkButton href={"http://localhost:3000/blogs/login"}>
        {"LogIn"}
      </LinkButton>

      <LinkButton href={"http://localhost:3000/blogs/post"}>
        {"글쓰기"}
      </LinkButton>
    </header>
  );
};
export default React.memo(Header);
