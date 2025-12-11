// components/Breadcrumb.tsx
import Link from "next/link";
import { RiArrowLeftWideLine } from "react-icons/ri";

export type BreadcrumbItem = {
  label: string;
  href?: string; // اگر href نداشته باشد، لینک نمی‌شود (آیتم آخر)
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 text-xl text-white ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}

          {/* جداکننده فقط بین آیتم‌ها */}
          {idx < items.length - 1 && (
            <RiArrowLeftWideLine className="text-current" />
          )}
        </div>
      ))}
    </nav>
  );
}
