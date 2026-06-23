import { useNavigate } from 'react-router-dom';
import { Bell, Plus } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';
import ReportRow from '../components/ReportRow.jsx';
import HealthCard from '../components/HealthCard.jsx';
import { reports, healthCards, user } from '../data/sampleData.js';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      {/* Nav */}
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#e0eaf1] sticky top-0 z-30">
        <span className="text-[15px] font-bold text-[#0b2a3b] flex-1">Mycheckups.io</span>
        <button className="p-1 relative mr-2">
          <Bell size={20} className="text-[#0b2a3b]" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EF4444]" />
        </button>
        <button onClick={() => navigate('/settings')}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center">
          <span className="text-white text-xs font-bold">OK</span>
        </button>
      </header>

      <div className="max-w-xl mx-auto px-4 py-5">
        {/* Welcome */}
        <div className="rounded-2xl p-5 mb-5 text-white overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #0B7BFF 0%, #2EC4B6 100%)' }}>
          <div className="absolute -right-4 -top-4 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute -right-1 bottom-0 w-20 h-20 rounded-full bg-white/10" />
          <p className="text-[13px] text-white/75 mb-1">Good morning 👋</p>
          <h2 className="text-[20px] font-extrabold mb-1">{user.name}</h2>
          <p className="text-[13px] text-white/75">You have <strong className="text-white">2 new insights</strong> to review</p>
          <button onClick={() => navigate('/report/1')}
            className="mt-3 px-4 py-1.5 bg-white/20 border border-white/30 rounded-lg text-[13px] font-semibold">
            View latest →
          </button>
        </div>

        {/* Health Snapshot */}
        <h3 className="text-[13px] font-bold text-[#6b7785] uppercase tracking-wider mb-3">Health Snapshot</h3>
        <div className="flex gap-3 mb-5">
          {healthCards.map(c => <HealthCard key={c.label} {...c} />)}
        </div>

        {/* Recent Reports */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-[#0b2a3b] text-[15px]">Recent Reports</h3>
          <button onClick={() => navigate('/report/1')} className="text-[13px] text-[#0B7BFF] font-semibold">See all</button>
        </div>
        <div className="flex flex-col gap-2.5">
          {reports.map(r => <ReportRow key={r.id} report={r} />)}
        </div>
      </div>

      {/* FAB */}
      <button onClick={() => navigate('/upload')}
        className="fixed right-5 bottom-20 w-12 h-12 rounded-full bg-[#0B7BFF] flex items-center justify-center shadow-xl active:scale-90 transition-transform">
        <Plus size={22} color="white" />
      </button>

      <BottomNav />
    </div>
  );
}
