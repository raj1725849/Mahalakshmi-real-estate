"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "unset";
      lenis?.start();
    }
  }, [mobileMenuOpen, lenis]);


  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        mobileMenuOpen ? "z-[100001]" : "z-[9999]"
      } ${
        scrolled ? "bg-navy/95 py-4 backdrop-blur-md" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 items-start md:items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#home" className="flex items-center gap-2">
              <img 
                src="/MAHALXMI ESTATE_GOLD.png" 
                alt="Mahalaxmi Estate" 
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>
          </div>

          {/* Tagline Column (Desktop Only) */}
          <div className="hidden md:block">
            <p className="text-white/60 font-sans text-[11px] leading-tight tracking-wider uppercase">
              Homes that last.<br />Nagpur, IN
            </p>
          </div>

          {/* Contact Column (Desktop Only) */}
          <div className="hidden md:block">
            <p className="text-white/40 font-label text-[10px] tracking-widest uppercase mb-1">Book a visit</p>
            <a href="tel:9326040073" className="text-white hover:text-gold font-sans text-xs tracking-widest transition-colors">
              93260 . 400 . 73
            </a>
          </div>

          {/* Menu Column */}
          <div className="flex justify-end items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="group flex items-center gap-3 text-white font-label text-[10px] tracking-[0.3em] uppercase hover:text-gold transition-colors"
            >
              <span className="hidden md:inline">Menu</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-gold transition-colors" />
                <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-gold transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay (Simplified for this style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy z-[100000] flex flex-col items-center justify-center gap-12"
            data-lenis-prevent
          >
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-display text-5xl hover:text-gold transition-colors italic"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-10 right-10 text-white font-label text-xs tracking-widest uppercase"
            >
              Close [x]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
