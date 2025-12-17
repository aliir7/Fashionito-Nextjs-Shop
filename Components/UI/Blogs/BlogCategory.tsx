import { blogCategories } from "@/lib/constants";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function BlogCategory() {
  return (
    <div className="flex flex-col mt-5 gap-2">
      {blogCategories.map((cat, index) => (
        <div
          key={index}
          className="group flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <h3 className="group flex items-center text-lg cursor-pointer group-hover:ps-2 transition-all duration-300 gap-2 group-hover:text-secondary">
              <BsArrowLeft />
              {cat.name}
            </h3>
          </div>
          <h3 className="group-hover:text-secondary transition-all duration-300 text-sm">
            ({cat.count})
          </h3>
        </div>
      ))}
    </div>
  );
}

export default BlogCategory;
