import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HorizontalScrollingComponent = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [hoveredLineIndex, setHoveredLineIndex] = useState(null);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    // Set image visibility with slight delay for pattern animations
    if (hoveredWord) {
      setTimeout(() => setIsImageVisible(true), 100);
    } else {
      setIsImageVisible(false);
    }
  }, [hoveredWord]);

  const lines = [
    ["LANDSTREFF", "STAVANGER", "CLUB", "OMNIA"],
    ["USHUAIA", "VELD", "MUSIC", "FESTIVAL"],
    ["SZIGET", "TOUR", "CONCERT", "EVENT"],
  ];

  const imagesMap = {
    LANDSTREFF: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    STAVANGER: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    CLUB: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    OMNIA: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    USHUAIA: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    VELD: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    MUSIC: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    FESTIVAL: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    SZIGET: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    TOUR: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    CONCERT: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    EVENT: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
  };

  return (
    <div className="relative bg-black text-white h-screen flex flex-col justify-center items-center gap-5 overflow-hidden pb-40">
      {/* Common Background Component - use this exact same code in all components */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
          <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
        </div>
      </div>
      
      {/* Image Container with Patterns */}
      <div className="absolute top-[12%] left-[25%] w-[50%] h-[70%] pointer-events-none z-10">
        {/* Main Image */}
        <motion.div
          animate={{ opacity: hoveredWord ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: hoveredWord ? `url(${imagesMap[hoveredWord]})` : "none",
            backgroundColor: "black",
          }}
        />

        {/* Decorative Frame */}
        <motion.div
          className="absolute inset-0 border-2 border-white/0"
          animate={{
            borderColor: hoveredWord ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0)",
            scale: hoveredWord ? 1 : 0.95,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Top Left Corner Pattern */}
        <motion.div
          className="absolute top-[-20px] left-[-20px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            scale: hoveredWord ? 1 : 0.8,
            rotate: hoveredWord ? 0 : -45,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M0 30C0 13.4315 13.4315 0 30 0V10C19.0086 10 10 19.0086 10 30H0Z"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M0 15C0 6.71573 6.71573 0 15 0V5C9.47715 5 5 9.47715 5 15H0Z"
              fill="white"
              fillOpacity="0.4"
            />
          </svg>
        </motion.div>

        {/* Top Right Corner Pattern */}
        <motion.div
          className="absolute top-[-20px] right-[-20px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            scale: hoveredWord ? 1 : 0.8,
            rotate: hoveredWord ? 0 : 45,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M80 30C80 13.4315 66.5685 0 50 0V10C60.9914 10 70 19.0086 70 30H80Z"
              fill="white"
              fillOpacity="0.2"
              transform="translate(0,0) rotate(90)"
            />
            <path
              d="M80 15C80 6.71573 73.2843 0 65 0V5C70.5228 5 75 9.47715 75 15H80Z"
              fill="white"
              fillOpacity="0.4"
              transform="translate(0,0) rotate(90)"
            />
          </svg>
        </motion.div>

        {/* Bottom Left Corner Pattern */}
        <motion.div
          className="absolute bottom-[-20px] left-[-20px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            scale: hoveredWord ? 1 : 0.8,
            rotate: hoveredWord ? 0 : -135,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M0 30C0 13.4315 13.4315 0 30 0V10C19.0086 10 10 19.0086 10 30H0Z"
              fill="white"
              fillOpacity="0.2"
              transform="translate(0,80) rotate(-90)"
            />
            <path
              d="M0 15C0 6.71573 6.71573 0 15 0V5C9.47715 5 5 9.47715 5 15H0Z"
              fill="white"
              fillOpacity="0.4"
              transform="translate(0,80) rotate(-90)"
            />
          </svg>
        </motion.div>

        {/* Bottom Right Corner Pattern */}
        <motion.div
          className="absolute bottom-[-20px] right-[-20px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            scale: hoveredWord ? 1 : 0.8,
            rotate: hoveredWord ? 0 : 135,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M80 30C80 13.4315 66.5685 0 50 0V10C60.9914 10 70 19.0086 70 30H80Z"
              fill="white"
              fillOpacity="0.2"
              transform="translate(80,80) rotate(180)"
            />
            <path
              d="M80 15C80 6.71573 73.2843 0 65 0V5C70.5228 5 75 9.47715 75 15H80Z"
              fill="white"
              fillOpacity="0.4"
              transform="translate(80,80) rotate(180)"
            />
          </svg>
        </motion.div>

        {/* Left Edge Sound Wave Pattern */}
        <motion.div
          className="absolute left-[-10px] top-[50%] translate-y-[-50%]"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            x: hoveredWord ? 0 : -20,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <svg width="20" height="200" viewBox="0 0 20 200" fill="none">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.rect
                key={i}
                x="7"
                y={10 + i * 25}
                width="6"
                height="15"
                rx="3"
                fill="white"
                fillOpacity="0.3"
                initial={{ scaleY: 0.3 }}
                animate={{
                  scaleY: isImageVisible ? [0.3, 1, 0.5, 0.8, 0.4][i % 5] : 0.3,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.1,
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Right Edge Sound Wave Pattern */}
        <motion.div
          className="absolute right-[-10px] top-[50%] translate-y-[-50%]"
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            x: hoveredWord ? 0 : 20,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <svg width="20" height="200" viewBox="0 0 20 200" fill="none">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.rect
                key={i}
                x="7"
                y={10 + i * 25}
                width="6"
                height="15"
                rx="3"
                fill="white"
                fillOpacity="0.3"
                initial={{ scaleY: 0.3 }}
                animate={{
                  scaleY: isImageVisible ? [0.6, 0.3, 0.9, 0.4, 0.7][i % 5] : 0.3,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.1 + 0.1,
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Bottom Dots Pattern */}
        <motion.div
          className="absolute bottom-[-15px] left-[50%] translate-x-[-50%]"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredWord ? 1 : 0,
            y: hoveredWord ? 0 : 10,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <svg width="200" height="15" viewBox="0 0 200 15" fill="none">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.circle
                key={i}
                cx={15 + i * 20}
                cy="7.5"
                r="3"
                fill="white"
                fillOpacity="0.4"
                initial={{ scale: 0.5 }}
                animate={{
                  scale: isImageVisible ? 1 : 0.5,
                  opacity: isImageVisible ? [0.4, 0.8, 0.4][i % 3] : 0.4,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.1,
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* 🔥 Scrolling Text Lines with Infinite Loop */}
      <div className="relative z-20">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="scroll-line flex whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: hoveredLineIndex === index ? 50 : 20 + index * 5,
              ease: "linear",
              repeat: Infinity,
            }}
            onMouseEnter={() => setHoveredLineIndex(index)}
            onMouseLeave={() => setHoveredLineIndex(null)}
            style={{
              fontSize: index === 1 ? "5rem" : index === 0 ? "4rem" : "3.5rem",
              fontFamily: "'Oswald', sans-serif",
              textTransform: "uppercase",
              fontWeight: 700,
              letterSpacing: ".2em",
              WebkitTextStrokeWidth: index === 1 ? ".1em" : ".08em",
              WebkitTextStrokeColor: "#fff",
              WebkitTextFillColor: "transparent",
              marginTop: index === 1 ? "-5px" : index === 0 ? "-15px" : "-20px",
              display: "flex",
              gap: "30px",
            }}
          >
            {[...line, ...line].map((word, i) => (
              <motion.div
                key={`${word}-${i}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: "pointer", padding: "0 20px" }}
                onMouseEnter={() => setHoveredWord(word)}
                onMouseLeave={() => setHoveredWord(null)}
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Vertical Menu Text & Line */}
      <div className="absolute left-2 top-1/6 flex flex-col items-center z-20">
        <span className="mb-5 text-lg font-bold tracking-widest rotate-270">EVENTS</span>
        <motion.div
          initial={{ height: 10 }}
          animate={{ height: 400 }}
          transition={{ duration: 5 }}
          className="w-[1px] bg-white mt-2"
        />
      </div>

      {/* Decorative SVG in the opposite corner (bottom-right) */}
      <motion.div
        className="absolute bottom-10 right-10 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="40"
            cy="40"
            r="38"
            stroke="white"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="40"
            cy="40"
            r="30"
            stroke="white"
            strokeWidth="0.75"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="40"
            cy="40"
            r="20"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="40"
            cy="40"
            r="3"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8, ease: "backOut" }}
          />
          
          <motion.circle cx="40" cy="40" r="17" stroke="white" strokeWidth="0.5" fill="none" />
          <motion.circle cx="40" cy="40" r="14" stroke="white" strokeWidth="0.5" fill="none" />
          <motion.circle cx="40" cy="40" r="11" stroke="white" strokeWidth="0.5" fill="none" />
          <motion.circle cx="40" cy="40" r="8" stroke="white" strokeWidth="0.5" fill="none" />
          
          <motion.rect
            x="66"
            y="38"
            width="4"
            height="10"
            rx="1"
            fill="white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 2, ease: "backOut" }}
          />
          <motion.rect
            x="61"
            y="36"
            width="4"
            height="14"
            rx="1"
            fill="white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 2.1, ease: "backOut" }}
          />
          <motion.rect
            x="56"
            y="40"
            width="4"
            height="8"
            rx="1"
            fill="white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 2.2, ease: "backOut" }}
          />
          
          <motion.path
            d="M 10,40 Q 15,30 20,40 Q 25,50 30,40"
            stroke="white"
            strokeWidth="0.75"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.3, ease: "easeOut" }}
          />
          <motion.path
            d="M 5,40 Q 12,25 19,40 Q 26,55 33,40"
            stroke="white"
            strokeWidth="0.75"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default HorizontalScrollingComponent;