import Image from "next/image";
import { categoryCardData } from "@/constants";

function CategoryCard() {
  return (
    <div className="category-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
      {categoryCardData.map((item) => (
        <div key={item.id} className="category-card relative">
          <Image src={item.image} alt={`category-card-${item.id}`} />
          <span className="bg-white hover:bg-secondary border-2 border-white text-xl hover:text-white rounded-full transition-all duration-300 px-6 py-3 cursor-pointer">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
