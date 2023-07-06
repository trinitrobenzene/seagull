"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const InforPage = () => {
  const { data, status } = useSession();
  const url = "http://localhost:4000/avatar/64a5850b77e11b77dc2cc537";
  const [imageUrl, setImageUrl] = useState("");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlZEBtYWlsLmNvbSIsInN1YiI6IjY0OGVjMWFmYjEzOWQwYWRmZTFlMDY0MyIsImlhdCI6MTY4ODYzMzExOCwiZXhwIjoxNjkzODE3MTE4fQ.8WCAIicLDyJq9zvOUFQVrcroiN8d1wBUMwyYyLpK3Q8";

  useEffect(() => {
    // return ()=>imageUrl && URL.revokeObjectURL()
    console.log(imageUrl);
  }, [imageUrl]);

  const handleClick = () => {
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((resp) => resp.blob())
      .then((data) => setImageUrl(URL.createObjectURL(data)))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>User</h1>
      <h2 className="text-green-600">{JSON.stringify(data)}</h2>
      <button
        className="p-2 bg-stone-800 text-white rounded"
        onClick={handleClick}
      >
        Get your avatar
      </button>
      {imageUrl && <Image alt="" src={imageUrl} width={160} height={160} />}
    </div>
  );
};

export default InforPage;
