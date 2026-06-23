import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-[#F6FBFF] flex flex-col items-center justify-center px-5 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
            style={{ background: 'linear-gradient(135deg, #0B7BFF, #2EC4B6)' }}>
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <h1 className="text-[22px] font-extrabold text-[#0b2a3b]">Welcome back</h1>
          <p className="text-[13px] text-[#6b7785] mt-1">Sign in to your account</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[12px] font-semibold text-[#0b2a3b] mb-1.5 block">Email</label>
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="olena@email.com"
              className="w-full border border-[#e0eaf1] rounded-xl px-4 py-3 text-[14px] focus:border-[#0B7BFF] focus:outline-none bg-white" />
          </div>
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-[12px] font-semibold text-[#0b2a3b]">Password</label>
              <button className="text-[12px] text-[#0B7BFF] font-medium">Forgot password?</button>
            </div>
            <div className="relative">
              <input name="password" type={show ? 'text' : 'password'} value={form.password} onChange={handle} placeholder="••••••••"
                className="w-full border border-[#e0eaf1] rounded-xl px-4 py-3 pr-11 text-[14px] focus:border-[#0B7BFF] focus:outline-none bg-white" />
              <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7785]">
                {show ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>
        </div>

        <button onClick={() => navigate('/dashboard')}
          className="w-full mt-6 bg-[#0B7BFF] text-white font-bold py-3.5 rounded-xl active:scale-95 transition-transform text-[15px]">
          Sign In
        </button>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#e0eaf1]" /><span className="text-xs text-[#6b7785]">or</span><div className="flex-1 h-px bg-[#e0eaf1]" />
        </div>

        <button className="w-full border border-[#e0eaf1] bg-white text-[#0b2a3b] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform text-[14px]">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z"/><path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"/><path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>
          Continue with Google
        </button>

        <p className="text-center text-[13px] text-[#6b7785] mt-5">
          Don't have an account? <Link to="/signup" className="text-[#0B7BFF] font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
