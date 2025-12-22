import type { BlogCategory, Faq, NavLink, Testimonial } from "@/types/types";

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

import aboutImg3 from "@/public/assets/about-3.webp";

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
    label: "مقالات",
    href: "/Blogs",
    dropdown: [
      { label: "مقالات", href: "/Blogs" },
      { label: "جزئیات مقاله", href: "/Blogs/7" },
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

  { label: "همه", value: "All" },
] as const;

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

// footer links
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

// sizes
export const sizes = ["L", "XL", "2XL"];

// blog category
export const blogCategories: BlogCategory[] = [
  { name: "دامن ها", count: 5 },
  { name: "کلاه و پیراهن", count: 10 },
  { name: "کفش", count: 8 },
  { name: "زیورآلات", count: 12 },
  { name: "آرایش", count: 13 },
  { name: "اصلاح صورت و بدن", count: 17 },
  { name: "مراقب پوستی", count: 7 },
  { name: "ژاکت و پالتو", count: 4 },
];

// blog tags
export const blogTags = ["قدیمی", "ازدواج", "کتان", "بیزینس", "رسمی"];

// FAQ Data
export const faqData: Faq[] = [
  {
    question: "چطور می‌تونم با پشتیبانی تماس بگیرم؟",
    answer:
      "اگر سفارشت هنوز ارسال نشده، می‌تونی از طریق تیکت یا واتس‌اپ آدرس رو تغییر بدی؛ بعد از ارسال، متأسفانه امکان تغییر نیست.",
  },
  {
    question: "می‌تونم سفارش رو کنسل کنم؟",
    answer:
      "تا پیش از آماده‌سازی و تحویل به پست، می‌تونی از پنل کاربلی یا تماس با پشتیبانی کنسل کنی؛ بعد از ارسال، مرجوع طبق قوانین بازگشت کالا انجام می‌شه.",
  },

  {
    question: "چه سایزی مناسب منه؟ راهنمای سایز دارید؟",
    answer:
      "بله؛ جدول سایز دقیق هر محصول در صفحهٔ محصول قرار گرفته. اگر بین دو سایز هستی، سایز بزرگ‌تر رو انتخاب کن.",
  },

  {
    question: "چقدر زمان می‌بره به دستم برسه؟",
    answer:
      "تهران و کرج: ۱ تا ۲ روز کاری، شهرستان: ۲ تا ۴ روز کاری (در ایام پیک پست ممکنه یک روز تأخیر داشته باشه).",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "سایز دقیق بود، پارچه نرم و لطیف؛ مثل این بود که از قبل اندازم گرفته باشن. دیگه فکر نمی‌کردم آنلاین بتونم همچین لباسی بخرم، عالی بود!",
    img: aboutImg3,
    name: "نازنین رضایی",
    role: "دانشجوی کارشناسی",
  },
  {
    id: 2,
    text: "کیفیت دوخت عالی، رنگ دقیقاً مثل عکس. ارسال سریع و بسته‌بندی شیک؛ واقعاً لذت بخش بود، ممنون فَشنیتو.",
    img: aboutImg3,
    name: "سارا احمدی",
    role: "طراح گرافیک",
  },
  {
    id: 3,
    text: "برای مهمونی رسمی سفارش داده بودم، همه تعریف کردن! استایل و پارچه درجه یک بود؛ مطمئنم دوباره سفارش می‌دم.",
    img: aboutImg3,
    name: "مبینا کاظمی",
    role: "منشی",
  },
  {
    id: 4,
    text: "سریع رسید، سایزبندی درست بود، پارچه خنک و راحت؛ عالی برای تابستون. قیمت هم مناسب بود، ممنونم.",
    img: aboutImg3,
    name: "علی اکبری",
    role: "برنامه‌نویس",
  },
  {
    id: 5,
    text: "از مشهد سفارش دادم، فقط ۲ روزه رسید! کیفیت دوخت فوق‌العاده، رنگ ثابت بعد چندین شست‌وشو. عالیه!",
    img: aboutImg3,
    name: "زهرا سپهری",
    role: "معلم",
  },
];
