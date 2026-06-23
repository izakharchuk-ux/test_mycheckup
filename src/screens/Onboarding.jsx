import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Activity, TrendingUp, MessageCircle, Calendar, Upload, ArrowRight, SkipForward } from 'lucide-react';

const steps = {
  '1': {
    title: "What's your goal?",
    subtitle: 'Select all that apply',
    options: [
      { icon: Activity, label: 'Track Blood Work', desc: 'Monitor key markers over time', color: 'text-[#0B7BFF] bg-[#DCE9FF]' },
      { icon: TrendingUp, label: 'Monitor Trends', desc: 'See how your health changes', color: 'text-[#2EC4B6] bg-[#DCF5F3]' },
      { icon: MessageCircle, label: 'Share with Doctor', desc: 'Collaborate with your physician', color: 'text-[#22C55E] bg-[#E0FAE9]' },
    ],
    next: '/onboarding/2',
  },
  '2': {
    title: 'How often do you get checkups?',
    subtitle: 'Choose your typical frequency',
    options: [
      { label: 'Monthly', desc: 'I monitor closely' },
      { label: 'Quarterly', desc: 'Every 3 months' },
      { label: 'Twice a year', desc: 'Every 6 months' },
      { label: 'Annually', desc: 'Once a year' },
    ],
    next: '/onboarding/3',
  },
  '3': {
    title: 'Add your first report',
    subtitle: 'Upload a PDF or image of your lab results',
    upload: true,
    next: '/dashboard',
  },
};

export default function Onboarding() {
  const navigate = useNavigate();
  const { step } = useParams();
  const s = steps[step] || steps['1'];
  const stepNum = parseInt(step || '1');
  const [selected, setSelected] = useState([]);

  const toggle = label => setSelected(prev =>
    prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F6FBFF] px-5 py-8">
      <div className="max-w-sm mx-auto w-full flex-1 flex flex-col">
        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(i => (
            <div key={i} className={`flex-1 h-1.5 rounded-full transition-colors ${i <= stepNum ? 'bg-[#0B7BFF]' : 'bg-[#E0EAF1]'}`} />
          ))}
        </div>
        <p className="text-xs font-semibold text-[#0B7BFF] mb-2">Step {stepNum} of 3</p>
        <h1 className="text-2xl font-extrabold text-[#0B2A3B] mb-1">{s.title}</h1>
        <p className="text-sm text-[#6B7787] mb-8">{s.subtitle}</p>

        {/* Options */}
        {!s.upload && (
          <div className="flex flex-col gap-3 flex-1">
            {s.options.map(opt => {
              const Icon = opt.icon;
              const isSelected = selected.includes(opt.label);
              return (
                <button key={opt.label} onClick={() => toggle(opt.label)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all active:scale-[0.98]
                    ${isSelected ? 'border-[#0B7BFF] bg-[#DCE9FF]' : 'border-[#E0EAF1] bg-white'}`}>
                  {Icon && (
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${opt.color || 'bg-[#DCE9FF] text-[#0B7BFF]'}`}>
                      <Icon size={20} />
                    </div>
                  )}
                  <div>
                    <p className={`font-semibold text-sm ${isSelected ? 'text-[#0B7BFF]' : 'text-[#0B2A3B]'}`}>{opt.label}</p>
                    {opt.desc && <p className="text-xs text-[#6B7787] mt-0.5">{opt.desc}</p>}
                  </div>
                  {isSelected && <div className="ml-auto w-5 h-5 rounded-full bg-[#0B7BFF] flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>}
                </button>
              );
            })}
          </div>
        )}

        {/* Upload step */}
        {s.upload && (
          <div className="flex-1 flex flex-col">
            <div className="border-2 border-dashed border-[#0B7BFF] rounded-2xl p-8 flex flex-col items-center justify-center bg-[#DCE9FF]/30 mb-4 cursor-pointer active:scale-[0.98] transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-[#DCE9FF] flex items-center justify-center mb-4">
                <Upload size={24} className="text-[#0B7BFF]" />
              </div>
              <p className="font-semibold text-[#0B2A3B] mb-1">Upload PDF or Image</p>
              <p className="text-xs text-[#6B7787] text-center">PDF, JPG, PNG up to 20MB</p>
              <button className="mt-4 px-5 py-2 bg-[#0B7BFF] text-white text-sm font-semibold rounded-xl">
                Browse files
              </button>
            </div>
            <button onClick={() => navigate('/dashboard')} className="flex items-center justify-center gap-2 text-sm text-[#6B7787] py-3">
              <SkipForward size={16} /> Skip for now
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-6">
          <button onClick={() => navigate(s.next)}
            className="w-full bg-[#0B7BFF] text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-blue-200">
            {s.upload ? 'Upload & Continue' : 'Next'} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
