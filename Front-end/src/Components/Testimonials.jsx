import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Planner at Luxe Events",
      text: "DJ Mickey exceeded all our expectations! His ability to read the crowd and seamlessly transition between genres kept our corporate gala lively all night. Truly professional and a pleasure to work with.",
      stars: 5,
      event: "Annual Corporate Gala"
    },
    {
      name: "Raj Patel",
      role: "Wedding Client",
      text: "Our wedding day was perfect, and DJ Mickey was a huge part of that! His Bollywood and Punjabi fusion sets had everyone dancing until the venue closed. The custom playlist he created captured our personalities perfectly.",
      stars: 5,
      event: "Wedding Reception"
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director, TechSummit",
      text: "Working with DJ Mickey for our product launch was an absolute pleasure. His music selection perfectly matched our brand energy, and he was incredibly responsive to our specific requirements.",
      stars: 5,
      event: "Tech Product Launch"
    },
    {
      name: "Marcus Williams",
      role: "Club Manager, Elevate Lounge",
      text: "DJ Mickey has been a regular at our club for good reason - he consistently packs the dance floor and brings amazing energy. His original mixes and remixes are always a hit with our patrons.",
      stars: 5,
      event: "Resident DJ Performance"
    },
  ];

  // SVG patterns for testimonials (one per testimonial)
  const testimonialSvgs = [
    // Vinyl Record SVG
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="vinyl-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333ea" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <radialGradient id="record-shine" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#vinyl-gradient)" />
      <circle cx="100" cy="100" r="75" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <circle cx="100" cy="100" r="25" fill="url(#vinyl-gradient)" />
      <circle cx="100" cy="100" r="15" fill="#1a1a1a" />
      <circle cx="100" cy="100" r="5" fill="#666" />
      <circle cx="100" cy="100" r="95" fill="url(#record-shine)" />
      
      {/* Record grooves */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <circle 
          key={i} 
          cx="100" 
          cy="100" 
          r={30 + i * 5} 
          fill="none" 
          stroke="#333" 
          strokeWidth="0.5" 
          strokeOpacity="0.3" 
        />
      ))}
    </svg>,
    
    // Waveform SVG
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="#1a1a1a" rx="10" />
      
      {/* Generate sine wave pattern */}
      <path 
        d="M 0,100 
           Q 12.5,70 25,100 
           Q 37.5,130 50,100 
           Q 62.5,70 75,100 
           Q 87.5,130 100,100 
           Q 112.5,70 125,100 
           Q 137.5,130 150,100 
           Q 162.5,70 175,100 
           Q 187.5,130 200,100" 
        stroke="url(#wave-gradient)" 
        strokeWidth="4" 
        fill="none" 
      />
      
      <path 
        d="M 0,130 
           Q 12.5,100 25,130 
           Q 37.5,160 50,130 
           Q 62.5,100 75,130 
           Q 87.5,160 100,130 
           Q 112.5,100 125,130 
           Q 137.5,160 150,130 
           Q 162.5,100 175,130 
           Q 187.5,160 200,130" 
        stroke="url(#wave-gradient)" 
        strokeWidth="3" 
        fill="none" 
        opacity="0.7" 
      />
      
      <path 
        d="M 0,70 
           Q 12.5,40 25,70 
           Q 37.5,100 50,70 
           Q 62.5,40 75,70 
           Q 87.5,100 100,70 
           Q 112.5,40 125,70 
           Q 137.5,100 150,70 
           Q 162.5,40 175,70 
           Q 187.5,100 200,70" 
        stroke="url(#wave-gradient)" 
        strokeWidth="3" 
        fill="none" 
        opacity="0.7" 
      />
      
      {/* Sound bars */}
      {[...Array(20)].map((_, i) => (
        <rect 
          key={i} 
          x={10 + i * 10} 
          y={100 - Math.abs(Math.sin(i * 0.5) * 50)}
          width="5" 
          height={Math.abs(Math.sin(i * 0.5) * 100)}
          rx="2"
          fill="url(#wave-gradient)" 
          opacity={0.2 + Math.abs(Math.sin(i * 0.5)) * 0.8}
        />
      ))}
    </svg>,
    
    // Headphones SVG
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="headphones-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="#1a1a1a" rx="10" />
      
      {/* Headphones */}
      <path 
        d="M 50,140 
           V 100 
           C 50,72 72,50 100,50 
           C 128,50 150,72 150,100 
           V 140" 
        stroke="url(#headphones-gradient)" 
        strokeWidth="8" 
        fill="none" 
        strokeLinecap="round" 
      />
      
      {/* Left ear cup */}
      <path 
        d="M 50,100 
           C 50,100 35,100 35,120 
           C 35,140 35,140 35,140 
           C 35,150 45,160 55,160 
           C 65,160 75,150 75,140 
           C 75,140 75,140 75,120 
           C 75,100 50,100 50,100" 
        fill="url(#headphones-gradient)" 
      />
      
      {/* Right ear cup */}
      <path 
        d="M 150,100 
           C 150,100 165,100 165,120 
           C 165,140 165,140 165,140 
           C 165,150 155,160 145,160 
           C 135,160 125,150 125,140 
           C 125,140 125,140 125,120 
           C 125,100 150,100 150,100" 
        fill="url(#headphones-gradient)" 
      />
      
      {/* Sound waves */}
      <path 
        d="M 85,120 Q 100,100 115,120" 
        stroke="white" 
        strokeWidth="2" 
        fill="none" 
        opacity="0.5" 
      />
      <path 
        d="M 80,110 Q 100,80 120,110" 
        stroke="white" 
        strokeWidth="2" 
        fill="none" 
        opacity="0.3" 
      />
      <path 
        d="M 75,100 Q 100,60 125,100" 
        stroke="white" 
        strokeWidth="2" 
        fill="none" 
        opacity="0.2" 
      />
    </svg>,
    
    // DJ Mixer SVG
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="mixer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="#1a1a1a" rx="10" />
      
      {/* DJ Mixer */}
      <rect x="40" y="60" width="120" height="80" rx="5" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      
      {/* Mixer controls */}
      <circle cx="65" cy="85" r="15" fill="url(#mixer-gradient)" strokeWidth="2" stroke="#444" />
      <circle cx="65" cy="85" r="5" fill="#1a1a1a" />
      
      <circle cx="135" cy="85" r="15" fill="url(#mixer-gradient)" strokeWidth="2" stroke="#444" />
      <circle cx="135" cy="85" r="5" fill="#1a1a1a" />
      
      {/* Faders */}
      <rect x="90" y="70" width="20" height="60" rx="3" fill="#444" />
      <rect x="95" y="80" width="10" height="20" rx="2" fill="url(#mixer-gradient)" />
      
      {/* EQ knobs */}
      {[0, 1, 2].map((i) => (
        <React.Fragment key={i}>
          <circle cx={65 + i * 35} cy="125" r="8" fill="#333" stroke="#444" strokeWidth="1" />
          <line x1={65 + i * 35} y1="125" x2={65 + i * 35} y2="118" stroke="url(#mixer-gradient)" strokeWidth="2" />
        </React.Fragment>
      ))}
      
      {/* VU Meters */}
      <rect x="45" y="105" width="40" height="10" rx="2" fill="#222" stroke="#444" strokeWidth="0.5" />
      <rect x="48" y="107" width={30 * 0.8} height="6" rx="1" fill="url(#mixer-gradient)" />
      
      <rect x="115" y="105" width="40" height="10" rx="2" fill="#222" stroke="#444" strokeWidth="0.5" />
      <rect x="118" y="107" width={30 * 0.6} height="6" rx="1" fill="url(#mixer-gradient)" />
    </svg>
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 bg-clip-text text-transparent">Client Experiences</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what clients have to say about their experiences with DJ Mickey.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-20 px-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all transform hover:scale-110"
            >
              <FaArrowRight />
            </button>
          </div>
          
          <div className="flex relative overflow-hidden max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : activeIndex > index ? -100 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative aspect-square w-full max-w-xs mx-auto">
                      {/* SVG graphic instead of image */}
                      <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 bg-black/40 backdrop-blur-sm p-4">
                        {testimonialSvgs[index]}
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 bg-purple-600 p-4 rounded-xl shadow-lg">
                        <FaQuoteLeft className="text-white text-xl" />
                      </div>
                      
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
                      <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-gray-100 italic">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-purple-300">{testimonial.role}</p>
                        </div>
                        
                        <div className="px-4 py-2 bg-purple-900/40 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-300 text-sm">
                          {testimonial.event}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-purple-500 w-10' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;