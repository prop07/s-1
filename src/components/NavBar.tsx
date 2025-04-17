import React from "react";
import Theme from "@/app/Theme";
import FontSizeController from "@/app/FontSizeController";
import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <div className="py-4 px-4 flex justify-between items-center">
        <div>
        <Link href={"/"} className="text-3xl font-bold text-sky-500">
          News Magazine
        </Link>
        <p className="text-xs">Your Daily News Source</p>
        </div>
        <div className=" flex gap-3 items-center">
          <FontSizeController />
          <Theme />
        </div>
      </div>
      {/* Navigation */}
      <nav className="bg-primary text-sm">
        <ul className="flex border-t border-b border-default-border">
          <Link href="/">
            <li className="py-3 px-4 font-medium hover:bg-default-hover cursor-pointer">
              HOME
            </li>
          </Link>
          <Link href="/details">
            {" "}
            <li className="py-3 px-4 font-medium hover:bg-default-hover cursor-pointer">
              DETAILS
            </li>
          </Link>
          <Link href="/search">
            <li className="py-3 px-4 font-medium hover:bg-default-hover cursor-pointer">
              SEARCH
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="py-3 px-4 font-medium hover:bg-default-hover cursor-pointer">
              CONTACT US
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
