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

  const send = () => { setModal(false); setMsg(''); setToast(true); };

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#e0eaf1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={21} className="text-[#0b2a3b]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0b2a3b] text-[15px]">Doctor Comments</span>
        <button onClick={() => setModal(true)} className="p-1">
          <Plus size={21} className="text-[#0B7BFF]" />
        </button>
      </header>

      <div className="max-w-xl mx-auto px-4 py-4 flex flex-col gap-4">
        {doctorComments.map(c => (
          <div key={c.id} className="bg-white rounded-xl border border-[#e0eaf1] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{c.initials}</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#0b2a3b] text-[13px]">{c.doctor}</p>
                <p className="text-[11px] text-[#6b7785]">{c.date}</p>
              </div>
              <span className="text-[11px] bg-[#ddebff] text-[#0B7BFF] font-semibold px-2 py-1 rounded-full">
                {c.report.split('—')[0].trim()}
              </span>
            </div>
            <p className="text-[13px] text-[#0b2a3b] leading-relaxed mb-3">{c.text}</p>
            <div className="flex items-center gap-2 pt-3 border-t border-[#e0eaf1]">
              <span className="text-[11px] text-[#6b7785] flex-1">Re: {c.report}</span>
              <button onClick={() => navigate('/report/1')} className="text-[12px] text-[#0B7BFF] font-semibold">
                View Report →
              </button>
            </div>
          </div>
        ))}

        <button onClick={() => setModal(true)}
          className="w-full py-4 border-2 border-dashed border-[#e0eaf1] rounded-xl text-[#0B7BFF] font-semibold text-[13px]">
          + Request Doctor Comment
        </button>
      </div>

      {/* Bottom sheet modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#0b2a3b]/40" onClick={() => setModal(false)}>
          <div className="w-full max-w-sm bg-white rounded-t-3xl p-5" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-[#0b2a3b] text-[16px]">Request Comment</h3>
              <button onClick={() => setModal(false)}><X size={19} className="text-[#6b7785]" /></button>
            </div>
            <label className="text-[12px] font-semibold text-[#0b2a3b] mb-1.5 block">Doctor</label>
            <select className="w-full border border-[#e0eaf1] rounded-xl px-4 py-3 text-[14px] mb-4 bg-white focus:border-[#0B7BFF] focus:outline-none">
              <option>Dr. S. Ivanov</option>
              <option>Dr. M. Kovalenko</option>
            </select>
            <label className="text-[12px] font-semibold text-[#0b2a3b] mb-1.5 block">Report</label>
            <select className="w-full border border-[#e0eaf1] rounded-xl px-4 py-3 text-[14px] mb-4 bg-white focus:border-[#0B7BFF] focus:outline-none">
              <option>CBC — Sep 12, 2025</option>
              <option>Lipid Panel — Aug 15, 2025</option>
            </select>
            <label className="text-[12px] font-semibold text-[#0b2a3b] mb-1.5 block">Message (optional)</label>
            <textarea value={msg} onChange={e => setMsg(e.target.value)}
              placeholder="Any specific concerns or questions…"
              className="w-full border border-[#e0eaf1] rounded-xl px-4 py-3 text-[14px] h-24 resize-none mb-5 focus:border-[#0B7BFF] focus:outline-none" />
            <div className="flex gap-3">
              <button onClick={() => setModal(false)}
                className="flex-1 py-3 border border-[#e0eaf1] rounded-xl text-[14px] font-semibold text-[#6b7785]">
                Cancel
              </button>
              <button onClick={send}
                className="flex-1 py-3 bg-[#0B7BFF] text-white rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2">
                <Send size={15} /> Send
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <Toast message="Comment sent successfully" type="success" onClose={() => setToast(false)} />}
      <BottomNav />
    </div>
  );
}
