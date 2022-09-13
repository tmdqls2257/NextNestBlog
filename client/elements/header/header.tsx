import React, { useEffect, useState } from "react";

// import logo from "./Teogu.png";
import { classNameJoiner } from "../../utils/className";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import Button, { LinkButton } from "../../common/button/button";
import { userStores } from "../../store/Context";
import { observer } from "mobx-react";

type HeaderProps = {
  onClick?: () => void;
};

const Header = observer(({ onClick }: HeaderProps) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { userStore } = userStores();

  const onLogOut = () => {
    userStore.logOut();
  };

  useEffect(() => {
    userStore.currentUser !== "" ? setIsLogIn(true) : setIsLogIn(false);
  }, [userStore.currentUser]);

  useEffect(() => {
    userStore.isAdmin ? setIsAdmin(true) : setIsAdmin(false);
  }, [userStore.isAdmin]);

  return (
    <header
      className={classNameJoiner("w-full flex items-center justify-between")}
    >
      <div className="flex items-center ">
        <IconBox onClick={onClick} iconName={IconType.menu} />
        <img src={"/Teogu.png"} alt="logo" width={80} />
      </div>

      <div className="space-x-3">
        {isLogIn ? (
          <Button onClick={onLogOut}>{"LogOut"}</Button>
        ) : (
          <LinkButton href={"http://localhost:3000/blogs/login"}>
            {"LogIn"}
          </LinkButton>
        )}

        {isAdmin && (
          <LinkButton href={"http://localhost:3000/blogs/post"}>
            {"글쓰기"}
          </LinkButton>
        )}
      </div>
    </header>
  );
});
export default React.memo(Header);
