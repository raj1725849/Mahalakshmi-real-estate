"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const legacyEras = [
  {
    year: "2018",
    title: "The First Promise",
    desc: "We started with a simple belief: Nagpur deserved more than just buildings; it deserved homes that breathe. Mahalaxmi Heights was our first handshake with this city—a promise of quality that we were determined to keep. Seeing the first lights turn on in Subhash Nagar remains the foundation of every brick we've laid since.",
    image: "https://i.pinimg.com/736x/52/83/10/5283108b0f4aa0934b6248dc29b753c0.jpg",
    project: "Mahalaxmi Heights",
    location: "Narendra Nagar"
  },
  {
    year: "2021",
    title: "Scaling the Trust",
    desc: "Success for us isn't about selling units; it's about the silence of a structure that works perfectly. In Guruniwas Apartment, we proved our first milestone wasn't an accident. We refined our craft, mastered the timeline, and earned the seat at the table with 100+ more families. We don't just build apartments; we architect the backdrop for your family's most important memories.",
    image: "https://i1-e.pinimg.com/1200x/87/d4/5d/87d45d86bd0d77ab81dfcb7bcb4bd8e3.jpg",
    project: "Guruniwas Apartment",
    location: "Suyog Nagar"
  },
  {
    year: "2024",
    title: "The Future Narrative",
    desc: "Today, our legacy isn't just what's behind us—it's the clarity with which we see the future. We are engineering a new standard for Nagpur, where architectural luxury meets ecological responsibility. Our past years have given us the experience; our future projects will give you a lifestyle that belongs in the next era.",
    image: "https://i1-e.pinimg.com/736x/4b/09/9d/4b099d328ab798d96d431fe4dc84bf3d.jpg",
    project: "Vision 2025",
    location: "Nagpur Elite"
  }
];

const Legacy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".legacy-slide");
      
      // Universal Horizontal scroll animation
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          start: "top top",
          end: () => `+=${containerRef.current?.offsetWidth}`,
          invalidateOnRefresh: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-navy overflow-hidden">
      <div 
        ref={containerRef} 
        className="flex flex-row h-screen w-[300vw] will-change-transform"
      >
        {legacyEras.map((era, idx) => (
          <div 
            key={idx} 
            className="legacy-slide relative w-screen h-full flex items-center px-8 md:px-20 overflow-hidden"
          >
            {/* Massive Background Year */}
            <div className="year-bg absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
              <span className="font-display text-white/[0.03] text-[40vw] md:text-[50vw] leading-none">
                {era.year}
              </span>
            </div>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Image Side */}
              <div className="md:col-span-7 relative group">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-white/10">
                  <img 
                    src={era.image} 
                    alt={era.project} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  
                  {/* Floating Project Label */}
                  <div className="absolute bottom-6 left-6">
                    <p className="font-label text-gold text-[10px] tracking-widest uppercase mb-1">{era.location}</p>
                    <h4 className="font-display text-white text-2xl italic">{era.project}</h4>
                  </div>
                </div>
                {/* Architectural Accent Line */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r border-b border-gold/30 pointer-events-none" />
              </div>

              {/* Text Side */}
              <div className="md:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="font-label text-gold text-xs tracking-[0.5em] uppercase block">
                    Our Legacy . {era.year}
                  </span>
                  <h2 className="font-display text-white text-5xl md:text-7xl leading-[0.9] tracking-tighter">
                    {era.title.split(' ')[0]} <br />
                    <span className="italic text-gold">{era.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                </div>
                
                <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed max-w-md tracking-wide">
                  {era.desc}
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <div className="w-12 h-[1px] bg-gold/50" />
                  <span className="font-label text-white/30 text-[10px] tracking-widest uppercase">
                    Sustainable Excellence
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Legacy;
