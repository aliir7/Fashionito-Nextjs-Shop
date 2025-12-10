import Link from "next/link";
import BlogsData from "@/lib/JsonData/BlogData.json";
import Image from "next/image";

import FooterLinks from "./FooterLinks";
import { footerLinks, ourStores } from "@/lib/constants";

function Footer() {
  return (
    <footer>
      <div className="wrapper py-20 pb-0">
        <div className="flex flex-col justify-between lg:flex-row gap-5 pb-5">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
              <div className="w-full lg:w-1/2">
                {/* logo and infos*/}
                <Link
                  href="/"
                  className="text-3xl lg:text-4xl  font-bold text-black"
                >
                  <span className="text-secondary">Fashion</span>ito
                </Link>
                <p className="mt-5 text-sm">
                  آدرس: تهران، خیابان نمونه، پلاک 8
                </p>
                <p className="mt-2 text-sm">تلفن: 12345678-021</p>
                <p className="mt-2 text-sm">ایمیل: example@gmail.com</p>
                <h4 className="font-semibold mt-10">عضویت در خبرنامه</h4>
                {/* newsletter field */}
                <div className="mt-2 px-4 py-2 bg-yellow-100 rounded-md border">
                  <input
                    type="text"
                    placeholder="ایمیل خود را وارد کنید"
                    className="w-full focus:outline-none text-black text-sm"
                  />
                </div>
              </div>
              {/* Blogs */}
              <div className="w-full lg:w-1/2">
                {BlogsData.slice(0, 3).map((blog, idx) => (
                  <div key={idx} className="idx-blog-item hidden lg:flex ">
                    {/* blog item */}
                    <div className="flex flex-col md:flex-row px-3 py-2 mb-3">
                      {/* blog image */}
                      <div className="w-full lg:w-1/2">
                        <div className="blog-image">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-1/1">
                        <div className="flex flex-col h-full justify-between gap-5">
                          {/* blog item texts */}
                          <div className="mr-2.5 text-sm">
                            <h3 className="mt-2 font-semibold">
                              {blog.smallTitle}
                            </h3>
                            <span className="py-1 rounded-md text-xs">
                              {blog.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* footer links */}
          <div className="w-full lg:w-1/2">
            {/* our stores */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {footerLinks.map((link, idx) => (
                <FooterLinks key={idx} title={link.title} links={link.links} />
              ))}
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className="border-t border-gray-400 py-5 text-center text-xs">
          <p>
            © {new Date().getFullYear()} فشنیتو - تمام حقوق محفوظ است، توسعه و
            طراحی توسط:
            <Link
              href="https://www.alirezaeii.ir/"
              target="_blank"
              aria-label="developer"
              className="hover:text-secondary duration-300 transition-all pr-0.5"
            >
              علی رضایی
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
