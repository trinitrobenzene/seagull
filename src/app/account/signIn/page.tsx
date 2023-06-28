"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const SignInPage = () => {
  const email = useRef("");
  const password = useRef("");
  const { data, status } = useSession();
  const route = useRouter();

  useEffect(() => {
    if (status === "authenticated") route.replace("/");
  }, [status]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: email.current,
      password: password.current,
      redirect: false,
      callbackUrl: "/",
    });
    // console.log(res);
    if (res && res.ok) {
      route.push("/");
    }
  };

  return (
    <div className="py-20">
      <form
        className="w-[300px] m-auto p-4 rounded-xl bg-lime-300"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">Sign In Page</h1>
        <div className="my-4">
          <p>Email</p>
          <input
            type="text"
            className="w-full p-2"
            onChange={(e) => (email.current = e.target.value)}
          />
        </div>
        <div className="my-4">
          <p>Password</p>
          <input
            type="password"
            className="w-full p-2"
            onChange={(e) => (password.current = e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="w-full p-2 bg-green-700 text-white"
          value="Sign In"
        />
      </form>
    </div>
  );
};

export default SignInPage;
