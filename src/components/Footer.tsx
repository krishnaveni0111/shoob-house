
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#864cc6] text-white py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-xl font-bold tracking-wider mb-2">
              SHOOB
            </div>
            <p className="text-white/80 text-sm max-w-xs">
              Showcasing How Our Obsession Blooms
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Youtube size={20} />
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-flow-col gap-6 text-sm">
            <Link to="/" className="text-white/80 hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/30 mt-6 pt-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/80 text-xs">
            &copy; {new Date().getFullYear()} Shoob. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-2 md:mt-0 text-xs">
            <Link to="/privacy" className="text-white/80 hover:text-white transition-colors duration-300">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/80 hover:text-white transition-colors duration-300">
              Terms
            </Link>
            <Link to="/cookies" className="text-white/80 hover:text-white transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
