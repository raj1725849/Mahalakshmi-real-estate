"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  location: string;
  tag: string;
  tagType: "gold" | "navy";
  specs: string[];
  features: string[];
  price: string;
  offer: string;
  waText: string;
}

const ProjectCard = ({ name, location, tag, tagType, specs, features, price, offer, waText }: ProjectCardProps) => {
  const waLink = `https://wa.me/919326040073?text=${encodeURIComponent(waText)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-navy-mid border border-gold/10 hover:border-gold/30 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 gold-border-glow relative"
    >
      {/* Top Accent Bar */}
      <div className="h-1 bg-gold w-full" />

      <div className="p-8">
        {/* Tag */}
        <span className={`inline-block px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase mb-6 ${
          tagType === "gold" ? "bg-gold text-navy" : "bg-navy text-gold border border-gold/30"
        }`}>
          {tag}
        </span>

        {/* Title */}
        <h3 className="font-accent text-white text-3xl mb-2">{name}</h3>
        <p className="flex items-center gap-2 text-white/50 font-sans text-sm mb-6">
          <i className="fa-solid fa-location-dot text-gold" />
          {location}
        </p>

        {/* Specs Row */}
        <div className="flex flex-wrap gap-4 mb-8 border-y border-white/5 py-4">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70 font-sans text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              {spec}
            </div>
          ))}
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-white/80 font-sans text-sm">
              <i className="fa-solid fa-check text-gold text-xs" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Price & Offer */}
        <div className="mb-8">
          <div className="text-white/50 font-label text-[10px] tracking-widest uppercase mb-1">Price</div>
          <div className="font-display text-gold text-3xl font-bold">{price}</div>
          <div className="mt-2 inline-block bg-gold/10 text-gold-light px-3 py-1 rounded border border-gold/20 text-[10px] font-semibold tracking-wider">
            {offer}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp hover:bg-whatsapp-dark text-white py-3 rounded-xl font-label text-[10px] font-bold tracking-widest text-center transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            WHATSAPP NOW
          </a>
          <button className="border border-gold/30 hover:border-gold text-gold py-3 rounded-xl font-label text-[10px] font-bold tracking-widest transition-all hover:bg-gold/5">
            VIEW FLOOR PLAN
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
