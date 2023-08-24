import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-12 flex text-red-500 p-4 justify-between items-center border-b-2 border-b-red-500 uppercase">
        <div className="hidden md:flex gap-4">
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className="text-xl">
          <Link href="/">Massimo</Link>
        </div>
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
