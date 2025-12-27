import { Metadata } from "next";
import Breadcrumb from "@/Components/UI/Breadcrumb";

import PageTitle from "@/Components/UI/PageTitle";
import CartPageContent from "@/Components/UI/Shop/CartPageContent";

export const metadata: Metadata = {
  title: "سبد خرید",
};

function CartPage() {
  return (
    <section>
      {/* Page Title Section */}
      <PageTitle title="سبد خرید">
        <Breadcrumb
          className="mt-5"
          items={[
            { label: "صفحه اصلی", href: "/" },
            { label: "فروشگاه", href: "/Shop" },
            { label: "سبد خرید" },
          ]}
        />
      </PageTitle>
      {/* Cart Page Content */}
      <CartPageContent />
    </section>
  );
}

export default CartPage;
