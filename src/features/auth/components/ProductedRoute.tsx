"use client";
    
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuth && !token) {
      router.replace("/login");
    }
  }, [isAuth, token]);

  if (!isAuth) return null;

  return children;
}