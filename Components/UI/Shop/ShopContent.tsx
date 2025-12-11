"use client";

import { useMemo, useReducer, Activity } from "react";
import ProductsData from "@/lib/JsonData/ProductData.json";
import { parsePrice } from "@/lib/utils/parsePrice";
import { RiArrowDownSLine } from "react-icons/ri";
import { initialState, shopReducer } from "@/lib/reducers/shopReducer";
import { categories } from "@/lib/constants";
import ProductCard from "../Product/ProductCard";

function ShopContent() {
  const [
    { isOpenSort, isOpenCategory, selectedFilter, selectedCategory },
    dispatch,
  ] = useReducer(shopReducer, initialState);

  // ---- فیلتر و مرتب‌سازی داده‌ها ----
  const sortedData = useMemo(() => {
    let data = [...ProductsData];

    if (selectedCategory !== "All") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    switch (selectedFilter) {
      case "جدیدترین":
        return data.sort((a, b) => b.id - a.id);

      case "قدیمی‌ترین":
        return data.sort((a, b) => a.id - b.id);

      case "ارزان‌ترین":
        return data.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));

      case "گران‌ترین":
        return data.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

      default:
        return data;
    }
  }, [selectedCategory, selectedFilter]);

  const start = sortedData.length > 0 ? 1 : 0;
  const end = sortedData.length;

  return (
    <div className="wrapper gap-5 py-30 pt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-5">
        <div className="flex items-center gap-5">
          {/* Sorting Button */}
          <div className="relative">
            <button
              type="button"
              className="px-6 py-3 bg-black text-white flex items-center gap-3 rounded-full cursor-pointer"
              onClick={() => dispatch({ type: "TOGGLE_SORT" })}
            >
              {selectedFilter}
              <RiArrowDownSLine className="text-xl" />
            </button>

            <Activity mode={isOpenSort ? "visible" : "hidden"}>
              <div className="absolute left-0 mt-2 w-48 bg-white overflow-hidden shadow-xl z-50">
                <button
                  type="button"
                  className="px-5 py-3 hover:bg-gray-100 w-full text-right cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "SET_FILTER", payload: "جدیدترین" })
                  }
                >
                  جدیدترین
                </button>

                <button
                  type="button"
                  className="px-5 py-3 hover:bg-gray-100 w-full text-right cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "SET_FILTER", payload: "قدیمی‌ترین" })
                  }
                >
                  قدیمی‌ترین
                </button>

                <button
                  type="button"
                  className="px-5 py-3 hover:bg-gray-100 w-full text-right cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "SET_FILTER", payload: "ارزان‌ترین" })
                  }
                >
                  ارزان‌ترین
                </button>

                <button
                  type="button"
                  className="px-5 py-3 hover:bg-gray-100 w-full text-right cursor-pointer"
                  onClick={() =>
                    dispatch({ type: "SET_FILTER", payload: "گران‌ترین" })
                  }
                >
                  گران‌ترین
                </button>
              </div>
            </Activity>
          </div>
          {/* Category Button */}
          <div className="relative">
            <button
              type="button"
              className="px-6 py-3 bg-black text-white flex items-center gap-3 rounded-full"
              onClick={() => dispatch({ type: "TOGGLE_CATEGORY" })}
            >
              {categories.find((c) => c.value === selectedCategory)?.label ||
                "همه"}
              <RiArrowDownSLine className="text-xl" />
            </button>

            <Activity mode={isOpenCategory ? "visible" : "hidden"}>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl z-50">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    className="px-5 py-3 hover:bg-gray-100 w-full text-right cursor-pointer"
                    onClick={() =>
                      dispatch({
                        type: "SET_CATEGORY",
                        payload: cat.value,
                      })
                    }
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </Activity>
          </div>
        </div>

        {/* نمایش تعداد آیتم‌ها */}
        <p className="text-lg text-black/80">
          نمایش{" "}
          <span className="font-semibold">
            {start}–{end}
          </span>{" "}
          از مجموع <span className="font-semibold">{ProductsData.length}</span>{" "}
          محصول
        </p>
      </div>
      {/* Sorted Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sortedData.map((item, index) => (
          <div key={index}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopContent;
