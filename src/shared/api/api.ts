import axios from "axios";
import { tokenService } from "./token";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

// REQUEST INTERCEPTOR
API.interceptors.request.use((config) => {
  const token = tokenService.get();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;