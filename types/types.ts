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
  off: string;
  category: string;
};
