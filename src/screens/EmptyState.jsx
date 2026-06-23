import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';

export default function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F6FBFF] flex flex-col items-center justify-center px-5 pb-20">
      <div className="w-full max-w-sm text-center">
        <div className="w-32 h-32 rounded-full bg-[#DCE9FF] flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🩺</span>
        </div>
        <h2 className="text-2xl font-extrabold text-[#0B2A3B] mb-3">No reports yet</h2>
        <p className="text-[#6B7787] mb-8 leading-relaxed">
          Upload your first lab report to start tracking your health and getting personalized insights.
        </p>
        <button onClick={() => navigate('/upload')}
          className="w-full bg-[#0B7BFF] text-white font-bold py-4 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mb-4">
          <Upload size={20} /> Upload First Report
        </button>
        <button onClick={() => navigate('/dashboard')} className="text-sm text-[#6B7787]">
          Back to dashboard
        </button>

        {/* Tips */}
        <div className="mt-10 flex flex-col gap-3 text-left">
          {[
            { emoji: '📋', tip: 'Supports CBC, Lipid Panel, Metabolic, Thyroid & more' },
            { emoji: '🔒', tip: 'Your data is encrypted and HIPAA compliant' },
            { emoji: '📊', tip: 'Track trends and get AI-powered insights instantly' },
          ].map(t => (
            <div key={t.tip} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E0EAF1]">
              <span className="text-xl">{t.emoji}</span>
              <p className="text-sm text-[#6B7787]">{t.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
