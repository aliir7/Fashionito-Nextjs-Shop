import type { NavLink } from "@/types/types";

import categoryImg1 from "@/public/assets/Category-1.webp";
import categoryImg2 from "@/public/assets/Category-2.webp";
import categoryImg3 from "@/public/assets/Category-3.webp";
import categoryImg4 from "@/public/assets/Category-4.webp";
import categoryImg5 from "@/public/assets/Category-5.webp";
import categoryImg6 from "@/public/assets/Category-6.webp";

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

export const categoryCardData = [
  {
    id: 1,
    title: "ژاکت",
    image: categoryImg1,
  },
  {
    id: 2,
    title: "شلوارجین",
    image: categoryImg2,
  },
  {
    id: 3,
    title: "پیراهن",
    image: categoryImg3,
  },
  {
    id: 4,
    title: "دامن",
    image: categoryImg4,
  },
  {
    id: 5,
    title: "تیشرت",
    image: categoryImg5,
  },
  {
    id: 6,
    title: "پالتو",
    image: categoryImg6,
  },
];

export const categories = [
  "ژاکت",
  "شلوارجین",
  "پیراهن",
  "دامن",
  "تیشرت",
  "پالتو",
];
