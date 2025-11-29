import type { NavLink } from "@/types/types";

export const navLinks: NavLink[] = [
  {
    label: "خانه",
    href: "/",
  },
  {
    label: "فروشگاه",
    href: "/Shop",
    dropdown: [
      { label: "فروشگاه", href: "/Shop" },
      { label: "جزئیات محصول", href: "/Shop/12" },
      { label: "سبد خرید", href: "/Cart" },
      { label: "علاقه‌مندی‌ها", href: "/Wishlist" },
      { label: "تسویه حساب", href: "/Checkout" },
    ],
  },
  {
    label: "وبلاگ‌ها",
    href: "/Blogs",
    dropdown: [
      { label: "وبلاگ‌ها", href: "/Blogs" },
      { label: "جزئیات وبلاگ", href: "/Blogs/7" },
    ],
  },
  {
    label: "صفحات",
    href: "#",
    dropdown: [
      { label: "درباره ما", href: "/About" },
      { label: "جدول قیمت‌ها", href: "/Pricing" },
      { label: "کارت هدیه", href: "/GiftVoucher" },
      { label: "سوالات متداول", href: "/Faq" },
      { label: "ورود", href: "/Login" },
      { label: "ثبت‌نام", href: "/Registration" },
      { label: "تماس با ما", href: "/Contact" },
    ],
  },
  { label: "تماس با ما", href: "/Contact" },
];
