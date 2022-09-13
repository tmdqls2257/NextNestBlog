import { action, computed, observable, runInAction } from "mobx";
import router from "next/router";
import UserService from "../service/userService";

export class User {
  id: string;
  createAt: string;
  updatedAt: string;
  email: string;
  username: string;
  isAdmin: boolean;

  constructor(
    id: string,
    createdAt: string,
    updatedAt: string,
    email: string,
    username: string,
    isAdmin: boolean
  ) {
    this.id = id;
    this.createAt = createdAt;
    this.updatedAt = updatedAt;
    this.email = email;
    this.username = username;
    this.isAdmin = isAdmin;
  }
}

export default class UserStore {
  // @observable user: User = {
  //   id: "",
  //   createAt: "",
  //   updatedAt: "",
  //   email: "",
  //   username: "",
  //   isAdmin: false,
  // };
  @observable user: User = {
    id: "",
    createAt: "",
    updatedAt: "",
    email: "",
    username: "",
    isAdmin: false,
  };
  rootStore;

  constructor(root: any) {
    this.rootStore = root;
  }

  @action
  logIn = async (email: string, password: string): Promise<void> => {
    const response = await UserService.logIn(email, password);
    runInAction(() => {
      this.user = response;
      sessionStorage.setItem("user", JSON.stringify(this.user.username));
      sessionStorage.setItem("isAdmin", JSON.stringify(this.user.isAdmin));
    });
    router.back();
  };

  @action
  logOut = async () => {
    await UserService.logOut;
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("isAdmin");
    location.reload();
  };

  @computed
  get currentUser() {
    let userName = "";
    if (typeof window !== "undefined") {
      // Perform localStorage action

      userName = sessionStorage.getItem("user") || "";
    }

    return userName;
  }

  @computed
  get isAdmin() {
    let userName;

    if (typeof window !== "undefined") {
      // Perform localStorage action

      userName =
        JSON.parse(sessionStorage.getItem("isAdmin") || "false") || false;
      console.log(userName);
    }
    return userName;
  }
}
