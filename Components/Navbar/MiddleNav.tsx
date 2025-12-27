"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import callingImg from "@/public/assets/nav-contact.svg";
import { BsSearch } from "react-icons/bs";

function MiddleNav() {
  const [query, setQuery] = useState("");
  return (
    <div className="w-full bg-primary border-b border-gray-300 relative">
      <div className="flex items-center justify-between wrapper py-3">
        {/* logo */}
        <Link href="/" className="text-3xl lg:text-4xl font-bold text-black">
          فش<span className="text-secondary">نیتو</span>
        </Link>
        {/* search box */}
        <div className="flex flex-1 relative flex-col  mx-6 bg-white rounded-lg lg:max-w-2xl">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="جست‌وجو..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-4 flex-1 outline-none rounded-l-lg"
            />
            <button type="button" className=" cursor-pointer px-3 text-2xl">
              <BsSearch />
            </button>
          </div>
        </div>
        {/* contact */}
        <div className="flex items-center gap-2">
          <Image
            src={callingImg}
            alt="calling-image"
            className=" w-12.5 h-12.5"
          />
          <div className="flex flex-col">
            <h2 className="ps-2 font-semibold text-xs">پشتیبانی 24/7</h2>
            <h1 className="font-semibold">021-12345678</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
