import Breadcrumb from "@/Components/UI/Breadcrumb";
import Follow from "@/Components/UI/Index/Follow/Follow";
import PageTitle from "@/Components/UI/PageTitle";
import ShopContent from "@/Components/UI/Shop/ShopContent";

export default function ShopPage() {
  return (
    <section>
      {/* Page Title Section */}
      <PageTitle title="فروشگاه">
        <Breadcrumb
          className="mt-5"
          items={[{ label: "صفحه اصلی", href: "/" }, { label: "فروشگاه" }]}
        />
      </PageTitle>
      <ShopContent />
      <Follow />
    </section>
  );
}
