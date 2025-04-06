import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutCorporate from './Components/AboutCorporate.jsx';
import Testimonials from './Components/Testimonials.jsx';
// Component imports
import LandingPage from './Pages/LandingPage';
import MenuPage from './Pages/MenuPage';
import HorizontalScrollingLines from './Components/HorizontalScrollComponent';
import YT_video_Component from './Components/YT_video_Component';
import TRY from './Components/TRy';
import ImageStackGallery from './Components/ImageStackGalleryComponent';
import About from './Components/AboutMe.jsx';
import UpcomingEvents from './Components/UpcomingEvents.jsx';
import ConsoleShareWith from './Components/ConsoleShareWith.jsx';
// Styles
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-3xl font-bold"
          >
            DJ Mickey
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <LandingPage /> 
          <HorizontalScrollingLines />
             <YT_video_Component className = "border-2 border-white"/> 
          <TRY nextSection={<ImageStackGallery />}/>
           <Testimonials/>
           <About />
           <UpcomingEvents />
            <AboutCorporate />
            <ConsoleShareWith />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;