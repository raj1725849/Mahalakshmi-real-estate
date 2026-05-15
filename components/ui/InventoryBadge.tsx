export default function InventoryBadge({ count, label }: { count: number, label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#001f3f]/10 backdrop-blur-md border border-[#D4AF37]/30 px-3 py-1 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
      </span>
      {count}% {label}
    </div>
  );
}
