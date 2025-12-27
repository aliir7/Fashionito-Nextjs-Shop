import Breadcrumb from "@/Components/UI/Breadcrumb";
import Image from "next/image";
import loginImg from "@/public/assets/login-img.webp";
import SignupForm from "@/Components/UI/Forms/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام",
};

function RegistrationPage() {
  return (
    <section>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 hidden lg:block bg-[#ffedd4]">
            <div className="absolute top-30 lg:top-50 right-10 z-10">
              <h2 className="text-2xl lg:text-4xl font-semibold text-black">
                ثبت نام
              </h2>
              <div>
                <Breadcrumb
                  changeTextColor={true}
                  onHover="hover:text-secondary"
                  className="mt-5 text-black"
                  items={[
                    { label: "صفحه اصلی", href: "/" },
                    { label: "ثبت نام" },
                  ]}
                />
              </div>
            </div>
            <div className="login-image relative ps-20">
              <Image src={loginImg} alt="login-image" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="wrapper py-15 min-h-screen flex items-center justify-center">
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
