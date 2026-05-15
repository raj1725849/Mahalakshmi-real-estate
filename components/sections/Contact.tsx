"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy-cinematic relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="block font-label text-gold text-xs tracking-[0.3em] uppercase mb-4"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-accent text-white text-4xl md:text-6xl mb-8"
            >
              Let's Discuss <br />Your Future Home.
            </motion.h2>

            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <i className="fa-solid fa-phone" />
                </div>
                <div>
                  <p className="text-white/40 font-label text-[10px] tracking-widest uppercase mb-1">Call Us</p>
                  <a href="tel:9326040073" className="text-white hover:text-gold font-sans text-lg tracking-wide transition-colors">93260 40073 / 93260 40075</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div>
                  <p className="text-white/40 font-label text-[10px] tracking-widest uppercase mb-1">Email Us</p>
                  <a href="mailto:mahalaxmiestate3@gmail.com" className="text-white hover:text-gold font-sans text-lg tracking-wide transition-colors">mahalaxmiestate3@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/20 group-hover:bg-gold/20 transition-colors">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div>
                  <p className="text-white/40 font-label text-[10px] tracking-widest uppercase mb-1">Office Location</p>
                  <p className="text-white font-sans text-lg tracking-wide max-w-sm">
                    Plot No. 1, Ground Floor, Guruniwas Apt, Suyog Nagar, Nagpur - 440015
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-gold/20 p-8 md:p-12 rounded-3xl backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/60 font-label text-[10px] tracking-widest uppercase ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 font-label text-[10px] tracking-widest uppercase ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 font-label text-[10px] tracking-widest uppercase ml-1">Interested Project</label>
                <select className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors appearance-none">
                  <option>Mahalaxmi Elite (Subhash Nagar)</option>
                  <option>Mahalaxmi Prime (Besa-Ghogli)</option>
                  <option>Mahalaxmi East (Pardi Road)</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 font-label text-[10px] tracking-widest uppercase ml-1">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:border-gold outline-none transition-colors"></textarea>
              </div>
              <button className="w-full bg-gold hover:bg-gold-dark text-navy py-4 rounded-xl font-label text-sm font-bold tracking-widest transition-all hover:-translate-y-1 shadow-lg">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 h-[400px] w-full rounded-3xl overflow-hidden border border-gold/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.062828456839!2d79.0805555750337!3d21.11005558055106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf9f8f9f8f9f%3A0x0!2zMjHCsDA2JzM2LjIiTiA3OcKwMDUnMDYuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
