import axios from "axios";
import { baseUrl } from "../contants/Endpoints";
import { asyncLocalStorage } from "./asyncLocalStorage";
import { noAuthAxios } from "./axiosWrapperOpen";
import jwt_decode from "jwt-decode";

export const authAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptor for API calls
authAxios.interceptors.request.use(
  async (config) => {
    const value = await asyncLocalStorage.getItem("jwt");
    let token = "default";
    const decoded = jwt_decode(value);
    console.log("auth", decoded);
    if (decoded.exp < Date.now() / 1000) {
      console.log("token expired", "auth");
      await noAuthAxios
        .post(`${baseUrl}open/refresh_token`, {
          refreshToken: localStorage.getItem("refreshToken"),
        })
        .then(async function (res) {
          await asyncLocalStorage.setItem("jwt", res.data.accessToken);
          await asyncLocalStorage.setItem(
            "refreshToken",
            res.data.refreshToken
          );
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.accessToken;
          token = res.data.accessToken;
          // return "token";
        });
    } else {
      console.log("token not expired", "auth");
      token = value;
    }
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


