"use client";

import { Product } from "@/types/types";
import { useState } from "react";
import { sizes } from "@/lib/constants";
import { parsePrice } from "@/lib/utils/parsePrice";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductQuantity from "./ProductQuantity";
import ProductSizes from "./ProductSizes";
import ProductShare from "./ProductShare";
import ProductDescription from "./ProductDescription";
import ProductPayment from "./ProductPayment";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ProductDetailsProps = {
  product: Product;
};

function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState<string | undefined>(sizes.at(0));

  const price = parsePrice(product.price);
  const totalPrice = price * quantity;

  return (
    <div className="wrapper py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div className="w-full lg:w-1/1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductGallery product={product} />

            <div className="flex flex-col">
              <ProductInfo product={product} />

              <ProductQuantity
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
              />

              <ProductSizes activeSize={activeSize} onChange={setActiveSize} />

              <ProductShare />
            </div>
          </div>

          <ProductDescription product={product} />
        </div>

        <div className="w-full lg:w-1/2 sticky lg:top-25 mt-4 lg:mt-0 self-start">
          <ProductPayment
            totalPrice={totalPrice}
            product={product}
            quantity={quantity}
          />
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        style={{ padding: "8px" }}
      />
    </div>
  );
}

export default ProductDetails;
