import BlogContent from "@/Components/UI/Blogs/BlogContent";
import Breadcrumb from "@/Components/UI/Breadcrumb";
import Follow from "@/Components/UI/Index/Follow/Follow";

export default function BlogsPage() {
  return (
    <section>
      {/* Page title section */}
      <div className="page-section flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center z-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">
            مقالات
          </h2>
          <Breadcrumb
            className="mt-5"
            items={[{ label: "صفحه اصلی", href: "/" }, { label: "مقالات" }]}
          />
        </div>
      </div>
      <BlogContent />
      <Follow />
    </section>
  );
}
