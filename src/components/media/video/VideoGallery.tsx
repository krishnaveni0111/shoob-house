
import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import VideoCategoryFilter from "./VideoCategoryFilter";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import { VideoData } from "./types";

const videoCategories = ["All", "Commercials", "Documentaries", "Short Films", "Music Videos"];

const videoData: VideoData[] = [
  {
    id: 1,
    title: "Urban Fashion Commercial",
    description: "Brand storytelling through urban fashion aesthetics",
    thumbnail: "https://images.unsplash.com/photo-1576022163883-2dfc369a658c",
    category: "Commercials",
    videoUrl: "https://example.com/video1"
  },
  {
    id: 2,
    title: "Life in the City - Documentary",
    description: "A day in the life of urban professionals",
    thumbnail: "https://images.unsplash.com/photo-1578674473215-9e47e4fbe9d6",
    category: "Documentaries",
    videoUrl: "https://example.com/video2"
  },
  {
    id: 3,
    title: "Echoes - Short Film",
    description: "Award-winning narrative exploring human connection",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
    category: "Short Films",
    videoUrl: "https://example.com/video3"
  },
  {
    id: 4,
    title: "Pulse - Music Video",
    description: "Vibrant visuals for electronic music artist",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    category: "Music Videos",
    videoUrl: "https://example.com/video4"
  },
  {
    id: 5,
    title: "Luxury Resort Promo",
    description: "Cinematic commercial for exclusive resort brand",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    category: "Commercials",
    videoUrl: "https://example.com/video5"
  },
  {
    id: 6,
    title: "Tech Innovation Series",
    description: "Documentary series on emerging technologies",
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    category: "Documentaries",
    videoUrl: "https://example.com/video6"
  }
];

const VideoGallery = () => {
  const [activeVideoCategory, setActiveVideoCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredVideos = activeVideoCategory === "All" 
    ? videoData 
    : videoData.filter(video => video.category === activeVideoCategory);
    
  const openVideoModal = (video: VideoData) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeVideoModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  
  return (
    <section id="video-gallery" className="section-padding bg-gradient-to-br from-[#0f0f1a] to-[#1a0f2e]">
      <div className="container max-w-7xl mx-auto">
        <SectionTitle 
          title="Our Video Portfolio" 
          subtitle="Browse our diverse collection of visual storytelling projects" 
          align="center"
          className="text-white"
        />
        
        <VideoCategoryFilter 
          categories={videoCategories}
          activeCategory={activeVideoCategory}
          onCategoryChange={setActiveVideoCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={openVideoModal} 
            />
          ))}
        </div>
      </div>
      
      {isModalOpen && selectedVideo && (
        <VideoModal 
          video={selectedVideo} 
          onClose={closeVideoModal} 
        />
      )}
    </section>
  );
};

export default VideoGallery;
