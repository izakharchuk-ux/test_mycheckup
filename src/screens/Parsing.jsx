import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader } from 'lucide-react';

const steps = [
  { label: 'Extracting data from file', delay: 0 },
  { label: 'Identifying markers', delay: 800 },
  { label: 'Analyzing results', delay: 1600 },
  { label: 'Generating insights', delay: 2200 },
];

export default function Parsing() {
  const navigate = useNavigate();
  const [done, setDone] = useState([]);

  useEffect(() => {
    const timers = steps.map((s, i) =>
      setTimeout(() => setDone(d => [...d, i]), s.delay + 600)
    );
    const nav = setTimeout(() => navigate('/report/1'), 3200);
    return () => { timers.forEach(clearTimeout); clearTimeout(nav); };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#F6FBFF] flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-sm text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-[#DCE9FF] animate-ping opacity-50" />
          <div className="relative w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0B7BFF, #2EC4B6)' }}>
            <span className="text-3xl">🩺</span>
          </div>
        </div>

        <h2 className="text-xl font-extrabold text-[#0B2A3B] mb-2">Analyzing your report</h2>
        <p className="text-sm text-[#6B7787] mb-8">This usually takes 30 seconds…</p>

        <div className="flex flex-col gap-3 text-left">
          {steps.map((s, i) => (
            <div key={i} className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-500
              ${done.includes(i) ? 'bg-[#E0FAE9] border-[#22C55E]/30' : 'bg-white border-[#E0EAF1]'}`}>
              {done.includes(i)
                ? <CheckCircle size={20} className="text-[#22C55E] flex-shrink-0" />
                : i === done.length
                  ? <Loader size={20} className="text-[#0B7BFF] animate-spin flex-shrink-0" />
                  : <div className="w-5 h-5 rounded-full border-2 border-[#E0EAF1] flex-shrink-0" />
              }
              <span className={`text-sm font-medium ${done.includes(i) ? 'text-[#22C55E]' : i === done.length ? 'text-[#0B7BFF]' : 'text-[#6B7787]'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
