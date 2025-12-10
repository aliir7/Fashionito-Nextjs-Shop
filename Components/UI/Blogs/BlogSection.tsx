import BlogData from "@/lib/JsonData/BlogData.json";
import { BsArrowLeft } from "react-icons/bs";

function BlogSection() {
  return (
    <section>
      <div className="wrapper py-20">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="">
            <h3 className="text-3xl font-medium">آخرین مقالات</h3>
            <p className="text-lg mt-2">
              به روز ترین مقالات مد و فشن رو با ما بخون
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn bg-black px-6 py-3 text-lg text-white rounded-md transition-all duration-300 cursor-pointer"
            >
              مشاهده همه
            </button>
          </div>
        </div>
        {/* Blogs grid Section */}
        <div className="idx-blog-wrap grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {BlogData.slice(0, 4).map((blog, index) => (
            <div key={index} className="idx-blog-item">
              <div className="flex flex-col md:flex-row bg-white shadow-2xl/5 justify-between gap-5 p-7 rounded-2xl">
                <div className="w-full lg:w-1/2">
                  <div
                    className="blog-image"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  ></div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col h-full justify-between gap-5">
                    {/* blog item texts */}
                    <div>
                      <span className="px-3 py-1 mt-2 bg-black text-white rounded-md ">
                        {blog.date}
                      </span>
                      <h3 className="mt-4 font-semibold text-xl">
                        {blog.title}
                      </h3>
                    </div>
                    <div className="relative">
                      <button
                        type="button"
                        className="btn px-7 py-3 rounded-lg font-semibold border hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        ادامه مطلب
                      </button>
                      <div className="border flex justify-center items-center rounded-full w-6 h-6 absolute top-3 right-30 lg:right-30 bg-white z-10">
                        <BsArrowLeft />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
