import React from 'react';
import { motion } from 'framer-motion';

const UpcomingEvents = () => {
  return (
    <section className="py-12 bg-black text-white relative">
      {/* DJ Mickey branded text in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <div className="text-[15vw] font-extrabold tracking-tighter text-white uppercase rotate-12">
          DJ MICKEY
        </div>
      </div>
      
      {/* External decorative SVGs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <svg className="absolute -top-10 -left-10 w-48 h-48 text-purple-600/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm-1.5-4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm3-9H9v6h1.5V7.5h1.5a1.5 1.5 0 0 0 0-3h-1.5z"/>
        </svg>
        <svg className="absolute -bottom-10 -right-10 w-56 h-56 text-pink-600/10 rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 0.5C4.84 0.5 0 5.34 0 11.5C0 17.66 4.84 22.5 11 22.5C17.16 22.5 22 17.66 22 11.5C22 5.34 17.16 0.5 11 0.5ZM11 20.5C5.94 20.5 2 16.56 2 11.5C2 6.44 5.94 2.5 11 2.5C16.06 2.5 20 6.44 20 11.5C20 16.56 16.06 20.5 11 20.5ZM15 11.5C15 13.71 13.21 15.5 11 15.5C8.79 15.5 7 13.71 7 11.5C7 9.29 8.79 7.5 11 7.5C13.21 7.5 15 9.29 15 11.5Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated DJ Mickey text header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            DJ MICKEY
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
        </motion.div>

        {/* Reduced size event card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 mb-12 mx-auto relative max-w-4xl
                      bg-gradient-to-br from-[#170029] via-[#25003d] to-[#320025] 
                      p-6 rounded-2xl border border-purple-500/30 
                      shadow-[0_10px_30px_rgba(120,0,170,0.3)] backdrop-blur-sm overflow-hidden"
        >
          {/* Music-themed SVG background elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="absolute top-10 left-10 w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.952 6.992c-1.061 0-1.92.859-1.92 1.92s.859 1.92 1.92 1.92 1.92-.859 1.92-1.92-.859-1.92-1.92-1.92zM3.984 12h6V5.016L3.984 12zm16.032-7.968c2.625 0 4.969 2.344 4.969 4.969s-2.344 4.969-4.969 4.969-4.969-2.344-4.969-4.969 2.344-4.969 4.969-4.969zM3.984 14.016v4.969h4.031v-4.969H3.984zm6 0v4.969h4.031v-4.969H9.984zm6 0v4.969h4.031v-4.969h-4.031z"/>
            </svg>
            <svg className="absolute bottom-10 right-10 w-20 h-20 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3v12.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V5.618l-9 2.909V17.5c0 1.381-1.567 2.5-3.5 2.5S3 18.881 3 17.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V7L21 3z"/>
            </svg>
            <svg className="absolute top-1/2 left-1/4 w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <svg className="absolute bottom-1/4 right-1/4 w-14 h-14 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
          
          {/* Glowing accent elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-600/20 rounded-full blur-3xl"></div>
          
          {/* New DJ Mickey Logo Icon */}
          <div className="absolute -top-6 right-10 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
          </div>
          
          {/* Section header with animated elements */}
          <div className="relative z-10 flex flex-col items-center mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-purple-400 to-pink-500"></div>
              <h3 className="text-xl font-bold text-white tracking-wider">UPCOMING EVENT</h3>
              <div className="w-2 h-6 rounded-full bg-gradient-to-b from-purple-400 to-pink-500"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-xl md:text-2xl text-center font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
            EXPERIENCE THE MAGIC OF MUSIC: DJ MICKEY LIVE IN CONCERT!
          </h2>
          
          <p className="text-gray-300 mb-5 text-center max-w-2xl mx-auto text-sm">
            Get ready for an electrifying night as DJ Mickey, the sensational artist renowned for his groundbreaking fusion of Punjabi beats and Bollywood rhythms, takes the stage for an unforgettable concert.
          </p>
          
          <div className="bg-[#1a0033]/60 p-5 rounded-lg mb-5 backdrop-blur-sm border border-purple-500/20 max-w-xl mx-auto">
            <h4 className="font-semibold text-white mb-3 text-center text-sm">EVENT HIGHLIGHTS:</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1.5 min-w-[12px] h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                <span><strong className="text-purple-300">Dynamic Performance:</strong> DJ Mickey will showcase his signature style, seamlessly blending high-energy Punjabi dance tracks with iconic Bollywood melodies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block mt-1.5 min-w-[12px] h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                <span><strong className="text-purple-300">Special Guest Appearances:</strong> Enjoy live performances by acclaimed Punjabi singers and Bollywood playback artists.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-300 bg-[#1a0033]/40 px-3 py-1.5 rounded-lg backdrop-blur-sm text-sm">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
              <span>Coming Soon</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-[#1a0033]/40 px-3 py-1.5 rounded-lg backdrop-blur-sm text-sm">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>Venue TBA</span>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <a
              href="#event-details"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium text-sm hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
            >
              Get Event Updates
            </a>
          </div>
          
          {/* DJ Mickey signature */}
          <div className="mt-5 text-center opacity-70 text-xs font-cursive italic text-purple-300">
            ~ DJ Mickey ~
          </div>
        </motion.div>
        
        {/* Additional decorated elements */}
        <div className="flex justify-center gap-2 mt-4 mb-8">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-200"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-400"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;