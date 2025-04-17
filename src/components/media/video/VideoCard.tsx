
import { Play } from "lucide-react";
import { VideoData } from "./types";

interface VideoCardProps {
  video: VideoData;
  onClick: (video: VideoData) => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  return (
    <div 
      className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
      onClick={() => onClick(video)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#3c096c]/80 text-white">
            <Play size={30} />
          </div>
        </div>
      </div>
      <div className="p-4 text-white">
        <h3 className="font-bold text-lg">{video.title}</h3>
        <p className="text-white/70 text-sm mt-1">{video.category}</p>
        <p className="mt-2 text-sm line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
