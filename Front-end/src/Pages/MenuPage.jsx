import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import With_Instrument from "../assets/With_Instrument.jpg";
import Blue_motionblur from "../assets/Blue_motionblur.jpg";
import White_tshirt from "../assets/White_tshirt.jpg";
import Main_Stage from "../assets/Main_Stage.jpg";

const CloseButton = ({ onClick }) => (
  <button onClick={onClick} className="absolute top-5 right-5 w-6 h-6">
    <motion.div
      className="absolute top-1/2 left-0 w-full h-[2px] bg-white"
      variants={{
        open: { rotate: 45, y: 0 },
        closed: { rotate: 0, y: -5 },
      }}
      initial="open"
      exit="closed"
      transition={{ duration: 0.3 }}
    />
    <motion.div
      className="absolute top-1/2 left-0 w-full h-[2px] bg-white"
      variants={{
        open: { rotate: -45, y: 0 },
        closed: { rotate: 0, y: 5 },
      }}
      initial="open"
      exit="closed"
      transition={{ duration: 0.3 }}
    />
  </button>
);

const MenuPage = ({ onClose }) => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuOptions = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/#Console_Shared" },
    { name: "About Us", link: "/#About" },
    { name: "Contact Us", link: "/#Contact" },
  ];
  
  const handleScroll = (e, link) => {
    e.preventDefault();
  
    if (link.includes("#")) {
      const id = link.split("#")[1];
      const target = document.querySelector(`#${id}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth",
          block: "start",
          inline: "nearest",});
      }
    } else {
      window.location.href = link;
    }
  
    onClose();
  };

  const images = {
    "Home": Blue_motionblur,
    "Experience": Main_Stage,
    "Contact": With_Instrument,
    "About Us": White_tshirt,
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center">
      {/* Close Button */}
      <CloseButton onClick={onClose} />

      {/* Vertical Menu Text & Line */}
      <div className="absolute left-2 top-1/6 flex flex-col items-center">
        <span className="mb-5 text-l font-bold tracking-widest rotate-270">MENU</span>
        <motion.div
          initial={{ height: 10 }}
          animate={{ height: 400 }}
          transition={{ duration: 5 }}
          className="w-[1px] bg-white mt-2"
        />
      </div>

      {/* Image Transition */}
      <div className="absolute left-10percent w-[45%] h-[50vh] overflow-hidden">
        <motion.img
          key={hoveredOption}
          src={images[hoveredOption] ||With_Instrument}
          alt="Menu option preview"
          className={`object-cover object-[center_35%] ${hoveredOption === "Image Gallery" ? "w-[80%] h-[80%] mx-auto my-auto" : "w-full h-full"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Menu Options */}
      <div className="absolute left-[60%] w-[35%] text-6xl flex flex-col font-bold gap-8">
        {menuOptions.map((option) =>
          option.link ? (
            <motion.a
              key={option.name}
              href={option.link}
              className="relative text-white transition glow-on-hover mb-10"
              onClick={(e) => handleScroll(e, option.link)}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="relative z-10 px-2 py-3"
                onMouseEnter={() => setHoveredOption(option.name)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                {option.name}
              </div>

              <div className="h-[2px] w-full bg-gray-500 absolute left-0 bottom-[-20px]" />

              <motion.div
                className="h-[2px] bg-white absolute left-0 bottom-[-20px]"
                initial={{ width: "0%", opacity: 0 }}
                animate={
                  hoveredOption === option.name
                    ? {
                        width: "100%",
                        opacity: 1,
                        filter: "drop-shadow(0px 0px 6px #00f)",
                      }
                    : {
                        width: "0%",
                        opacity: 0,
                        filter: "none",
                      }
                }
                transition={{
                  width: { duration: 0.6, ease: "easeInOut" },
                  opacity: { duration: 0.4, ease: "easeOut" },
                  filter: { delay: 0.3, duration: 0.3 },
                }}
              />
            </motion.a>
          ) : (
            <motion.button
              key={option.name}
              onClick={option.action}
              className="relative text-white transition glow-on-hover text-left mb-8"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="relative z-10 px-2 py-3"
                onMouseEnter={() => setHoveredOption(option.name)}
                onMouseLeave={() => setHoveredOption(null)}
              >
                {option.name}
              </div>

              <div className="h-[2px] w-full bg-gray-500 absolute left-0 bottom-[-20px]" />

              <motion.div
                className="h-[2px] bg-white absolute left-0 bottom-[-20px]"
                initial={{ width: "0%", opacity: 0 }}
                animate={
                  hoveredOption === option.name
                    ? {
                        width: "100%",
                        opacity: 1,
                        filter: "drop-shadow(0px 0px 6px #00f)",
                      }
                    : {
                        width: "0%",
                        opacity: 0,
                        filter: "none",
                      }
                }
                transition={{
                  width: { duration: 0.6, ease: "easeInOut" },
                  opacity: { duration: 0.4, ease: "easeOut" },
                  filter: { delay: 0.3, duration: 0.3 },
                }}
              />
            </motion.button>
          )
        )}
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-10 right-20 gap-8 flex gap-5">
        <motion.a
          href="https://youtube.com"
          className="text-white"
          whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
        >
          <Youtube size={26} />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          className="text-white"
          whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
        >
          <Instagram size={24} />
        </motion.a>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-5 w-full flex justify-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          transition={{ duration: 1 }}
          className="bg-white h-[2px]"
        />
      </div>


    </div>
  );
};

export default MenuPage;
