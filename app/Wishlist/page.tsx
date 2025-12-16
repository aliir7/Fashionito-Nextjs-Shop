"use client";

import Breadcrumb from "@/Components/UI/Breadcrumb";
import Follow from "@/Components/UI/Index/Follow/Follow";

import { useWishlistStore } from "@/lib/stores/wishlistStore";
import { useCartStore } from "@/lib/stores/cartStore";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section>
      <div className="page-section flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center z-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">
            علاقه‌مندی‌ها
          </h2>
          <Breadcrumb
            className="mt-5"
            items={[
              { label: "صفحه اصلی", href: "/" },
              { label: "فروشگاه", href: "/Shop" },
              { label: "علاقه‌مندی‌ها" },
            ]}
          />
        </div>
      </div>
      <div className="px-[8%] lg:px-[20%] py-20">
        {wishlistItems.length > 0 ? (
          <div className="flex flex-col gap-10">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-8"
              >
                <div className="flex items-center gap-5">
                  {/* product image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl"
                  />
                  {/* product title */}
                  <div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xl font-bold">{product.price}</span>
                      <span className="text-sm font-medium bg-black text-white px-4 py-1 rounded-full">
                        {product.off}
                      </span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="mt-5 md:mt-0">
                  <p className="text-sm text-green-600 font-semibold">موجود</p>
                </div>
                <div className="flex items-center gap-5 mt-5 md:mt-0">
                  <button
                    type="button"
                    className="px-6 py-3 border hover:bg-secondary hover:border-transparent hover:text-white rounded-lg md:rounded-full cursor-pointer transition-all duration-300"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    حذف از لیست
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 bg-black text-white rounded-lg md:rounded-full cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            ))}
            <Link href="/Cart">
              <button
                type="button"
                className="btn mt-3 bg-black text-white cursor-pointer flex items-center justify-center gap-2 px-6 py-3 text-lg transition-all duration-300 rounded-md"
              >
                رفتن به سبد خرید
                <BsCart3 />
              </button>
            </Link>
          </div>
        ) : (
          <p className="text-2xl text-secondary border border-gray-400 rounded-2xl px-5 py-2">
            لیست علاقه‌مندی‌های شما خالی است.
          </p>
        )}
      </div>
      <Follow />

      <ToastContainer
        position="top-left"
        autoClose={2000}
        style={{ padding: "8px" }}
      />
    </section>
  );
}

export default WishlistPage;
