"use client";

import { motion } from "framer-motion";

const WhyUs = () => {
  const usps = [
    { 
      number: "01",
      title: "Trust",
      desc: "NAREDCO certified developer. Both landmark projects delivered on schedule with 100% transparency.",
      align: "left"
    },
    { 
      number: "02",
      title: "Quality",
      desc: "Superior earthquake-resistant structures using premium materials and modern architectural standards.",
      align: "right"
    },
    { 
      number: "03",
      title: "Impact",
      desc: "200+ families currently residing in our completed projects across Nagpur's prime growth corridors.",
      align: "left"
    }
  ];

  return (
    <section id="about" className="py-32 bg-navy relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25vw] font-display text-white italic whitespace-nowrap">MAHALAXMI</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <span className="font-label text-gold text-xs tracking-[0.5em] uppercase">Philosophy</span>
            <h2 className="font-display text-white text-6xl md:text-8xl leading-none">
              Houses Built <br />
              <span className="text-gold italic">By Heart.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 font-sans text-lg leading-relaxed max-w-md"
          >
            We don't just pour concrete. We architect the backdrop for your family's legacy. Every brick laid is a commitment to the trust you place in us.
          </motion.div>
        </div>

        {/* Asymmetric USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`flex flex-col ${usp.align === "right" ? "md:mt-24" : idx === 1 ? "md:mt-12" : ""} relative`}
            >
              <div className="group">
                <div className="flex items-end gap-4 mb-6">
                  <span className="font-display text-gold/20 text-6xl md:text-8xl leading-none select-none group-hover:text-gold/40 transition-colors">
                    {usp.number}
                  </span>
                  <h3 className="font-display text-white text-3xl md:text-4xl mb-2 italic">
                    {usp.title}
                  </h3>
                </div>
                <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed tracking-wide">
                  {usp.desc}
                </p>
                <div className="w-16 h-[1px] bg-gold/30 mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
