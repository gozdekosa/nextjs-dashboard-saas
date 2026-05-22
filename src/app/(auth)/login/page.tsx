"use client";

import { authApi } from "@/features/auth/api/authApi";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { tokenService } from "@/shared/api/token";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { login } = useAuth();

  const onSubmit = async () => {
    try {
      const res = await authApi.login({
        email,
        password,
      });

      const token = res.data.accessToken;

      // 1. single source of truth
      tokenService.set(token);

      // 2. auth context sync
      login(token);

      // 3. redirect
      router.push("/dashboard");

    } catch (err) {
      console.log("LOGIN ERROR:", err);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-gray-500 text-sm">
          Welcome back 👋
        </p>
      </div>

      <div className="space-y-4">
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-black text-white p-3 rounded-lg cursor-pointer"
      >
        Login
      </button>

      <p className="text-sm text-center text-gray-500">
        Don’t have an account?{" "}
        <a className="text-blue-600" href="/register">
          Register
        </a>
      </p>

    </div>
  );
}