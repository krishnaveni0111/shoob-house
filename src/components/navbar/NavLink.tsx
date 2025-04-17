
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import DropdownMenu, { DropdownItem } from "./DropdownMenu";

interface NavLinkProps {
  title: string;
  link: string;
  dropdown?: DropdownItem[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavLink = ({
  title,
  link,
  dropdown,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavLinkProps) => {
  const location = useLocation();
  const isCurrentPage = location.pathname === link;

  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link 
        to={link} 
        className={cn(
          "nav-link flex items-center uppercase tracking-wider text-sm",
          isCurrentPage && "text-purple-600"
        )}
      >
        {title}
        {dropdown && (
          <ChevronDown className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isActive && "rotate-180"
          )} />
        )}
      </Link>
      
      {dropdown && (
        <DropdownMenu items={dropdown} isVisible={isActive} />
      )}
    </div>
  );
};

export default NavLink;
