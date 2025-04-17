
import { useEffect, useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Brand Film for Envie",
    description: "Corporate identity film showcasing company vision and values",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-4838-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1505236273191-1dce886b01e9?q=80&w=2039&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "NexTech Product Launch",
    description: "Promotional content for tech product release event",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-a-hand-with-a-watch-with-graphics-appearing-on-top-32704-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1560439514-e960a3ef5019?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Altitude Fashion Campaign",
    description: "High-end fashion video campaign for summer collection",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-modeling-at-a-photo-shooting-34421-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1924&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Wanderlust Travel Series",
    description: "Documentary-style travel content showcasing hidden destinations",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Urban Beats Music Video",
    description: "Music video production with urban aesthetic",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-a-concert-13196-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;
    
    // Set up horizontal scroll effect
    const section = sectionRef.current;
    const container = containerRef.current;
    
    const handleScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      if (top < viewportHeight && top > -height) {
        // Calculate progress through section (0 to 1)
        const scrollProgress = Math.min(
          Math.max(0, -top / (height - viewportHeight) + 0.1), 
          1
        );
        
        // Apply horizontal scroll
        const translateX = scrollProgress * (container.scrollWidth - container.clientWidth);
        container.style.transform = `translateX(-${translateX}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleVideoHover = (index: number, isHovering: boolean) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    if (isHovering) {
      video.play();
      video.muted = false;
    } else {
      video.pause();
      video.muted = true;
      // Reset to thumbnail frame
      video.currentTime = 0;
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative h-[300vh] bg-gradient-to-b from-[#0c0c0c] to-[#1c1c1c] overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="absolute top-10 left-0 w-full text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/60 mb-8">Scroll to explore our recent work</p>
          <Link to="/portfolio">
            <Button 
              className="bg-[#864cc6] hover:bg-[#864cc6]/90 text-white rounded-full"
            >
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div 
          ref={containerRef}
          className="flex w-[500vw] px-[10vw] items-center transition-transform duration-100 will-change-transform"
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-[80vw] px-8">
              <div 
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                onMouseEnter={() => handleVideoHover(index, true)}
                onMouseLeave={() => handleVideoHover(index, false)}
              >
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                ></video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-6">{project.description}</p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-3">
                    <div className="bg-[#864cc6]/70 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center border border-white/30">
                      <Play size={20} className="text-white fill-white" />
                    </div>
                    <span className="text-white/80 text-sm">Hover to unmute</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
