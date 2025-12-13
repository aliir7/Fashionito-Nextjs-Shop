"use client";

import { useCartStore } from "@/lib/stores/cartStore";
import { useWishlistStore } from "@/lib/stores/wishlistStore";
import { Product } from "@/types/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";
import { BsBalloonHeart, BsCart3 } from "react-icons/bs";

type ProductCardProps = {
  product: Product;
  classNames?: string;
};

function ProductCard({ product, classNames }: ProductCardProps) {
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="relative">
      <div className={`product-card cursor-pointer ${classNames} lg:pb-10`}>
        {/* lg:pb-10 -> reserve space for half-out button on desktop */}

        {/* IMAGE WRAPPER: make overflow visible on lg so out-of-image button is shown */}
        <div className="product-image relative rounded-2xl overflow-hidden lg:overflow-visible">
          <Image
            src={product.image.trimEnd()}
            alt={`product-image-${product.id}`}
            width={500}
            height={500}
            className="w-full h-full rounded-2xl object-cover"
          />

          <span className="absolute top-3 right-3 px-4 py-1 rounded-full bg-white">
            {product.off}
          </span>

          <div className="absolute flex flex-col gap-2 top-5 left-5">
            <button
              type="button"
              onClick={() => addToWishlist(product)}
              className="product-icon h-10 w-10 flex items-center justify-center text-white bg-black/40 rounded-full cursor-pointer"
            >
              <BsBalloonHeart />
            </button>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="product-icon h-10 w-10 flex items-center justify-center text-white bg-black/40 rounded-full cursor-pointer"
            >
              <BsCart3 />
            </button>
          </div>

          {/* DESKTOP: centered, half-outside button
              - bottom-0 + translate-y-1/2 moves it half below the image bottom
              - lg:overflow-visible on wrapper ensures it's visible
          */}
          <div className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
            <Link href={`/Shop/${product.id}`}>
              <button
                type="button"
                className="btn bg-black text-white cursor-pointer text-lg px-8 text-nowrap py-3 rounded-full border-3 border-white shadow-lg"
              >
                جزئیات محصول
              </button>
            </Link>
          </div>
        </div>

        {/* MOBILE: full-width button under image */}
        <div className="block lg:hidden mt-4">
          <Link href={`/Shop/${product.id}`}>
            <button
              type="button"
              className="btn bg-black text-white cursor-pointer text-lg px-6 py-3 w-full rounded-2xl border-3 border-white"
            >
              جزئیات محصول
            </button>
          </Link>
        </div>

        {/* Content: add margin-top so desktop overlap is safe */}
        <Link href={`/Shop/${product.id}`}>
          <div className="product-content mt-4 lg:mt-12 z-10">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-lg lg:px-6 pr-3">
                {product.title}
              </h3>
              <h3 className="font-semibold text-lg">{product.price}</h3>
            </div>
          </div>
        </Link>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        style={{ padding: "8px" }}
      />
    </div>
  );
}

export default ProductCard;
