"use client";

import Link from "next/link";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="border border-black w-[90%] max-w-xl p-10 rounded-2xl">
      <h2 className="text-2xl lg:text-3xl text-center font-bold mb-3">
        ثبت نام
      </h2>
      <p className="mb-6 text-gray-600 text-center text-sm lg:text-[16px]">
        خوش آمدید، برای ثبت نام مشخصات خود را وارد کنید
      </p>
      <div className="space-y-5 ">
        {/* username field */}
        <div className="username-details text-sm lg:text-[16px]">
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            name="username"
            placeholder="حداقل 4 کاراکتر باشد"
            className="w-full px-4 py-3 border border-black bg-white hover:border-secondary focus:outline-none rounded-lg"
          />
        </div>
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
            placeholder="حداقل 6 کاراکتر باشد"
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
        {/* repeat password */}
        <label htmlFor="password" className="text-sm lg:text-[16px]">
          تکرار رمز عبور
        </label>
        <div className="password-details flex justify-between items-center border border-black bg-white hover:border-secondary rounded-lg text-sm lg:text-[16px]">
          <input
            type="password"
            name="password"
            className="w-full px-5 py-3 focus:outline-none bg-transparent"
          />
        </div>

        {/* button */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            type="button"
            className="btn bg-black text-white px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
          >
            ثبت نام
          </button>
          <Link href="/Login">
            <button
              type="button"
              className="btn border border-black hover:text-white px-4 py-2 cursor-pointer transition-all duration-300 rounded-md hover:bg-black"
            >
              ورود
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
