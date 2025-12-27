import Index from "@/Components/UI/Index/Index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فشنیتو | صفحه اصلی",
};

export default function Home() {
  return (
    <main>
      <Index />
    </main>
  );
}
