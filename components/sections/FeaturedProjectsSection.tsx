"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import InventoryBadge from '@/components/ui/InventoryBadge';

const projects = [
  {
    title: "Mahalaxmi Elite",
    location: "Subhash Nagar, Nagpur",
    type: "Residential | 2 BHK",
    status: "Active",
    inventory: 92,
    image: "https://i1-e.pinimg.com/1200x/e8/b2/8f/e8b28f7a28f5b9db38278f68690d392b.jpg",
  },
  {
    title: "Mahalaxmi Prime",
    location: "Besa–Ghogli, Nagpur",
    type: "Residential | 2 & 3 BHK",
    status: "Active",
    inventory: 78,
    image: "https://i1-e.pinimg.com/1200x/36/a4/74/36a4743b0404a2bae459a021e2da4d78.jpg",
  },
  {
    title: "Mahalaxmi Pride",
    location: "Besa–Pipla Road, Nagpur",
    type: "Residential | 2 BHK",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
  },
  {
    title: "Mahalaxmi East",
    location: "Pardi Road, Nagpur",
    type: "Commercial | 5 Floor Complex",
    status: "Upcoming",
    image: "https://i1-e.pinimg.com/1200x/82/22/ff/8222ff4cd547a23b4cca1704be38b79f.jpg",
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section className="py-24 bg-[#112250] text-[#F5F0E9]" id="projects">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display italic text-[#E0C58F] mb-6"
          >
            Featured Projects
          </motion.h2>
          <div className="w-24 h-1 bg-[#E0C58F] mx-auto mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            A curated selection of our finest developments, where architectural excellence 
            meets modern lifestyle. Each project is a testament to our commitment to 
            quality and timely delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-2xl border border-[#E0C58F]/20 bg-[#16285a] transition-all duration-500 group-hover:border-[#E0C58F]/50 group-hover:shadow-[0_0_30px_rgba(224,197,143,0.1)]">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#112250] via-[#112250]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 bg-[#112250]/10 group-hover:bg-transparent transition-colors" />

                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`px-6 py-2 rounded-full text-xs font-label font-bold uppercase tracking-[0.2em] shadow-lg ${
                      project.status === 'Active' 
                        ? 'bg-[#E0C58F] text-[#112250]' 
                        : 'bg-[#16285a]/90 border border-[#E0C58F]/40 text-[#E0C58F] backdrop-blur-sm'
                    }`}
                  >
                    {project.status}
                  </motion.span>
                </div>

                {/* Inventory Badge */}
                {project.inventory && (
                  <div className="absolute top-6 left-6 z-10">
                    <InventoryBadge count={project.inventory} label="Reserved" />
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="inline-block text-[#E0C58F] text-xs font-label font-bold uppercase tracking-[0.3em] mb-4">
                    {project.type}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display italic tracking-tight mb-3 text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-6 text-[#F5F0E9]/80">
                    <svg className="w-4 h-4 text-[#E0C58F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm md:text-base font-sans font-medium tracking-wide">
                      {project.location}
                    </p>
                  </div>
                  
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-[#E0C58F] text-sm font-label font-bold uppercase tracking-[0.2em] group/btn"
                  >
                    <span>View Project Details</span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 border-2 border-[#E0C58F] text-[#E0C58F] font-label font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#E0C58F] hover:text-[#112250] transition-all duration-300"
          >
            Explore All Ventures
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
