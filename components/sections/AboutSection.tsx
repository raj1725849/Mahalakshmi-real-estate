"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#112250] py-20 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E0C58F]/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-3">
            <span className="font-montserrat text-[#E0C58F] uppercase tracking-[0.4em] text-xs font-bold block">
              Our Story
            </span>
            <h2 className="font-cormorant italic text-5xl md:text-6xl lg:text-7xl text-[#F5F0E9] leading-tight">
              Where Vision <br/> Meets Value
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="font-dm-sans text-[#F5F0E9]/90 text-lg leading-relaxed max-w-xl">
              Welcome to Mahalaxmi Estate — a name built on trust, transparency, and an unwavering commitment to quality. 
              Every project we undertake blends modern design, superior construction, and strategic location.
            </p>
            <p className="font-dm-sans text-[#F5F0E9]/70 text-base leading-relaxed max-w-xl">
              Our association with NAREDCO Nagpur underscores our dedication to industry excellence and ethical standards, 
              ensuring that every square foot we deliver is a testament to our legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 pt-10 border-t border-[#E0C58F]/20">
            <div className="space-y-2">
              <p className="text-[#E0C58F] text-5xl font-bold font-cormorant italic">100%</p>
              <p className="text-[#F5F0E9]/60 text-xs uppercase tracking-[0.2em] font-montserrat font-semibold">
                Satisfaction
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[#E0C58F] text-5xl font-bold font-cormorant italic">Prime</p>
              <p className="text-[#F5F0E9]/60 text-xs uppercase tracking-[0.2em] font-montserrat font-semibold">
                Nagpur Hubs
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Column */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[550px] md:h-[700px] overflow-hidden rounded-sm border border-[#E0C58F]/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
          >
            <Image 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop" 
              alt="Mahalaxmi Estate Editorial Architecture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              priority
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/40 to-transparent"></div>
          </motion.div>
          
          {/* Editorial Frame Decoration */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#E0C58F]/40 -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#E0C58F]/10 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
