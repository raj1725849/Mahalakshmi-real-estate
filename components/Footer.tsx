"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-navy pt-24 pb-8 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12">
        
        {/* TOP SECTION: Newsletter & Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          
          {/* Newsletter Column */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-display text-gold-light text-3xl md:text-5xl leading-tight">
              Stay ahead of the curve. <br />
              <span className="italic text-gold">Subscribe to our Narrative.</span>
            </h3>
            <div className="relative max-w-md group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-gold/20 py-4 font-sans text-gold-light focus:outline-none focus:border-gold transition-colors placeholder:text-gold-light/20"
              />
              <button className="absolute right-0 bottom-4 text-gold hover:translate-x-2 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-gold-dark font-label text-[10px] tracking-widest uppercase">Ecosystem</h4>
              <ul className="space-y-4">
                <li><a href="#projects" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Properties</a></li>
                <li><a href="#services" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Services</a></li>
                <li><a href="#about" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Agents</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-gold-dark font-label text-[10px] tracking-widest uppercase">Insights</h4>
              <ul className="space-y-4">
                <li><a href="#faq" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">FAQ</a></li>
                <li><a href="#contact" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Contact</a></li>
                <li><a href="#legal" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Search</a></li>
              </ul>
            </div>
            <div className="space-y-6 hidden md:block">
              <h4 className="text-gold-dark font-label text-[10px] tracking-widest uppercase">Socials</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Instagram</a></li>
                <li><a href="#" className="text-gold-light text-lg md:text-xl font-display hover:text-gold transition-colors italic">Linkedin</a></li>
                <li><a href="#" className="text-white text-lg md:text-xl font-display hover:text-gold transition-colors italic">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40 border-t border-white/5 pt-16">
          <div className="space-y-3">
            <span className="text-gold font-label text-[10px] tracking-[0.4em] uppercase opacity-50">Head Office</span>
            <p className="text-gold-light font-sans text-lg md:text-xl leading-relaxed">
              Suyog Nagar, Nagpur <br /> Maharashtra - 440015
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-gold font-label text-[10px] tracking-[0.4em] uppercase opacity-50">Email Us</span>
            <a href="mailto:mahalaxmiestate3@gmail.com" className="block text-gold-light font-sans text-lg md:text-xl hover:text-gold transition-colors">
              mahalaxmiestate3@gmail.com
            </a>
          </div>
          <div className="space-y-3">
            <span className="text-gold font-label text-[10px] tracking-[0.4em] uppercase opacity-50">Call Us</span>
            <a href="tel:9326040073" className="block text-gold-light font-sans text-lg md:text-xl hover:text-gold transition-colors">
              +91 93260 40073
            </a>
          </div>
        </div>

        {/* MASSIVE BRANDING BASE */}
        <div className="relative select-none pointer-events-none mb-[-2vw]">
          <h2 className="font-sans text-gold text-[16vw] font-black leading-none tracking-tighter opacity-100 uppercase text-center">
            Mahalaxmi
          </h2>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex gap-8">
            <a href="#" className="text-gold-dark font-label text-[10px] tracking-widest uppercase hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-gold-dark font-label text-[10px] tracking-widest uppercase hover:text-gold transition-colors">Privacy Policy</a>
          </div>
          <p className="text-gold-dark font-label text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Mahalaxmi Estate . Architectural Publication Nagpur
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
