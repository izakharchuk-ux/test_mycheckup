import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import BottomNav from '../components/BottomNav.jsx';
import Badge from '../components/Badge.jsx';
import { parameters, cholesterolTrend, doctorComments } from '../data/sampleData.js';

const tabs = ['Results', 'Trends', 'Comments'];

function StatusIcon({ status }) {
  if (status === 'normal') return <span className="text-[#22C55E] font-bold text-xs">✓</span>;
  if (status === 'high') return <TrendingUp size={14} className="text-[#EF4444]" />;
  if (status === 'low') return <TrendingDown size={14} className="text-[#0B7BFF]" />;
  return <Minus size={14} className="text-[#6B7787]" />;
}

export default function ReportDetail() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Results');

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#E0EAF1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={22} className="text-[#0B2A3B]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0B2A3B]">Report Detail</span>
        <div className="flex gap-2">
          <button className="p-1"><Share2 size={20} className="text-[#0B2A3B]" /></button>
          <button className="p-1"><Download size={20} className="text-[#0B2A3B]" /></button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-5">
        {/* Report meta */}
        <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4 mb-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h2 className="font-extrabold text-[#0B2A3B] text-lg leading-tight">Complete Blood Count</h2>
              <p className="text-sm text-[#6B7787] mt-0.5">Mar 15, 2024 · Dr. S. Ivanov</p>
            </div>
            <Badge status="flagged" flags={2} />
          </div>
          <div className="flex gap-4 pt-3 border-t border-[#E0EAF1]">
            <div className="text-center">
              <p className="text-lg font-extrabold text-[#0B2A3B]">6</p>
              <p className="text-xs text-[#6B7787]">Markers</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-extrabold text-[#22C55E]">4</p>
              <p className="text-xs text-[#6B7787]">Normal</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-extrabold text-[#EF4444]">2</p>
              <p className="text-xs text-[#6B7787]">Flags</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-2xl border border-[#E0EAF1] p-1 mb-4">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all
                ${tab === t ? 'bg-[#0B7BFF] text-white shadow' : 'text-[#6B7787]'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Results tab */}
        {tab === 'Results' && (
          <div className="flex flex-col gap-2">
            {/* Header row */}
            <div className="flex items-center px-4 py-2 text-xs font-semibold text-[#6B7787]">
              <span className="flex-1">Parameter</span>
              <span className="w-20 text-right">Value</span>
              <span className="w-20 text-right">Range</span>
              <span className="w-12 text-right">Status</span>
            </div>
            {parameters.map(p => (
              <div key={p.name} className={`flex items-center px-4 py-3 rounded-2xl border
                ${p.status === 'high' ? 'bg-red-50 border-red-100' : p.status === 'low' ? 'bg-blue-50 border-blue-100' : 'bg-white border-[#E0EAF1]'}`}>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#0B2A3B]">{p.name}</p>
                </div>
                <div className="w-20 text-right">
                  <p className={`text-sm font-bold ${p.status === 'high' ? 'text-[#EF4444]' : p.status === 'low' ? 'text-[#0B7BFF]' : 'text-[#0B2A3B]'}`}>
                    {p.value} <span className="text-xs font-normal text-[#6B7787]">{p.unit}</span>
                  </p>
                </div>
                <div className="w-20 text-right">
                  <p className="text-xs text-[#6B7787]">{p.range}</p>
                </div>
                <div className="w-12 flex justify-end">
                  <StatusIcon status={p.status} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trends tab */}
        {tab === 'Trends' && (
          <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4">
            <h3 className="font-bold text-[#0B2A3B] mb-1">Cholesterol Trend</h3>
            <p className="text-xs text-[#6B7787] mb-4">Target: &lt;200 mg/dL</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={cholesterolTrend} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0EAF1" />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#6B7787' }} />
                <YAxis tick={{ fontSize: 11, fill: '#6B7787' }} domain={[150, 230]} />
                <Tooltip
                  contentStyle={{ borderRadius: 12, border: '1px solid #E0EAF1', fontSize: 12 }}
                  formatter={v => [`${v} mg/dL`, 'Cholesterol']}
                />
                <ReferenceLine y={200} stroke="#EF4444" strokeDasharray="4 4" label={{ value: 'Limit', fill: '#EF4444', fontSize: 10 }} />
                <Line type="monotone" dataKey="value" stroke="#0B7BFF" strokeWidth={2.5} dot={{ r: 5, fill: '#0B7BFF', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-2 mt-3 p-3 bg-[#E0FAE9] rounded-xl">
              <span className="text-lg">📉</span>
              <p className="text-xs text-[#0B2A3B]"><span className="font-bold text-[#22C55E]">↓ 19%</span> improvement from Dec 2023 to Jun 2024</p>
            </div>
          </div>
        )}

        {/* Comments tab */}
        {tab === 'Comments' && (
          <div className="flex flex-col gap-3">
            {doctorComments.map(c => (
              <div key={c.id} className="bg-white rounded-2xl border border-[#E0EAF1] p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{c.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0B2A3B] text-sm">{c.doctor}</p>
                    <p className="text-xs text-[#6B7787]">{c.date}</p>
                  </div>
                </div>
                <p className="text-sm text-[#0B2A3B] leading-relaxed">{c.text}</p>
              </div>
            ))}
            <button onClick={() => navigate('/comments')} className="w-full py-3 border-2 border-dashed border-[#E0EAF1] rounded-2xl text-sm text-[#0B7BFF] font-semibold">
              + Request doctor comment
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
