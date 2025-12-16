"use client";

import { sizes } from "@/lib/constants";

type ProductSizesProps = {
  activeSize?: string;
  onChange: (size: string) => void;
};

function ProductSizes({ activeSize, onChange }: ProductSizesProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h3 className="text-lg mb-2 font-medium">سایز:</h3>
      <div className="flex items-center gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-lg transition-all border ${
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
  );
}

export default ProductSizes;
