"use client";

import { Product } from "@/types/types";
import { BsCheck2Circle } from "react-icons/bs";

type ProductDescriptionProps = {
  product: Product;
};

function ProductDescription({ product }: ProductDescriptionProps) {
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-medium">توضیحات محصول</h3>
      <h3 className="mt-5 text-xl">{product.title}</h3>
      <p className="mt-2 text-right text-gray-700 tracking-wide">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </p>
      <h3 className="mt-5 flex items-center gap-2 lg:text-lg text-sm">
        <div className="text-2xl text-secondary">
          <BsCheck2Circle />
        </div>
        استایل بی‌زمان، مناسب هر لحظه از روز.{" "}
      </h3>
      <h3 className="mt-2 flex items-center gap-2 lg:text-lg text-sm mb-4">
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        {/* item2 */}
        <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
          <p className="text-lg font-semibold mb-1">مناسب برای تمام فصول</p>
          <p className="text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        {/* item3 */}
        <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
          <p className="text-lg font-semibold mb-1">100% ایرانی</p>
          <p className="text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        {/* item 4 */}
        <div className="border rounded-2xl flex flex-col justify-center items-center text-center p-4">
          <p className="text-lg font-semibold mb-1">100% کتان</p>
          <p className="text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
