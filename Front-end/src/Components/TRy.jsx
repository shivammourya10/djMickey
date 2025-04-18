import React, { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define styles outside component to prevent recreation on each render
const styles = {
  djText: {
    fontSize: "clamp(12rem, 22vw, 22rem)",
    color: "transparent",
    WebkitTextStroke: "clamp(2px, 0.8vw, 8px) #333",
    textShadow: "0 0 35px rgba(0,0,0,0.2)",
    fontFamily: "'Audiowide', 'Orbitron', sans-serif",
    transform: "skew(-5deg)",
    letterSpacing: "-0.05em",
  },
  mickeyText: {
    fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
    color: "#333",
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: "800",
    letterSpacing: "0.35em",
    textShadow: "0 0 15px rgba(0,0,0,0.15)",
  },
  circle: {
    zIndex: 10,
    width: "10vw",
    height: "10vw",
    boxShadow: "0 0 30px rgba(0,0,0,0.3)",
    willChange: "transform, opacity",
  }
};

const TRy = memo(({ nextSection }) => {
  // Group related refs
  const refs = {
    svgContainer: useRef(null),
    circle: useRef(null),
    nextContainer: useRef(null),
    letterD: useRef(null),
    letterJ: useRef(null),
    mickeyText: useRef(null),
    pattern: useRef(null),
    djContainer: useRef(null)
  };

  useEffect(() => {
    // Ensure GSAP and ScrollTrigger are registered
    gsap.registerPlugin(ScrollTrigger);

    // Validate essential refs
    const { svgContainer, circle, nextContainer } = refs;
    if (!svgContainer.current || !circle.current || !nextContainer.current) {
      console.error("Essential refs are not attached to valid DOM elements.");
      return;
    }

    // Create and store all animations to clean up later
    const animations = [];
    
    // Throttled pattern rotation (slowed down to save resources)
    animations.push(
      gsap.to(refs.pattern.current, {
        rotate: 360,
        duration: 240, // Doubled duration for less CPU usage
        repeat: -1,
        ease: "linear",
      })
    );

    // Initial states setup - using will-change for better GPU acceleration
    gsap.set([refs.letterD.current, refs.letterJ.current], {
      opacity: 1,
      scale: 1,
      transformOrigin: "center",
      zIndex: 5,
    });

    gsap.set(refs.mickeyText.current, {
      opacity: 0,
      scale: 0.5,
      transformOrigin: "center",
      zIndex: 5,
    });

    gsap.set(refs.circle.current, {
      yPercent: 100,
      scale: 0.1,
      transformOrigin: "center",
      opacity: 1,
    });

    // Main scroll animation timeline with optimized settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refs.svgContainer.current,
        start: "top top",
        end: "+=200%",
        scrub: 1.5, // Increased scrub value for smoother animation
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true, // Optimize for fast scrolling
        preventOverlaps: true,
      },
      defaults: { ease: "power2.inOut" },
    });

    // Animation sequence - optimized by reducing number of simultaneous animations
    tl.to(refs.circle.current, {
      yPercent: 0,
      scale: 0.2,
      duration: 1.5,
      force3D: true, // Force 3D transforms for GPU acceleration
    }, 0)
    .to([refs.letterD.current, refs.letterJ.current], {
      scale: 1.1,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      force3D: true,
    }, ">-0.7")
    .to(refs.mickeyText.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      force3D: true,
    }, ">-0.3")
    .to(refs.circle.current, {
      scale: 10,
      opacity: 0,
      duration: 1.5,
      force3D: true,
    }, ">-0.2")
    .to([refs.letterD.current, refs.letterJ.current, refs.mickeyText.current], {
      zIndex: 15,
      scale: 1.5,
      duration: 0.5,
      webkitTextStrokeColor: "#333",
      force3D: true,
    }, "<0.3")
    .to([refs.letterD.current, refs.letterJ.current, refs.mickeyText.current], {
      opacity: 0,
      scale: 2.5,
      duration: 1,
      force3D: true,
    }, ">-0.3")
    .fromTo(refs.nextContainer.current, {
      clipPath: "circle(10% at center)",
      pointerEvents: "none",
    }, {
      clipPath: "circle(150% at center)",
      pointerEvents: "auto",
      duration: 1.5,
      force3D: true,
    }, "<");

    // Optimize by pausing background animations when not in view
    const pauseBackgroundObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animations.forEach(anim => anim.play());
        } else {
          animations.forEach(anim => anim.pause());
        }
      },
      { threshold: 0.1 }
    );
    
    pauseBackgroundObserver.observe(svgContainer.current);

    // Comprehensive clean up function
    return () => {
      // Kill all animations
      animations.forEach(anim => anim.kill());
      tl.kill();
      
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === svgContainer.current) {
          trigger.kill();
        }
      });
      
      // Disconnect observer
      pauseBackgroundObserver.disconnect();
    };
  }, []);

  // Simplified SVG pattern with fewer elements
  const renderSVGPattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="soundPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Reduced complexity - only two circles instead of many */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#333" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#333" strokeWidth="1" />
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#soundPattern)" />
    </svg>
  );

  return (
    <section
      ref={refs.svgContainer}
      className="relative h-screen w-screen overflow-hidden bg-white will-change-transform"
      aria-label="DJ Mickey Animation Section"
    >
      {/* SVG Pattern Background - reduced opacity for better performance */}
      <div className="absolute inset-0 opacity-5" ref={refs.pattern}>
        {renderSVGPattern()}
      </div>

      {/* Next Section */}
      <div
        ref={refs.nextContainer}
        className="absolute inset-0 flex items-center justify-center bg-gray-400 will-change-transform"
        style={{ zIndex: 20 }}
      >
        {nextSection}
      </div>

      {/* DJ Logo Container */}
      <div 
        ref={refs.djContainer}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 w-full"
      >
        <div className="flex items-center justify-center will-change-transform">
          <div ref={refs.letterD} className="relative font-bold" style={styles.djText}>
            D
          </div>
          <div ref={refs.letterJ} className="relative font-bold ml-8" style={styles.djText}>
            J
          </div>
        </div>
      </div>

      {/* MICKEY Text */}
      <div
        ref={refs.mickeyText}
        className="absolute top-[75%] left-1/2 transform -translate-x-1/2 text-center will-change-transform"
        style={styles.mickeyText}
      >
        MICKEY
      </div>

      {/* Circle */}
      <div
        ref={refs.circle}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-black will-change-transform"
        style={styles.circle}
      ></div>
    </section>
  );
});

TRy.displayName = "TRy";

export default TRy;
