import Breadcrumb from "@/Components/UI/Breadcrumb";

import PageTitle from "@/Components/UI/PageTitle";
import WishlistContent from "@/Components/UI/Wishlist/WishlistContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها",
};

function WishlistPage() {
  return (
    <section>
      {/* Page Title Section */}
      <PageTitle title="علاقه‌مندی‌ها">
        <Breadcrumb
          className="mt-5"
          items={[
            { label: "صفحه اصلی", href: "/" },
            { label: "فروشگاه", href: "/Shop" },
            { label: "علاقه‌مندی‌ها" },
          ]}
        />
      </PageTitle>
      <WishlistContent />
    </section>
  );
}

export default WishlistPage;
