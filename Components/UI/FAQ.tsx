"use client";

import { faqData } from "@/lib/constants";
import { useState } from "react";
import { BsDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleHandler = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full space-y-1 py-10">
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`overflow-hidden py-2 transition-all duration-300 ${
            openIndex === index ? "rounded-2xl" : ""
          }`}
        >
          {/* Question */}
          <button
            type="button"
            className="w-full flex items-center justify-between text-right focus:outline-none cursor-pointer border border-black text-lg px-6 py-4 rounded-lg"
            onClick={() => toggleHandler(index)}
          >
            <span className="text-lg font-semibold flex-1 text-right hover:text-secondary transition-all duration-300">
              {item.question}
            </span>
            {openIndex === index ? (
              <BsDashCircleFill className="text-xl shrink-0" />
            ) : (
              <BsPlusCircleFill className="text-xl shrink-0" />
            )}
          </button>
          {/* Answer */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === index
                ? "max-h-[300px] py-3 opacity-100"
                : "max-h-0 opacity-0 py-0"
            }`}
          >
            <p className="text-black">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
