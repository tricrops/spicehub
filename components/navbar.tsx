"use client";

import SearchBar from "./searchbar";
import NavLoginButton from "./navloginbutton";
import { MoreVertical, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Tricrops.png";

export function Navbar() {
  return (
    <nav className="flex py-2 md:py-4 px-5 md:px-20 absolute w-screen gap-20 justify-between bg-blue-300">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="flex p-1 text-lg ring-2 ring-blue-600 font-semibold rounded-full aspect-square w-10 items-center justify-center"
        >
          <Image
            src={Logo}
            alt="Tricrops Logo"
            className="h-full object-cover rounded-xl w-full"
            height={50}
          />
        </Link>
      </div>
      <div className="flex-1 hidden md:flex">
        <div className="w-full">
          <SearchBar />
        </div>
      </div>
      <div className="flex md:gap-12">
        <Link
          href="/sell"
          className="hidden md:block"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag />
            <p className="whitespace-nowrap">Become a Seller</p>
          </div>
        </Link>
        <div className="flex items-center">
          <div>
            <NavLoginButton />
          </div>
        </div>
        <div className="flex items-center">
          <MoreVertical size={20} />
        </div>
      </div>
    </nav>
  );
}
