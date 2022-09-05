import React, { useState } from "react";

// import logo from "./Teogu.png";
import { classNameJoiner } from "../../utils/className";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import Button, { LinkButton } from "../../common/button/button";
import NetworkService, { MethodType } from "network/http";
import { userStores } from "store/Context";
import { observer } from "mobx-react";

type HeaderProps = {
  onClick?: () => void;
};

const Header = observer(({ onClick }: HeaderProps) => {
  const { userStore } = userStores();

  const onLogOut = () => {
    NetworkService.request("users/logout", MethodType.post, {});
  };
  return (
    <header className={classNameJoiner("w-full flex items-center")}>
      <IconBox onClick={onClick} iconName={IconType.menu} />
      <img src={"/Teogu.png"} alt="logo" width={80} />

      {userStore.currentUser.username !== "" ? (
        <Button onClick={onLogOut}>{"LogOut"}</Button>
      ) : (
        <LinkButton href={"http://localhost:3000/blogs/login"}>
          {"LogIn"}
        </LinkButton>
      )}
    </header>
  );
});
export default Header;
