import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-[#F6FBFF]">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B7BFF 0%, #2EC4B6 100%)' }}>
        <div className="absolute inset-0">
          {[140, 200, 260, 320, 380].map((s, i) => (
            <div key={i} className="absolute rounded-full border border-white/10"
              style={{ width: s, height: s, top: -s / 2 + i * 12, right: -s / 2 + i * 8 }} />
          ))}
        </div>
        <div className="relative px-6 pt-16 pb-12 text-white max-w-xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1.5 mb-8">
            <span className="text-xs font-semibold tracking-wide">MYCHECKUPS.IO</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Your Health,<br />Clearly Understood
          </h1>
          <p className="text-white/75 text-base mb-10 max-w-sm">
            Upload your lab results and get instant AI-powered insights, trend tracking, and doctor communication.
          </p>
          <div className="flex gap-3">
            <button onClick={() => navigate('/signup')}
              className="flex items-center gap-2 bg-white text-[#0B7BFF] font-bold px-6 py-3.5 rounded-xl active:scale-95 transition-transform shadow-lg text-sm">
              Get Started <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate('/login')}
              className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl active:scale-95 transition-transform text-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Feature tiles */}
      <div className="flex-1 px-5 py-8 max-w-xl mx-auto w-full">
        <h2 className="text-[15px] font-bold text-[#6b7785] uppercase tracking-wider mb-5 text-center">Why Mycheckups.io</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { emoji: '📋', title: 'Upload Reports', desc: 'PDF, PNG, JPG lab reports — parsed in seconds' },
            { emoji: '📊', title: 'Track Trends', desc: 'See how your markers change over time' },
            { emoji: '💬', title: 'Consult Doctors', desc: 'Share results and get expert comments' },
          ].map(f => (
            <div key={f.title} className="flex items-center gap-4 bg-white rounded-xl border border-[#e0eaf1] px-4 py-4">
              <div className="w-10 h-10 rounded-xl bg-[#ddebff] flex items-center justify-center text-lg flex-shrink-0">{f.emoji}</div>
              <div>
                <p className="font-semibold text-[#0b2a3b] text-[14px]">{f.title}</p>
                <p className="text-[12px] text-[#6b7785] mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => navigate('/signup')}
          className="w-full mt-8 bg-[#0B7BFF] text-white font-bold py-4 rounded-xl active:scale-95 transition-transform shadow-lg shadow-blue-200 text-[15px]">
          Start for free
        </button>
        <p className="text-center text-xs text-[#6b7785] mt-3">No credit card · HIPAA compliant · Free forever</p>
      </div>
    </div>
  );
}
