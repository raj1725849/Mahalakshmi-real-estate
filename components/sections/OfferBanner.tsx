"use client";
import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState({ h: 48, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-[10001] bg-[#D4AF37] text-[#001f3f] py-1.5 md:py-2 px-4 flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4 text-[10px] md:text-sm font-bold shadow-lg text-center"
    >
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 animate-pulse" />
        <span>Early Bird Offer: Special GST Benefit for First 10 Bookings</span>
      </div>
      <div className="flex gap-2 tabular-nums">
        <span>{String(timeLeft.h).padStart(2, '0')}h</span>
        <span>{String(timeLeft.m).padStart(2, '0')}m</span>
        <span>{String(timeLeft.s).padStart(2, '0')}s</span>
      </div>
    </motion.div>
  );
}
