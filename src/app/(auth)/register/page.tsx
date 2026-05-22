"use client";

import { authApi } from "@/features/auth/api/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    try {
      setLoading(true);

      await authApi.register({
        email,
        password,
      });

      // kayıt sonrası login sayfasına yönlendir
      router.push("/login");

    } catch (err) {
      console.log("REGISTER ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">

      <div>
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-gray-500 text-sm">
          Create your account 🚀
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
        disabled={loading}
        className="w-full bg-black text-white p-3 rounded-lg"
      >
        {loading ? "Creating..." : "Register"}
      </button>

      <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <a className="text-blue-600" href="/login">
          Login
        </a>
      </p>

    </div>
  );
}