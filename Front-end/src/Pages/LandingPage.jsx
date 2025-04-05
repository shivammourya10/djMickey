import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import Main_stage from "../assets/Main_Stage.jpg";
import Logo from "../assets/Logo.jpg";
import MenuPage from "./MenuPage";
import HorizontalScrollingLines from "../Components/HorizontalScrollComponent";
import YT_video_Component from "../Components/YT_video_Component";
import TRy from '../Components/TRy'
import ImageStackGallery from '../Components/ImageStackGalleryComponent';
import LoginPage from "./LoginPage";


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants for full-screen menu
  const menuVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.6,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.4,
      },
    },
  };

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <nav className="fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-auto"
                style={{
                  borderBottomLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.3)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            </motion.div>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className="text-white bg-black bg-opacity-30 hover:bg-opacity-50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              Menu
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Animated Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-hidden"
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            static
          >
            {/* Full-Screen Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
            >
              <MenuPage onClose={() => setIsMenuOpen(false)} />


            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-pink-100 font-sans">
        {/* Hero Section */}
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-0 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <img
              src={Main_stage}
              alt="Main Stage"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="relative z-10 text-white space-y-6 mt-16">
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
              Your pet's health and happiness are our top priority. Explore our
              services and make life better for your furry friends.
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
        </div>
          {/* <YT_video_Component/> */}
        {/* Footer */}
        {/* <div className="bg-gray-800 py-12 text-center text-white">
          <p className="text-lg">&copy; 2025 PetCare Haven. All rights reserved.</p>
          <p className="text-sm mt-2">Follow us on social media</p>
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;