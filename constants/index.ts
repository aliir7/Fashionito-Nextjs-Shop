import type { NavLink } from "@/types/types";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/Shop",
    dropdown: [
      { label: "Shop", href: "/Shop" },
      { label: "Details", href: "/Shop/12" },
      { label: "Cart", href: "/Cart" },
      { label: "Wishlist", href: "/Wishlist" },
      { label: "Checkout", href: "/Checkout" },
    ],
  },
];
