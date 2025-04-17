
import { useRef, useEffect } from "react";
import { VideoData } from "./types";

interface VideoModalProps {
  video: VideoData;
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (videoRef.current && !videoRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div 
        ref={videoRef}
        className="bg-black/90 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
      >
        <div className="aspect-video bg-black">
          <iframe 
            src={video.videoUrl} 
            title={video.title}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold">{video.title}</h3>
          <p className="mt-2">{video.description}</p>
          <button 
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-[#3c096c] text-white rounded-md hover:bg-purple-800 transition-colors btn-glow"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
