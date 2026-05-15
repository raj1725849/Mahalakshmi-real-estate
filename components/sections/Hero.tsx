"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-navy">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 md:px-12 flex flex-col h-full pt-48 pb-12 md:pb-20 flex-grow">
        
        {/* Upper Left: Trusted Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-auto"
        >
          <div className="flex items-start gap-0">
            <div className="w-4 h-4 border-l border-t border-white/40 mt-1" />
            <p className="font-label text-white text-[13px] tracking-[0.2em] uppercase px-4 py-1">
              Your Trusted <br />Residential Developer
            </p>
            <div className="w-4 h-4 border-r border-b border-white/40 self-end mb-1" />
          </div>
        </motion.div>

        {/* Bottom Section: Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-12">
          
          {/* Bottom Left: Ratings & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-md"
          >
            {/* Stars */}
            <div className="flex gap-1.5 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <i key={star} className="fa-solid fa-star text-gold text-sm" />
              ))}
            </div>
            
            <p className="font-sans text-white/90 text-sm md:text-base leading-relaxed font-light tracking-wide">
              Thoughtful design. Lasting impact. Our mission is to build premium homes in Nagpur that nurture the wellbeing and dreams of every family we serve.
            </p>
          </motion.div>

          {/* Bottom Right: Big Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-right md:text-right"
          >
            <p className="font-label text-white/60 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4">
              Premium 2 & 3 BHK . Nagpur . NAREDCO Certified
            </p>
            <h1 className="font-display text-white text-6xl md:text-[9rem] leading-[0.85] tracking-tighter">
              Trust is <br />
              <span className="italic">Forever</span>
            </h1>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-10" />
    </section>
  );
};

export default Hero;
