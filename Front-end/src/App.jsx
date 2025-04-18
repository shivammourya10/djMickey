import React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingComponent from './Components/loading';
import './App.css';

// Lazy-loaded components
const LandingPage = React.lazy(() => import('./Pages/LandingPage'));
const HorizontalScrollingLines = React.lazy(() => import('./Components/HorizontalScrollComponent'));
const YT_video_Component = React.lazy(() => import('./Components/YT_video_Component'));
const TRY = React.lazy(() => import('./Components/TRy'));
const ImageStackGallery = React.lazy(() => import('./Components/ImageStackGalleryComponent'));
const About = React.lazy(() => import('./Components/AboutMe.jsx'));
const Testimonials = React.lazy(() => import('./Components/Testimonials.jsx'));
const UpcomingEvents = React.lazy(() => import('./Components/UpcomingEvents.jsx'));
const AboutCorporate = React.lazy(() => import('./Components/AboutCorporate.jsx'));
const ConsoleShareWith = React.lazy(() => import('./Components/ConsoleShareWith.jsx'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage.jsx'));

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
          <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
            <LandingPage />
            <HorizontalScrollingLines />
            <YT_video_Component className="border-2 border-white" />
            <TRY nextSection={<ImageStackGallery />} />
            <About />
            <Testimonials />
            <UpcomingEvents />
            <AboutCorporate />
            <ConsoleShareWith />
            <ContactPage />
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;