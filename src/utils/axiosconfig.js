import axios from "axios";
import Cookies from "js-cookie";
import { base_url } from "./baseUrl";

const getTokenFromCookies = Cookies.get("user");
const headers = {
  Authorization: `Bearer ${getTokenFromCookies || ""}`,
  Accept: "application/json",
};

export const authAxios = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: `Bearer ${getTokenFromCookies || ""}`,
  },
});

export const config = {
  headers: headers,
};


export const setUserTokenInCookies = (token) => {
  Cookies.set("user", token, { expires: 7 }); 
};

export const removeUserTokenFromCookies = () => {
  Cookies.remove("user");
};
