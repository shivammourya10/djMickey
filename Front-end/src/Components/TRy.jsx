import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TRy = ({ nextSection }) => {
  const svgContainer = useRef(null);
  const circleRef = useRef(null);
  const nextContainer = useRef(null);
  const letterDRef = useRef(null);
  const letterJRef = useRef(null);
  const mickeyTextRef = useRef(null);
  const patternRef = useRef(null);
  const djContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Validate all refs before proceeding
    if (!svgContainer.current || !circleRef.current || !nextContainer.current) {
      console.error("One or more refs are not attached to valid DOM elements.");
      return;
    }

    // Animate the SVG pattern
    gsap.to(patternRef.current, {
      rotate: 360,
      duration: 120,
      repeat: -1,
      ease: "linear",
    });

    // Make DJ visible immediately - no fade in needed
    gsap.set([letterDRef.current, letterJRef.current], {
      opacity: 1,
      scale: 1,
      transformOrigin: "center",
      zIndex: 5,
    });

    // Only MICKEY text starts invisible
    gsap.set(mickeyTextRef.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center",
      zIndex: 5,
    });

    // Initial position of the circle
    gsap.set(circleRef.current, {
      yPercent: 100,
      scale: 0.1,
      transformOrigin: "center",
      opacity: 1,
    });

    // Timeline for scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgContainer.current,
        start: "top top",
        end: "+=200%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "power2.inOut" },
    });

    // Animate the circle moving to the center and scaling up
    tl.to(circleRef.current, {
      yPercent: 0,
      scale: 0.2,
      duration: 1.5,
    }, 0)
    
    // Pulse effect for DJ letters (since they're already visible)
    .to([letterDRef.current, letterJRef.current], {
      scale: 1.1,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    }, ">-0.7")
    
    // Then fade in MICKEY text
    .to(mickeyTextRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
    }, ">-0.3")
    
    // Scale up circle to cover screen
    .to(circleRef.current, {
      scale: 10,
      opacity: 0,
      duration: 1.5,
    }, ">-0.2")
    
    // Increase z-index of letters to bring them above the circle
    .to([letterDRef.current, letterJRef.current, mickeyTextRef.current], {
      zIndex: 15,
      scale: 1.5,
      duration: 0.5,
      webkitTextStrokeColor: "#333", // Darker stroke for contrast against white
    }, "<0.3")
    
    // Fade out letters as next section fades in
    .to([letterDRef.current, letterJRef.current, mickeyTextRef.current], {
      opacity: 0,
      scale: 2.5,
      duration: 1,
    }, ">-0.3")
    
    // Reveal next section
    .fromTo(nextContainer.current, {
      clipPath: "circle(10% at center)",
      pointerEvents: "none",
    }, {
      clipPath: "circle(150% at center)",
      pointerEvents: "auto",
      duration: 1.5,
    }, "<");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section
      ref={svgContainer}
      className="relative h-screen w-screen overflow-hidden bg-white"
    >
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 opacity-10" ref={patternRef}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="soundPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#333" strokeWidth="1" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#333" strokeWidth="1" />
            <circle cx="50" cy="50" r="10" fill="none" stroke="#333" strokeWidth="1" />
            
            {/* Audio wave elements */}
            <path d="M10,50 Q25,30 40,50 Q55,70 70,50 Q85,30 100,50" fill="none" stroke="#333" strokeWidth="1" />
            <path d="M10,70 Q25,50 40,70 Q55,90 70,70 Q85,50 100,70" fill="none" stroke="#333" strokeWidth="1" />
            <path d="M10,30 Q25,10 40,30 Q55,50 70,30 Q85,10 100,30" fill="none" stroke="#333" strokeWidth="1" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#soundPattern)" />
        </svg>
      </div>

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

      {/* DJ Logo Container - CENTERED ON BOTH AXES & LARGER */}
      <div 
        ref={djContainerRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 w-full"
      >
        <div className="flex items-center justify-center">
          {/* Letter D - MEGA SIZE */}
          <div
            ref={letterDRef}
            className="relative font-bold"
            style={{
              fontSize: "22rem", // Increased from 18rem to 22rem
              color: "transparent",
              WebkitTextStroke: "8px #333", // Thicker stroke for larger size
              textShadow: "0 0 35px rgba(0,0,0,0.2)",
              fontFamily: "'Audiowide', 'Orbitron', sans-serif",
              transform: "skew(-5deg)",
              letterSpacing: "-0.05em",
            }}
          >
            D
          </div>

          {/* Letter J - MEGA SIZE */}
          <div
            ref={letterJRef}
            className="relative font-bold ml-8" // Increased spacing between letters
            style={{
              fontSize: "22rem", // Increased from 18rem to 22rem
              color: "transparent",
              WebkitTextStroke: "8px #333", // Thicker stroke for larger size
              textShadow: "0 0 35px rgba(0,0,0,0.2)",
              fontFamily: "'Audiowide', 'Orbitron', sans-serif",
              transform: "skew(-5deg)",
              letterSpacing: "-0.05em",
            }}
          >
            J
          </div>
        </div>
      </div>

      {/* MICKEY Text - REPOSITIONED & LARGER */}
      <div
        ref={mickeyTextRef}
        className="absolute top-[75%] left-1/2 transform -translate-x-1/2 text-center"
        style={{
          fontSize: "5.5rem", // Increased from 4.5rem to 5.5rem
          color: "#333",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "800",
          letterSpacing: "0.35em",
          textShadow: "0 0 15px rgba(0,0,0,0.15)",
        }}
      >
        MICKEY
      </div>

      {/* Circle - Now black for contrast against white */}
      <div
        ref={circleRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-black"
        style={{
          zIndex: 10,
          width: "10vw",
          height: "10vw",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
        }}
      ></div>
    </section>
  );
};

export default TRy;