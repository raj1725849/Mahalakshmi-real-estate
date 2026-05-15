"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const narrativeSteps = [
  {
    index: "01",
    headline: "The Foundation of Home",
    category: "Family First",
    detail: "Where your family's story begins. We don't just build structures; we architect the backdrop for your most cherished memories, ensuring every space feels like a sanctuary.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    index: "02",
    headline: "Generational Trust",
    category: "Our Legacy",
    detail: "A partnership built on transparency. For over a decade, Nagpur's families have chosen us for our commitment to timely delivery and 100% legal integrity. Your trust is our greatest landmark.",
    image: "https://images.unsplash.com/photo-1600607687940-477a284e68c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    index: "03",
    headline: "Future-Proof Living",
    category: "Innovation",
    detail: "Designing for the next generation. We integrate sustainable engineering with modern luxury, ensuring your home remains a valuable and efficient legacy for your children to inherit.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  }
];

const Storytelling = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".story-step-content");
      const infoSteps = gsap.utils.toArray(".story-step-info");
      const images = gsap.utils.toArray(".story-image");
      const indices = gsap.utils.toArray(".story-index");

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        }
      });

      // Initial state
      gsap.set(steps, { opacity: 0, y: 50 });
      gsap.set(infoSteps, { opacity: 0 });
      gsap.set(images, { opacity: 0, scale: 1.1 });
      gsap.set(indices, { opacity: 0.4, color: "#FFFFFF" });

      narrativeSteps.forEach((_, i) => {
        const step = steps[i] as HTMLElement;
        const info = infoSteps[i] as HTMLElement;
        const image = images[i] as HTMLElement;
        const index = indices[i] as HTMLElement;

        // Enter animation
        mainTl.to(step, { opacity: 1, y: 0, duration: 1 }, i * 3)
              .to(info, { opacity: 1, duration: 1 }, "<")
              .to(step.querySelector(".mask-text"), { opacity: 1, duration: 0.1 }, "<")
              .to(image, { opacity: 0.15, scale: 1, duration: 1.5 }, "<")
              .to(index, { opacity: 1, color: "#C9A847", duration: 0.5 }, "<");

        // Stay visible for a bit
        mainTl.to({}, { duration: 1 });

        // Exit animation (if not last)
        if (i < steps.length - 1) {
          mainTl.to(step, { opacity: 0, y: -50, duration: 1 })
                .to(info, { opacity: 0, duration: 1 }, "<")
                .to(image, { opacity: 0, duration: 1 }, "<")
                .to(index, { opacity: 0.4, color: "#FFFFFF", duration: 0.5 }, "<");
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      {/* Floating Visual Area */}
      <div className="absolute inset-0 z-0">
        {narrativeSteps.map((step, idx) => (
          <div 
            key={idx}
            className="story-image absolute inset-0 bg-cover bg-center pointer-events-none grayscale blur-sm"
            style={{ backgroundImage: `url(${step.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
      </div>

      <div ref={triggerRef} className="relative z-10 h-screen flex items-center">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LEFT: Index */}
          <div className="hidden md:flex md:col-span-1 flex-col gap-8 py-12 border-r border-white/5">
            {narrativeSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="story-index font-label text-xs tracking-widest transition-all duration-500"
              >
                ({step.index})
              </div>
            ))}
          </div>

          {/* CENTER: Narrative Content */}
          <div className="md:col-span-8 relative min-h-[400px]">
            {narrativeSteps.map((step, idx) => (
              <div key={idx} className="story-step-content absolute inset-0 flex flex-col justify-center">
                <div className="overflow-hidden mb-6">
                  <h2 className="mask-text font-display text-white text-5xl md:text-[9rem] leading-[0.85] tracking-tighter italic">
                    {step.headline}
                  </h2>
                </div>
                <div className="step-detail max-w-xl">
                  <p className="font-sans text-white/50 text-base md:text-xl leading-relaxed tracking-wide">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Supporting Info */}
          <div className="hidden md:flex md:col-span-3 flex-col justify-center items-end text-right">
            {narrativeSteps.map((step, idx) => (
              <div key={idx} className="story-step-info absolute group h-full flex flex-col justify-center items-end">
                <span className="font-label text-gold text-[11px] tracking-[0.4em] uppercase mb-4 block">
                  {step.category}
                </span>
                <div className="w-24 h-[1px] bg-gold/30 ml-auto" />
                <p className="font-label text-white/20 text-[10px] tracking-widest uppercase mt-6 group-hover:text-gold transition-colors">
                  Mahalaxmi Estate <br /> Nagpur, IN
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Storytelling;
