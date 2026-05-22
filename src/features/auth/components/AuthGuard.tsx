"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isAuth) {
      router.replace("/dashboard");
    }
  }, [isAuth]);

  return children;
}