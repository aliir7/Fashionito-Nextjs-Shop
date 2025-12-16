"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import Rating from "../Rating";

import returnImg from "@/public/assets/pack-box.png";
import boatImg from "@/public/assets/boat.png";

import { useCartStore } from "@/lib/stores/cartStore";
import { useWishlistStore } from "@/lib/stores/wishlistStore";
import { useState } from "react";
import { sizes } from "@/lib/constants";
import { parsePrice } from "@/lib/utils/parsePrice";
import {
  RiInstagramLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";
import { BsBalloonHeart, BsCart3, BsCheck2Circle } from "react-icons/bs";

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [activeSize, setActiveSize] = useState<string | undefined>(sizes.at(0));
  const price = parsePrice(product.price);
  const addToCard = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);

  const totalPrice = price * quantity;
  return (
    <div className="wrapper py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div className="w-full lg:w-1/1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              {/* product image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={700}
                  className="w-full has-focus-within:overflow-hidden rounded-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col">
              {/* product price & title */}

              <h2 className="text-4xl font-medium mt-5 mb-2">
                {product.title}
              </h2>
              <div className="mb-4 mt-1 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <p>امتیاز {product.rating}</p>
                  <small className="text-sm pr-1">
                    (از {product.reviews} نقد کاربر)
                  </small>
                  <div>
                    <Rating rate={product.rating!} size={14} />
                  </div>
                </div>
              </div>
              <p className="mb-4 -mt-3 text-xs text-gray-600">
                <span className="pe-2">
                  کد کالا:
                  <span className="font-sans pr-1">FRT584E63A</span>
                </span>
              </p>
              <p className="text-gray-600">{product.description}</p>

              <div className="flex items-center gap-4 mt-4 lg:justify-between">
                <span className=" text-xl lg:text-2xl font-bold">
                  {product.price}
                </span>
                <span className="text-lg px-4 py-1 rounded-full bg-black text-white">
                  {product.off}
                </span>
              </div>
              {/* change quantity */}
              <div className="flex items-center justify-between gap-10 pb-5 mb-5 mt-12 border-b border-gray-400">
                <h3 className="text-lg mb-2 font-medium">تعداد:</h3>
                <div className="flex gap-2 items-center">
                  <span
                    className="w-10 h-10 bg-black flex rounded-full items-center justify-center text-white text-xl  cursor-pointer text-center"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </span>
                  <span className="w-10 h-10 flex items-center justify-center text-center rounded-full border cursor-pointer text-xl pt-1">
                    {quantity}
                  </span>
                  <span
                    className="w-10 h-10 bg-black flex rounded-full items-center justify-center text-white text-xl  cursor-pointer text-center"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
              {/* sizes */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg mb-2 font-medium">سایز:</h3>
                <div className="flex items-center gap-2">
                  {sizes.map((size, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setActiveSize(size)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-center p-1 cursor-pointer transition-all duration-300 border text-lg ${
                        activeSize === size
                          ? "bg-black border-black text-white"
                          : "bg-transparent text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-6">
                <p className="text-sm">اشتراک‌گذاری:</p>
                <div className="flex items-center gap-2 mt-3 text-xl ps-1 cursor-pointer transition-all duration-300 hover:text-black/80">
                  <RiInstagramLine />
                  <RiTelegramLine />
                  <RiWhatsappLine />
                </div>
              </div>
            </div>
          </div>
          {/* product description */}
          <div className="mt-10">
            <h3 className="text-3xl font-medium">توضیحات محصول</h3>
            <h3 className="mt-5 text-xl">{product.title}</h3>
            <p className="mt-2 text-right text-gray-700 tracking-wide">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>
            <h3 className="mt-5  flex items-center gap-2 text-lg">
              <div className="text-2xl text-secondary">
                <BsCheck2Circle />
              </div>
              استایل بی‌زمان، مناسب هر لحظه از روز.{" "}
            </h3>
            <h3 className="mt-2 flex items-center gap-2 text-lg">
              <div className="text-2xl text-secondary">
                <BsCheck2Circle />
              </div>
              دوخت دستی شیک، راحتی تمام‌نشدنی.{" "}
            </h3>
            {/* product features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
              {/* item 1 */}
              <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-lg font-semibold mb-1">محصولی کارآمد</p>
                <p className="text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* item2 */}
              <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-lg font-semibold mb-1">
                  مناسب برای تمام فصول
                </p>
                <p className="text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* item3 */}
              <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-lg font-semibold mb-1">100% ایرانی</p>
                <p className="text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
              {/* item 4 */}
              <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
                <p className="text-lg font-semibold mb-1">100% کتان</p>
                <p className="text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* payment */}
        <div className="w-full lg:w-1/2 sticky lg:top-25 mt-4 lg:mt-0 left-0 h-full">
          <div className="border rounded-2xl p-4 mr-2">
            <button
              type="button"
              className="btn border w-full border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-lg lg:text-xl px-6 py-3 rounded-md"
            >
              5% بازگشت به کیف پول شما
            </button>
            {/*  */}
            <div className="mt-5 border border-black rounded-md px-6 py-4 space-y-4">
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
              <h3 className="text-xl font-semibold">تومان {totalPrice}</h3>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <button
                type="button"
                className="btn border w-full border-black flex items-center justify-between px-4 py-3 rounded-md text-lg transition-all hover:bg-black hover:text-white"
              >
                افزودن به علاقه‌مندی
                <BsBalloonHeart className="text-xl" />
              </button>

              <button
                type="button"
                className="btn border w-full border-black flex items-center justify-between px-4 py-3 rounded-md text-lg transition-all hover:bg-black hover:text-white"
              >
                افزودن به سبد خرید
                <BsCart3 className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
