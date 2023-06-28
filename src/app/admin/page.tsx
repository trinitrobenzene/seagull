"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AdminPage = () => {
  const { data, status } = useSession();
  const route = useRouter();

  useEffect(() => {
    if (status !== "authenticated") route.replace("/account/signIn");
  }, [status]);

  return (
    <div>
      {status === "authenticated" && (
        <>
          <h1 className="py-6">Admin Page</h1>
          <h2 className="text-green-700">{JSON.stringify(data)}</h2>
          <em>This page is protected!</em>
        </>
      )}
      {status !== "authenticated" && (
        <h1>
          <em>Loading...</em>
        </h1>
      )}
    </div>
  );
};

export default AdminPage;
