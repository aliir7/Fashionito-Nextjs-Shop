import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/yekanBakh/YekanBakhFaNum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/yekanBakh/YekanBakhFaNum-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/yekanBakh/YekanBakhFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-yekanBakh",
});

export const metadata: Metadata = {
  title: "فشنیتو",
  description: "فشنیتو - آنلاین شاپ لباس",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
