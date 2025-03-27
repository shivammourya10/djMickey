// src/Components/NextSection.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const NextSection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      duration: 1.2,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    });
  }, []);

  return (
    <div 
      ref={contentRef}
      className="h-full w-full bg-white flex items-center justify-center min-h-screen"
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-white">Featured Content</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          This is a placeholder for your content. Add your text and components here.
        </p>
      </div>
    </div>
  );
};
export default NextSection;