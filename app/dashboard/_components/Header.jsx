"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const router = useRouter();

  const path = usePathname();
  useEffect;
  return (
    <div className="flex p-4 items-center justify-between bg-primary shadow-sm">
      <Image src="/logo-dash.svg" width={50} height={25} alt="logo"></Image>
      <ul className="hidden md:flex gap-6">
        <li
          onClick={() => router.push("/dashboard")}
          className={`hover:font-bold transition-all cursor-pointer text-secondary ${
            path == "/dashboard" && "text-secondary font-bold"
          }`}
        >
          Dashboard
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/dashboard");
//   }, [router]);

export default Header;
