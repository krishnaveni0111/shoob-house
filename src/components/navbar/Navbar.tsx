
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import NavLinks, { NavLinkItem } from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  isScrolled: boolean;
}

const primaryLinks: NavLinkItem[] = [
  { 
    title: "Home", 
    link: "/" 
  },
  { 
    title: "About", 
    link: "/about"
  },
  { 
    title: "Subsidiaries", 
    link: "/subsidiaries",
    dropdown: [
      {
        title: "Shoob Media",
        description: "Brand storytelling and content creation",
        link: "/shoob-media"
      },
      {
        title: "Shoob Talents",
        description: "Talent management and booking agency",
        link: "/shoob-talents"
      }
    ]
  }
];

const secondaryLinks: NavLinkItem[] = [
  { 
    title: "Careers", 
    link: "/careers"
  },
  { 
    title: "Blogs", 
    link: "/blogs"
  },
  { 
    title: "Contact", 
    link: "/contact" 
  }
];

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Left Section - Primary Links */}
          <NavLinks links={primaryLinks} alignment="left" />
          
          {/* Center Section - Logo */}
          <div className="flex-1 md:flex-none flex justify-center">
            <Logo />
          </div>
          
          {/* Right Section - Secondary Links */}
          <NavLinks links={secondaryLinks} alignment="right" />
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenuButton 
              onClick={toggleMobileMenu} 
              isOpen={isMobileMenuOpen} 
            />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
      />
    </header>
  );
};

export default Navbar;
