
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = "left",
  className
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right"
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
