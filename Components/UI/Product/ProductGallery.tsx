"use client";

import { Product } from "@/types/types";
import Image from "next/image";

type ProductGalleryProps = {
  product: Product;
};

function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="flex flex-col">
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
  );
}

export default ProductGallery;
