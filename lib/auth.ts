import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      // ✅ FIX: define fields properly
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

     async authorize(credentials) {
  console.log("INPUT:", credentials);

  const user = await prisma.user.findUnique({
    where: { email: credentials?.email },
  });

  console.log("DB USER:", user);

  if (!user) {
    console.log("User not found");
    return null;
  }

  const isValid = await bcrypt.compare(
    credentials!.password,
    user.password
  );

  console.log("PASSWORD MATCH:", isValid);

  if (!isValid) {
    console.log("Wrong password");
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  };
}
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role as "ADMIN" | "MEMBER"; // ✅ fix type
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as "ADMIN" | "MEMBER"; // ✅ fix type
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};