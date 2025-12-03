import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types/types";

type WishlistState = {
  wishlistItems: Product[];
  wishlistCount: number;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      // initial states
      wishlistItems: [],
      wishlistCount: 0,

      addToWishlist: (product) => {
        const exists = get().wishlistItems.find(
          (item) => item.id === product.id
        );

        if (exists) {
          toast.info("محصول در لیست علاقه‌مندی‌ها وجود دارد");
          return;
        }
        set((state) => {
          const newWishlist = [...state.wishlistItems, product];

          toast.success("محصول به لیست علاقه‌مندی اضافه شد");

          return {
            wishlistItems: newWishlist,
            wishlistCount: newWishlist.length,
          };
        });
      },
      // remove from Wishlist
      removeFromWishlist: (id) =>
        set((state) => {
          const newWishlist = state.wishlistItems.filter((p) => p.id !== id);

          toast.info("محصول از علاقه‌مندی‌ها حذف شد");

          return {
            wishlistItems: newWishlist,
            wishlistCount: newWishlist.length,
          };
        }),
    }),
    { name: "wishlist" }
  )
);
