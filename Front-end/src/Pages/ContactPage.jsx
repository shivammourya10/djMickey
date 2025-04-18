import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaSoundcloud, FaSpotify, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiCalendar, HiChevronDown } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Corporate Event',
    date: '',
    message: ''
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false
  });
  
  const [activeFaq, setActiveFaq] = useState(null);
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  useEffect(() => {
    emailjs.init("MVYJ2V_we7UwT8Nx2"); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, isSuccess: false, isError: false });
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      event_type: formData.eventType,
      event_date: formData.date,
      message: formData.message,
      reply_to: formData.email,
      to_email: "shivammourya318@gmail.com"
    };
    
    try {
      const response = await emailjs.send(
        'service_b07l9b8',
        'template_qs0vc6g',
        templateParams
      );
      
      console.log('Email sent successfully:', response);
      setFormState({ isSubmitting: false, isSuccess: true, isError: false });
      
      setFormData({
        name: '',
        email: '',
        eventType: 'Corporate Event',
        date: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormState({ isSubmitting: false, isSuccess: false, isError: true });
    }
  };

  const eventTypes = [
    "Corporate Event",
    "Wedding",
    "Club Night",
    "Festival",
    "Birthday Party",
    "Product Launch",
    "Private Party",
    "Other"
  ];
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-6 months in advance for major events like weddings and corporate functions. For club events, 4-6 weeks notice is typically sufficient."
    },
    {
      question: "What music genres do you play?",
      answer: "DJ Mickey specializes in a wide range of genres including Electronic, House, Bollywood/Bhangra, Hip-Hop, Top 40 hits, and more. We customize playlists according to your event needs."
    },
    {
      question: "Do you provide equipment or just DJing services?",
      answer: "We provide full-service packages that include professional sound systems, lighting, and DJ equipment. Custom technical riders can be arranged for venues with existing setups."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our standard policy requires a 50% deposit to secure your date, which is non-refundable within 30 days of the event. Full details will be provided in your booking contract."
    }
  ];

  return (
    <div ref={sectionRef} className="relative bg-black text-white py-24 overflow-hidden">
      {/* Common Background Component */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
          <div className="absolute top-1/3 -right-48 w-96 h-96 rounded-full bg-blue-500 blur-[100px]"></div>
          <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full bg-pink-500 blur-[100px]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-300 to-red-400 bg-clip-text text-transparent">
            Book DJ Mickey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to elevate your event with incredible music? Let's create an unforgettable experience together.
          </p>
        </motion.div>
        
        {/* MAIN CONTENT WRAPPER */}
        <div className="max-w-7xl mx-auto">
          {/* ===== FIRST ROW: GET IN TOUCH + CONTACT INFO ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl h-full">
                <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
                
                <AnimatePresence>
                  {formState.isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300"
                    >
                      Thank you for your message! DJ Mickey will get back to you soon.
                    </motion.div>
                  )}
                  
                  {formState.isError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300"
                    >
                      Something went wrong. Please try again later.
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="eventType" className="block text-gray-300 mb-2 text-sm font-medium">Event Type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline-none transition-colors"
                      >
                        {eventTypes.map(type => (
                          <option key={type} value={type} className="bg-gray-900">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-gray-300 mb-2 text-sm font-medium">Event Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:outline-none transition-colors"
                      placeholder="Tell us about your event, music preferences, or any questions you have."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formState.isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] disabled:opacity-70 disabled:transform-none disabled:hover:translate-y-0"
                    >
                      {formState.isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Contact Information */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="w-full flex flex-col items-center justify-center p-8 rounded-3xl border border-white/10 shadow-xl h-full"
>
  <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
 <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
  {[
    { icon: <HiMail className="text-xl" />, label: "Email", link: "mailto:booking@djmickey.com", text: "booking@djmickey.com" },
    { icon: <HiPhone className="text-xl" />, label: "Phone", link: "tel:+1234567890", text: "+1 (234) 567-890" },
    { icon: <HiLocationMarker className="text-xl" />, label: "Studio", text: "123 Music Street, Mumbai" },
    { icon: <HiCalendar className="text-xl" />, label: "Availability", text: "Booking for 2024-2025" }
  ].map((item, index) => (
    <div key={index} className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-center justify-center">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl text-white mb-4">
        {item.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{item.label}</h3>
        {item.link ? (
          <a href={item.link} className="text-gray-300 hover:text-purple-300 transition-colors">
            {item.text}
          </a>
        ) : (
          <p className="text-gray-300">{item.text}</p>
        )}
      </div>
    </div>
  ))}
</div>
  <svg className="absolute bottom-0 left-0 w-full h-20" viewBox="0 0 500 100" preserveAspectRatio="none">
    <path d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z" fill="#1a1d23" />
  </svg>
</motion.div>
          </div>

          {/* ===== SECOND ROW: MAP (FULL WIDTH) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160572901!2d72.71637258823295!3d19.082177511233454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680858683422!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </motion.div>
          
          {/* ===== THIRD ROW: SOCIAL MEDIA ICONS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">Connect With Us</h2>
              <div className="flex flex-wrap justify-center gap-5">
                {[
                  { icon: <FaInstagram className="text-3xl" />, label: "Instagram" },
                  { icon: <FaFacebookF className="text-3xl" />, label: "Facebook" },
                  { icon: <FaTwitter className="text-3xl" />, label: "Twitter" },
                  { icon: <FaYoutube className="text-3xl" />, label: "YouTube" },
                  { icon: <FaSoundcloud className="text-3xl" />, label: "SoundCloud" },
                  { icon: <FaSpotify className="text-3xl" />, label: "Spotify" }
                ].map((item, index) => (
                  <a key={index} href="#" className="group" title={item.label}>
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600 hover:to-pink-600 p-5 rounded-full text-white transition-all duration-300 border border-white/10 hover:scale-110">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* ===== FOURTH ROW: FAQ SECTION ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-4 mb-10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
                  animate={{ borderColor: activeFaq === index ? 'rgba(192, 132, 252, 0.4)' : 'rgba(255, 255, 255, 0.1)' }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full p-5 text-left"
                  >
                    <h3 className={`font-semibold transition-colors ${activeFaq === index ? 'text-purple-300' : 'text-white'}`}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      className="p-1 rounded"
                    >
                      <HiChevronDown className="text-xl" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-gray-300 border-t border-white/10">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-8">Still have questions? Contact us directly</p>
              <a 
                href="mailto:info@djmickey.com" 
                className="inline-block px-8 py-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-full text-white transition-colors"
              >
                info@djmickey.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;