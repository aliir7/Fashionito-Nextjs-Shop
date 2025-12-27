"use client";

import returnImg from "@/public/assets/pack-box.png";
import boatImg from "@/public/assets/boat.png";
import Breadcrumb from "@/Components/UI/Breadcrumb";
import { useCartStore } from "@/lib/stores/cartStore";
import { BsCart3, BsCheck2Circle, BsTrash3 } from "react-icons/bs";
import Image from "next/image";
import { formatPrice } from "@/lib/utils/formatPrice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Follow from "@/Components/UI/Index/Follow/Follow";
import PageTitle from "@/Components/UI/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سبد خرید",
};

function CartPage() {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseFromCart,
    cartItems,
    clearCart,
    getTotalPrice,
  } = useCartStore();
  const totalPrice = getTotalPrice();
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
      <div className="wrapper py-20">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="w-full lg:w-1/1">
              <div className="flex flex-col gap-10">
                {cartItems.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-8"
                  >
                    <div className="flex items-center gap-5">
                      {/* product image */}
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={100}
                        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl"
                      />
                      {/* product title */}
                      <div>
                        <h3 className="text-xl font-semibold">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xl font-bold">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-5 md:mt-0">
                      {/* quantity */}
                      <span
                        className="w-10 h-10 bg-black flex rounded-full items-center justify-center text-white text-xl cursor-pointer"
                        onClick={() => decreaseFromCart(product.id)}
                      >
                        -
                      </span>
                      <span className="w-10 h-10 flex items-center justify-center rounded-full border text-xl pt-1">
                        {product.quantity}
                      </span>
                      <span
                        className="w-10 h-10 bg-black flex rounded-full items-center justify-center text-white text-xl cursor-pointer"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </span>
                    </div>
                    <div className="mt-5 md:mt-0 ">
                      <button
                        type="button"
                        className="px-6 py-3 border hover:bg-secondary hover:border-transparent hover:text-white rounded-lg flex items-center justify-center gap-2 md:rounded-full cursor-pointer transition-all duration-300"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <BsTrash3 />
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn mt-3 bg-black text-white cursor-pointer flex items-center justify-center gap-2 px-6 py-3 text-lg transition-all duration-300 rounded-md"
                  onClick={() => clearCart()}
                >
                  <BsTrash3 />
                  خالی کردن سبد خرید
                </button>
              </div>
            </div>
            {/* payment */}
            <div className="w-full lg:w-1/2 sticky lg:top-25 mt-4 lg:mt-0 self-start">
              <div className="border rounded-2xl p-4 mr-2">
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
                      <h3 className="font-medium">
                        قابل پرداخت با تمامی کارت‌های بانکی
                      </h3>
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
                  >
                    تسویه حساب
                    <BsCart3 className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-2xl text-secondary border border-gray-400 rounded-2xl px-5 py-2">
            سبد خرید شما خالی است.
          </p>
        )}
      </div>
      <Follow />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        style={{ padding: "8px" }}
      />
    </section>
  );
}

export default CartPage;
