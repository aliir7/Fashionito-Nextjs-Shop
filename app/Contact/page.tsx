import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
};

export default function ContactPage() {
  return (
    <section>
      <div className="wrapper py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl mb-4 font-bold">
              راه‌های ارتباطی
            </h2>
            <p className="text-lg lg:text-xl">با فَشنیتو آشنا شو </p>
            <p className="text-lg lg:text-xl">
              تیم ما اینجاست تا بهت کمک کنه؛ کارشناسانِ ما آماده‌اند تا هر سؤالی
              که دربارهٔ انتخاب سایز، کیفیت پارچه یا ارسال داری، پاسخ بدن.
            </p>
            <h2 className="text-lg lg:text-xl font-semibold mt-10">
              تماس با ما
            </h2>
            <p className="text-lg lg:text-xl">۰۲۱-۱۲۳۴۵۶۷۸۹۰</p>
          </div>
          <div className="w-full lg:w-1/3 contact-form bg-black text-white p-10">
            <div className="space-y-5">
              {/* username */}
              <div>
                <label htmlFor="username">نام کاربری</label>
                <input
                  type="text"
                  name="username"
                  className="w-full border border-white hover:border-primary rounded-lg focus:outline-none px-4 py-3"
                />
              </div>
              {/* email */}
              <div>
                <label htmlFor="email">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-white hover:border-primary rounded-lg focus:outline-none px-4 py-3"
                />
              </div>
              {/* phone */}
              <div>
                <label htmlFor="phone">شماره تماس</label>
                <input
                  type="number"
                  name="phone"
                  className="w-full border border-white hover:border-primary rounded-lg focus:outline-none px-4 py-3"
                />
              </div>
              {/* message */}
              <div>
                <label htmlFor="message">پیام</label>
                <textarea
                  rows={4}
                  className="w-full border border-white hover:border-primary rounded-lg focus:outline-none px-4 py-3"
                />
              </div>
              {/* button */}
              <div className="flex items-center justify-between gap-2 mt-5">
                <button
                  type="button"
                  className="btn w-full bg-primary text-black px-4 py-2 cursor-pointer rounded-md transition-all duration-300 font-semibold"
                >
                  ارسال پیام
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map h-[600px] pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.8006439397!2d51.51246536457157!3d35.70746141210969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2s!4v1766585302329!5m2!1sfa!2s"
          width="100%"
          height="100%"
          loading="lazy"
          className="w-full rounded-2xl brightness-100 grayscale"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
