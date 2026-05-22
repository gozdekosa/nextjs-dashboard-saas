import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // cookie al
  const refreshToken = req.cookies.get("refreshToken");

  const isAuth = !!refreshToken;

  const pathname = req.nextUrl.pathname;

  // AUTH SAYFALARI
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register";

  // DASHBOARD SAYFALARI
  const isDashboardPage =
    pathname.startsWith("/dashboard");

  // LOGIN OLMUŞSA LOGIN'E GİREMEZ
  if (isAuth && isAuthPage) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  // LOGIN DEĞİLSE DASHBOARD'A GİREMEZ
  if (!isAuth && isDashboardPage) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  return NextResponse.next();
}