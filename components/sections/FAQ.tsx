"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "What defines a Mahalaxmi Home?",
    answer: "A Mahalaxmi home is defined by its architectural soul—where heritage meets modern precision. We prioritize earthquake-resistant structures, premium materials, and a commitment to sustainable luxury that lasts for generations.",
    category: "Philosophy",
    span: "md:col-span-8"
  },
  {
    id: "02",
    question: "Is my investment secure?",
    answer: "Absolutely. All our projects are RERA and NAREDCO certified. We maintain 100% legal transparency and have a track record of delivering landmark projects on schedule.",
    category: "Security",
    span: "md:col-span-4"
  },
  {
    id: "03",
    question: "Current possession status?",
    answer: "Our completed projects in Narendra Nagar and Suyog Nagar are 100% sold and occupied. Our upcoming elite developments are on track for their respective milestones.",
    category: "Timeline",
    span: "md:col-span-4 md:row-span-2"
  },
  {
    id: "04",
    question: "How to book a site visit?",
    answer: "You can book an exclusive site visit directly through our website or via WhatsApp. Our team will coordinate a personalized walkthrough of our ongoing and finished projects.",
    category: "Experience",
    span: "md:col-span-8"
  },
  {
    id: "05",
    question: "What premium materials are used?",
    answer: "We use superior earthquake-resistant TMT steel, premium grade concrete, and high-end finishing materials from certified global brands to ensure lasting architectural integrity.",
    category: "Engineering",
    span: "md:col-span-8"
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-32 bg-navy relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-20 space-y-4">
          <span className="font-label text-gold text-xs tracking-[0.5em] uppercase">Inquiries</span>
          <h2 className="font-display text-white text-6xl md:text-8xl leading-none italic">
            Frequently Asked <span className="text-gold not-italic">Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-min">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              layout
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className={`
                ${faq.span} group cursor-pointer relative overflow-hidden 
                rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md 
                p-8 transition-colors hover:bg-white/[0.06] hover:border-gold/30
                ${openId === faq.id ? "border-gold/50 bg-white/[0.08]" : ""}
              `}
            >
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start gap-4">
                  <span className="font-label text-gold/40 text-xs tracking-widest uppercase">
                    {faq.category}
                  </span>
                  <motion.div 
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    className="text-gold"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-display text-white text-2xl md:text-4xl leading-tight">
                    {faq.question}
                  </h3>
                  
                  <AnimatePresence mode="wait">
                    {openId === faq.id && (
                      <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <p className="font-sans text-white/50 text-lg leading-relaxed pt-4 border-t border-white/10">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
