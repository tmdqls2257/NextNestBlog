import UserStore from "./userStore";
export class RootStore {
  userStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}
