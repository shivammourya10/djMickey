// import { useState } from "react";
// import { motion } from "framer-motion";
// import "../../src/App.css";
// import { Menu, X } from "lucide-react";

// const MenuPage = ({ onClose }) => {
//   const [hoveredOption, setHoveredOption] = useState(null);
//   const menuOptions = [
//     { name: "Home", link: "/" },
//     { name: "Image Gallery", link: "/#gallery" },
//     { name: "Live Concert", link: "/#concert" },
//     { name: "Contact", link: "#" },
//   ];

//   const images = {
//     Home: "home-image-url.jpg",
//     "Image Gallery": "gallery-image-url.jpg",
//     "Live Concert": "concert-image-url.jpg",
//     Contact: "contact-image-url.jpg",
//   };

//   return (
//     <motion.div
//       initial={{ x: "100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center"
//     >
//       {/* Close Button */}
//       <button
//         className="absolute top-5 right-5 text-white text-3xl"
//         onClick={onClose}
//       >
//         <motion.div animate={{ rotate: hoveredOption ? 90 : 0 }}>
//           {hoveredOption ? <Menu /> : <X />}
//         </motion.div>
//       </button>

//       {/* Vertical Menu Text & Line */}
//       <div className="absolute left-5 top-1/4 flex flex-col items-center">
//         <span className="text-xl font-bold tracking-widest rotate-90">MENU</span>
//         <motion.div
//           initial={{ height: 0 }}
//           animate={{ height: 100 }}
//           transition={{ duration: 1 }}
//           className="w-1 bg-white mt-2"
//         />
//       </div>

//       {/* Image Transition */}
//       <div className="absolute left-[5%] w-[45%] h-[50vh] overflow-hidden">
//         <motion.img
//           key={hoveredOption}
//           src={images[hoveredOption] || "default-image.jpg"}
//           className="w-full h-full object-cover"
//           initial={{ x: 50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//       </div>

//       {/* Menu Options */}
//       <div className="absolute left-[55%] w-[35%] text-2xl flex flex-col gap-5">
//         {menuOptions.map((option) => (
//           <motion.a
//             key={option.name}
//             href={option.link}
//             className="relative hover:text-neon-blue transition"
//             onMouseEnter={() => setHoveredOption(option.name)}
//             onMouseLeave={() => setHoveredOption(null)}
//             whileHover={{ scale: 1.1 }}
//           >
//             {option.name}
//             <motion.div
//               className="h-[2px] bg-white absolute bottom-0 left-0 right-0"
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.a>
//         ))}
//       </div>

//       {/* Social Media Icons */}
//       <div className="absolute bottom-10 right-10 flex gap-5">
//         <motion.a
//           href="#"
//           className="text-white text-2xl"
//           whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
//         >
//           YT
//         </motion.a>
//         <motion.a
//           href="#"
//           className="text-white text-2xl"
//           whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
//         >
//           IG
//         </motion.a>
//       </div>

//       {/* Bottom Horizontal Line */}
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: "10%" }}
//         transition={{ duration: 1 }}
//         className="absolute bottom-5 bg-white h-[2px]"
//       />
//     </motion.div>
//   );
// };

// export default MenuPage;
import { useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram } from "lucide-react";
import "../../src/App.css";

// Custom CloseButton with morphing animation from cross to equals
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

  const menuOptions = [
    { name: "Home", link: "/" },
    { name: "Image Gallery", link: "/#gallery" },
    { name: "Live Concert", link: "/#concert" },
    { name: "Contact", action: () => setShowContact(true) },
  ];

  const images = {
    Home: "https://www.denondj.com/assets/images/homepage/DenonDJ_homepage_banner_0922.jpg",
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
          className="w-1 bg-white mt-2"
        />
      </div>

      {/* Image Transition */}
      <div className="absolute left-[10%] w-[45%] h-[50vh] overflow-hidden">
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
{/* Menu Options */}
<div className="absolute left-[60%] w-[35%] text-6xl flex flex-col gap-8 font-bold">
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
      <div className="absolute bottom-10 right-10 flex gap-5">
        <motion.a
          href="https://youtube.com"
          className="text-white"
          whileHover={{ scale: 1.2, filter: "brightness(1.5)" }}
        >
          <Youtube size={24} />
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
      animate={{ scale: 1.5, rotateY: 0 }}
      exit={{ scale: 0, rotateY: -180 }}
      transition={{ duration: 0.5 }}
      className="bg-black p-10 rounded-lg border-2 border-yellow-500 hover:shadow-yellow-500 hover:shadow-lg transition-shadow duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl mb-4 hover:text-yellow-500">Contact</h2>
      <div className="flex flex-col gap-4">
        <a
          href="mailto:example@example.com"
          className="text-white hover:text-yellow-400"
        >
          Email: example@example.com
        </a>
        <a
          href="https://wa.me/1234567890"
          className="text-white hover:text-yellow-400"
        >
          WhatsApp: +1234567890
        </a>
        <a
          href="https://instagram.com/example"
          className="text-white hover:text-yellow-400"
        >
          Instagram: @example
        </a>
      </div>
    </motion.div>
  </motion.div>
)}

    </motion.div>
  );
};

export default MenuPage;