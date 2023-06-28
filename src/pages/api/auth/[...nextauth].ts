"use client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email === "red@mail.com" && password === "123") {
          console.log(email);
          const id = "648ec1afb139d0adfe1e0643";
          const resp = await fetch(`http://localhost:4000/user/${id}`);
          return await resp.json();
        } else {
          throw new Error("Undefined user...");
        }

        /* const resp = await fetch("http://localhost:4000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        console.log(resp);

        if (resp.ok) {
          const res = await resp.json();
          return res;
        }
        return null; */
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/account/signIn",
  },
};

export default NextAuth(authOptions);
