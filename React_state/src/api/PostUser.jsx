import token from "../Auth/token/token";
import { api } from "./axios";

export const PostUser = (username, password) => {
  return api.post("/auth/login", {
    username: username,
    password: password,
  });
};
