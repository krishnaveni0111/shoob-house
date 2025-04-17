
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  className,
  children
}: HeroSectionProps) => {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden bg-white",
        className
      )}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-[#864cc6]/60 backdrop-blur-sm"></div>
        </div>
      )}
      
      <div className="container max-w-7xl mx-auto px-4 z-10 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-700">
            {subtitle}
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }} 
            className="mt-10"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
