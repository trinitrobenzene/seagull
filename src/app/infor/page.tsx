"use client";
import { useSession } from "next-auth/react";
import React from "react";

const InforPage = () => {
  const { data, status } = useSession();
  
  return (
    <div>
      <h1>User</h1>
      <h2 className="text-green-600">{JSON.stringify(data)}</h2>
    </div>
  );
};

export default InforPage;
