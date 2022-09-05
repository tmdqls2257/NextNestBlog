import {
  action,
  computed,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
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
    // makeAutoObservable(this);
    // makeObservable(this, {
    //   user: observable,
    //   logIn: action,
    // });
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
      console.log(this.user);
    });
    router.back();
  };

  @computed
  get currentUser() {
    console.log(this.user);

    return this.user;
  }
}
