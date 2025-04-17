
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface DropdownItem {
  title: string;
  description: string;
  link: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isVisible: boolean;
  alignment?: "left" | "right";
}

const DropdownMenu = ({ items, isVisible, alignment = "left" }: DropdownMenuProps) => {
  if (!isVisible) return null;
  
  return (
    <div 
      className={cn(
        "dropdown-menu absolute z-50 mt-1 min-w-[280px]",
        "transition-all duration-200 ease-out",
        "opacity-0 translate-y-2 scale-95",
        isVisible && "animate-dropdown-in opacity-100 translate-y-0 scale-100",
        alignment === "right" ? "right-0" : "left-0"
      )}
      style={{ 
        transformOrigin: alignment === "right" ? "top right" : "top left"
      }}
    >
      <div className="py-3 rounded-xl shadow-xl bg-white/95 backdrop-blur-md border border-purple-200 overflow-hidden">
        {items.map((item, index) => (
          <Link
            key={item.title}
            to={item.link}
            className="dropdown-item group relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="pl-5 pr-4">
              <div className="font-medium text-foreground group-hover:text-purple-600 transition-colors">{item.title}</div>
              
              <div className="text-sm text-muted-foreground">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
