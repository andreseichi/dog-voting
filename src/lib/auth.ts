import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      image: string;
      name: string;
    };
  }
  interface Profile {
    email_verified: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (account?.provider === "google" && !profile?.email_verified) {
        return "/unverified-email";
      }

      return true;
    },
  },
};
