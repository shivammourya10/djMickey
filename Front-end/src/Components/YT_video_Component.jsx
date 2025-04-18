import { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const YT_video_Component = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoId = "_xBjcL7D1Vg";

  useEffect(() => {
    setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }, [videoId]);

  const handlePlay = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative w-full text-white py-12 sm:py-16 md:py-24 bg-black overflow-hidden">
      {/* Common Background Component */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
          <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div 
          className="relative group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] border border-gray-700 rounded-xl overflow-hidden"
          onClick={handlePlay}
        >
          <img 
            src={thumbnailUrl}
            alt="DJ Mickey at Sunburn 2024" 
            className="w-full h-auto min-h-[40vh] sm:min-h-[45vh] md:min-h-[55vh] max-h-[55vh] object-cover rounded-xl shadow-xl brightness-75 group-hover:brightness-100 transition-all duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl group-hover:opacity-75 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 p-4 sm:p-8 md:p-12 z-10 transform group-hover:translate-y-2 transition-transform duration-500">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-500/10 backdrop-blur-md border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <FaCalendarAlt /> NOVEMBER 2024
              </span>
              <span className="px-3 py-1 sm:px-4 sm:py-2 bg-pink-500/10 backdrop-blur-md border border-pink-500/30 rounded-full text-pink-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <FaMapMarkerAlt /> CHANDIGARH UNIVERSITY
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-3 tracking-tight text-white group-hover:text-white transition-colors duration-500">DJ MICKEY LIVE</h1>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold mb-3 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-500">SUNBURN 2024</h2>
            <p className="text-base sm:text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-500">
              The sunburn 2024 in the Chandigarh University was crazy!! 
              Thank you for partying with me and I hope you enjoy the livest.
            </p>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8 rounded-full group-hover:from-purple-700 group-hover:to-pink-700 transition-all transform group-hover:scale-110 shadow-xl glow animate-pulse">
              <FaPlay className="text-white text-4xl sm:text-6xl" />
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-gray-800 pt-4 sm:pt-8 gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white/90">DJ MICKEY LIVE </h3>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SUNBURN</p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">INDEPENDENT ARTIST</p>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md">
          <div className="relative w-full max-w-7xl">
            <button 
              onClick={handleClose}
              className="absolute -top-8 sm:-top-16 right-0 text-white hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaTimes className="text-2xl sm:text-4xl" />
            </button>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YT_video_Component;