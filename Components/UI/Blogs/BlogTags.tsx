import { blogTags } from "@/lib/constants";

function BlogTags() {
  return (
    <div className="mt-10">
      <h3 className="mb-5 font-medium">تگ‌ها</h3>
      <div className="flex flex-wrap gap-3">
        {blogTags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm rounded-md border text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlogTags;
