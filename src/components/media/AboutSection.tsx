
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Check if section is in view for typing animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typingRef.current) {
            typingRef.current.classList.add("typing-animation");
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0c0c0c] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-noise"></div>
      
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white animate-on-scroll fade-left">
              Crafting the Future of Visual Storytelling
            </h2>
            
            <div className="overflow-hidden h-[100px] md:h-[80px]">
              <p ref={typingRef} className="text-white/80 text-lg leading-relaxed">
                A full-service creative agency based in Bangalore, bridging design, video, and marketing.
              </p>
            </div>
            
            <div className="space-y-4 animate-on-scroll fade-left delay-300">
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-[#5D3A8D]"></div>
                <p className="text-white/70">Full-service creative agency specializing in visual storytelling</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-[#5D3A8D]"></div>
                <p className="text-white/70">Based in Bangalore, working with global brands</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-[#5D3A8D]"></div>
                <p className="text-white/70">Bridging design, video production, and digital marketing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-[#5D3A8D]"></div>
                <p className="text-white/70">Powered by bold storytelling and cutting-edge technology</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll fade-right">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                alt="Creative Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#5D3A8D] rounded-full flex items-center justify-center text-white font-bold animate-float">
              <span>EST 2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
