import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-lightViolet flex w-full justify-between ">
      <h4>HER CONVERSATION</h4>
      <div>
        <Link href={""}>S</Link>
        <Link href={""}>Stories</Link>
        <Link href={""}>Articles</Link>
        <Link href={""}>Login</Link>
        <Link href={""}>Sign Up</Link>
      </div>
    </header>
  );
};

export default Navbar;
