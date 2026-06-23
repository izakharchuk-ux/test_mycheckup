import { useNavigate } from 'react-router-dom';

export default function EmptyState() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F6FBFF] flex flex-col items-center justify-center px-5 pb-20">
      {/* Top nav */}
      <div className="fixed top-0 left-0 right-0 h-14 flex items-center px-4 bg-white border-b border-[#e0eaf1] z-30">
        <span className="text-[15px] font-bold text-[#0b2a3b] flex-1">Mycheckups.io</span>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center">
          <span className="text-white text-xs font-bold">OK</span>
        </div>
      </div>

      <div className="w-full max-w-sm text-center mt-14">
        <div className="w-28 h-28 rounded-full bg-[#ddebff] flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🩺</span>
        </div>
        <h2 className="text-[22px] font-extrabold text-[#0b2a3b] mb-3">No Reports Yet</h2>
        <p className="text-[13px] text-[#6b7785] mb-8 leading-relaxed">
          Upload your first health checkup to start tracking your results. We'll help you visualise trends and compare over time.
        </p>

        <button onClick={() => navigate('/upload')}
          className="w-full bg-[#0B7BFF] text-white font-bold py-4 rounded-xl active:scale-95 transition-transform shadow-lg shadow-blue-100 text-[15px] mb-4">
          + Upload Your First Report
        </button>
        <p className="text-[11px] text-[#6b7785]">Supports PDF, PNG, JPG · up to 20MB · all panel types</p>

        {/* Feature tiles */}
        <div className="flex gap-3 mt-8">
          {[
            { emoji: '📋', label: 'Upload', desc: 'Add PDF or image file' },
            { emoji: '📈', label: 'Track', desc: 'See trends over time' },
            { emoji: '💬', label: 'Consult', desc: 'Get doctor insights' },
          ].map(t => (
            <div key={t.label} className="flex-1 bg-white rounded-xl border border-[#e0eaf1] p-3 text-center">
              <div className="text-xl mb-1">{t.emoji}</div>
              <p className="text-[11px] font-bold text-[#0b2a3b]">{t.label}</p>
              <p className="text-[10px] text-[#6b7785] mt-0.5">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
