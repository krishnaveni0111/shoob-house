
import { Input } from "@/components/ui/input";

const BlogSearch = () => {
  return (
    <div className="relative w-full md:w-auto">
      <Input
        type="text"
        placeholder="Search articles..."
        className="py-2 px-4 pr-10 rounded-md border border-gray-300 w-full md:w-64"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default BlogSearch;
