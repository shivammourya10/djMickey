import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";

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
  const [showContact, setShowContact] = useState(false);
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
    { name: "Image Gallery", link: "/#gallery" },
    { name: "Live Concert", link: "/#concert" },
    { name: "Contact Us", action: () => setShowContact(true) },
  ];

  const images = {
    Home: "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?cs=srgb&dl=pexels-isabella-mendes-107313-860707.jpg&fm=jpg",
    "Image Gallery": "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
    "Live Concert": "https://images.stockcake.com/public/6/2/9/629c22b1-49f2-4934-ab8c-cb62256cc9cb_large/dj-at-concert-stockcake.jpg",
    Contact: "https://img.freepik.com/premium-vector/deejay-business-card-design-template_208206-827.jpg?semt=ais_hybrid",
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: isMobile
          ? `url(${images[hoveredOption] || "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?cs=srgb&dl=pexels-isabella-mendes-107313-860707.jpg&fm=jpg"})`
          : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
    src={images[hoveredOption] || "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?cs=srgb&dl=pexels-isabella-mendes-107313-860707.jpg&fm=jpg"}
    alt="Menu option preview"
    className="w-full h-full object-cover"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  />
</div>


      {/* Menu Options */}
      <div className="absolute left-[60%] w-[35%] text-6xl flex flex-col font-bold">
        {menuOptions.map((option) =>
          option.link ? (
            <motion.a
              key={option.name}
              href={option.link}
              className="relative text-white transition glow-on-hover mb-10"
              onMouseEnter={() => setHoveredOption(option.name)}
              onMouseLeave={() => setHoveredOption(null)}
              whileHover={{ scale: 1.1 }}
              onClick={onClose} // Close menu before navigating
            >
              {option.name}

              {/* Static Gray Underline (Always Visible) */}
              <div className="h-[2px] w-full bg-gray-500 absolute left-0 bottom-[-20px]" />

              {/* Animated Glowing Underline (Expands Left to Right on Hover) */}
              <motion.div
                className="h-[2px] bg-white absolute left-0 bottom-[-20px]" // Positioned at same place as gray line
                initial={{ width: "0%", opacity: 0 }} // Start hidden
                animate={
                  hoveredOption === option.name
                    ? {
                        width: "100%", // Expand fully
                        opacity: 1,
                        filter: "drop-shadow(0px 0px 6px #00f)", // Neon glow effect
                      }
                    : {
                        width: "0%", // Collapse back
                        opacity: 0,
                        filter: "none",
                      }
                }
                transition={{
                  width: { duration: 0.6, ease: "easeInOut" }, // Smooth width expansion
                  opacity: { duration: 0.4, ease: "easeOut" }, // Fade in/out
                  filter: { delay: 0.3, duration: 0.3 }, // Glow effect after expansion
                }}
              />
            </motion.a>
          ) : (
            <motion.button
              key={option.name}
              onClick={option.action}
              className="relative text-white transition glow-on-hover text-left mb-8"
              onMouseEnter={() => setHoveredOption(option.name)}
              onMouseLeave={() => setHoveredOption(null)}
              whileHover={{ scale: 1.1 }}
            >
              {option.name}

              {/* Static Gray Underline (Always Visible) */}
              <div className="h-[2px] w-full bg-gray-500 absolute left-0 bottom-[-20px]" />

              {/* Animated Glowing Underline (Expands Left to Right on Hover) */}
              <motion.div
                className="h-[2px] bg-white absolute left-0 bottom-[-20px]" // Positioned at same place as gray line
                initial={{ width: "0%", opacity: 0 }} // Start hidden
                animate={
                  hoveredOption === option.name
                    ? {
                        width: "100%", // Expand fully
                        opacity: 1,
                        filter: "drop-shadow(0px 0px 6px #00f)", // Neon glow effect
                      }
                    : {
                        width: "0%", // Collapse back
                        opacity: 0,
                        filter: "none",
                      }
                }
                transition={{
                  width: { duration: 0.6, ease: "easeInOut" }, // Smooth width expansion
                  opacity: { duration: 0.4, ease: "easeOut" }, // Fade in/out
                  filter: { delay: 0.3, duration: 0.3 }, // Glow effect after expansion
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

      {/* Contact Card */}
      {showContact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowContact(false)}
        >
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0, rotateY: -180 }}
            transition={{ duration: 0.8 }}
            className="relative bg-black p-12 rounded-xl border-2 border-dull-golden overflow-hidden glow-border w-[500px] h-[350px]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl mb-6 text-golden-glow text-center">Contact Us</h2>
            <div className="flex flex-col gap-5 text-lg">
              <a href="mailto:example@example.com" className="text-white hover:text-golden-glow">
                Email: example@example.com
              </a>
              <a href="https://wa.me/1234567890" className="text-white hover:text-golden-glow">
                WhatsApp: +1234567890
              </a>
              <a href="https://instagram.com/example" className="text-white hover:text-golden-glow">
                Instagram: @example
              </a>
              <h3 className="text-center mt-5">Have any inquiries? Contact us today.</h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MenuPage;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Youtube, Instagram } from "lucide-react";
// import "../../src/App.css";

// const CloseButton = ({ onClick }) => (
//   <button onClick={onClick} className="absolute top-5 right-5 w-8 h-8 md:w-6 md:h-6">
//     <motion.div
//       className="absolute top-1/2 left-0 w-full h-[2px] bg-white"
//       variants={{
//         open: { rotate: 45, y: 0 },
//         closed: { rotate: 0, y: -5 },
//       }}
//       initial="open"
//       exit="closed"
//       transition={{ duration: 0.3 }}
//     />
//     <motion.div
//       className="absolute top-1/2 left-0 w-full h-[2px] bg-white"
//       variants={{
//         open: { rotate: -45, y: 0 },
//         closed: { rotate: 0, y: 5 },
//       }}
//       initial="open"
//       exit="closed"
//       transition={{ duration: 0.3 }}
//     />
//   </button>
// );

// const MenuPage = ({ onClose }) => {
//   const [hoveredOption, setHoveredOption] = useState(null);
//   const [showContact, setShowContact] = useState(false);

//   const menuOptions = [
//     { name: "Home", link: "/" },
//     { name: "Image Gallery", link: "/#gallery" },
//     { name: "Live Concert", link: "/#concert" },
//     { name: "Contact Us", action: () => setShowContact(true) },
//   ];

//   const images = {
//     Home: "https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg",
//     "Image Gallery": "https://www.hire4event.com/apppanel/assets/artistimage/8-6645ecd675169.webp",
//     "Live Concert": "https://images.stockcake.com/public/6/2/9/629c22b1-49f2-4934-ab8c-cb62256cc9cb_large/dj-at-concert-stockcake.jpg",
//     Contact: "https://img.freepik.com/premium-vector/deejay-business-card-design-template_208206-827.jpg",
//   };

//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center"
//     >
//       <CloseButton onClick={onClose} />

//       {/* Vertical Menu Text & Line */}
//       <div className="absolute left-2 top-[15%] flex flex-col items-center hidden md:flex">
//         <span className="mb-2 text-sm md:text-lg font-bold tracking-widest rotate-270">MENU</span>
//         <motion.div
//           initial={{ height: 10 }}
//           animate={{ height: 200 }}
//           transition={{ duration: 5 }}
//           className="w-[0.5px] bg-white mt-1"
//         />
//       </div>

//       {/* Image Preview */}
//       <div className="absolute left-[5%] w-[90%] md:w-[45%] h-[35vh] md:h-[50vh] overflow-hidden">
//         <motion.img
//           key={hoveredOption}
//           src={images[hoveredOption] || images["Home"]}
//           alt="Menu option preview"
//           className="w-full h-full object-cover"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>

//       {/* Menu Options */}
//       <div className="absolute left-[10%] md:left-[60%] w-[80%] md:w-[35%] text-3xl md:text-6xl flex flex-col font-bold">
//         {menuOptions.map((option) =>
//           option.link ? (
//             <motion.a
//               key={option.name}
//               href={option.link}
//               className="relative text-white transition glow-on-hover mb-6 md:mb-10"
//               onMouseEnter={() => setHoveredOption(option.name)}
//               onMouseLeave={() => setHoveredOption(null)}
//               whileHover={{ scale: 1 }}
//               onClick={onClose}
//             >
//               {option.name}

//               <div className="h-[2px] w-full bg-gray-500 absolute left-0 bottom-[-10px] md:bottom-[-20px]" />

//               <motion.div
//                 className="h-[2px] bg-white absolute left-0 bottom-[-10px] md:bottom-[-20px]"
//                 initial={{ width: "0%", opacity: 0 }}
//                 animate={
//                   hoveredOption === option.name
//                     ? { width: "100%", opacity: 1, filter: "drop-shadow(0px 0px 6px #00f)" }
//                     : { width: "0%", opacity: 0, filter: "none" }
//                 }
//                 transition={{
//                   width: { duration: 0.6, ease: "easeInOut" },
//                   opacity: { duration: 0.4, ease: "easeOut" },
//                   filter: { delay: 0.3, duration: 0.3 },
//                 }}
//               />
//             </motion.a>
//           ) : (
//             <motion.button
//               key={option.name}
//               onClick={option.action}
//               className="relative text-white transition glow-on-hover text-left mb-6 md:mb-8"
//               onMouseEnter={() => setHoveredOption(option.name)}
//               onMouseLeave={() => setHoveredOption(null)}
//               whileHover={{ scale: 1 }}
//             >
//               {option.name}

//               <div className="h-[2px] w-full bg-gray-500 absolute left-0 bottom-[-10px] md:bottom-[-20px]" />

//               <motion.div
//                 className="h-[2px] bg-white absolute left-0 bottom-[-10px] md:bottom-[-20px]"
//                 initial={{ width: "0%", opacity: 0 }}
//                 animate={
//                   hoveredOption === option.name
//                     ? { width: "100%", opacity: 1, filter: "drop-shadow(0px 0px 6px #00f)" }
//                     : { width: "0%", opacity: 0, filter: "none" }
//                 }
//                 transition={{
//                   width: { duration: 0.6, ease: "easeInOut" },
//                   opacity: { duration: 0.4, ease: "easeOut" },
//                   filter: { delay: 0.3, duration: 0.3 },
//                 }}
//               />
//             </motion.button>
//           )
//         )}
//       </div>

//       {/* Social Media Icons */}
//       <div className="absolute bottom-10 flex gap-5 md:right-20">
//         <motion.a href="https://youtube.com" className="text-white" whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}>
//           <Youtube size={26} />
//         </motion.a>
//         <motion.a href="https://instagram.com" className="text-white" whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}>
//           <Instagram size={24} />
//         </motion.a>
//       </div>

//       {/* Bottom Horizontal Line */}
//       <div className="absolute bottom-5 w-full flex justify-center">
//         <motion.div initial={{ width: 0 }} animate={{ width: "10%" }} transition={{ duration: 1 }} className="bg-white h-[2px]" />
//       </div>
//     </motion.div>
//   );
// }

// export default MenuPage;