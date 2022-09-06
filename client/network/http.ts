import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export enum MethodType {
  get = "get",
  post = "post",
  patch = "patch",
  delete = "delete",
}

class CustomAxios {
  private static instance: CustomAxios;
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request(
    url: string | undefined,
    method: MethodType,
    options: AxiosRequestConfig
  ) {
    try {
      const res: AxiosResponse = await axios(`${this.baseURL}${url}`, {
        method,
        ...options,

        headers: {
          ...options.headers,
        },
        withCredentials: true,
      });

      if (res.status > 299 || res.status < 200) {
        const message: string =
          res.data && res.data.message
            ? res.data.message
            : "Something went wrong";
        const error = new Error(message);
        if (res.status === 401) {
          throw error;
        }
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  public static getInstance(baseURL: string): CustomAxios {
    if (!CustomAxios.instance) {
      CustomAxios.instance = new CustomAxios(baseURL);
    }
    return CustomAxios.instance;
  }
}

const NetworkService = CustomAxios.getInstance(`http://localhost:8080/`);

export default NetworkService;
