import { useNavigate } from 'react-router-dom';
import { Activity, TrendingUp, MessageCircle, ArrowRight, Heart } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Upload Reports', desc: 'Securely upload PDFs and lab images in seconds', color: 'bg-[#DCE9FF] text-[#0B7BFF]' },
  { icon: TrendingUp, title: 'AI Analysis', desc: 'Instantly understand every marker and trend', color: 'bg-[#DCF5F3] text-[#2EC4B6]' },
  { icon: MessageCircle, title: 'Doctor Insights', desc: 'Share results and receive expert comments', color: 'bg-[#E0FAE9] text-[#22C55E]' },
];

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B7BFF 0%, #2EC4B6 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute rounded-full border-2 border-white"
              style={{ width: 120 + i * 80, height: 120 + i * 80, top: -60 + i * 20, right: -60 + i * 20, opacity: 0.3 - i * 0.05 }} />
          ))}
        </div>
        <div className="relative px-6 pt-16 pb-10 text-white max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <Heart size={16} className="text-white" />
            </div>
            <span className="font-bold text-white/90 text-sm tracking-wide">Mycheckups.io</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
            Your Health,<br />Clearly Understood
          </h1>
          <p className="text-white/80 text-base lg:text-lg mb-8 max-w-md">
            Upload your lab results and get instant AI-powered analysis, trend tracking, and direct doctor communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate('/signup')}
              className="flex items-center justify-center gap-2 bg-white text-[#0B7BFF] font-bold px-6 py-3.5 rounded-2xl active:scale-95 transition-transform shadow-lg"
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white font-semibold px-6 py-3.5 rounded-2xl active:scale-95 transition-transform"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 px-5 py-8 max-w-2xl mx-auto w-full">
        <h2 className="text-lg font-bold text-[#0B2A3B] mb-5 text-center">Everything you need in one place</h2>
        <div className="flex flex-col gap-4">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="flex items-start gap-4 bg-white rounded-2xl border border-[#E0EAF1] p-4 shadow-sm">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                <Icon size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#0B2A3B]">{title}</p>
                <p className="text-sm text-[#6B7787] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => navigate('/signup')} className="w-full bg-[#0B7BFF] text-white font-bold py-4 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-blue-200">
            Start for free
          </button>
          <p className="text-xs text-[#6B7787] mt-3">No credit card required · HIPAA compliant</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-[#6B7787] border-t border-[#E0EAF1]">
        © 2024 Mycheckups.io · Privacy · Terms
      </footer>
    </div>
  );
}
