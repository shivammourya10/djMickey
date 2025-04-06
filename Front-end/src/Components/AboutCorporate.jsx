import React from 'react';
import { motion } from 'framer-motion';

const AboutCorporate = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0011] via-[#120018] to-[#18000f] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-3 pointer-events-none overflow-hidden">
        <div className="text-[20vw] font-extrabold tracking-tighter text-gray-900 uppercase rotate-12">
          MICKEY
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute -top-20 -left-20 w-64 h-64 text-purple-900/10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
        <svg className="absolute -bottom-20 -right-20 w-72 h-72 text-gray-700/10 rotate-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3v12.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V5.618l-9 2.909V17.5c0 1.381-1.567 2.5-3.5 2.5S3 18.881 3 17.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V7L21 3z"/>
        </svg>
      </div>
      
      {/* Glowing accent elements - darkened */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-800/15 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-200 via-purple-200 to-gray-100 bg-clip-text text-transparent">
            Corporate Entertainment Solutions
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-gray-600 to-purple-800 mx-auto my-4"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Elevate your corporate events with DJ Mickey's professional entertainment services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service Card 1 */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#0c0010]/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-[0_8px_20px_rgba(20,0,30,0.3)] transition-all group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-purple-900 w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Corporate Events</h3>
            <p className="text-gray-300 mb-4">
              From annual galas to product launches, create memorable experiences with custom audio-visual setups and professional DJ services.
            </p>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0c0010]/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-[0_8px_20px_rgba(20,0,30,0.3)] transition-all group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-purple-900 w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Award Ceremonies</h3>
            <p className="text-gray-300 mb-4">
              Add prestige to your awards night with professional sound, lighting, and entertainment that keeps the celebration flowing.
            </p>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0c0010]/80 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:shadow-[0_8px_20px_rgba(20,0,30,0.3)] transition-all group"
          >
            <div className="bg-gradient-to-br from-gray-800 to-purple-900 w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Team Building</h3>
            <p className="text-gray-300 mb-4">
              Foster team spirit with interactive music experiences, DJ workshops, and custom entertainment solutions for your team events.
            </p>
            <a href="#contact" className="text-gray-300 hover:text-white font-medium inline-flex items-center">
              Learn More
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Featured Testimonial */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#0a0011] to-[#15000d] p-8 rounded-2xl border border-gray-700 shadow-[0_10px_30px_rgba(10,0,15,0.3)] backdrop-blur-sm relative overflow-hidden mb-16"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-800/15 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-gray-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl text-gray-200 italic mb-6">
              "DJ Mickey transformed our annual corporate gala into an unforgettable experience. His ability to read the room and transition between sophisticated dinner music and high-energy dance sets was remarkable. Everyone from executives to new hires had a wonderful time."
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-purple-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                AB
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-white">Amanda Brzezinski</h4>
                <p className="text-gray-400 text-sm">Events Director, TechSphere Inc.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your corporate event?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact DJ Mickey now to discuss your specific requirements and get a tailored entertainment package for your corporate needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-gray-800 to-purple-900 rounded-full text-white font-medium text-lg hover:from-gray-900 hover:to-purple-950 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-100"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse delay-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse delay-400"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500 animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default AboutCorporate;