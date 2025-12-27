import Breadcrumb from "@/Components/UI/Breadcrumb";
import Follow from "@/Components/UI/Index/Follow/Follow";
import PageTitle from "@/Components/UI/PageTitle";
import ProductDetails from "@/Components/UI/Product/ProductDetails";
import ProductData from "@/lib/JsonData/ProductData.json";
import { Metadata } from "next";

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "جزئیات محصول",
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const id = (await params).id;

  const product = ProductData.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div className="text-center py-40 text-3xl font-semibold">
        محصولی پیدا نشد
      </div>
    );
  }

  return (
    <section>
      {/* Page Title Section */}
      <PageTitle title="جزئیات محصول">
        <Breadcrumb
          className="mt-5"
          items={[
            { label: "صفحه اصلی", href: "/" },
            { label: "فروشگاه", href: "/Shop" },
            { label: `${product.title}` },
          ]}
        />
      </PageTitle>
      <ProductDetails product={product} />
      <Follow />
    </section>
  );
}
