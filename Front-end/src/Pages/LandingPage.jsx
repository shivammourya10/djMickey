
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Main_stage from '../assets/Main_Stage.jpg';
import Logo from '../assets/Logo.jpg';
import SplashCursor from '../Blocks/Animations/SplashCursor/SplashCursor';

import backstageDjImage from '../assets/BackStage_DJ.png';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (<div>
    
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-pink-100 font-sans">
{/* <SplashCursor/> */}


        
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full z-0 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <img src={Main_stage} alt="Pet Care" className="object-cover w-full h-full" />
        </motion.div>

        <div className="relative z-10 text-white space-y-6">
          <motion.h1
            className="text-6xl font-extrabold drop-shadow-md mb-6"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            Welcome to PetCare Haven
          </motion.h1>

          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            Your pet's health and happiness are our top priority. Explore our services and make life better for your furry friends.
          </motion.p>

          <motion.button
            className="bg-pink-600 text-white py-3 px-8 rounded-lg shadow-lg text-lg font-semibold hover:bg-pink-700 transition duration-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Animated Down Arrow */}
        <motion.div 
          className="absolute bottom-10 cursor-pointer"
          onClick={scrollToServices}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center text-white">
            <p className="text-sm mb-2">Explore More</p>
            <svg 
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
      


        {/* Footer */}
      <div className="bg-gray-800 py-12 text-center text-white">
        <p className="text-lg">&copy; 2025 PetCare Haven. All rights reserved.</p>
        <p className="text-sm mt-2">Follow us on social media</p>
      </div>
    </div>

    </div>
  );
};

export default LandingPage;
