
import { Filter, Camera, Film, Monitor, Users } from "lucide-react";

interface VideoCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const VideoCategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: VideoCategoryFilterProps) => {
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "All": return <Filter size={16} />;
      case "Commercials": return <Camera size={16} />;
      case "Documentaries": return <Film size={16} />;
      case "Short Films": return <Monitor size={16} />;
      case "Music Videos": return <Users size={16} />;
      default: return null;
    }
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 btn-glow ${
            activeCategory === category 
              ? "bg-[#3c096c] text-white" 
              : "bg-white/10 text-white/70 hover:bg-white/20"
          }`}
        >
          {getCategoryIcon(category)}
          {category}
        </button>
      ))}
    </div>
  );
};

export default VideoCategoryFilter;
