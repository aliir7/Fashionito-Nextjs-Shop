"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ProductData from "@/lib/JsonData/ProductData.json";

import ProductCard from "../../Product/ProductCard";

function TrendingSlider() {
  return (
    <div className="trending-swiper my-20">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
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
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrendingSlider;
