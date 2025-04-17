
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen relative bg-white">
        {/* Animated pattern background */}
        <div className="fixed inset-0 w-full h-full z-[-1] opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] animate-float opacity-40"></div>
        </div>
        
        <Navbar isScrolled={isScrolled} />
        <main className="flex-grow bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
