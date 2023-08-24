"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];
const user = false;

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <Image
          src="/open.png"
          alt="open logo"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="close logo"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute left-0 top-24 w-full z-10 h-[calc(100vh-6rem)] flex items-center justify-center text-3xl flex-col gap-8">
        {links.map((items) => (
          <Link href={items.url} key={items.id}>
            {items.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login">LOGIN</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Link></Link>
      </div>
    </>
  );
};

export default Menu;
