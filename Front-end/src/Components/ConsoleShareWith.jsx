import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsoleShareWith = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All Artists' },
    { id: 'dj', label: 'DJs' },
    { id: 'vj', label: 'VJs' },
    { id: 'other', label: 'Others' }
  ];
  
  const networkArtists = [
    { id: 1, name: '#BEARDMAN', type: 'other', featured: true },
    { id: 2, name: 'MAHARAJ BAALI', type: 'other', featured: true },
    { id: 3, name: 'DJ MOHIT', type: 'dj' },
    { id: 4, name: 'DJ ELINA CHAUHAN', type: 'dj', featured: true },
    { id: 5, name: 'DJ KARAN', type: 'dj' },
    { id: 6, name: 'DJ SPELLAR', type: 'dj' },
    { id: 7, name: 'DJ LUSH', type: 'dj' },
    { id: 8, name: 'DJ SHAAN', type: 'dj', featured: true },
    { id: 9, name: 'DJ LINDA', type: 'dj' },
    { id: 10, name: 'DJ MOKSH', type: 'dj' },
    { id: 11, name: 'MRSINGH', type: 'other' },
    { id: 12, name: 'DJ SHREONZ', type: 'dj' },
    { id: 13, name: 'INDEEP BAKSHI', type: 'other', featured: true },
    { id: 14, name: 'DJ SHUBANG', type: 'dj' },
    { id: 15, name: 'DJ KROSS', type: 'dj' },
    { id: 16, name: 'I AM KRISHNA', type: 'other' },
    { id: 17, name: 'DJ CLASH', type: 'dj' },
    { id: 18, name: 'DJ KID', type: 'dj' },
    { id: 19, name: '_IFORN', type: 'other' },
    { id: 20, name: 'DJ AKANSHA POPLI', type: 'dj', featured: true },
    { id: 21, name: 'ARYAN GALA', type: 'other' },
    { id: 22, name: 'VJ INFINITY', type: 'vj' },
    { id: 23, name: 'DJ RICKIN', type: 'dj' },
    { id: 24, name: 'DJ SAM RANA', type: 'dj' },
    { id: 25, name: 'KAVYA KHURANA', type: 'other' },
    { id: 26, name: 'DJ FROZT', type: 'dj' },
    { id: 27, name: 'DJ AERREO', type: 'dj' }
  ];

  // Filter artists based on active filter and search query
  const filteredArtists = networkArtists.filter(artist => {
    const matchesFilter = activeFilter === 'all' || artist.type === activeFilter;
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Cursor blinking effect
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.02 // Faster staggering
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };
  
  const consoleGlowVariants = {
    initial: { boxShadow: '0 0 15px rgba(138, 75, 175, 0.2)' },
    animate: { 
      boxShadow: ['0 0 15px rgba(138, 75, 175, 0.2)', '0 0 25px rgba(138, 75, 175, 0.4)', '0 0 15px rgba(138, 75, 175, 0.2)'],
      transition: { 
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id='Console_Shared' className="py-8 bg-gradient-to-br from-[#0a0011] via-[#120018] to-[#18000f] text-white min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="text-[18vw] font-extrabold tracking-tighter text-gray-500 uppercase rotate-12">
          NETWORK
        </div>
      </div>
      
      {/* Subtle glow accents */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6" // Reduced margin
        >
          <h2 className="text-3xl font-bold mb-2">DJ Network Console</h2> {/* Smaller text and margin */}
          <p className="text-gray-400 max-w-2xl mx-auto text-sm"> {/* Smaller text */}
            Connect with DJ Mickey's professional network of artists and collaborators
          </p>
        </motion.div>
        
        <motion.div
          variants={consoleGlowVariants}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto bg-[#0c0010]/90 rounded-2xl border border-gray-800 shadow-lg overflow-hidden backdrop-blur-sm"
        >
          {/* Console Header - more compact */}
          <div className="bg-gradient-to-r from-gray-900 to-[#15000d] py-2 px-4 border-b border-gray-800 flex items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-2.5 h-2.5 rounded-full bg-red-500 mr-1.5"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-2.5 h-2.5 rounded-full bg-yellow-500 mr-1.5"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3"
            ></motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex-1 text-center text-xs text-gray-400 font-mono overflow-hidden"
            >
              DJ Mickey — Artist Network v1.0
            </motion.div>
          </div>
          
          {/* Console Search & Filters - more compact */}
          <div className="p-3 border-b border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="relative flex-1">
                <motion.div 
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.div>
                <motion.div 
                  className="w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ originX: 0 }}
                >
                  <input
                    type="text"
                    className="w-full py-1.5 pl-8 pr-4 bg-[#08000c] border border-gray-800 rounded-md text-xs text-gray-300 font-mono focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Search artists..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsTyping(true);
                      setTimeout(() => setIsTyping(false), 1000);
                    }}
                  />
                </motion.div>
                {searchQuery && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-mono">
                    {isTyping ? 
                      <span>typing{showCursor ? '_' : ' '}</span> : 
                      <span>found: {filteredArtists.length}</span>
                    }
                  </div>
                )}
              </div>
              
              <div className="flex space-x-1">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    whileHover={{ backgroundColor: 'rgba(90, 60, 120, 0.2)' }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-2 py-1.5 text-xs font-medium rounded-md ${
                      activeFilter === filter.id 
                        ? 'bg-gray-800 text-white' 
                        : 'text-gray-400 hover:bg-gray-800/50'
                    }`}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Console Content - more compact with condensed grid */}
          <div className="p-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <span className="mr-2">Artist Network</span>
                    <span className="text-xs py-0.5 px-2 bg-gray-800 rounded-full text-gray-400">
                      {filteredArtists.length} artists
                    </span>
                  </h3>
                 
                </div>
                
                {filteredArtists.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6 text-gray-500"
                  >
                    <svg className="w-10 h-10 mx-auto mb-2 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm">No matching artists found. Try another search.</p>
                  </motion.div>
                ) : (
                  <div className="max-h-[calc(100vh-250px)] overflow-y-auto pr-1 pb-1 custom-scrollbar">
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" // More columns, less gap
                    >
                      {filteredArtists.map((artist) => (
                        <motion.div
                          key={artist.id}
                          variants={itemVariants}
                          onMouseEnter={() => setHoveredItem(artist.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="relative bg-[#0a0011]/60 rounded-lg border border-gray-800 p-2 hover:bg-[#120018]/60 transition-colors"
                        >
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white mr-2 text-xs font-bold ${
                              artist.featured ? 'bg-gradient-to-br from-purple-900 to-pink-900' : 'bg-gradient-to-br from-gray-800 to-gray-900'
                            }`}>
                              {artist.name.charAt(0)}
                            </div>
                            <div className="flex-1 truncate">
                              <h4 className="font-medium text-white text-sm truncate flex items-center">
                                {artist.name}
                                {artist.featured && (
                                  <motion.span 
                                    className="ml-1.5 h-1.5 w-1.5 rounded-full bg-purple-500"
                                    animate={{ 
                                      scale: [1, 1.2, 1],
                                      opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  />
                                )}
                              </h4>
                              <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                                {artist.type === 'dj' ? 'DJ' : artist.type === 'vj' ? 'VJ' : 'Artist'}
                              </p>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                              whileTap={{ scale: 0.95 }}
                              className="p-1.5 rounded-full bg-gray-800/70 text-gray-300 hover:text-white transition-colors ml-1"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                              </svg>
                            </motion.button>
                          </div>
                          
                          {hoveredItem === artist.id && (
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 0.3 }}
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-transparent"
                            />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Console Footer - more compact */}
          <div className="bg-[#0a0011] border-t border-gray-800 py-2 px-3">
            <div className="flex justify-between items-center">
              <div className="text-[10px] text-gray-500 font-mono">
                <span className="text-gray-400">$</span> network.list --artists --connected
              </div>
              <motion.div 
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-[10px] text-gray-400 font-mono flex items-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                {filteredArtists.length} found
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Network stats - more compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-center" // Less margin
        >
          <p className="text-gray-400 text-sm mb-3">DJ Mickey's collaborative network by genre</p>
          <div className="flex justify-center flex-wrap gap-2">
            {['Hip-Hop', 'Bollywood', 'EDM', 'Punjabi', 'Techno', 'House', 'Trance', 'Pop'].map((genre, index) => (
              <motion.div
                key={genre}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + (index * 0.05) }} // Faster delay increment
                className="px-3 py-1 bg-gray-800/50 hover:bg-gray-800 rounded-full text-xs text-gray-300 transition-colors"
              >
                {genre}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add custom scrollbar styling */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0011;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #3f3f4680;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
    </section>
  );
};

export default ConsoleShareWith;