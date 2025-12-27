import Breadcrumb from "@/Components/UI/Breadcrumb";
import PageTitle from "@/Components/UI/PageTitle";
import Image from "next/image";

import aboutImg1 from "@/public/assets/about-1.webp";
import aboutImg2 from "@/public/assets/about-2.webp";
import aboutImg3 from "@/public/assets/about-3.webp";
import aboutImg4 from "@/public/assets/about-4.webp";
import aboutImg5 from "@/public/assets/about-5.webp";

import FAQ from "@/Components/UI/FAQ";
import Testimonials from "@/Components/UI/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
};

function AboutPage() {
  return (
    <section>
      {/* Page Title Section */}
      <PageTitle title="درباره ما">
        <Breadcrumb
          className="mt-5"
          items={[
            { label: "صفحه اصلی", href: "/" },
            { label: "درباره ما", href: "/About" },
          ]}
        />
      </PageTitle>

      {/* Page Content */}
      <div className="wrapper py-20">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-black mb-6">
              فشنیتو؛ جایی که استایل، کیفیت و شخصیت تو کنار هم می‌درخشند. با هم
              دنیای مد را دوباره می‌سازیم. نه فقط لباس، بلکه حسِ بودن متفاوت.
            </h3>
            <p className="text-gray-500">
              در فشنیتو، ما داریم دنیای مد را دوباره می‌سازیم؛ جایی که استایل،
              کیفیت و شخصیت منحصربه‌فرد تو در هر دوخت دیده می‌شود.
            </p>
          </div>

          {/* Images */}
          <div className="w-full lg:w-1/2">
            <div className="about-image flex gap-5 h-[250px] overflow-hidden">
              <Image
                src={aboutImg1}
                alt="about-image-1"
                className="rounded-2xl object-cover w-full max-w-full min-w-0"
              />
              <Image
                src={aboutImg2}
                alt="about-image-2"
                className="rounded-2xl object-cover w-full max-w-full min-w-0"
              />
            </div>
          </div>
        </div>

        {/* Author & FAQ */}
        <div className="flex flex-col lg:flex-row gap-8 py-6">
          <div className="w-full lg:w-1/2">
            <div className="about-author flex items-center gap-5 text-right">
              <Image
                src={aboutImg3}
                width={100}
                height={100}
                alt="about-image-3"
                className="rounded-full w-25"
              />
              <div className="mt-2">
                <h3 className="text-xl font-bold text-black flex flex-col gap-2">
                  علی احمدی
                  <span className="text-sm font-normal">
                    بنیان‌گذار و مدیرعامل
                  </span>
                </h3>
              </div>
            </div>

            <FAQ />
          </div>

          {/* aboutImg4 — fix horizontal scroll on mobile */}
          <div className="w-full lg:w-1/2">
            <div className="about-image overflow-hidden">
              <Image
                src={aboutImg4}
                alt="about-image-4"
                className="rounded-2xl object-cover w-full max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col-reverse lg:flex-row lg:gap-8 py-6">
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="about-section flex gap-25">
              <div className="about-heading">
                <h3 className="text-5xl font-bold">50+</h3>
                <span className="text-xl">محصول برای فروش</span>
              </div>
              <div className="about-heading">
                <h3 className="text-5xl font-bold">%100</h3>
                <span className="text-xl">رضایت مشتریان</span>
              </div>
            </div>
          </div>

          {/* aboutImg5 — more vertical space on mobile */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="about-image">
              <Image
                src={aboutImg5}
                alt="about-image-5"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </section>
  );
}

export default AboutPage;
