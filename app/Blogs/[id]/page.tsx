import Breadcrumb from "@/Components/UI/Breadcrumb";
import blogData from "@/lib/JsonData/BlogData.json";
import Image from "next/image";
import { BsChatLeftDotsFill, BsPersonFill } from "react-icons/bs";

import galleryImg1 from "@/public/blog-gallery-1.webp";
import galleryImg2 from "@/public/blog-gallery-2.webp";
import galleryImg3 from "@/public/blog-gallery-3.webp";
import galleryImg4 from "@/public/blog-gallery-4.webp";
import galleryImg5 from "@/public/blog-gallery-5.webp";
import BlogTags from "@/Components/UI/Blogs/BlogTags";
import BlogCategory from "@/Components/UI/Blogs/BlogCategory";
import Link from "next/link";
import Follow from "@/Components/UI/Index/Follow/Follow";
import PageTitle from "@/Components/UI/PageTitle";

type BlogDetailsPageProps = {
  params: Promise<{ id: string }>;
};

async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const id = (await params).id;

  const posts = blogData.slice(3, 6);

  const blogs = blogData.find((blog) => blog.id.toString() === id);

  if (!blogs) {
    return (
      <div className="text-center py-40 text-3xl font-semibold">
        مطلبی پیدا نشد
      </div>
    );
  }
  return (
    <section>
      {/* Page title section */}
      <PageTitle title="مقالات">
        <Breadcrumb
          className="mt-5"
          items={[
            { label: "صفحه اصلی", href: "/" },
            { label: "مقالات", href: "/Blogs" },
            { label: `${blogs.smallTitle}` },
          ]}
        />
      </PageTitle>
      {/* Content */}
      <div className="wrapper py-30 pt-10 text-justify">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-1/1">
            <h3 className="text-4xl font-semibold">{blogs.title}</h3>
            <div className="flex items-center gap-2 my-3">
              <span className="px-3 py-1 bg-primary mt-2 mb-4">
                {blogs.date}
              </span>
              <span className="ps-2 flex items-center justify-center gap-1 mt-2 mb-4 text-sm text-gray-600">
                <BsPersonFill />
                {blogs.author}
              </span>
              <span className="ps-2 flex items-center justify-center gap-1 mt-2 mb-4 text-sm text-gray-600">
                <BsChatLeftDotsFill />
                24
              </span>
            </div>
            {/* blog image */}
            <div>
              <Image
                src={blogs.image}
                alt={blogs.title}
                width={800}
                height={800}
                className="w-full h-full rounded-2xl mt-5"
              />
            </div>
            <article>
              <p className="mt-4 tracking-wider text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <div className="my-5 rounded-2xl border p-5 relative">
                <h4 className="text-xl">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </h4>
              </div>
              <p className="my-8 tracking-wide text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.
              </p>
              {/* gallery 1 */}
              <div className="flex flex-col mt-5 gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Image
                    src={galleryImg1}
                    alt="gallery-img-1"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-2xl"
                  />
                  <Image
                    src={galleryImg2}
                    alt="gallery-img-2"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-2xl"
                  />
                  <Image
                    src={galleryImg3}
                    alt="gallery-img-3"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  <Image
                    src={galleryImg4}
                    alt="gallery-img-4"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-2xl"
                  />
                  <Image
                    src={galleryImg5}
                    alt="gallery-img-5"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
              </div>
              <p className="my-8 tracking-wide text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </article>
          </div>
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
        </div>
      </div>
      <Follow />
    </section>
  );
}

export default BlogDetailsPage;
