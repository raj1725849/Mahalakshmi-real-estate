"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import EMICalculator from "./EMICalculator";

const UNIT_TYPES = [
  { id: '2bhk', name: '2 BHK Royale', area: '1,250 Sq.Ft', price: 8500000, img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop' },
  { id: '3bhk', name: '3 BHK Imperial', area: '1,850 Sq.Ft', price: 12500000, img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop' },
];

export default function InteractiveHub() {
  const [selectedUnit, setSelectedUnit] = useState(UNIT_TYPES[0]);

  return (
    <section className="py-20 px-6 bg-white overflow-hidden" id="explore">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#001f3f] mb-4">Your Future Home</h2>
          <p className="text-[#001f3f]/70 max-w-2xl mx-auto">Visualize your space and plan your investment in one place.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Floor Plan Area */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex gap-4 p-1 bg-gray-100 rounded-lg w-fit">
              {UNIT_TYPES.map(unit => (
                <button 
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`px-6 py-2 rounded-md transition-all ${selectedUnit.id === unit.id ? 'bg-[#001f3f] text-white shadow-md' : 'text-[#001f3f]/60 hover:text-[#001f3f]'}`}
                >
                  {unit.name}
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedUnit.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={selectedUnit.img} 
                    alt={selectedUnit.name} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">{selectedUnit.area}</p>
                    <h3 className="text-2xl font-serif">{selectedUnit.name} Layout</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* EMI Calculator Area */}
          <div className="lg:col-span-2">
            <EMICalculator initialPrice={selectedUnit.price} />
          </div>
        </div>
      </div>
    </section>
  );
}
