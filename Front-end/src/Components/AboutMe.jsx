import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import whiteTshirt from '../assets/White_tshirt.jpg';
import With_Instrument from '../assets/With_Instrument.jpg';
import On_Console_night from '../assets/On_Console_night.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [whiteTshirt, With_Instrument, On_Console_night];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <div id="About" className="relative bg-black text-white pt-16 sm:pt-20 pb-20 sm:pb-32">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
        <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 xl:w-2/5"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-square">
              <img
                src={images[currentImageIndex]}
                alt="DJ Mickey"
                className="w-full h-full object-cover transition-opacity duration-500"
                key={currentImageIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent mix-blend-multiply"></div>
              <div className="absolute top-4 left-4 text-xs sm:text-sm font-mono border border-white/30 px-2 py-1 rounded-full bg-black/50">
                DJ MICKEY
              </div>
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex gap-2 sm:gap-4">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      currentImageIndex === index ? 'bg-purple-500 scale-125' : 'bg-white/50'
                    } transition-all duration-300`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-white/10">
                <div className="text-lg sm:text-3xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-white/10">
                <div className="text-lg sm:text-3xl font-bold">100+</div>
                <div className="text-xs sm:text-sm text-gray-400">Events</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-white/10">
                <div className="text-lg sm:text-xl font-bold">Comming Soon</div>
                <div className="text-xs sm:text-sm text-gray-400">Tracks</div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 xl:w-3/5"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="mb-6 sm:mb-10 bg-gradient-to-br from-[#1a0033] to-[#330033] p-6 sm:p-8 rounded-xl border border-purple-600/30 shadow-[0_10px_30px_rgba(120,0,170,0.2)] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute -top-12 sm:-top-16 -right-12 sm:-right-16 w-24 sm:w-32 h-24 sm:h-32 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-12 sm:-bottom-16 -left-12 sm:-left-16 w-24 sm:w-32 h-24 sm:h-32 bg-pink-600/20 rounded-full blur-xl"></div>
              <div className="relative z-10 mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-wider">
                  Know Your DJ
                  <span className="block h-1 w-16 sm:w-20 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full animate-pulse"></span>
                </h3>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                THE STORY BEHIND THE MUSIC
              </h2>
              <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed italic border-l-2 border-purple-400 pl-4">
                DJ Mickey, born on 7 MARCH, 2001, in Rajasthan, grew up in a region renowned for its rich
                musical heritage. Influenced by the vibrant folk traditions of Rajasthan and the dynamic
                world of Bollywood, Mickey's early life was filled with diverse sounds that shaped his
                musical journey.
              </p>
              <div className="bg-[#2a0045]/60 p-4 sm:p-6 rounded-lg mb-4 backdrop-blur-sm border border-purple-500/20 transform hover:scale-[1.01] transition-transform shadow-inner">
                <h4 className="font-semibold text-purple-300 mb-2 sm:mb-3 flex items-center">
                  <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  MUSICAL BEGINNING
                  <span className="inline-block w-2 h-2 bg-purple-400 rounded-full ml-2"></span>
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Mickey's fascination with music began in his teens. Inspired by the energetic rhythms of
                  Punjabi music and the melodious tunes of Bollywood, he started experimenting with
                  DJ equipment gifted by his family. His initial sets, played at local events and family
                  gatherings, showcased a unique blend of traditional Rajasthani beats and modern
                  electronic music.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;