import { NextAuthOptions } from "next-auth"
import { prisma } from "./lib/prisma"
import bcrypt from "bcrypt"

declare module "next-auth/jwt" {
  interface JWT {
    role: "ADMIN" | "MEMBER"
  }
}

declare module "next-auth" {
  interface User {
    role: "ADMIN" | "MEMBER"
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    // Add your providers here (e.g., Credentials, Google, etc.)
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
}
