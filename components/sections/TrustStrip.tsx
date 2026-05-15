"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const TrustStrip = () => {
  const stats = [
    { label: "COMPLETED PROJECTS", value: 2, suffix: "+" },
    { label: "ON-TIME DELIVERY", value: 100, suffix: "%" },
    { label: "HAPPY FAMILIES", value: 200, suffix: "+" },
    { label: "VIDARBHA CERTIFIED", value: "NAREDCO", isText: true },
  ];

  return (
    <section className="bg-gold py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-navy/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
              <div className="font-display text-navy text-4xl md:text-5xl font-bold mb-2">
                {stat.isText ? (
                  stat.value
                ) : (
                  <Counter target={stat.value as number} suffix={stat.suffix} />
                )}
              </div>
              <div className="font-label text-navy/70 text-[10px] md:text-xs tracking-[0.2em] font-semibold uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
