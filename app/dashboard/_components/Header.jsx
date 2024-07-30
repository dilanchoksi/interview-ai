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
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src="/logo.svg" width={50} height={25} alt="logo"></Image>
      <ul className="hidden md:flex gap-6">
        <li
          onClick={() => router.push("/dashboard")}
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
            path == "/dashboard" && "text-primary font-bold"
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
