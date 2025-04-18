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
import LoadingComponent from './Components/loading';
import ContactPage from './Pages/ContactPage.jsx';
// Styles
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Longer loading time to allow animation to play
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <LoadingComponent isLoading={isLoading} setIsLoading={setIsLoading} />
      
      {!isLoading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden"
        >
          <LandingPage /> 
          <HorizontalScrollingLines />
          <YT_video_Component className="border-2 border-white"/> 
          <TRY nextSection={<ImageStackGallery />}/>
          <Testimonials/>
          <About />
          <UpcomingEvents />
          <AboutCorporate />
          <ConsoleShareWith />
          <ContactPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;