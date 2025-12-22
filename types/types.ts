import type { StaticImageData } from "next/image";

export type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

export type Product = {
  id: number;
  title: string;
  image: string;
  price: string;
  off?: string;
  category?: string;
  rating?: number;
  reviews?: number;
  description?: string;
};

export type Blog = {
  id: number;
  image: string;
  title: string;
  smallTitle: string;
  date: string;
  gallery: string[];
  category?: BlogCategory[];
  author?: string;
};

export type BlogCategory = {
  name: string;
  count: number;
};

export type CartItem = Product & { quantity: number };

export type FilterType = "جدیدترین" | "قدیمی‌ترین" | "ارزان‌ترین" | "گران‌ترین";
export type CategoryType = "All" | "jacket" | "jeans" | "shirt" | "coat";

export type Faq = {
  question: string;
  answer: string;
};

export type Testimonial = {
  id: number;
  text: string;
  img: StaticImageData | string;
  name: string;
  role: string;
};
