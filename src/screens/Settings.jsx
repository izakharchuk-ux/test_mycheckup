import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';
import Toast from '../components/Toast.jsx';
import { user } from '../data/sampleData.js';

function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)}
      className={`w-11 h-6 rounded-full transition-colors flex-shrink-0 ${on ? 'bg-[#0B7BFF]' : 'bg-[#e0eaf1]'}`}>
      <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform mx-0.5 ${on ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: user.name, email: user.email, phone: user.phone, dob: user.dob, bloodType: user.bloodType, city: user.city, doctor: user.doctor });
  const [notifs, setNotifs] = useState({ email: true, sms: false, push: true });
  const [toast, setToast] = useState(false);
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#e0eaf1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={21} className="text-[#0b2a3b]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0b2a3b] text-[15px]">Settings</span>
        <div className="w-7" />
      </header>

      <div className="max-w-xl mx-auto px-4 py-5">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center mb-3 shadow-lg">
            <span className="text-white text-2xl font-extrabold">OK</span>
          </div>
          <h2 className="font-bold text-[#0b2a3b] text-[17px]">{user.name}</h2>
          <p className="text-[13px] text-[#6b7785]">{user.email}</p>
          <button className="mt-2 text-[13px] text-[#0B7BFF] font-semibold">Change photo</button>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-xl border border-[#e0eaf1] p-4 mb-4">
          <h3 className="font-bold text-[#0b2a3b] text-[15px] mb-4">Personal Info</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Full Name', name: 'name' },
              { label: 'Date of Birth', name: 'dob', type: 'date' },
              { label: 'Phone', name: 'phone' },
              { label: 'Blood Type', name: 'bloodType' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'City', name: 'city' },
            ].map(f => (
              <div key={f.name}>
                <label className="text-[11px] font-semibold text-[#0b2a3b] mb-1 block">{f.label}</label>
                <input name={f.name} type={f.type || 'text'} value={form[f.name]} onChange={handle}
                  className="w-full border border-[#e0eaf1] rounded-lg px-3 py-2.5 text-[13px] focus:border-[#0B7BFF] focus:outline-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Medical */}
        <div className="bg-white rounded-xl border border-[#e0eaf1] p-4 mb-4">
          <h3 className="font-bold text-[#0b2a3b] text-[15px] mb-4">Medical</h3>
          <div>
            <label className="text-[11px] font-semibold text-[#0b2a3b] mb-1 block">Primary Doctor</label>
            <input name="doctor" value={form.doctor} onChange={handle}
              className="w-full border border-[#e0eaf1] rounded-lg px-3 py-2.5 text-[13px] focus:border-[#0B7BFF] focus:outline-none mb-3" />
          </div>
          <div>
            <label className="text-[11px] font-semibold text-[#0b2a3b] mb-1 block">Language</label>
            <select className="w-full border border-[#e0eaf1] rounded-lg px-3 py-2.5 text-[13px] bg-white focus:border-[#0B7BFF] focus:outline-none">
              <option>English</option><option>Ukrainian</option><option>Spanish</option>
            </select>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl border border-[#e0eaf1] p-4 mb-4">
          <h3 className="font-bold text-[#0b2a3b] text-[15px] mb-4">Notifications</h3>
          {[
            { key: 'email', label: 'Email Reports', desc: 'Receive reports via email' },
            { key: 'sms', label: 'SMS Alerts', desc: 'Text alerts for flagged results' },
            { key: 'push', label: 'App Push', desc: 'In-app notifications' },
          ].map(n => (
            <div key={n.key} className="flex items-center justify-between py-2.5 border-b border-[#e0eaf1] last:border-0">
              <div>
                <p className="text-[13px] font-semibold text-[#0b2a3b]">{n.label}</p>
                <p className="text-[11px] text-[#6b7785]">{n.desc}</p>
              </div>
              <Toggle on={notifs[n.key]} onChange={v => setNotifs(p => ({ ...p, [n.key]: v }))} />
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="bg-white rounded-xl border border-[#e0eaf1] p-4 mb-4">
          {['Privacy Policy', 'Terms of Service', 'Help & Support'].map(item => (
            <div key={item} className="flex items-center justify-between py-3 border-b border-[#e0eaf1] last:border-0">
              <span className="text-[13px] font-medium text-[#0b2a3b]">{item}</span>
              <ChevronRight size={16} className="text-[#6b7785]" />
            </div>
          ))}
        </div>

        <button onClick={() => setToast(true)}
          className="w-full bg-[#0B7BFF] text-white font-bold py-4 rounded-xl active:scale-95 transition-transform text-[15px] mb-3">
          Save Changes
        </button>
        <button className="w-full py-4 border-2 border-[#EF4444] text-[#EF4444] font-bold rounded-xl active:scale-95 transition-transform text-[15px] mb-3">
          Delete Account
        </button>
        <button onClick={() => navigate('/')} className="w-full py-4 border border-[#e0eaf1] text-[#6b7785] font-semibold rounded-xl active:scale-95 transition-transform text-[15px]">
          Sign Out
        </button>
      </div>

      {toast && <Toast message="Profile saved" type="success" onClose={() => setToast(false)} />}
      <BottomNav />
    </div>
  );
}
