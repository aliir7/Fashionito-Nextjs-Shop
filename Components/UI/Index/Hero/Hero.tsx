import heroShape1 from "@/public/assets/hero-shape1.svg";
import heroImg from "@/public/assets/Hero.webp";
import heroTestImg1 from "@/public/assets/hero-test1.webp";
import heroTestImg2 from "@/public/assets/hero-test2.webp";
import heroTestImg3 from "@/public/assets/hero-test3.webp";
import heroSmallImg from "@/public/assets/hero-small-1.webp";
import Image from "next/image";
import Link from "next/link";
import { BsBalloonHeart, BsBasket } from "react-icons/bs";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 relative">
          <div className="hero-shape3" />
          <div className="hero-shape4" />
          {/* Hero Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="hero-content">
              <h3 className="text-4xl md:text-5xl my-4 lg:text-[4rem] font-semibold">
                همه‌چیز اینجاست
              </h3>
              <div className="flex items-center gap-2">
                <Image src={heroShape1} alt="hero-shape1" />
                <h3 className="text-4xl md:text-5xl lg:text-[4rem] mb-4 font-semibold text-secondary">
                  فروشگاه اینترنتی
                </h3>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold">
                برای زندگی بهتر
              </h3>
              <p className="mt-4 text-xl md:text-2xl">
                ارسال رایگان برای سفارش‌های بالای
                <span className="text-secondary">۵۰۰٬۰۰۰ تومان</span>
              </p>
              {/* Cta Button */}
              <div className="flex items-center gap-5 mt-5">
                <Link href="/Shop/12">
                  <button
                    type="button"
                    className="btn border border-black hover:bg-black hover:text-white cursor-pointer text-sm lg:text-xl px-6 py-3 rounded-md transition-all duration-300"
                  >
                    مشاهده جزئیات
                  </button>
                </Link>

                <Link href="/Shop">
                  <button
                    type="button"
                    className="btn bg-black text-white cursor-pointer text-sm lg:text-xl px-6 py-3 rounded-md transition-all duration-300"
                  >
                    برو به فروشگاه
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Hero Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="hero-image">
              <div className="hero-shape1" />
              <div className="hero-shape2" />
              <div className="border-shape1" />
              <div className="border-shape2" />
              <div className="star-shape1" />
              <div className="star-shape2" />
              <div className="star-shape3" />
              <div className="absolute top-90 left-0 shadow-2xl bg-[#ffffffcb] backdrop-blur-2xl px-3 py-2 flex items-center gap-2">
                <Image
                  src={heroSmallImg}
                  alt="hero-small"
                  className="rounded-2xl"
                />
                <div className="w-full lg:w-1/2 relative">
                  <h3 className="font-semibold">بافتنی راحت کتان</h3>
                  <h3 className="font-semibold mt-2 text-secondary">۶۵۰٬۰۰۰</h3>
                  <div className="absolute -bottom-2 left-0 bg-secondary hover:bg-primary hover:text-black cursor-pointer text-white py-2 px-2 rounded-full transition-all duration-300">
                    <BsBasket />
                  </div>
                </div>
              </div>
              {/*  hero text wrap */}
              <div className="absolute top-120 -right-10 z-10 hero-text-wrap shadow-2xl backdrop-blur-2xl bg-[#ffffff8e] px-5 py-4 flex items-center gap-2 rounded-md">
                <div className="text-2xl bg-secondary hover:bg-primary text-white hover:text-black px-2 py-2 rounded-full transition-all duration-300 cursor-pointer">
                  <BsBalloonHeart />
                </div>
                <div className="flex me-2">
                  <Image
                    width={60}
                    height={60}
                    src={heroTestImg1}
                    alt="hero-test1"
                    className="rounded-full border border-white object-contain"
                  />
                  <Image
                    width={60}
                    height={60}
                    src={heroTestImg2}
                    alt="hero-test2"
                    className="rounded-full border-2 -translate-x-2 border-white object-contain"
                  />
                  <Image
                    width={60}
                    height={60}
                    src={heroTestImg3}
                    alt="hero-test3"
                    className="rounded-full border-2 -translate-x-4 border-white object-contain"
                  />
                </div>
              </div>
              <Image
                src={heroImg}
                alt="hero-image"
                className="w-full md:w-4/5 lg:w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
