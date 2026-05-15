"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Property Sales",
    desc: "Maximize the value of your assets with our strategic marketing and expert negotiation. We leverage our extensive network in Nagpur to ensure your property reaches the right buyers at the premium price point.",
    type: "residential"
  },
  {
    id: "02",
    title: "Buying Advisory",
    desc: "Finding the perfect home or commercial space requires more than just a search. We provide end-to-end advisory, from identification and legal vetting to final possession, ensuring a seamless acquisition.",
    type: "commercial"
  },
  {
    id: "03",
    title: "Real Estate Investment",
    desc: "Identify high-yield opportunities in Nagpur's fastest-growing corridors. We provide data-driven insights and strategic consulting for long-term wealth creation through real estate assets.",
    type: "advisory"
  },
  {
    id: "04",
    title: "Project Marketing",
    desc: "We partner with developers to provide comprehensive sales and marketing solutions. From brand positioning to lead conversion, we build the narrative that sells out landmark projects.",
    type: "consulting"
  }
];

const BlueprintGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case "residential":
      return (
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 800 400" fill="none">
          <path d="M100 50H700V350H100V50Z" stroke="white" strokeWidth="0.5"/>
          <path d="M100 200H700" stroke="white" strokeWidth="0.5" strokeDasharray="5 5"/>
          <path d="M400 50V350" stroke="white" strokeWidth="0.5" strokeDasharray="5 5"/>
          <circle cx="400" cy="200" r="100" stroke="gold" strokeWidth="0.5"/>
          <path d="M300 100L500 300" stroke="gold" strokeWidth="0.5" opacity="0.5"/>
          <path d="M500 100L300 300" stroke="gold" strokeWidth="0.5" opacity="0.5"/>
        </svg>
      );
    case "commercial":
      return (
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 800 400" fill="none">
          <rect x="150" y="50" width="500" height="300" stroke="white" strokeWidth="0.5"/>
          <path d="M150 100H650M150 150H650M150 200H650M150 250H650M150 300H650" stroke="white" strokeWidth="0.2"/>
          <path d="M250 50V350M350 50V350M450 50V350M550 50V350" stroke="white" strokeWidth="0.2"/>
          <path d="M150 50L650 350M650 50L150 350" stroke="gold" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      );
    case "advisory":
      return (
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 800 400" fill="none">
          <path d="M100 300L250 100L550 150L700 350L400 380L100 300Z" stroke="white" strokeWidth="0.5"/>
          <path d="M250 100V380" stroke="white" strokeWidth="0.3" strokeDasharray="4 4"/>
          <path d="M550 150V380" stroke="white" strokeWidth="0.3" strokeDasharray="4 4"/>
          <path d="M100 200H700" stroke="gold" strokeWidth="0.2"/>
          <circle cx="400" cy="240" r="120" stroke="gold" strokeWidth="0.5" strokeDasharray="10 5"/>
        </svg>
      );
    case "consulting":
      return (
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 800 400" fill="none">
          <path d="M100 350L200 300L350 320L500 250L650 200L750 100" stroke="gold" strokeWidth="1" strokeLinecap="round"/>
          <path d="M100 350H750V50H100V350Z" stroke="white" strokeWidth="0.5"/>
          <path d="M200 350V50M300 350V50M400 350V50M500 350V50M600 350V50M700 350V50" stroke="white" strokeWidth="0.1"/>
          <path d="M100 100H750M100 150H750M100 200H750M100 250H750M100 300H750" stroke="white" strokeWidth="0.1"/>
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section id="services" className="py-32 bg-navy relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-24 space-y-4">
          <span className="font-label text-gold text-xs tracking-[0.5em] uppercase">Expertise</span>
          <h2 className="font-display text-white text-6xl md:text-8xl leading-none italic">
            Architectural <span className="text-gold not-italic">&</span> <br /> 
            Engineering <span className="text-gold not-italic">Services</span>
          </h2>
        </div>

        <div className="border-t border-white/10">
          {services.map((service) => (
            <div 
              key={service.id}
              className="border-b border-white/10 relative group cursor-pointer"
              onMouseEnter={() => setOpenId(service.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 relative z-10 transition-all duration-500">
                
                <div className="flex items-start gap-8 md:gap-16">
                  <span className="font-label text-gold text-xs mt-4 tracking-widest opacity-40">
                    {service.id}
                  </span>
                  <h3 className="font-display text-white text-4xl md:text-7xl leading-none transition-all duration-500 group-hover:translate-x-4">
                    {service.title}
                  </h3>
                </div>

                <div className="hidden md:flex items-center gap-12">
                  <motion.div 
                    animate={{ rotate: openId === service.id ? 45 : 0 }}
                    className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-gold group-hover:border-gold/50 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </motion.div>
                </div>

              </div>

              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-16 md:pb-24 flex flex-col md:flex-row justify-end gap-12 px-12 md:px-24">
                      <p className="font-sans text-white/50 text-lg md:text-xl leading-relaxed max-w-xl text-right">
                        {service.desc}
                      </p>
                    </div>
                    {/* The Blueprint Reveal */}
                    <div className="absolute inset-0 z-0">
                      <BlueprintGraphic type={service.type} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
