
import { useEffect, useRef } from "react";

const WhoWeAreSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !textRef.current) return;
    
    const handleScroll = () => {
      const { top, height } = sectionRef.current!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      if (top < viewportHeight && top > -height) {
        // Calculate progress through section (0 to 1)
        const progress = Math.min(Math.max(0, -top / height + 0.5), 1);
        
        // Parallax effect on video
        videoRef.current!.style.transform = `translateY(${progress * 100}px)`;
        
        // Fade out video as user scrolls
        videoRef.current!.style.opacity = (1 - progress * 1.5).toString();
        
        // Move text content up with parallax
        textRef.current!.style.transform = `translateY(${-progress * 100}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 scale-110 transition-transform duration-100"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-creative-workspace-with-a-computer-and-camera-9254-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>
      
      <div 
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-100"
      >
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-on-scroll fade-up">
            What is Shoob Media?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto animate-on-scroll fade-up delay-200">
            We are the rebels of content, crafting visuals that stick.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left animate-on-scroll fade-up delay-300">
            <div className="bg-[#864cc6]/30 backdrop-blur-sm p-6 rounded-xl border border-[#864cc6]/20">
              <h3 className="text-white text-xl font-bold mb-2">Creative Vision</h3>
              <p className="text-white/70">We approach each project with a fresh perspective, challenging conventions.</p>
            </div>
            <div className="bg-[#864cc6]/30 backdrop-blur-sm p-6 rounded-xl border border-[#864cc6]/20">
              <h3 className="text-white text-xl font-bold mb-2">Technical Excellence</h3>
              <p className="text-white/70">Our team combines artistic vision with cutting-edge production techniques.</p>
            </div>
            <div className="bg-[#864cc6]/30 backdrop-blur-sm p-6 rounded-xl border border-[#864cc6]/20">
              <h3 className="text-white text-xl font-bold mb-2">Strategic Impact</h3>
              <p className="text-white/70">Every visual element serves a purpose in telling your brand's unique story.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
