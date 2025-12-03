import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, CartItem } from "@/types/types";
import { parsePrice } from "../utils/parsePrice";

type CartState = {
  cartItems: CartItem[];
  addToCart: (product: Product, qty?: number) => void;
  decreaseFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // initial state
      cartItems: [],

      // new item add to card
      addToCart: (product, qty) => {
        // check for existing item
        const items = get().cartItems;
        const index = items.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          // increase quantity
          const updated = [...items];
          updated[index].quantity += qty ?? 1;
          set({ cartItems: updated });
          toast.success("محصول به سبد خرید اضافه شد");
          return;
        }
        // if item not exist add new item
        set({
          cartItems: [...items, { ...product, quantity: qty ?? 1 }],
        });

        toast.success("محصول به سبد خرید اضافه شد");
      },

      // decrease item from cart
      decreaseFromCart: (id) => {
        const items = get().cartItems;
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return;

        // decrease item
        const updated = [...items];
        updated[index].quantity -= 1;

        if (updated[index].quantity <= 0) {
          updated.splice(index, 1);
        }
        set({ cartItems: updated });
      },

      // remove item from cart
      removeFromCart: (id) => {
        const items = get().cartItems;
        set({
          cartItems: items.filter((item) => item.id !== id),
        });

        // show toast to client
        toast.done("محصول از سبد حذف شد");
      },

      // remove all items from card
      clearCart: () => {
        set({ cartItems: [] });
      },

      // get total price cart
      getTotalPrice: () => {
        return get().cartItems.reduce((sum, item) => {
          const price = parsePrice(item.price);
          return sum + item.quantity * price;
        }, 0);
      },
    }),
    { name: "cart" }
  )
);
