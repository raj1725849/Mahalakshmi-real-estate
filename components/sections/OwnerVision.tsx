"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OwnerVision() {
  return (
    <section className="py-24 bg-[#001f3f] text-white overflow-hidden" id="vision">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Founder's Vision</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">Building Homes, <br />Not Just Buildings</h2>
            </div>

            <div className="relative">
              <span className="absolute -top-4 -left-6 text-6xl text-[#D4AF37]/20 font-serif">"</span>
              <p className="text-xl md:text-2xl italic text-[#D4AF37] font-serif leading-relaxed">
                To me, Mahalaxmi is about the families who trust us with their dreams. Every brick we lay is a promise kept.
              </p>
            </div>

            <div className="space-y-4 text-white/80 leading-relaxed font-sans">
              <p>
                When I started this company, I didn't want to be the biggest developer in Nagpur—I wanted to be the most trusted. I grew up here, and I know what a home means to us. It's not just an investment; it's where life happens.
              </p>
              <p>
                That's why I'm still on-site for every major project milestone. I want to make sure that when you step into your new home, you feel the same care and quality that I'd want for my own family.
              </p>
            </div>

            <div className="pt-4">
              <div className="font-serif text-2xl text-[#D4AF37]">The Founder</div>
              <div className="text-sm uppercase tracking-widest text-white/60">Mahalaxmi Estate</div>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#16285a]/50 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center text-white/20 text-center p-12">
                <div className="space-y-4">
                  <div className="w-20 h-20 border-2 border-[#D4AF37]/30 rounded-full mx-auto flex items-center justify-center text-4xl">👤</div>
                  <p className="font-serif italic text-lg">[ Owner Image Placeholder ]</p>
                  <p className="text-xs uppercase tracking-widest font-sans">Click to replace with official photo</p>
                </div>
              </div>
            </div>
            
            {/* Design Accents */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] -z-10 rounded-lg opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-xl opacity-50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
