import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-12 flex text-red-500 p-4 justify-between items-center border-b-2 border-b-red-500 uppercase">
        <div className="text-xl">
          <Link href="/">Massimo</Link>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
