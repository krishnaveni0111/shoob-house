
import BlogCategoryFilter from "./BlogCategoryFilter";
import BlogSearch from "./BlogSearch";

interface BlogCategoriesProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const BlogCategories = ({
  categories,
  activeCategory,
  setActiveCategory,
}: BlogCategoriesProps) => {
  return (
    <section className="py-12 bg-background border-b">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <BlogCategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <BlogSearch />
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;
