import Link from "next/link";
import { RiArrowLeftWideLine } from "react-icons/ri";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
  changeTextColor?: boolean;
  onHover?: string;
};

export default function Breadcrumb({
  items,
  className = "",
  changeTextColor = false,
  onHover = "",
}: BreadcrumbProps) {
  return (
    <nav
      className={`flex items-center gap-2 text-xl ${
        changeTextColor === false && "text-white"
      } ${className}`}
    >
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className={`${
                changeTextColor === false && "hover:text-primary"
              } transition-colors text-lg lg:text-xl duration-300 ${onHover}`}
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-lg lg:text-xl">{item.label}</span>
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
