import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

const IMGS = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a5d4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

// Vertical Gallery Text & Line Component
const VerticalGalleryTextComponent = () => (
  <div className="absolute left-2 top-1/6 flex flex-col items-center mt-10 z-10">
    <span className="mb-5 mt-40text-lg text-gray-400 font-bold tracking-widest rotate-270">IMAGE GALLERY</span>
    <motion.div
      initial={{ height: 10 }}
      animate={{ height: 400 }}
      transition={{ duration: 5 }}
      className="w-[1px] mt-2 bg-gray-700"
    />
  </div>
);

// Rolling Gallery Component
const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
  title = "Rolling Gallery",
  description = "Explore our amazing gallery!",
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1300 : 2100;
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

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

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

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[650px] w-full overflow-hidden">
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
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="mt-[-4rem] pointer-events-none h-[280px] w-[550px] rounded-[15px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-110
                           sm:h-[220px] sm:w-[450px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ImageStackGallery = () => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  return (
    <div className="relative h-screen w-full bg-[#0e0e14] overflow-hidden">
      {/* Subtle DJ Mickey watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="text-[15vw] font-extrabold tracking-tighter text-gray-500 uppercase">
          DJ MICKEY
        </div>
      </div>
      
      {/* Subtle glow accents - reduced number and opacity */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl"></div>
      
      {/* Single subtle background SVG */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg className="absolute bottom-10 right-10 w-64 h-64 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3v12.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V5.618l-9 2.909V17.5c0 1.381-1.567 2.5-3.5 2.5S3 18.881 3 17.5c0-1.381 1.567-2.5 3.5-2.5.537 0 1.028.084 1.5.236V7L21 3z"/>
        </svg>
      </div>

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

      {/* Integrated Rolling Gallery */}
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  );
};

export default ImageStackGallery;