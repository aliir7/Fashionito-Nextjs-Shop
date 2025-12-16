"use client";

type ProductQuantityProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function ProductQuantity({
  quantity,
  onDecrease,
  onIncrease,
}: ProductQuantityProps) {
  return (
    <div className="flex items-center justify-between gap-10 pb-5 mb-5 mt-12 border-b border-gray-400">
      <h3 className="text-lg mb-2 font-medium">تعداد:</h3>
      <div className="flex gap-2 items-center">
        <span
          className="w-10 h-10 bg-black flex rounded-full items-center justify-center text-white text-xl cursor-pointer"
          onClick={onDecrease}
        >
          -
        </span>
        <span className="w-10 h-10 flex items-center justify-center rounded-full border text-xl pt-1">
          {quantity}
        </span>
        <span
          className="w-10 h-10 bg-black flex rounded-full items-center justify-center text-white text-xl cursor-pointer"
          onClick={onIncrease}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default ProductQuantity;
