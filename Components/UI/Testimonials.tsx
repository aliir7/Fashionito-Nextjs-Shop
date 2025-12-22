"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import aboutImg6 from "@/public/assets/about-6.webp";
import { testimonialsData } from "@/lib/constants";

function Testimonials() {
  return (
    <div className="wrapper py-20 pb-0 bg-[#ffedd4]">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 testimonial-img relative">
          <Image src={aboutImg6} alt="about-image-6" />
        </div>
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold mb-5">
            نظرات مشتریان ما
          </h3>
          {/* Slider */}
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id} className=" ">
                <div className="testimonial-card bg-white rounded-2xl p-8">
                  <p className="text-black mb-5 text-lg">{item.text}</p>
                  <div className="testimonial-author flex items-center gap-5">
                    <Image
                      src={item.img}
                      alt={`testimonial-image-${item.id}`}
                      className="w-20 rounded-full"
                    />
                    <div className="about-text">
                      <h3 className="text-black font-bold text-xl">
                        {item.name}
                      </h3>
                      <span className="text-gray-500 mt-1">{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
