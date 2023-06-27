import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="bg-stone-700">
      <div className="flex py-2 justify-between w-4/5 m-auto">
        <ul className="flex gap-6 text-white">
          <li>Home</li>
          <li>Admin</li>
          <li>Infor</li>
        </ul>
        {session?.user ? (
          <div>
            <p>Welcome {session.user.email}</p>
            <button
              className="bg-gray-300 rounded p-1"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button className="bg-gray-300 rounded p-1" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
