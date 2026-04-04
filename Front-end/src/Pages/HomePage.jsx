import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const user = {
  name: "Shivam",
};

const dummyPets = [
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "Buddy",
    age: "2 years",
    image: "https://via.placeholder.com/100",
  },
  { id: 2, name: "Luna", age: "3 years", image: "" },
  {
    id: 3,
    name: "Rocky",
    age: "1 year",
    image: "https://via.placeholder.com/100",
  },
];

const dummyTips = [
  "Ensure your pet gets regular exercise to stay healthy!",
  "Always provide fresh water for your pets.",
  "Visit the vet at least once a year for checkups.",
  "Ensure your pet gets regular exercise to stay healthy!",
  "Always provide fresh water for your pets.",
  "Visit the vet at least once a year for checkups.",
  "Ensure your pet gets regular exercise to stay healthy!",
  "Always provide fresh water for your pets.",
  "Visit the vet at least once a year for checkups.",
  "Ensure your pet gets regular exercise to stay healthy!",
];

const HomePage = () => {
  const [showTips, setShowTips] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      id="/"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100"
    >
      {/* Top Navbar */}
      <div className="sticky top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Hello, {user.name}! Welcome back
          </h2>
          <div className="w-10 h-10 flex items-center justify-center bg-pink-500 text-white font-bold rounded-full">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6 items-start">
          <section className="w-full">
            <h2 className="text-2xl font-bold mb-5 text-gray-900">Your Pets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {dummyPets.map((pet, index) => (
                <motion.article
                  key={`${pet.id}-${index}`}
                  className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer"
                  whileHover={{ scale: 1.01, y: -2 }}
                  onClick={() => navigate(`/pet/${pet.id}`)}
                >
                  <img
                    src={pet.image || "https://via.placeholder.com/100"}
                    alt={pet.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {pet.name}
                    </h3>
                    <p className="text-sm text-gray-600">{pet.age}</p>
                  </div>
                </motion.article>
              ))}

              <motion.button
                type="button"
                className="p-4 bg-pink-500 text-white rounded-xl shadow-sm border border-pink-500 flex items-center justify-center gap-2 hover:bg-pink-600 transition"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <FaPlus size={20} />
                <span>Add Pet</span>
              </motion.button>
            </div>
          </section>

          <aside className="w-full lg:sticky lg:top-24">
            <motion.div
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tips & Articles
                </h3>
                <button
                  type="button"
                  onClick={() => setShowTips(!showTips)}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
                  aria-label="Toggle tips panel"
                >
                  {showTips ? (
                    <FaChevronRight size={12} />
                  ) : (
                    <FaChevronLeft size={12} />
                  )}
                </button>
              </div>

              {showTips && (
                <ul className="text-gray-700 text-sm space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                  {dummyTips.map((tip, index) => (
                    <li key={index} className="border-b border-gray-100 pb-2">
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
