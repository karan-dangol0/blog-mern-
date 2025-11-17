import React, { useState } from "react";
import { X, Menu } from "lucide-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between ">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="logo" w={32} h={32} className={"size-8"} />
        <span className="text-sm">HighPiePepper</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div className="cursor-pointer " onClick={() => setOpen((prev) => !prev)}>
          {open ? <X /> : <Menu />}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full  h-full bg-[#e6e6ff] flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out  gap-8 font-medium text-lg ${
            open ? "right-0" : "right-full"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white" >Login 🔥</button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 🔥</button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
