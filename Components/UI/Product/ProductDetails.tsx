"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import Rating from "../Rating";

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
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
              <p className="text-gray-600">{product.description}</p>
              <div className="flex items-center gap-4 mt-4 lg:justify-between">
                <span className=" text-2xl lg:text-3xl font-bold">
                  {product.price}
                </span>
                <span className="text-lg px-4 py-1 rounded-full bg-black text-white">
                  {product.off}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
