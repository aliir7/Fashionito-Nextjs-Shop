"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import bannerStarImg from "@/public/assets/banner-star.svg";
import bannerCircleImg from "@/public/assets/banner-2-circle.png";
import Image from "next/image";
import { companies } from "@/lib/constants";

function Companies() {
  return (
    <section>
      <div className="px-[8%] py-20 pt-30">
        <div className="companies-banner py-20">
          <div className="company-shape hidden lg:block">
            <Image
              src={bannerCircleImg}
              alt="banner-circle"
              width={200}
              height={200}
            />
            <Image
              src={bannerStarImg}
              alt="banner-star"
              width={60}
              height={60}
            />
          </div>
          <div className="px-[5%] md:px-[8%]">
            <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold w-full lg:w-[74%]">
              ما همچنان در مسیر پیشرفت هستیم؛ اکنون بیش از ۶٫۳ هزار برند مطرح،
              همراه‌اعتماد ما‌هستند.
            </h3>
          </div>
          {/* Companies Slider */}
          <div className="mt-10 md:mt-20 overflow-hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={60}
              slidesPerView={6}
              loop={true}
              freeMode={true}
              dir="rtl"
              speed={3500}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 60 },
                480: { slidesPerView: 2, spaceBetween: 60 },
                768: { slidesPerView: 3, spaceBetween: 60 },
                1024: { slidesPerView: 6, spaceBetween: 60 },
              }}
            >
              {companies.map((logo, index) => (
                <SwiperSlide key={index} className="w-auto">
                  <div className="company-card cursor-pointer bg-white px-10 py-8 rounded-2xl">
                    <Image
                      src={logo}
                      alt={`company-${index}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-10  overflow-hidden w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={60}
              slidesPerView={6}
              loop={true}
              freeMode={true}
              dir="ltr"
              speed={3000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 60 },
                480: { slidesPerView: 2, spaceBetween: 60 },
                768: { slidesPerView: 3, spaceBetween: 60 },
                1024: { slidesPerView: 6, spaceBetween: 60 },
              }}
            >
              {companies.map((logo, index) => (
                <SwiperSlide key={index} className="w-auto">
                  <div className="company-card cursor-pointer bg-white px-10 py-8 rounded-2xl">
                    <Image
                      src={logo}
                      alt={`company-${index}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
