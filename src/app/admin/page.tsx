"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const AdminPage = () => {
  const { data, status } = useSession();
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUserlist(data));
  }, []);

  return (
    <div>
      {status === "authenticated" && (
        <>
          <h1 className="py-6 text-center text-3xl">Admin Page</h1>
          <h2 className="text-orange-400">{JSON.stringify(data)}</h2>
          <em>This page is protected!</em>
          <ul>
            {userlist.map((user: any) => (
              <li className="py-2" key={user.id}>
                <p>
                  {user.id}. {user.name}
                </p>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {status === "loading" && (
        <h1>
          <em>Loading...</em>
        </h1>
      )}
      {status === "unauthenticated" && (
        <h1>
          <em>Redirect...</em>
        </h1>
      )}
    </div>
  );
};

export default AdminPage;
