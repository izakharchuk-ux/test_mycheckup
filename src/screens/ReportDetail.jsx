import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import BottomNav from '../components/BottomNav.jsx';
import Badge from '../components/Badge.jsx';
import { parameters, cholesterolTrend, doctorComments } from '../data/sampleData.js';

const tabs = ['Results', 'Trends', 'Comments'];

const statusIcon = s => s === 'ok' ? <span className="text-[#22c55e] font-bold">✓</span>
  : s === 'needs-review' ? <span className="text-[#EF4444] text-sm">↑</span>
  : <span className="text-[#6b7785]">—</span>;

export default function ReportDetail() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Results');

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#e0eaf1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={21} className="text-[#0b2a3b]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0b2a3b] text-[15px]">Report Detail</span>
        <div className="flex gap-2">
          <button className="p-1"><Share2 size={19} className="text-[#0b2a3b]" /></button>
          <button className="p-1"><Download size={19} className="text-[#0b2a3b]" /></button>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 py-4">
        {/* Meta */}
        <div className="bg-white rounded-xl border border-[#e0eaf1] p-4 mb-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="font-extrabold text-[#0b2a3b] text-[17px] leading-tight">Complete Blood Count</h2>
              <p className="text-[12px] text-[#6b7785] mt-0.5">Sep 12, 2025 · Dr. S. Ivanov</p>
            </div>
            <Badge status="parsed" />
          </div>
          <div className="flex gap-5 pt-3 border-t border-[#e0eaf1]">
            <div><p className="text-[17px] font-extrabold text-[#0b2a3b]">6</p><p className="text-[11px] text-[#6b7785]">Markers</p></div>
            <div><p className="text-[17px] font-extrabold text-[#22c55e]">5</p><p className="text-[11px] text-[#6b7785]">OK</p></div>
            <div><p className="text-[17px] font-extrabold text-[#EF4444]">1</p><p className="text-[11px] text-[#6b7785]">Needs Review</p></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-xl border border-[#e0eaf1] p-1 mb-4">
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2 text-[13px] font-semibold rounded-lg transition-all
                ${tab === t ? 'bg-[#0B7BFF] text-white' : 'text-[#6b7785]'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Results */}
        {tab === 'Results' && (
          <div className="flex flex-col gap-2">
            <div className="flex px-4 py-2 text-[11px] font-semibold text-[#6b7785]">
              <span className="flex-1">Parameter</span>
              <span className="w-20 text-right">Value</span>
              <span className="w-16 text-right">Range</span>
              <span className="w-8 text-right" />
            </div>
            {parameters.map(p => (
              <div key={p.name} className={`flex items-center px-4 py-3 rounded-xl border
                ${p.status === 'needs-review' ? 'bg-[#fde8e8]/40 border-[#fde8e8]' : 'bg-white border-[#e0eaf1]'}`}>
                <div className="flex-1"><p className="text-[13px] font-semibold text-[#0b2a3b]">{p.name}</p></div>
                <div className="w-20 text-right">
                  <span className={`text-[13px] font-bold ${p.status === 'needs-review' ? 'text-[#EF4444]' : 'text-[#0b2a3b]'}`}>
                    {p.value}
                  </span>
                  <span className="text-[10px] text-[#6b7785] ml-0.5">{p.unit}</span>
                </div>
                <div className="w-16 text-right text-[11px] text-[#6b7785]">{p.range}</div>
                <div className="w-8 text-right">{statusIcon(p.status)}</div>
              </div>
            ))}
          </div>
        )}

        {/* Trends */}
        {tab === 'Trends' && (
          <div className="bg-white rounded-xl border border-[#e0eaf1] p-4">
            <h3 className="font-bold text-[#0b2a3b] text-[15px] mb-1">Cholesterol Trend</h3>
            <p className="text-[12px] text-[#6b7785] mb-4">Target: &lt;200 mg/dL</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={cholesterolTrend} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0eaf1" />
                <XAxis dataKey="label" tick={{ fontSize: 10, fill: '#6b7785' }} />
                <YAxis tick={{ fontSize: 10, fill: '#6b7785' }} domain={[150, 220]} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #e0eaf1', fontSize: 12 }}
                  formatter={v => [`${v} mg/dL`, 'Cholesterol']} />
                <ReferenceLine y={200} stroke="#EF4444" strokeDasharray="4 4" />
                <Line type="monotone" dataKey="value" stroke="#0B7BFF" strokeWidth={2.5}
                  dot={{ r: 4, fill: '#0B7BFF', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-2 mt-3 p-3 bg-[#e0f9e9] rounded-xl">
              <span>📉</span>
              <p className="text-[12px] text-[#0b2a3b]"><span className="font-bold text-[#22c55e]">▼ 19%</span> improvement — Dec 2024 to Sep 2025</p>
            </div>
          </div>
        )}

        {/* Comments */}
        {tab === 'Comments' && (
          <div className="flex flex-col gap-3">
            {doctorComments.map(c => (
              <div key={c.id} className="bg-white rounded-xl border border-[#e0eaf1] p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{c.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0b2a3b] text-[13px]">{c.doctor}</p>
                    <p className="text-[11px] text-[#6b7785]">{c.date}</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#0b2a3b] leading-relaxed">{c.text}</p>
              </div>
            ))}
            <button onClick={() => navigate('/comments')}
              className="w-full py-3 border-2 border-dashed border-[#e0eaf1] rounded-xl text-[13px] text-[#0B7BFF] font-semibold">
              + Request doctor comment
            </button>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
}
