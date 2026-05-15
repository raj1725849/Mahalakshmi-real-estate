"use client";

import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const waLink = "https://wa.me/919326040073?text=Hi%20Mahalaxmi%20Estate%2C%20I%20am%20interested%20in%20your%20property";

  return (
    <div className="fixed bottom-6 right-6 z-[99999] group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy-mid text-white text-xs font-label tracking-widest py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/20 shadow-xl pointer-events-none">
        Chat with us →
      </div>

      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-whatsapp rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse-green transition-transform cursor-pointer"
      >
        <i className="fa-brands fa-whatsapp text-3xl md:text-4xl" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
