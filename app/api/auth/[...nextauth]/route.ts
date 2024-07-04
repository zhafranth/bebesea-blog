import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials?.password) {
          console.log("invalid credentials");
          throw new Error("Invalid Credentials");
        }
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (!user || !user?.password) {
          console.log("no users or password");
          throw new Error("Invalid Credentials");
        }

        if (user.password !== credentials.password) {
          console.log("invalid password");
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
