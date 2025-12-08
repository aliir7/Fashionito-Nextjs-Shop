"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductData from "@/lib/JsonData/ProductData.json";
import { useEffect, useRef } from "react";
import { categories } from "@/lib/constants";
import ProductCard from "./ProductCard";

function PopularProducts() {
  const containerRef = useRef(null);

  useEffect(() => {
    async function loadMix() {
      if (typeof window !== "undefined" && containerRef.current) {
        const mixitup = (await import("mixitup")).default;

        mixitup(containerRef.current, {
          animation: { duration: 400 },
        });
      }
    }
    loadMix();
  }, []);

  return (
    <section>
      <div className="wrapper py-20 mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="">
            <h3 className="text-3xl font-medium">محبوب‌ترین محصولات</h3>
          </div>
          <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center px-4 py-2 border rounded-full gap-2">
              <button
                className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer mixitup-control-active"
                type="button"
                data-filter="all"
              >
                همه
              </button>
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="px-4 py-1 rounded-full focus:bg-black focus:text-white transition-all duration-300 cursor-pointer mixitup-control-active"
                  type="button"
                  data-filter={`.${cat.value}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            ref={containerRef}
          >
            {ProductData.slice(0, 8).map((item, index) => {
              const cat = item.category;
              return (
                <div key={index} className={`mix ${cat}`}>
                  <ProductCard product={item} classNames="popular-product" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
