import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LoadingComponent = ({ isLoading, setIsLoading }) => {
  const discControls = useAnimation();
  const progressControls = useAnimation();
  const beatControls = useAnimation();
  
  useEffect(() => {
    // Start animations with reduced durations
    discControls.start({
      rotate: 360,
      transition: { 
        repeat: Infinity, 
        duration: 1.5, // Reduced from 3
        ease: "linear"
      }
    });
    
    progressControls.start({
      width: "100%",
      transition: { 
        duration: 1.4, // Reduced from 2.8
        ease: "easeInOut"
      }
    });
    
    beatControls.start({
      scale: [1, 1.2, 1],
      transition: { 
        repeat: Infinity, 
        duration: 0.5, // Reduced from 0.8
        ease: "easeInOut"
      }
    });
  }, [discControls, progressControls, beatControls]);
  
  if (!isLoading) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }} // Reduced from 0.5
    >
      {/* Common Background Component */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
          <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Spinning Vinyl Record */}
        <motion.div 
          animate={discControls}
          className="relative mb-8" // Reduced from mb-12
        >
          <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            {/* Vinyl record */}
            <circle cx="90" cy="90" r="88" fill="black" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="90" cy="90" r="85" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            
            {/* Record grooves */}
            {[...Array(24)].map((_, i) => (
              <circle 
                key={i} 
                cx="90" 
                cy="90" 
                r={15 + i * 3} 
                fill="none" 
                stroke="rgba(255,255,255,0.1)" 
                strokeWidth="0.5" 
              />
            ))}
            
            {/* Center label with gradient */}
            <circle cx="90" cy="90" r="25" fill="url(#disc-gradient)" />
            <circle cx="90" cy="90" r="5" fill="#111" />
            
            {/* Record shine effect */}
            <ellipse cx="60" cy="60" rx="50" ry="50" fill="rgba(255,255,255,0.03)" />
            
            {/* Definitions */}
            <defs>
              <linearGradient id="disc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Beat animation circles */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-purple-500/30"
            animate={beatControls}
          />
          
          <motion.div 
            className="absolute top-0 left-0 w-full h-full rounded-full border border-pink-500/20"
            initial={{ scale: 0.85 }}
            animate={{
              scale: [0.85, 1.1, 0.85],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1, // Reduced from 2
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Text & Progress bar */}
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }} // Reduced from delay: 0.3, duration: 0.5
          >
            DJ MICKEY
          </motion.h1>
          
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden mb-3">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={progressControls}
            />
          </div>
          
          {/* Audio levels animation */}
          <div className="flex justify-center gap-1 h-6 mb-2">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-purple-500/70"
                initial={{ height: 5 }}
                animate={{ 
                  height: [5, 5 + Math.random() * 20, 5],
                  opacity: [0.4, 0.9, 0.4]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.4 + Math.random() * 0.3, // Reduced from 0.8 + Math.random() * 0.5
                  ease: "easeInOut"
                }}
                style={{
                  borderRadius: "1px"
                }}
              />
            ))}
          </div>
          
          <motion.p 
            className="text-gray-400 text-sm uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }} // Reduced from delay: 0.8, duration: 0.5
          >
            Loading...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingComponent;