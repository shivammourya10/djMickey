import { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoId = "RowKNFztLvc";

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
    <div className="relative w-full text-white py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="relative w-[55] group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] border border-gray-700 rounded-xl overflow-hidden"
          onClick={handlePlay}
        >
          <img 
            src={thumbnailUrl}
            alt="Martin Garrix at AMF 2024" 
            className="w-full h-auto max-h-[55vh] object-cover rounded-xl shadow-xl brightness-75 group-hover:brightness-100 transition-all duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl group-hover:opacity-75 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 p-12 z-10 transform group-hover:translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold flex items-center gap-2">
                <FaCalendarAlt /> OCTOBER 2024
              </span>
              <span className="px-4 py-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold flex items-center gap-2">
                <FaMapMarkerAlt /> AMSTERDAM
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-tight text-white group-hover:text-white transition-colors duration-500">MARTIN GARRIX LIVE</h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-amber-400 group-hover:text-amber-300 transition-colors duration-500">AMF 2024</h2>
            <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors duration-500">
              The show at AMF 2024 in the Johan Cruijf ArenA during ADE was crazy!! 
              Thank you for partying with me and I hope you enjoy the livest.
            </p>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-amber-500 p-8 rounded-full group-hover:bg-amber-600 transition-all transform group-hover:scale-110 shadow-xl glow animate-pulse">
              <FaPlay className="text-white text-6xl" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between items-center border-t border-gray-800 pt-8">
          <div>
            <h3 className="text-3xl font-bold tracking-wide text-white/90">MARTIN GARRIX LIVE</h3>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-amber-400">AMF</p>
            <p className="text--400 text-lg">AMSTERDAM</p>
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative w-full max-w-7xl">
            <button 
              onClick={handleClose}
              className="absolute -top-16 right-0 text-white hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaTimes className="text-4xl" />
            </button>
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[75vh] rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
