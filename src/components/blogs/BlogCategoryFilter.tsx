
import { cn } from "@/lib/utils";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogCategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}: BlogCategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-4 py-2 rounded-md transition-colors duration-300",
            activeCategory === category 
              ? "bg-shoob-500 text-white" 
              : "bg-card hover:bg-shoob-100"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategoryFilter;
