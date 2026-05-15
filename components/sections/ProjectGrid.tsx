"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BespokeProjectCard = ({ name, location, index, image, details }: any) => {
  const cardRef = useRef(null);
  
  return (
    <div 
      ref={cardRef}
      className="sticky top-20 w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-navy-mid border border-white/5 rounded-[40px] overflow-hidden mb-[10vh] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
      style={{ zIndex: index }}
    >
      {/* Image Side with Parallax */}
      <div className="w-full md:w-3/5 h-[40vh] md:h-[70vh] relative overflow-hidden">
        <motion.img 
          src={image}
          alt={name}
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-mid via-transparent to-transparent hidden md:block" />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-2/5 p-10 md:p-16 flex flex-col justify-center">
        <span className="font-label text-gold text-[10px] tracking-[0.4em] uppercase mb-4 opacity-50">
          Featured Collection . {index + 1}
        </span>
        <h3 className="font-display text-white text-4xl md:text-6xl mb-6 leading-none italic">{name}</h3>
        <p className="font-sans text-white/40 text-sm mb-10 tracking-wide uppercase flex items-center gap-2">
          <span className="w-8 h-[1px] bg-gold/30" /> {location}
        </p>
        
        <div className="space-y-4 mb-12">
          {details.map((detail: string, i: number) => (
            <div key={i} className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-white/30 text-[10px] font-label uppercase">{detail.split(":")[0]}</span>
              <span className="text-white/80 text-xs font-sans">{detail.split(":")[1]}</span>
            </div>
          ))}
        </div>

        <a 
          href={`https://wa.me/919326040073?text=Interested in ${name}`}
          className="group flex items-center gap-4 text-white font-label text-xs tracking-[0.2em] uppercase"
        >
          Explore Residence
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
            <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform text-white group-hover:text-navy" />
          </div>
        </a>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      name: "Mahalaxmi Elite",
      location: "Subhash Nagar, Ambazhari",
      image: "https://i1-e.pinimg.com/1200x/e8/b2/8f/e8b28f7a28f5b9db38278f68690d392b.jpg",
      details: ["Configuration: 2 BHK Luxury", "Area: 1012 Sq.Ft", "Status: Ready to Move", "Cert: NAREDCO Certified"]
    },
    {
      name: "Mahalaxmi Prime",
      location: "Besa – Ghogli, South Nagpur",
      image: "https://i1-e.pinimg.com/1200x/36/a4/74/36a4743b0404a2bae459a021e2da4d78.jpg",
      details: ["Configuration: 2 & 3 BHK", "Area: 1354 Sq.Ft", "Status: Under Construction", "Floors: G+6 Architecture"]
    },
    {
      name: "Mahalaxmi East",
      location: "Pardi Main Road",
      image: "https://i1-e.pinimg.com/1200x/82/22/ff/8222ff4cd547a23b4cca1704be38b79f.jpg",
      details: ["Type: Commercial Spaces", "Visibility: Main Road Frontage", "Status: New Launch", "Investment: High ROI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-navy">
      <div ref={containerRef} className="max-w-[1400px] mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-white text-6xl md:text-9xl leading-[0.8] mb-8">
              The <br />
              <span className="text-gold italic">Collection</span>
            </h2>
            <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed tracking-wide uppercase">
              A curated selection of high-performance residential and commercial properties across Nagpur's most strategic locations.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-label text-gold text-[10px] tracking-[0.5em] uppercase mb-4 opacity-50">Scroll to explore</p>
            <div className="w-[1px] h-32 bg-gradient-to-b from-gold to-transparent inline-block mr-4" />
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="relative">
          {projects.map((project, idx) => (
            <BespokeProjectCard key={idx} {...project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
