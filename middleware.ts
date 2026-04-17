import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

    // 1. Redirect if trying to access Admin pages without ADMIN role
    if (isAdminPage && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // This ensures the middleware only runs if authorized returns true
      authorized: ({ token }) => !!token,
    },
  }
);

// 🔹 Path Protection Config
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth internal routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (public)
     * - register (public)
     * - / (landing page)
     */
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};