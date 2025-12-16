import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/types";

type WishlistState = {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      // initial states
      wishlistItems: [],

      // add to list
      addToWishlist: (product) => {
        const exists = get().wishlistItems.some(
          (item) => item.id === product.id
        );

        if (exists) {
          toast.info("محصول در لیست علاقه‌مندی‌ها وجود دارد");
          return;
        }
        set((state) => ({
          wishlistItems: [...state.wishlistItems, product],
        }));

        toast.success("محصول به لیست علاقه‌مندی اضافه شد");
      },

      // remove from list
      removeFromWishlist: (id) => {
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((p) => p.id !== id),
        }));
        toast.error("محصول از علاقه‌مندی حذف شد");
      },

      // is in list
      isInWishlist: (id) => {
        return get().wishlistItems.some((product) => product.id === id);
      },
    }),
    { name: "wishlist" }
  )
);
