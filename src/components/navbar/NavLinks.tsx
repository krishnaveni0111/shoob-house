
import { useState } from "react";
import NavLink from "./NavLink";
import { DropdownItem } from "./DropdownMenu";

interface NavLinksProps {
  links: NavLinkItem[];
  alignment?: "left" | "right";
}

export interface NavLinkItem {
  title: string;
  link: string;
  dropdown?: DropdownItem[];
}

const NavLinks = ({ links, alignment = "left" }: NavLinksProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className={`hidden md:flex space-x-6 ${alignment === "right" ? "justify-end" : ""}`}>
      {links.map((link) => (
        <NavLink
          key={link.title}
          title={link.title}
          link={link.link}
          dropdown={link.dropdown}
          isActive={activeDropdown === link.title}
          onMouseEnter={() => handleMouseEnter(link.title)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default NavLinks;
