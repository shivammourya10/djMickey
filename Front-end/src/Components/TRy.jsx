// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const TRy = ({ nextSection }) => {
//   const svgContainer = useRef(null);
//   const nextContainer = useRef(null);
//   const circleRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
    
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: svgContainer.current,
//         start: "top top",
//         end: "+=200%",
//         scrub: 1.2,
//         pin: true,
//         anticipatePin: 1
//       }
//     });

//     tl.to(circleRef.current, {
//       scale: 5,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power2.inOut"
//     })
//     .fromTo(nextContainer.current, 
//       { scale: 0.8, opacity: 0 },
//       { 
//         scale: 1,
//         opacity: 1,
//         duration: 1.5,
//         ease: "power2.inOut"
//       },
//       0
//     );

//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach(instance => instance.kill());
//     };
//   }, []);

//   return (
//     <section 
//       ref={svgContainer} 
//       className="relative h-screen w-full overflow-hidden bg-black"
//     >
//       {/* Next Section Container */}
//       <div 
//         ref={nextContainer}
//         className="absolute inset-0"
//         style={{ 
//           opacity: 0,
//           transform: 'scale(0.8)',
//           transformOrigin: 'center',
//           pointerEvents: 'none',
//           zIndex: 20 // Ensure above SVG layer
//         }}
//       >
//         {nextSection}
//       </div>

