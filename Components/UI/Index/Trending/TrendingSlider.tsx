"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

import ProductData from "@/JsonData/ProductData.json";
import { BsBalloonHeart, BsCart3 } from "react-icons/bs";
import type { Product } from "@/types/types";
import { toast } from "react-toastify";

function TrendingSlider() {
  // Add to Wishlist handler
  const addToWishlist = (product: Product) => {
    const stored = localStorage.getItem("wishlist");
    const wishlist = stored ? JSON.parse(stored) : [];

    const exist = wishlist.find((item: Product) => item.id === product.id);

    if (exist) {
      toast.info("محصول در لیست علاقه‌مندی ها وجود دارد");
      return;
    }

    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast.success("محصول به لیست علاقه‌مندی اضافه شد");
  };
  return (
    <div className="trending-swiper my-20">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1800,
        }}
        modules={[Autoplay]}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {ProductData.slice(0, 5).map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card cursor-pointer">
              <div className="product-image rounded-2xl overflow-hidden">
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
                  <div className="product-icon h-10 w-10 flex items-center justify-center text-white bg-black/40 rounded-full cursor-pointer">
                    <BsCart3 />
                  </div>
                </div>
                <div className="relative right-0 -bottom-1 lg:absolute lg:bottom-18 lg:right-10">
                  <Link href={`/Shop/${product.id}`}>
                    <button
                      type="button"
                      className="btn bg-black text-white cursor-pointer text-lg px-6 py-3 w-full lg:w-auto rounded-2xl lg:rounded-full border-3 border-white"
                    >
                      جزئیات محصول
                    </button>
                  </Link>
                </div>
              </div>
              <Link href={`/Shop/${product.id}`}>
                <div className="product-content mt-5 md:mt-10 z-10">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-lg pl-5">
                      {product.title}
                    </h3>
                    <h3 className="font-semibold text-lg">{product.price}</h3>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingSlider;
