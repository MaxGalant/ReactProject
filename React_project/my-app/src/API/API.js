import * as axios from "axios";
import { Unfollowed } from "../Redax/UserReduser";

const Instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { "API-KEY": "be66a537-4eb8-4d17-a3ad-a188d2ae907e" },
});
export const UserApi = {
  GetUsers(CurrentPage = 1, PageSize = 10) {
    return Instance.get(`users?page=${CurrentPage}&count=${PageSize}`, {}).then(
      (Response) => {
        return Response.data;
      }
    );
  },
  Followed(userId) {
    return Instance.post(`follow/${userId}`, {});
  },
  Unfollowed(userId) {
    return Instance.delete(`unfollow/${userId}`, {});
  },

  GetProfile(userId) {
    console.warn("obsolete message");
    return ProfileApi.GetProfile(userId);
  },
};
export const ProfileApi = {
  GetProfile(userId) {
    return Instance.get(`profile/` + userId);
  },
  GetStatus(userId) {
    return Instance.get(`profile/status/` + userId);
  },
  UpdateStatus(status) {
    return Instance.put(`profile/status/`, { Status: status });
  },
};

export const AuthApi = {
  Me() {
    return Instance.get(`auth/me`);
  },
  Login(email, password, rememberMe = false) {
    return Instance.post(`auth/login`, { email, password, rememberMe });
  },
  LoginOut() {
    return Instance.delete(`auth/login`);
  },
};
