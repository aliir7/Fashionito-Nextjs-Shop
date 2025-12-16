"use client";

import {
  RiInstagramLine,
  RiTelegramLine,
  RiWhatsappLine,
} from "react-icons/ri";

function ProductShare() {
  return (
    <div className="pt-6">
      <p className="text-sm">اشتراک‌گذاری:</p>
      <div className="flex items-center gap-2 mt-3 text-xl ps-1 cursor-pointer">
        <RiInstagramLine />
        <RiTelegramLine />
        <RiWhatsappLine />
      </div>
    </div>
  );
}

export default ProductShare;
