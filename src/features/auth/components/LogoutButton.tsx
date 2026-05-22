"use client";

import { useRouter } from "next/navigation";
import { authApi } from "@/features/auth/api/authApi";
import { tokenService } from "@/shared/api/token";
import { useAuth } from "../hooks/useAuth";

export default function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      // 1. backend logout (cookie siler)
      await authApi.logout();

    } catch (err) {
      console.log("logout error:", err);
    } finally {
      // 2. frontend state temizle
      tokenService.clear();
      logout();

      // 3. redirect
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full cursor-pointer"
    >
      Logout
    </button>
  );
}