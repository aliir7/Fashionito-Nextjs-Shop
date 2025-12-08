"use client";

import Image from "next/image";
import circleImg from "@/public/assets/banner-shop-circle.png";
import starShape from "@/public/assets/star-shape.svg";
import playIcon from "@/public/assets/banner-play-icon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { categories } from "@/lib/constants";

function Banner() {
  const duplicatedData = [...categories, ...categories];
  return (
    <section>
      <div className="banner relative">
        {/* banner spinner */}
        <div>
          <Image
            src={circleImg}
            alt="banner-shop-img"
            width={300}
            height={300}
            className="banner-shop-img"
          />
          <Image
            src={playIcon}
            alt="banner-play-img"
            width={100}
            height={100}
            className="banner-play-img"
          />
        </div>

        {/* banner slider */}
        <div className="w-full overflow-hidden relative bg-primary py-5 -rotate-2">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            slidesPerView={6}
            loop={true}
            freeMode={true}
            speed={1000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 8 },
              480: { slidesPerView: 3, spaceBetween: 12 },
              768: { slidesPerView: 4, spaceBetween: 16 },
              1024: { slidesPerView: 6, spaceBetween: 12 },
            }}
          >
            {duplicatedData.map((title, idx) => (
              <SwiperSlide key={idx} className="w-auto">
                <h3 className="text-2xl flex items-center gap-2 font-bold whitespace-nowrap">
                  <Image src={starShape} alt="star" width={32} height={32} />
                  {title}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Banner;
