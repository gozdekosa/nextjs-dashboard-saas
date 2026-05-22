import API from "./api";
import { tokenService } from "./token";
import { authApi } from "@/features/auth/api/authApi";

export const setupInterceptors = () => {
  API.interceptors.response.use(
    (res) => res,
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        try {
          const res = await authApi.refresh();
          const token = res.data.accessToken;

          // single source of truth
          tokenService.set(token);

          // safe header set
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${token}`,
          };

          return API(originalRequest);
        } catch (err) {
          tokenService.clear();
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );
};