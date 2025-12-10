import type { NavLink } from "@/types/types";

import categoryImg1 from "@/public/assets/Category-1.webp";
import categoryImg2 from "@/public/assets/Category-2.webp";
import categoryImg3 from "@/public/assets/Category-3.webp";
import categoryImg4 from "@/public/assets/Category-4.webp";
import categoryImg5 from "@/public/assets/Category-5.webp";
import categoryImg6 from "@/public/assets/Category-6.webp";

import companyImg1 from "@/public/assets/company-1.webp";
import companyImg2 from "@/public/assets/company-2.webp";
import companyImg3 from "@/public/assets/company-3.webp";
import companyImg4 from "@/public/assets/company-4.webp";
import companyImg5 from "@/public/assets/company-5.webp";
import companyImg6 from "@/public/assets/company-6.webp";
import companyImg7 from "@/public/assets/company-7.webp";
import companyImg8 from "@/public/assets/company-8.webp";

import instaImg1 from "@/public/assets/insta-1.webp";
import instaImg2 from "@/public/assets/insta-2.webp";
import instaImg3 from "@/public/assets/insta-3.webp";
import instaImg4 from "@/public/assets/insta-4.webp";
import instaImg5 from "@/public/assets/insta-5.webp";
import instaImg6 from "@/public/assets/insta-6.webp";

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
  { label: "ژاکت", value: "jacket" },
  { label: "شلوارجین", value: "jeans" },
  { label: "پیراهن", value: "shirt" },

  { label: "پالتو", value: "coat" },
];

export const companies = [
  companyImg1,
  companyImg2,
  companyImg3,
  companyImg4,
  companyImg5,
  companyImg6,
  companyImg7,
  companyImg8,
];

export const instaImages = [
  instaImg1,
  instaImg2,
  instaImg3,
  instaImg4,
  instaImg5,
  instaImg6,
];

export const ourStores = ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز"];

export const footerLinks = [
  {
    title: "نمایندگی‌ها",
    links: ["تهران", "مشهد", "اصفهان", "شیراز", "تبریز", "یزد"],
  },

  {
    title: "لینک‌های مفید",
    links: [
      "حریم خصوصی",
      "بازگشت کالا",
      "قوانین و مقررات",
      "تماس با ما",
      "آخرین اخبار",
      "نقشه سایت",
    ],
  },
  {
    title: "دسترسی سریع",
    links: ["درباره ما", "قیمت‌ها", "تخفیف ها", "سوالات متداول", "تیم ما"],
  },
];
