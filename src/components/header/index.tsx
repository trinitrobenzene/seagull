import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="bg-gray-800">
      <div className="flex py-4 justify-between w-4/5 m-auto">
        <ul className="flex gap-6 text-white items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
          <li>
            <Link href={"/infor"}>Infor</Link>
          </li>
        </ul>
        {session?.user ? (
          <div className="flex gap-2 items-center">
            <p className="text-white font-semibold">{session.user.email}</p>
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
