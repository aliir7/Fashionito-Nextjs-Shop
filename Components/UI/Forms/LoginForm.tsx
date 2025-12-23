"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="border border-black w-[90%] max-w-xl p-10 rounded-2xl">
      <h2 className="text-2xl lg:text-3xl text-center font-bold mb-3">ورود</h2>
      <p className="mb-6 text-gray-600 text-center text-sm lg:text-lg">
        خوش آمدید، برای ورود مشخصات خود را وارد کنید
      </p>
      <div className="space-y-5 ">
        {/* email field */}
        <div className="email-details text-sm lg:text-[16px]">
          <label htmlFor="email">ایمیل</label>
          <input
            type="email"
            name="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full px-4 py-3 border border-black bg-white hover:border-secondary focus:outline-none rounded-lg"
          />
        </div>
        {/* password field */}
        <label htmlFor="password" className="text-sm lg:text-[16px]">
          رمز عبور
        </label>
        <div className="password-details flex justify-between items-center border border-black bg-white hover:border-secondary rounded-lg text-sm lg:text-[16px]">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="رمز عبور خود را وارد کنید"
            className="w-full px-5 py-3 focus:outline-none bg-transparent"
          />
          {showPassword ? (
            <div
              className="text-lg pe-3 cursor-pointer transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              <BsEyeSlashFill />
            </div>
          ) : (
            <div
              className="text-lg pe-3 cursor-pointer transition"
              onClick={() => setShowPassword(!showPassword)}
            >
              <BsEyeFill />
            </div>
          )}
        </div>
        {/* remember me */}
        <div className="flex justify-between mb-8 text-sm lg:text-[16px]">
          <label
            htmlFor="remember"
            className="flex items-center gap-1 cursor-pointer"
          >
            <input
              type="checkbox"
              name="remember"
              className="mt-1 focus:outline-none border border-black hover:border-secondary"
            />
            <span className="text-gray-500 text-xs lg:text-[16px]">
              مرا به خاطر بسپار
            </span>
          </label>
          <Link
            className="text-secondary cursor-pointer text-xs lg:text-[16px]"
            href="#"
          >
            فراموشی رمز عبور
          </Link>
        </div>
        {/* button */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            type="button"
            className="btn bg-black text-white px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
          >
            ورود
          </button>
          <Link href="/Registration">
            <button
              type="button"
              className="btn border border-black hover:text-white px-4 py-2 cursor-pointer transition-all duration-300 rounded-md hover:bg-black"
            >
              ثبت نام
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