//       {/* SVG Container */}
//       <div 
//         ref={circleRef}
//         className="absolute inset-0 flex items-center justify-center"
//         style={{ 
//           zIndex: 10,
//           transformOrigin: 'center',
//           willChange: 'transform, opacity',
//           overflow: 'hidden' // Prevent overflow
//         }}
//       >
//         <svg
//           className="w-64 h-64 origin-center"
//           viewBox="0 0 100 100"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="50" cy="50" r="40" fill="black" strokeWidth="6" stroke="white" />
//         </svg>
//       </div>
//     </section>
//   );
// };
// export default TRy;
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const TRy = ({ nextSection }) => {
//   const svgContainer = useRef(null);
//   const circleRef = useRef(null); // Single reference for the circle
//   const nextContainer = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Ensure refs are valid before proceeding
//     if (!circleRef.current || !nextContainer.current) {
//       console.error("Refs are not attached to valid DOM elements.");
//       return;
//     }

//     // Timeline for scroll-triggered animations
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: svgContainer.current,
//         start: "top top", // Animation starts when the top of the container hits the viewport
//         end: "+=200%", // Extend the animation over 200% of the viewport height
//         scrub: 1.2, // Smooth scrubbing effect
//         pin: true, // Pin the section while scrolling through the animation
//         anticipatePin: 1,
//       },
//     });

//     // Initial position of the circle (bottom of the screen)
//     gsap.set(circleRef.current, {
//       yPercent: 100, // Start at the bottom of the screen
//       scale: 0.1, // Small size initially (10% of the screen width)
//       transformOrigin: "center", // Ensure scaling happens from the center
//       opacity: 1, // Fully visible initially
//     });

//     // Animate the circle moving to the center and scaling up slightly
//     tl.to(
//       circleRef.current,
//       {
//         yPercent: 0, // Move to the center of the screen
//         scale: 0.2, // Slightly increase size (from 10% to 20% of screen width)
//         duration: 1.5, // Synchronized with movement
//         ease: "power2.inOut",
//       },
//       0 // Start immediately
//     )
//       .to(
//         circleRef.current,
//         {
//           scale: 10, // Scale up the circle to cover the entire screen
//           opacity: 0, // Fade out the circle
//           duration: 1.5, // Duration of the scaling effect
//           ease: "power2.inOut",
//         },
//         ">-0.5" // Overlap with the previous animation slightly
//       )
//       .fromTo(
//         nextContainer.current,
//         {
//           clipPath: "circle(10% at center)", // Circular reveal starting small
//           pointerEvents: "none", // Disable pointer events during animation
//         },
//         {
//           clipPath: "circle(150% at center)", // Circular reveal expanding
//           pointerEvents: "auto", // Re-enable pointer events after animation
//           duration: 1.5, // Match the duration of the scaling effect
//           ease: "power2.inOut",
//         },
//         "<" // Start at the same time as the circle scaling animation
//       );

//     // Cleanup function to kill the timeline and ScrollTrigger instances
//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach((instance) => instance.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={svgContainer}
//       className="relative h-screen w-screen overflow-hidden bg-black"
//     >
//       {/* Next Section */}
//       <div
//         ref={nextContainer}
//         className="absolute inset-0 flex items-center justify-center bg-gray-400"
//         style={{
//           zIndex: 20,
//         }}
//       >
//         {nextSection}
//       </div>

//       {/* White Circle */}
//       <div
//         ref={circleRef}
//         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-white"
//         style={{
//           zIndex: 10,
//           width: "10vw", // Initial size (10% of the screen width)
//           height: "10vw", // Initial size (10% of the screen width)
//         }}
//       ></div>
//     </section>
//   );
// };

// export default TRy;
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TRy = ({ nextSection }) => {
  const svgContainer = useRef(null);
  const circleRef = useRef(null); // Single reference for the circle
  const nextContainer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Validate all refs before proceeding
    if (!svgContainer.current || !circleRef.current || !nextContainer.current) {
      console.error("One or more refs are not attached to valid DOM elements.");
      return;
    }

    // Timeline for scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgContainer.current,
        start: "top top", // Animation starts when the top of the container hits the viewport
        end: "+=200%", // Extend the animation over 200% of the viewport height
        scrub: 1.2, // Smooth scrubbing effect
        pin: true, // Pin the section while scrolling through the animation
        anticipatePin: 1,
      },
      defaults: { ease: "power2.inOut" }, // Default easing for all animations
    });

    // Initial position of the circle (bottom of the screen)
    gsap.set(circleRef.current, {
      yPercent: 100, // Start at the bottom of the screen
      scale: 0.1, // Small size initially (10% of the screen width)
      transformOrigin: "center", // Ensure scaling happens from the center
      opacity: 1, // Fully visible initially
    });

    // Animate the circle moving to the center and scaling up slightly
    tl.to(
      circleRef.current,
      {
        yPercent: 0, // Move to the center of the screen
        scale: 0.2, // Slightly increase size (from 10% to 20% of screen width)
        duration: 1.5, // Synchronized with movement
      },
      0 // Start immediately
    )
      .to(
        circleRef.current,
        {
          scale: 10, // Scale up the circle to cover the entire screen
          opacity: 0, // Fade out the circle
          duration: 1.5, // Duration of the scaling effect
        },
        ">-0.5" // Overlap with the previous animation slightly
      )
      .fromTo(
        nextContainer.current,
        {
          clipPath: "circle(10% at center)", // Circular reveal starting small
          pointerEvents: "none", // Disable pointer events during animation
        },
        {
          clipPath: "circle(150% at center)", // Circular reveal expanding
          pointerEvents: "auto", // Re-enable pointer events after animation
          duration: 1.5, // Match the duration of the scaling effect
        },
        "<" // Start at the same time as the circle scaling animation
      );

    // Cleanup function to kill the timeline and ScrollTrigger instances
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section
      ref={svgContainer}
      className="relative h-screen w-screen overflow-hidden bg-black"
    >
      {/* Next Section */}
      <div
        ref={nextContainer}
        className="absolute inset-0 flex items-center justify-center bg-gray-400"
        style={{
          zIndex: 20,
        }}
      >
        {nextSection}
      </div>

      {/* White Circle */}
      <div
        ref={circleRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-white"
        style={{
          zIndex: 10,
          width: "10vw", // Initial size (10% of the screen width)
          height: "10vw", // Initial size (10% of the screen width)
        }}
      ></div>
    </section>
  );
};

export default TRy;