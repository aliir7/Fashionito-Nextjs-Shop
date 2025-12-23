import Breadcrumb from "@/Components/UI/Breadcrumb";
import FAQ from "@/Components/UI/FAQ";
import faqImg from "@/public/assets/faq-img.webp";
import Image from "next/image";

export default function FAQPage() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center justify-between h-full lg:h-[70vh] gap-5">
        <div className="bg-[#ffedd4] py-10 lg:py-0 w-full lg:w-1/2 items-center justify-center h-full ps-[8%] lg:px-[16%] pe-10">
          <div className="mt-8">
            <h2 className="text-4xl">از ما سوال داری؟</h2>
            <div>
              <Breadcrumb
                changeTextColor={true}
                onHover="hover:text-secondary"
                className="mt-5 text-black"
                items={[
                  { label: "صفحه اصلی", href: "/" },
                  { label: "سوالات متداول" },
                ]}
              />
            </div>
            {/* faq image */}
            <div className="mt-5">
              <Image
                src={faqImg}
                alt="faq-image"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* faq section */}
        <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[16%] ps-10">
          <FAQ />
        </div>
      </div>
    </section>
  );
}
