
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import Logo from "./Logo";
import { NavLinkItem } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  primaryLinks: NavLinkItem[];
  secondaryLinks: NavLinkItem[];
}

const MobileMenu = ({ isOpen, onClose, primaryLinks, secondaryLinks }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  const handleItemClick = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  const renderNavItems = (items: NavLinkItem[]) => {
    return items.map((item) => (
      <div key={item.title} className="border-b border-gray-100">
        {item.dropdown ? (
          <div>
            <button
              onClick={() => handleItemClick(item.title)}
              className="flex items-center justify-between w-full py-4 px-2 text-foreground hover:text-purple-700 transition-colors"
            >
              <span className="font-medium">{item.title}</span>
              <ChevronRight
                className={`h-5 w-5 transition-transform ${
                  expandedItem === item.title ? "rotate-90" : ""
                }`}
              />
            </button>
            {expandedItem === item.title && (
              <div className="bg-gray-50 py-2 px-4 mb-2 rounded-md">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.title}
                    to={dropdownItem.link}
                    className="block py-2 text-sm text-gray-600 hover:text-purple-700"
                    onClick={onClose}
                  >
                    <div className="font-medium">{dropdownItem.title}</div>
                    <div className="text-xs text-gray-500">{dropdownItem.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            to={item.link}
            className="block py-4 px-2 text-foreground hover:text-purple-700 transition-colors font-medium"
            onClick={onClose}
          >
            {item.title}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[85vw] max-w-sm p-0">
        <SheetHeader className="p-4 border-b">
          <Logo />
        </SheetHeader>
        <div className="py-4 px-4 overflow-auto max-h-[calc(100vh-4rem)]">
          <div className="space-y-1">
            {renderNavItems([...primaryLinks, ...secondaryLinks])}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
