export default function StatCard({ icon, label, value, sub }) {
  return (
    <div className="flex-1 bg-white rounded-2xl border border-[#E0EAF1] p-3 flex flex-col gap-1 min-w-0">
      <span className="text-lg">{icon}</span>
      <p className="text-[11px] text-[#6B7787] leading-tight">{label}</p>
      <p className="text-sm font-bold text-[#0B2A3B] leading-tight">{value}</p>
      {sub && <p className="text-[10px] text-[#6B7787]">{sub}</p>}
    </div>
  );
}
