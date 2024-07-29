"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect;
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/logo.svg" width={50} height={25} alt="logo"></Image>
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/how" && "text-primary font-bold"
          }`}
        >
          How it Works
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
