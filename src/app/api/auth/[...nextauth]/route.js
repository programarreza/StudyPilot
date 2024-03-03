import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import { Account, User as AuthUser } from "next-auth";
const { Account, User: AuthUser } = require("next-auth");
import bcrypt from "bcryptjs";
import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/user";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await ConnectDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log({ user, account });
      const { name, email } = user;
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "github" || account?.provider == "google") {
        try {
          await ConnectDB();
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const res = await fetch("http://localhost:3000/api/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email }),
            });
            console.log("newUser info save successfully ");
            

            if (res.ok) {
              return user;
            }
          }
          return user;
          
        } catch (error) {
          console.log("Error saving user");
          return false;
        }
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
