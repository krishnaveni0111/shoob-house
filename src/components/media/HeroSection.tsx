
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      if (!videoRef.current || !sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only apply effect when section is in view
      if (scrollPosition <= sectionHeight) {
        // Parallax effect: video moves up slightly as user scrolls down
        videoRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        
        // Fade effect on text overlay
        const overlay = sectionRef.current.querySelector(".overlay-content");
        if (overlay) {
          const opacity = Math.max(1 - scrollPosition / (sectionHeight * 0.7), 0);
          (overlay as HTMLElement).style.opacity = opacity.toString();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="hero-section relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-scene-for-video-or-photo-shoot-42067-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="overlay-content container max-w-4xl mx-auto px-4 text-center transition-opacity duration-300">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-on-scroll fade-up">
            Welcome to Shoob Media
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-on-scroll fade-up delay-200">
            Where imagination meets innovation
          </p>
          <Link to="/contact">
            <Button 
              className="px-8 py-4 bg-[#864cc6] text-white rounded-full shadow-lg animate-on-scroll fade-up delay-300 hover:bg-[#864cc6]/90 transition-colors"
            >
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
