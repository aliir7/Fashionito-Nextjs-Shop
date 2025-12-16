"use client";

import { Product } from "@/types/types";
import Rating from "../Rating";

type ProductInfoProps = {
  product: Product;
};

function ProductInfo({ product }: ProductInfoProps) {
  return (
    <>
      <h2 className="text-4xl font-medium mt-5 mb-2">{product.title}</h2>

      <div className="mb-4 mt-1 flex items-center gap-3">
        <div className="flex items-center gap-1">
          <p>امتیاز {product.rating}</p>
          <small className="text-sm pr-1">
            (از {product.reviews} نقد کاربر)
          </small>
          <Rating rate={product.rating!} size={14} />
        </div>
      </div>

      <p className="mb-4 -mt-3 text-xs text-gray-600">
        کد کالا:
        <span className="font-sans pr-1">FRT584E63A</span>
      </p>

      <p className="text-gray-600">{product.description}</p>

      <div className="flex items-center gap-4 mt-4 lg:justify-between">
        <span className="text-xl lg:text-2xl font-bold">{product.price}</span>
        <span className="text-lg px-4 py-1 rounded-full bg-black text-white">
          {product.off}
        </span>
      </div>
    </>
  );
}

export default ProductInfo;
