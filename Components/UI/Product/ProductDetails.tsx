"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="wrapper py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div className="w-full lg:w-1/1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">{product.price}</span>
                <span className="text-lg px-4 py-1 rounded-full bg-black text-white">
                  {product.off}
                </span>
              </div>
              <h2 className="text-4xl font-medium mt-4">{product.title}</h2>
              <div className="mb-3 mt-1 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="text-yellow-300">
                    <BsStarFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
