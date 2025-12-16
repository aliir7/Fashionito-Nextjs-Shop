"use client";

import { Product } from "@/types/types";
import Image from "next/image";

import returnImg from "@/public/assets/pack-box.png";
import boatImg from "@/public/assets/boat.png";
import { BsBalloonHeart, BsCart3, BsCheck2Circle } from "react-icons/bs";
import { useCartStore } from "@/lib/stores/cartStore";
import { useWishlistStore } from "@/lib/stores/wishlistStore";
import { formatPrice } from "@/lib/utils/formatPrice";

type ProductPaymentProps = {
  product: Product;
  totalPrice: number;
  quantity: number;
};

function ProductPayment({
  product,
  totalPrice,
  quantity,
}: ProductPaymentProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  return (
    <div className="border rounded-2xl p-4 mr-2">
      {/* ... دقیقا همون JSX قبلی بدون تغییر ... */}

      <div className="mt-2 border border-black rounded-md px-6 py-4 space-y-4">
        {/* item 1 */}
        <div className="flex items-center gap-4">
          <Image
            src={boatImg}
            width={60}
            height={60}
            className="opacity-80"
            alt="return-policy"
          />
          <div className="flex flex-col text-sm">
            <h3 className="font-medium">ضمانت سلامت کالا</h3>
            <h3 className="font-medium">30 روز مهلت بازگشت</h3>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex items-center gap-4">
          <Image
            src={returnImg}
            width={60}
            height={60}
            className="opacity-80"
            alt="payment"
          />
          <div className="flex flex-col text-sm">
            <h3 className="font-medium">قابل پرداخت با تمامی کارت‌های بانکی</h3>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 text-xs">
        <div className="text-2xl">
          <BsCheck2Circle />
        </div>
        با سفارش این محصول 20% کمتر پرداخت می‌کنید.
      </div>
      <div className="flex items-center justify-between border-t gap-3 my-3 pt-3 border-gray-400">
        <h3 className="text-xl">مبلغ کل</h3>
        <h3 className="text-xl font-semibold">
          {formatPrice(totalPrice, { withToman: true })}
        </h3>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <button
          type="button"
          className="btn border w-full border-black flex items-center justify-between px-4 py-3 rounded-md text-lg transition-all hover:bg-black hover:text-white"
          onClick={() => addToWishlist(product)}
        >
          افزودن به علاقه‌مندی
          <BsBalloonHeart className="text-xl" />
        </button>

        <button
          onClick={() => addToCart(product, quantity)}
          type="button"
          className="btn border w-full border-black flex items-center justify-between px-4 py-3 rounded-md text-lg transition-all hover:bg-black hover:text-white"
        >
          افزودن به سبد خرید
          <BsCart3 className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default ProductPayment;
