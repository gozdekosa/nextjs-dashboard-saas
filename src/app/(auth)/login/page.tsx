"use client";

import { authApi } from "@/features/auth/api/authApi";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { tokenService } from "@/shared/api/token";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginSchema,
  type LoginFormData,
} from "@/features/auth/schema/LoginSchema";
import Link from "next/link";


export default function LoginPage() {

  const router = useRouter();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    try {

      setError(null);

      const res = await authApi.login(data);

      const token = res.data.accessToken;

      tokenService.set(token);

      login(token);

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Kullanıcı adı veya şifre hatalı");
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

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >

      <div className="space-y-4">
        <input
          className="w-full border p-3 rounded-lg"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
        <p className="text-sm text-red-500">
          {errors.email?.message}
        </p>
        )}
        
        <input
          className="w-full border p-3 rounded-lg"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password?.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white p-3 rounded-lg cursor-pointer"
      >
        Login
      </button>

      <p className="text-sm text-center text-gray-500">
        Don’t have an account?{" "}
        <Link className="text-blue-600" href="/register">
          Register
        </Link>
      </p>

      </form>

    </div>
  );
}