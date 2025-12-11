import Breadcrumb from "@/Components/UI/Breadcrumb";
import ShopContent from "@/Components/UI/Shop/ShopContent";

export default function ShopPage() {
  return (
    <section>
      <div className="page-section flex items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center z-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white">
            فروشگاه
          </h2>
          <Breadcrumb
            className="mt-5"
            items={[{ label: "صفحه اصلی", href: "/" }, { label: "فروشگاه" }]}
          />
        </div>
      </div>
      <ShopContent />
    </section>
  );
}
