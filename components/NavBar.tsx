"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="px-20 flex justify-between items-center h-20">
      <Link href="/">
        <h1 className="font-bold text-2xl">Problem Tracker</h1>
      </Link>
      <div className="flex gap-10">
        <Link href="/solved">Solved</Link>
        <Link href="/upcoming">Upcoming</Link>
      </div>
      <button>Login/Register</button>
    </div>
  );
};

export default NavBar;
