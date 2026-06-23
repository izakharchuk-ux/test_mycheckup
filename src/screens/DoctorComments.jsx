import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Send } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';
import Toast from '../components/Toast.jsx';
import { doctorComments } from '../data/sampleData.js';

export default function DoctorComments() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState('');
  const [toast, setToast] = useState(false);

  const send = () => {
    setModal(false);
    setMsg('');
    setToast(true);
  };

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#E0EAF1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={22} className="text-[#0B2A3B]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0B2A3B]">Doctor Comments</span>
        <button onClick={() => setModal(true)} className="p-1">
          <Plus size={22} className="text-[#0B7BFF]" />
        </button>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-5">
        <div className="flex flex-col gap-4">
          {doctorComments.map(c => (
            <div key={c.id} className="bg-white rounded-2xl border border-[#E0EAF1] p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{c.initials}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#0B2A3B] text-sm">{c.doctor}</p>
                  <p className="text-xs text-[#6B7787]">{c.date}</p>
                </div>
                <span className="text-xs bg-[#DCE9FF] text-[#0B7BFF] font-semibold px-2 py-0.5 rounded-full">
                  {c.report.split('—')[0].trim()}
                </span>
              </div>
              <p className="text-sm text-[#0B2A3B] leading-relaxed mb-3">{c.text}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-[#E0EAF1]">
                <span className="text-xs text-[#6B7787] flex-1">Re: {c.report}</span>
                <button onClick={() => navigate('/report/1')} className="text-xs text-[#0B7BFF] font-semibold">View Report →</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => setModal(true)}
          className="w-full mt-4 py-4 rounded-2xl border-2 border-dashed border-[#0B7BFF] text-[#0B7BFF] font-semibold text-sm active:scale-95 transition-transform">
          + Request Doctor Comment
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={() => setModal(false)}>
          <div className="w-full max-w-sm bg-white rounded-t-3xl p-5 animate-slide-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-[#0B2A3B]">Request Comment</h3>
              <button onClick={() => setModal(false)}><X size={20} className="text-[#6B7787]" /></button>
            </div>

            <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">Doctor</label>
            <select className="w-full border border-[#E0EAF1] rounded-xl px-4 py-3 text-sm mb-4 focus:border-[#0B7BFF] focus:outline-none bg-white">
              <option>Dr. S. Ivanov</option>
              <option>Dr. M. Kovalenko</option>
            </select>

            <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">Report</label>
            <select className="w-full border border-[#E0EAF1] rounded-xl px-4 py-3 text-sm mb-4 focus:border-[#0B7BFF] focus:outline-none bg-white">
              <option>CBC — Mar 15, 2024</option>
              <option>Lipid Panel — Feb 10, 2024</option>
            </select>

            <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">Message (optional)</label>
            <textarea
              value={msg} onChange={e => setMsg(e.target.value)}
              placeholder="Any specific concerns or questions…"
              className="w-full border border-[#E0EAF1] rounded-xl px-4 py-3 text-sm h-24 resize-none focus:border-[#0B7BFF] focus:outline-none mb-4"
            />

            <div className="flex gap-3">
              <button onClick={() => setModal(false)} className="flex-1 py-3 border border-[#E0EAF1] rounded-xl text-sm font-semibold text-[#6B7787]">Cancel</button>
              <button onClick={send} className="flex-1 py-3 bg-[#0B7BFF] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                <Send size={16} /> Send
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast message="Comment request sent!" type="success" onClose={() => setToast(false)} />}
      <BottomNav />
    </div>
  );
}
