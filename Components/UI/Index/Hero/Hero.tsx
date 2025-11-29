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
              <h3 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold">
                Your Ultimate
              </h3>
              <div className="flex items-center gap-2">
                <Image src={heroShape1} alt="hero-shape1" />
                <h3 className="text-5xl md:text-7xl lg:text-[5rem] font-semibold text-secondary">
                  Online Store
                </h3>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold">
                For All Your Needs
              </h3>
              <p className="mt-3 text-xl md:text-2xl">
                No code need Plus free, shipping on
                <span className="text-secondary">$99+</span>orders!
              </p>
              {/* Cta Button */}
              <div className="flex items-center gap-5 mt-5">
                <Link href="/Shop/12">
                  <button
                    type="button"
                    className="btn border border-black hover:bg-black hover:text-white cursor-pointer text-xl px-6 py-3 rounded-md transition-all duration-300"
                  >
                    View Details
                  </button>
                </Link>

                <Link href="/Shop">
                  <button
                    type="button"
                    className="btn bg-black text-white cursor-pointer text-xl px-6 py-3 rounded-md transition-all duration-300"
                  >
                    Our Shop
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
                  <h3 className="font-semibold">Cozy Knit Cardigan</h3>
                  <h3 className="font-semibold mt-2 text-secondary">$40</h3>
                  <div className="absolute -bottom-2 left-0 bg-secondary hover:bg-primary hover:text-black cursor-pointer text-white py-2 px-3 rounded-full transition-all duration-300">
                    <BsBasket />
                  </div>
                </div>
              </div>
              {/*  hero text wrap */}
              <div className="absolute top-120 -right-10 z-10 hero-text-wrap shadow-2xl backdrop-blur-2xl bg-[#ffffff8e] px-5 py-4 flex items-center gap-2 rounded-md">
                <BsBalloonHeart className="text-2xl bg-secondary hover:bg-primary text-white hover:text-black px-3 py-2 rounded-full transition-all duration-300 cursor-pointer" />
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
