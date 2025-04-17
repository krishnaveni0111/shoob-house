
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  linkText,
  linkUrl,
  imageSrc,
  imageAlt,
  className
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden shadow-card hover:transform hover:scale-[1.02] transition-all duration-500",
        className
      )}
    >
      {imageSrc && (
        <div className="relative h-64 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          />
        </div>
      )}
      
      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        
        {linkText && linkUrl && (
          <div className="mt-4">
            <Link 
              to={linkUrl} 
              className="inline-flex items-center text-shoob-500 hover:text-shoob-600 font-medium"
            >
              {linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
