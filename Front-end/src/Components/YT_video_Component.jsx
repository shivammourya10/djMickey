import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

const EventCard = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "RowKNFztLvc"; // Extracted from your URL

  const handlePlay = () => setShowVideo(true);
  const handleClose = () => setShowVideo(false);

  return (
    <div className="relative w-full bg-black text-white py-16">
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Thumbnail with overlay text and play button */}
        <div className="relative group cursor-pointer" onClick={handlePlay}>
          {/* Thumbnail Image */}
          <img 
            src="/path-to-your-thumbnail-image.jpg" 
            alt="Martin Garrix at AMF 2024" 
            className="w-full h-auto max-h-[80vh] object-cover rounded-lg"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 rounded-lg" />
          
          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 p-8 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">MARTIN GARRIX LIVE</h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">AMF 2024</h2>
            <p className="text-lg md:text-xl max-w-2xl">
              The show at AMF 2024 in the Johan Cruijf ArenA during ADE was crazy!! 
              thank you for partying with me and I hope you enjoy the livest
            </p>
          </div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 p-5 rounded-full group-hover:bg-red-700 transition-all transform group-hover:scale-110">
              <FaPlay className="text-white text-4xl" />
            </div>
          </div>
        </div>

        {/* Event info below thumbnail */}
        <div className="mt-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">MARTIN GARRIX LIVE</h3>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">AMF</p>
            <p className="text-gray-400">AMSTERDAM</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
            >
              <FaTimes className="text-3xl" />
            </button>
            
            {/* YouTube Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[70vh] rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;