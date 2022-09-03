import axios, { AxiosAdapter, AxiosRequestConfig, AxiosResponse } from "axios";

enum methodType {
  get = "get",
  post = "post",
  patch = "patch",
  delete = "delete",
}

export default class Axios {
  private baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request(url: string, method: methodType, options: AxiosRequestConfig) {
    try {
      const res: AxiosResponse = await axios(`${this.baseURL}${url}`, {
        method,
        ...options,

        headers: {
          ...options.headers,
        },
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
}
