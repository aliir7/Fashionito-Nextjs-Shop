import blogData from "@/lib/JsonData/BlogData.json";
import Image from "next/image";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";
import BlogCategory from "./BlogCategory";
import BlogTags from "./BlogTags";

function BlogContent() {
  const posts = blogData.slice(3, 6);
  return (
    <div className="wrapper py-30 pt-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        {/* blog category */}
        <div className="w-full lg:w-1/2 lg:sticky top-25 left-0 h-full">
          <h3 className="text-xl font-semibold">دسته‌بندی</h3>
          <BlogCategory />
          {/* latest posts */}
          <div className="mt-10">
            <h3 className="text-xl mb-1">مطالب اخیر</h3>
            <div className="flex flex-col gap-6">
              {posts.map((post, index) => (
                <Link
                  href={`/Blogs/${post.id}`}
                  key={index}
                  className="flex items-center gap-6"
                >
                  <div className="w-1/3 overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <h3 className="text-lg hover:text-secondary transition-all duration-300">
                      {post.smallTitle}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* blog tags */}
          <BlogTags />
        </div>

        {/* blog card */}
        <div className="w-full lg:w-1/1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {blogData.map((item) => (
              <Link key={item.id} href={`/Blogs/${item.id}`}>
                <div className="blog-card cursor-pointer">
                  <div className="blog-img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="rounded-t-2xl w-full h-full"
                    />
                  </div>
                  <div className="bg-primary rounded-b-2xl px-4 py-5">
                    <span className="text-xs lg:text-sm bg-black rounded-lg text-white px-4 py-1">
                      {item.date}
                    </span>
                    <h3 className="text-lg lg:text-xl my-4 font-semibold truncate">
                      {item.title}
                    </h3>
                    <div>
                      <button className=" py-3 flex justify-center items-center gap-2 rounded-full hover:-translate-x-2 transition-all duration-300 cursor-pointer">
                        ادامه مطلب
                        <div>
                          <BsChevronLeft />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
