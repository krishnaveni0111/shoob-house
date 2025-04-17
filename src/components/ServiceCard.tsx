
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card";

interface ServiceCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  className
}: ServiceCardProps) => {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.05,
        z: 20,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      <GlareCard
        className={cn(
          "bg-[#864cc6] p-6 text-white",
          className
        )}
      >
        {Icon && (
          <div className="mb-4 text-white">
            <Icon size={32} />
          </div>
        )}
        
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-white/80">{description}</p>
      </GlareCard>
    </motion.div>
  );
};

export default ServiceCard;
