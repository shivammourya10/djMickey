import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import whiteTshirt from '../assets/White_tshirt.jpg';
import With_Instrument from '../assets/With_Instrument.jpg';
import On_Console_night from '../assets/On_Console_night.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  // Add state for image rotation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [whiteTshirt, With_Instrument, On_Console_night];

  // Set up image rotation interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
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
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
    }
  };

  return (
    <div className="relative bg-black text-white pt-20 pb-32">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
        <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Changed to center the content section both horizontally and vertically */}
        <div className="flex flex-row items-center justify-center min-h-[80vh] gap-8">
          <motion.div
            className="w-[38%] relative mt-[-2rem]"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-square">
              {/* Updated to use rotating images with fade transition */}
              <img
                src={images[currentImageIndex]}
                alt="DJ Mickey"
                className="w-full h-full object-cover transition-opacity duration-500"
                key={currentImageIndex}
              />

              {/* Overlay with noise pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent mix-blend-multiply"></div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 text-sm font-mono border border-white/30 px-2 py-1 rounded-full bg-black/50">
                DJ MICKEY
              </div>

              {/* Image indicators */}
              <div className="absolute bottom-8 right-8 flex gap-4">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-purple-500 scale-125' : 'bg-white/50'} transition-all duration-300`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Stats boxes */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm text-gray-400">Events</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-gray-400">Tracks</div>
              </div>
            </div>
          </motion.div>

          <div className="relative w-3/5">
            {/* Decorative SVGs positioned around the content */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="absolute top-0 -left-20 w-40 h-40 text-purple-600/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 18V5l12-2v13M9 18c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm12-2c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
              </svg>
              <svg className="absolute bottom-20 -right-16 w-32 h-32 text-pink-600/10 rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
              <svg className="absolute top-1/3 -right-10 w-24 h-24 text-blue-600/10 -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-8 14h2v-4h4v-2h-4V7h-2v4H7v2h4v4z"/>
              </svg>
              <svg className="absolute bottom-0 left-1/4 w-36 h-36 text-purple-600/10 rotate-45" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3v12.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V5.618l-9 2.909V17.5c0 1.381-1.567 2.5-3.5 2.5S3 18.881 3 17.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V7L21 3z"/>
              </svg>
            </div>
            
            <motion.div
              className="w-full relative z-10"
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              {/* DJ Mickey Bio - New Section with enhanced styling */}
              <div className="mb-10 bg-gradient-to-br from-[#1a0033] to-[#330033] p-8 rounded-xl border border-purple-600/30 shadow-[0_10px_30px_rgba(120,0,170,0.2)] backdrop-blur-sm relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-pink-600/20 rounded-full blur-xl"></div>

                {/* Section header with animated underline */}
                <div className="relative z-10 mb-8">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                    Know Your DJ
                    <span className="block h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full animate-pulse"></span>
                  </h3>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                  THE STORY BEHIND THE MUSIC
                </h2>

                <p className="text-gray-200 mb-6 leading-relaxed italic border-l-2 border-purple-400 pl-4">
                  DJ Mickey, born on 7 MARCH, 2001, in Rajasthan, grew up in a region renowned for its rich
                  musical heritage. Influenced by the vibrant folk traditions of Rajasthan and the dynamic
                  world of Bollywood, Mickey's early life was filled with diverse sounds that shaped his
                  musical journey.
                </p>

                <div className="bg-[#2a0045]/60 p-6 rounded-lg mb-4 backdrop-blur-sm border border-purple-500/20 transform hover:scale-[1.01] transition-transform shadow-inner">
                  <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
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
              {/* Social Media */}
              {/* <div className="mt-10 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div> */}

              {/* Call to action */}
              {/* <div className="mt-10 flex justify-center">
                <a
                  href="#booking"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Book a Show
                </a>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;