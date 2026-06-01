"use client";

import { authApi } from "@/features/auth/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormInput from "@/shared/components/form/FormInput";

import {
  RegisterSchema,
  type RegisterFormData,
} from "@/features/auth/schema/RegisterSchema";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      await authApi.register(data);

      toast.success("Kayıt başarılı");

      router.push("/login");
    } catch (err: any) {
      toast.error(
        err.response?.data?.message ||
          "Kayıt sırasında bir hata oluştu"
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Register
        </h1>

        <p className="text-gray-500 text-sm">
          Create your account 🚀
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="space-y-4">
          <FormInput
            label="Email"
            placeholder="mail@example.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white p-3 rounded-lg"
        >
          {isSubmitting
            ? "Creating..."
            : "Register"}
        </button>

        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link
            className="text-blue-600"
            href="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}