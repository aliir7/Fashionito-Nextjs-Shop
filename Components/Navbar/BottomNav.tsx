"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, Activity } from "react";
import menuDotImg from "@/public/assets/Menu-dot.svg";
import { navLinks } from "@/constants";
import { BsBalloonHeart, BsCart3 } from "react-icons/bs";
import { RiMenuLine, RiArrowDownSLine } from "react-icons/ri";

function BottomNav() {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle dropdown handler
  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((k) => [k, false])),
      [label]: !prev[label],
    }));
  };

  return (
    <div
      className={`w-full bg-white shadow-sm py-5 transition-all duration-500 ${
        isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""
      }`}
    >
      <div className="flex items-center justify-between wrapper text-gray-700">
        {/* desktop logo */}
        <Link
          href="/"
          className={`text-3xl lg:text-4xl font-bold text-black ${
            isFixed ? "lg:flex" : "hidden"
          }`}
        >
          Fashion<span className="text-secondary">ito</span>
        </Link>

        {/* mobile logo */}
        <Link
          href="/"
          className="text-2xl me-4 lg:text-4xl font-bold text-black block lg:hidden"
        >
          Fashion<span className="text-secondary">ito</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex space-x-6 menu-link relative z-40">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label}
                  <Image src={menuDotImg} alt="menu-icon" />
                </Link>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white p-2 border border-gray-100 rounded-lg min-w-[170px]">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block py-2 px-4 rounded-md transition-all"
                    >
                      <div className="flex gap-1">
                        <Image src={menuDotImg} alt="menu-icon" />
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className="flex gap-2">
                {link.label}
                <Image src={menuDotImg} alt="menu-icon" />
              </Link>
            )
          )}
        </nav>

        {/* Right Icon */}
        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="login-link hidden lg:flex border-b border-gray-400 font-semibold"
          >
            ورود / ثبت نام
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/Wishlist" className="relative">
              <BsBalloonHeart className="text-3xl" />
            </Link>
            <Link href="/Cart" className="relative">
              <BsCart3 className="text-3xl" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="text-3xl lg:hidden"
        >
          <RiMenuLine />
        </button>
      </div>

      {/* Mobile Menu */}
      <Activity mode={mobileMenuOpen ? "visible" : "hidden"}>
        <div className="lg:hidden border-t bg-white border-gray-200 mt-3 transition-all duration-500">
          <nav className="flex flex-col px-4 py-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  {/* parent */}
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex items-center justify-between py-3 text-sm font-medium"
                  >
                    {link.label}
                    <RiArrowDownSLine
                      className={`text-xl transition-transform ${
                        openDropdowns[link.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openDropdowns[link.label] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col bg-white space-y-1 py-2 px-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1 px-2 text-sm border-b border-gray-200"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-sm block rounded-md font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </Activity>
    </div>
  );
}

export default BottomNav;
