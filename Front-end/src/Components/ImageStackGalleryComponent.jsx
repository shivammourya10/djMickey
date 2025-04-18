import { useEffect, useRef, useState, useCallback, memo } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import Blue_motionblur from "../assets/Blue_motionblur.jpg";
import Brown_jacket_pink_bg from "../assets/Brown_jacket_pink_bg.jpg";
import white_red_jecket from "../assets/white_red_jacket.jpg";

// Reduce number of images for better performance
const IMGS = [
  Blue_motionblur,
  Brown_jacket_pink_bg,
  white_red_jecket,
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1000&auto=format&fit=crop"
];

// Vertical Gallery Text & Line Component (memoized)
const VerticalGalleryTextComponent = memo(() => (
  <div className="absolute left-2 top-1/6 flex flex-col items-center mt-10 z-10">
    <span className="mb-5 mt-40text-lg text-gray-400 font-bold tracking-widest rotate-270">IMAGE GALLERY</span>
    <motion.div
      initial={{ height: 10 }}
      animate={{ height: 400 }}
      transition={{ duration: 5 }}
      className="w-[1px] mt-2 bg-gray-700"
    />
  </div>
));

// Rolling Gallery Component (memoized)
const RollingGallery = memo(({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;
  const galleryRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );
  
  useEffect(() => {
    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsScreenSizeSm(window.innerWidth <= 640);
      }, 100);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Reduced size for better performance
  const cylinderWidth = isScreenSizeSm ? 1000 : 1600;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.15;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = useCallback((startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 30, // Increased duration for smoother rotation
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    if (autoplay && isInView) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay, isInView, rotation, startInfiniteSpin, controls]);

  useEffect(() => {
    // Create intersection observer to pause animations when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay && isInView) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover && isInView) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div ref={galleryRef} className="relative h-[650px] w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background: "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
        }}
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[1.8%] [backface-visibility:hidden] md:p-[1.5%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                willChange: "transform",
              }}
            >
              <img
                src={url}
                alt="gallery"
                loading="lazy"
                className="mt-[-4rem] pointer-events-none h-[280px] w-[550px] rounded-[15px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-110
                           sm:h-[220px] sm:w-[450px]"
                style={{
                  willChange: "transform"
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

RollingGallery.displayName = "RollingGallery";

const ImageStackGallery = memo(() => {
  return (
    <div className="relative h-screen w-full bg-[#0e0e14] overflow-hidden">
      {/* Subtle DJ Mickey watermark - simplified */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="text-[15vw] font-extrabold tracking-tighter text-gray-500 uppercase">
          DJ MICKEY
        </div>
      </div>
      
      {/* Subtle glow accents - reduced for better performance */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
      
      {/* Vertical gallery text component */}
      <VerticalGalleryTextComponent />
      
      {/* Text Content Section - simplified */}
      <div className="relative pl-32 pr-8 pt-24 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Gallery
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
            Experience DJ Mickey's performances and events. Drag to explore the gallery.
          </p>
        </motion.div>
      </div>

      {/* Integrated Rolling Gallery with fewer images */}
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  );
});

ImageStackGallery.displayName = "ImageStackGallery";

export default ImageStackGallery;