"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
      
      <div>
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-gray-500 text-sm">
          Create your account
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

      <button className="w-full bg-black text-white p-3 rounded-lg cursor-pointer">
        Create account
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