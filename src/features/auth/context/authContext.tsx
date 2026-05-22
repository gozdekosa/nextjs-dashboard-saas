"use client";

import { createContext, useEffect, useState } from "react";
import { authApi } from "../api/authApi";
import { tokenService } from "@/shared/api/token";

export const AuthContext = createContext<any>(null);

export default function AuthProvider({ children }: any) {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const login = (accessToken: string) => {
    setToken(accessToken);
    tokenService.set(accessToken);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      setToken(null);
      tokenService.clear();
    }
  };

  const refreshAuth = async () => {
    try {
      const res = await authApi.refresh();
      const accessToken = res.data.accessToken;

      setToken(accessToken);
      tokenService.set(accessToken);
    } catch {
      setToken(null);
      tokenService.clear();
    } finally {
      setLoading(false);
    }
  };

useEffect(() => {
  refreshAuth();
}, []);

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuth: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}