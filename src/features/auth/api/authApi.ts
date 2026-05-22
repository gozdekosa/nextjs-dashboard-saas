import API from "@/shared/api/api";


export const authApi = {
  login: (data: { email: string; password: string }) =>
    API.post("/login", data),

  register: (data: { email: string; password: string }) =>
    API.post("/register", data),

  refresh: () =>
    API.post("/refresh"),

  logout: () =>
    API.post("/logout"),
};