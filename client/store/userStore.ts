import { action, computed, observable, runInAction } from "mobx";
import NetworkService, { MethodType } from "network/http";
import router from "next/router";

class User {
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
    const response = await NetworkService.request(
      "users/login",
      MethodType.post,
      {
        data: {
          email,
          password,
        },
      }
    );
    runInAction(() => {
      this.user = response;
      sessionStorage.setItem("user", JSON.stringify(this.user.username));
      console.log(sessionStorage.getItem("user"));
    });
    router.back();
  };

  @action
  logOut() {
    NetworkService.request("users/logout", MethodType.post, {});
    sessionStorage.removeItem("user");

    location.reload();
  }

  @computed
  get currentUser() {
    let userName = "";
    if (typeof window !== "undefined") {
      // Perform localStorage action

      userName = sessionStorage.getItem("user") || "";
    }

    return userName;
  }
}
