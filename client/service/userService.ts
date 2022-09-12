// import NetworkService, { MethodType } from "network/http";
import NetworkService, { MethodType } from "../network/http";
import { User } from "store/userStore";

class UserNetworkService {
  constructor() {}
  async logIn(email: string, password: string): Promise<User> {
    const response: User = await NetworkService.request(
      "users/login",
      MethodType.post,
      {
        email,
        password,
      }
    );
    return response;
  }

  logOut = async () => {
    await NetworkService.request("users/logout", MethodType.post, {});
  };
}

const UserService = new UserNetworkService();
export default UserService;
