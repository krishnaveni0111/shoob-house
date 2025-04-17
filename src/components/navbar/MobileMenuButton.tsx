
import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileMenuButton = ({ onClick, isOpen }: MobileMenuButtonProps) => {
  return (
    <button 
      className="p-2 text-foreground transition-colors hover:text-purple-700 " 
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  );
};

export default MobileMenuButton;
