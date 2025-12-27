import BlogContent from "@/Components/UI/Blogs/BlogContent";
import Breadcrumb from "@/Components/UI/Breadcrumb";
import Follow from "@/Components/UI/Index/Follow/Follow";
import PageTitle from "@/Components/UI/PageTitle";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "مقالات",
};

export default function BlogsPage() {
  return (
    <section>
      {/* Page title section */}
      <PageTitle title="مقالات">
        <Breadcrumb
          className="mt-5"
          items={[{ label: "صفحه اصلی", href: "/" }, { label: "مقالات" }]}
        />
      </PageTitle>
      <BlogContent />
      <Follow />
    </section>
  );
}
