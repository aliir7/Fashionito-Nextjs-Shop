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
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 text-justify">
            {/* about texts */}
            <h3 className="text-3xl font-bold text-black mb-6">
              فَشنیتو؛ جایی که استایل، کیفیت و شخصیتِ تو کنار هم می‌درخشند. با
              هم دنیای مد را دوباره می‌سازیم — نه فقط لباس، بلکه حسِ بودنِ
              متفاوت.
            </h3>
            <p className="text-gray-500">
              در فَشنیتو، ما داریم دنیای مد را دوباره می‌سازیم؛ جایی که استایل،
              کیفیت و شخصیتِ منحصربه‌فرد تو در هر دوخت دیده می‌شود. باور داریم
              لباسِ تو باید آینه‌ی ارزش‌ها و رویاهات باشد — همین حالا، همین
              لحظه.
            </p>
          </div>
          {/* about images */}
          <div className="w-full lg:w-1/2">
            <div className="about-image flex gap-5 h-[250px]">
              <Image
                src={aboutImg1}
                alt="about-image-1"
                className="rounded-2xl"
              />
              <Image
                src={aboutImg2}
                alt="about-image-2"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* about author & faq */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 py-6">
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
                  <span className="text-sm text-black font-normal">
                    بنیان‌گذار و مدیرعامل
                  </span>
                </h3>
              </div>
            </div>
            {/* FAQ Section */}
            <FAQ />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="about-image">
              <Image
                src={aboutImg4}
                alt="about-image-4"
                className="object-cover rounded-2xl h-full w-full"
              />
            </div>
          </div>
        </div>
        {/* experience */}
        <div className="flex flex-col-reverse lg:flex-row lg:gap-8 py-6">
          <div className="w-full lg:w-1/2">
            <div className="about-section flex gap-25">
              <div className="about-heading">
                <h3 className="text-5xl text-black font-bold">50+</h3>
                <span className="text-black text-xl">محصول برای فروش</span>
              </div>
              <div className="about-heading">
                <h3 className="text-5xl text-black font-bold">%100</h3>
                <span className="text-black text-xl">رضایت مشتریان</span>
              </div>
            </div>
          </div>
          {/* about image 5 */}
          <div className="w-full lg:w-1/2">
            <div className="about-image">
              <Image
                src={aboutImg5}
                alt="about-image-5"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <Testimonials />
    </section>
  );
}

export default AboutPage;
