import React, { useState } from "react";
import { motion } from "framer-motion";

const HorizontalScrollingComponent = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [hoveredLineIndex, setHoveredLineIndex] = useState(null);

  const lines = [
    ["LANDSTREFF", "STAVANGER", "CLUB", "OMNIA"],
    ["USHUAÏA", "VELD", "MUSIC", "FESTIVAL"],
    ["SZIGET", "TOUR", "CONCERT", "EVENT"],
  ];

  const imagesMap = {
    LANDSTREFF: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    STAVANGER: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    CLUB: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    OMNIA: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    USHUAÏA: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    VELD: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    MUSIC: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    FESTIVAL: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    SZIGET: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    TOUR: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    CONCERT: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    EVENT: "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
  };

  return (
    <div className="relative bg-black text-white h-screen flex flex-col justify-center items-center gap-5 overflow-hidden">
      {/* 🔥 Background Image Effect with Fade-in & Out */}
      <motion.div
        animate={{ opacity: hoveredWord ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-[15%] left-[25%] w-[50%] h-[70%] bg-center bg-cover"
        style={{
          backgroundImage: hoveredWord ? `url(${imagesMap[hoveredWord]})` : "none",
          backgroundColor: "black",
        }}
      />

      {/* 🔥 Scrolling Text Lines with Infinite Loop */}
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
              whileHover={{ scale: 1.2 }}
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

      {/* Vertical Menu Text & Line */}
      <div className="absolute left-2 top-1/6 flex flex-col items-center">
        <span className="mb-5 text-lg font-bold tracking-widest rotate-270">EVENTS</span>
        <motion.div
          initial={{ height: 10 }}
          animate={{ height: 400 }}
          transition={{ duration: 5 }}
          className="w-[1px] bg-white mt-2"
        />
      </div>
    </div>
  );
};

export default HorizontalScrollingComponent;