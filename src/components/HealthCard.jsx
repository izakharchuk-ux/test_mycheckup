// Sparkline using SVG — matches Figma HealthCard sparkline area
function Spark({ dir }) {
  const points = dir === 'down'
    ? '0,22 25,18 50,14 80,10 105,7 132,4'
    : '0,4 25,7 50,14 80,18 105,20 132,22';
  return (
    <div className="w-[132px] h-[28px] bg-[#f6fbff] rounded-[4px] overflow-hidden">
      <svg width="132" height="28" viewBox="0 0 132 28">
        <polyline points={points} fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function HealthCard({ label, value, unit, trend, trendLabel, dir = 'down' }) {
  return (
    <div className="flex-1 bg-white border border-[#e0eaf1] rounded-xl p-[14px] flex flex-col gap-2 min-w-0">
      <p className="text-[11px] font-semibold text-[#6b7785]">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-[22px] font-bold text-[#0b2a3b]">{value}</span>
        <span className="text-[11px] text-[#6b7785]">{unit}</span>
      </div>
      <Spark dir={dir} />
      <p className="text-[11px] font-semibold text-[#22c55e]">{trend}&nbsp;&nbsp;{trendLabel}</p>
    </div>
  );
}
