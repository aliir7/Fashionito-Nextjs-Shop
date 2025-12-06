"use client";

import Image from "next/image";
import circleImg from "@/public/assets/banner-shop-circle.png";
import starShape from "@/public/assets/star-shape.svg";
import playIcon from "@/public/assets/banner-play-icon.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import { categoryCardData } from "@/lib/constants";

function Banner() {
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
        <div className="w-full overflow-hidden">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              arrows: false,
              pagination: false,
              autoWidth: true,
              gap: "40px",
              speed: 1,
              autoScroll: {
                speed: 1,
                pauseOnHover: false,
                pauseOnFocus: false,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {categoryCardData.map((item) => (
              <SplideSlide key={item.id}>
                <h3 className="text-2xl flex items-center gap-3 font-bold">
                  <Image
                    src={starShape}
                    alt="star-shape-slider"
                    width={60}
                    height={60}
                  />
                  {item.title}
                </h3>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default Banner;
