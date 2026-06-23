import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';
import Toast from '../components/Toast.jsx';
import { user } from '../data/sampleData.js';

function Toggle({ on, onChange }) {
  return (
    <button onClick={() => onChange(!on)} className={`w-11 h-6 rounded-full transition-colors flex-shrink-0 ${on ? 'bg-[#0B7BFF]' : 'bg-[#E0EAF1]'}`}>
      <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform mx-0.5 ${on ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    dob: user.dob,
    bloodType: user.bloodType,
    city: user.city,
    doctor: user.doctor,
    language: user.language,
  });
  const [notifs, setNotifs] = useState({ email: true, sms: false, push: true });
  const [toast, setToast] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const save = () => setToast(true);

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#E0EAF1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={22} className="text-[#0B2A3B]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0B2A3B]">Settings</span>
        <div className="w-7" />
      </header>

      <div className="max-w-2xl mx-auto px-4 py-5">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0B7BFF] to-[#2EC4B6] flex items-center justify-center mb-3 shadow-lg shadow-blue-200">
            <span className="text-white text-2xl font-extrabold">OK</span>
          </div>
          <h2 className="font-bold text-[#0B2A3B] text-lg">{user.name}</h2>
          <p className="text-sm text-[#6B7787]">{user.email}</p>
          <button className="mt-2 text-sm text-[#0B7BFF] font-semibold">Change photo</button>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4 mb-4">
          <h3 className="font-bold text-[#0B2A3B] mb-4">Personal Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Full Name', name: 'name', placeholder: 'Olena K.' },
              { label: 'Date of Birth', name: 'dob', type: 'date' },
              { label: 'Phone', name: 'phone', placeholder: '+1 (555) ...' },
              { label: 'Blood Type', name: 'bloodType', placeholder: 'A+' },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'City', name: 'city', placeholder: 'Kyiv' },
            ].map(f => (
              <div key={f.name}>
                <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">{f.label}</label>
                <input
                  name={f.name} type={f.type || 'text'} value={form[f.name]} onChange={handle}
                  placeholder={f.placeholder}
                  className="w-full border border-[#E0EAF1] rounded-xl px-3 py-2.5 text-sm focus:border-[#0B7BFF] focus:outline-none transition-colors"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Medical Info */}
        <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4 mb-4">
          <h3 className="font-bold text-[#0B2A3B] mb-4">Medical</h3>
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">Primary Doctor</label>
              <input name="doctor" value={form.doctor} onChange={handle}
                className="w-full border border-[#E0EAF1] rounded-xl px-3 py-2.5 text-sm focus:border-[#0B7BFF] focus:outline-none" />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">Language</label>
              <select name="language" value={form.language} onChange={handle}
                className="w-full border border-[#E0EAF1] rounded-xl px-3 py-2.5 text-sm focus:border-[#0B7BFF] focus:outline-none bg-white">
                <option>English</option>
                <option>Ukrainian</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4 mb-4">
          <h3 className="font-bold text-[#0B2A3B] mb-4">Notifications</h3>
          <div className="flex flex-col gap-4">
            {[
              { key: 'email', label: 'Email Reports', desc: 'Receive reports via email' },
              { key: 'sms', label: 'SMS Alerts', desc: 'Get text alerts for flags' },
              { key: 'push', label: 'App Push', desc: 'In-app notifications' },
            ].map(n => (
              <div key={n.key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0B2A3B]">{n.label}</p>
                  <p className="text-xs text-[#6B7787]">{n.desc}</p>
                </div>
                <Toggle on={notifs[n.key]} onChange={v => setNotifs(p => ({ ...p, [n.key]: v }))} />
              </div>
            ))}
          </div>
        </div>

        {/* Account links */}
        <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4 mb-4">
          {[
            { label: 'Privacy Policy' },
            { label: 'Terms of Service' },
            { label: 'Help & Support' },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between py-3 border-b border-[#E0EAF1] last:border-0">
              <span className="text-sm text-[#0B2A3B] font-medium">{item.label}</span>
              <ChevronRight size={16} className="text-[#6B7787]" />
            </div>
          ))}
        </div>

        <button onClick={save}
          className="w-full bg-[#0B7BFF] text-white font-bold py-4 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-blue-200 mb-3">
          Save Changes
        </button>

        {/* Danger zone */}
        <button className="w-full py-4 border-2 border-[#EF4444] text-[#EF4444] font-bold rounded-2xl active:scale-95 transition-transform mb-3">
          Delete Account
        </button>

        <button onClick={() => navigate('/')} className="w-full py-4 border border-[#E0EAF1] text-[#6B7787] font-semibold rounded-2xl active:scale-95 transition-transform">
          Sign Out
        </button>
      </div>

      {toast && <Toast message="Profile saved successfully!" type="success" onClose={() => setToast(false)} />}
      <BottomNav />
    </div>
  );
}
