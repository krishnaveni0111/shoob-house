
import { useRef } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import HeroSection from "@/components/talents/HeroSection";
import ServicesSection from "@/components/talents/ServicesSection";
import SuccessStoriesSection from "@/components/talents/SuccessStoriesSection";
import TalentShowcaseSection from "@/components/talents/TalentShowcaseSection";
import CtaSection from "@/components/talents/CtaSection";

const ShoobTalents = () => {
  // Create a container reference for the entire page
  const pageRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 0.15
  });
  
  // Create a separate parallax reference
  const parallaxRef = useRef(null);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={pageRef} 
      className="min-h-screen pt-28 bg-white"
    >
      {/* Add a decorative parallax element */}
      <div className="fixed -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-100/20"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute top-[60%] -left-[5%] w-[25%] h-[25%] rounded-full bg-purple-200/10"
        ></motion.div>
        <motion.div 
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-[30%] -right-[5%] w-[20%] h-[20%] rounded-full bg-purple-300/10"
        ></motion.div>
      </div>
      
      {/* Content sections with enhanced animations */}
      <HeroSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <div ref={parallaxRef} className="parallax-container">
        <motion.div 
          className="parallax-item" 
          data-speed="0.3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TalentShowcaseSection />
        </motion.div>
      </div>
      <CtaSection />
    </motion.div>
  );
};

export default ShoobTalents;
