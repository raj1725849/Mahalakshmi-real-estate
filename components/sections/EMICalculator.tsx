"use client";
import { useState, useEffect } from "react";
import { Info } from "lucide-react";

export default function EMICalculator({ initialPrice }: { initialPrice: number }) {
  const [loanAmount, setLoanAmount] = useState(initialPrice * 0.8);
  const [tenure, setTenure] = useState(20);
  const [rate, setRate] = useState(8.5);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiCalc = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(Math.round(emiCalc));
  }, [loanAmount, tenure, rate]);

  useEffect(() => {
    setLoanAmount(initialPrice * 0.8);
  }, [initialPrice]);

  return (
    <div className="bg-[#001f3f] text-white p-8 rounded-2xl shadow-2xl border border-[#D4AF37]/30">
      <h3 className="text-2xl font-serif text-[#D4AF37] mb-6">Financial Planner</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-white/70">Loan Amount (₹)</label>
            <span className="font-bold text-[#D4AF37]">₹{(loanAmount / 100000).toFixed(1)}L</span>
          </div>
          <input 
            type="range" min={initialPrice * 0.5} max={initialPrice * 0.9} step={100000}
            value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-[#D4AF37]"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm text-white/70">Tenure (Years)</label>
            <span className="font-bold text-[#D4AF37]">{tenure}y</span>
          </div>
          <input 
            type="range" min={5} max={30} step={1}
            value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-[#D4AF37]"
          />
        </div>

        <div className="pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
            <Info className="w-4 h-4" />
            <span className="text-xs uppercase tracking-widest font-bold">Estimated Monthly EMI</span>
          </div>
          <div className="text-5xl font-serif mb-6">₹{emi.toLocaleString()}*</div>
          
          <button className="w-full bg-[#D4AF37] text-[#001f3f] py-4 rounded-xl font-bold hover:bg-[#C5A028] transition-all shadow-xl active:scale-95">
            Download Detailed Pay Plan
          </button>
          <p className="text-[10px] text-white/40 mt-4 text-center">*Approximate value. T&C Apply. Subject to bank approval.</p>
        </div>
      </div>
    </div>
  );
}
