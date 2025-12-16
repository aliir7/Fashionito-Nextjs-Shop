import Breadcrumb from "@/Components/UI/Breadcrumb";
import Follow from "@/Components/UI/Index/Follow/Follow";
import ProductDetails from "@/Components/UI/Product/ProductDetails";
import ProductData from "@/lib/JsonData/ProductData.json";

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
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
      <div className="page-section flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center z-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">
            جزئیات محصول
          </h2>
          <Breadcrumb
            className="mt-5"
            items={[
              { label: "صفحه اصلی", href: "/" },
              { label: "فروشگاه", href: "/Shop" },
              { label: `${product.title}` },
            ]}
          />
        </div>
      </div>
      <ProductDetails product={product} />
      <Follow />
    </section>
  );
}
