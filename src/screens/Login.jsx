import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Heart } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex flex-col justify-center items-center flex-1 p-12 text-white"
        style={{ background: 'linear-gradient(135deg, #0B7BFF 0%, #2EC4B6 100%)' }}>
        <Heart size={48} className="mb-6 opacity-90" />
        <h2 className="text-3xl font-extrabold mb-3">Welcome back</h2>
        <p className="text-white/80 text-lg text-center max-w-sm">Your health data is waiting for you. Sign in to continue your journey.</p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center px-5 py-10 bg-[#F6FBFF]">
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6 lg:hidden">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0B7BFF, #2EC4B6)' }}>
              <Heart size={24} color="white" />
            </div>
          </div>
          <h1 className="text-2xl font-extrabold text-[#0B2A3B] mb-1 text-center">Sign in</h1>
          <p className="text-sm text-[#6B7787] text-center mb-7">Welcome back, Olena</p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-[#0B2A3B] mb-1.5 block">Email</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="olena@example.com"
                className="w-full border border-[#E0EAF1] rounded-xl px-4 py-3 text-sm focus:border-[#0B7BFF] focus:outline-none bg-white transition-colors" />
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#0B2A3B]">Password</label>
                <button className="text-xs text-[#0B7BFF] font-medium">Forgot password?</button>
              </div>
              <div className="relative">
                <input name="password" type={show ? 'text' : 'password'} value={form.password} onChange={handle} placeholder="Your password"
                  className="w-full border border-[#E0EAF1] rounded-xl px-4 py-3 pr-11 text-sm focus:border-[#0B7BFF] focus:outline-none bg-white transition-colors" />
                <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7787]">
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => navigate('/dashboard')}
            className="w-full mt-6 bg-[#0B7BFF] text-white font-bold py-3.5 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-blue-200">
            Sign In
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#E0EAF1]" />
            <span className="text-xs text-[#6B7787]">or continue with</span>
            <div className="flex-1 h-px bg-[#E0EAF1]" />
          </div>

          <button className="w-full border border-[#E0EAF1] bg-white text-[#0B2A3B] font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z"/><path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z"/><path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-[#6B7787] mt-5">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#0B7BFF] font-semibold">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
