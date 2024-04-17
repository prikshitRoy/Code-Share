import { prisma } from "@/lib/prisma";

import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

function getGithubCredentials() {
  const clientId = process.env.GITHUB_ID;
  const clientSecret = process.env.GITHUB_SECRET;

  if (!clientId || clientId.length === 0) {
    throw new Error("No clientID for github provider set");
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("No clientSecret for google provider set");
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: getGithubCredentials().clientId,
      clientSecret: getGithubCredentials().clientSecret,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    redirect() {
      return "/dashboard";
    },
  },
};
