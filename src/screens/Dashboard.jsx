import { useNavigate } from 'react-router-dom';
import { Bell, Plus, Heart, Calendar, FileText } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';
import ReportRow from '../components/ReportRow.jsx';
import StatCard from '../components/StatCard.jsx';
import { reports, user } from '../data/sampleData.js';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      {/* Top nav */}
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#E0EAF1] sticky top-0 z-30">
        <div className="flex items-center gap-2 flex-1">
          <Heart size={18} className="text-[#0B7BFF]" />
          <span className="font-bold text-[#0B2A3B] text-sm">Mycheckups.io</span>
        </div>
        <button className="p-1 relative">
          <Bell size={22} className="text-[#0B2A3B]" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EF4444]" />
        </button>
        <button className="ml-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center">
          <span className="text-white text-xs font-bold">OK</span>
        </button>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-5">
        {/* Welcome card */}
        <div className="rounded-3xl p-5 mb-5 text-white overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #0B7BFF 0%, #2EC4B6 100%)' }}>
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -right-2 -bottom-8 w-24 h-24 rounded-full bg-white/10" />
          <p className="text-sm font-medium text-white/80 mb-1">Good morning 👋</p>
          <h2 className="text-xl font-extrabold mb-1">{user.name}</h2>
          <p className="text-sm text-white/80">You have <span className="font-bold text-white">2 new insights</span> to review</p>
          <button onClick={() => navigate('/report/1')} className="mt-3 px-4 py-1.5 bg-white/20 border border-white/30 rounded-xl text-sm font-semibold">
            View latest →
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-3 mb-5">
          <StatCard icon="🩸" label="Last CBC" value="Mar 2024" />
          <StatCard icon="📅" label="Next Due" value="Jun 2024" />
          <StatCard icon="📄" label="Reports" value="4 total" />
        </div>

        {/* Recent Reports */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-[#0B2A3B]">Recent Reports</h3>
          <button onClick={() => navigate('/report/1')} className="text-xs text-[#0B7BFF] font-semibold">See all</button>
        </div>
        <div className="flex flex-col gap-3">
          {reports.map(r => <ReportRow key={r.id} report={r} />)}
        </div>

        {/* Quick actions */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={() => navigate('/comments')} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#E0EAF1] active:scale-[0.98] transition-transform">
            <div className="w-9 h-9 rounded-xl bg-[#DCF5F3] flex items-center justify-center">
              <FileText size={16} className="text-[#2EC4B6]" />
            </div>
            <span className="text-sm font-semibold text-[#0B2A3B]">Doctor Notes</span>
          </button>
          <button onClick={() => navigate('/empty')} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#E0EAF1] active:scale-[0.98] transition-transform">
            <div className="w-9 h-9 rounded-xl bg-[#E0FAE9] flex items-center justify-center">
              <Calendar size={16} className="text-[#22C55E]" />
            </div>
            <span className="text-sm font-semibold text-[#0B2A3B]">Schedule</span>
          </button>
        </div>
      </div>

      {/* FAB */}
      <button onClick={() => navigate('/upload')}
        className="fixed right-5 bottom-20 w-14 h-14 rounded-full bg-[#0B7BFF] flex items-center justify-center shadow-xl shadow-blue-300 active:scale-90 transition-transform lg:hidden">
        <Plus size={26} color="white" />
      </button>

      <BottomNav />
    </div>
  );
}
