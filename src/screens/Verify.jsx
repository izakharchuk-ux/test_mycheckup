import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import OTPInput from '../components/OTPInput.jsx';

export default function Verify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 bg-[#F6FBFF]">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#DCE9FF] flex items-center justify-center">
            <Mail size={30} className="text-[#0B7BFF]" />
          </div>
        </div>
        <h1 className="text-2xl font-extrabold text-[#0B2A3B] mb-2 text-center">Verify your email</h1>
        <p className="text-sm text-[#6B7787] text-center mb-8">
          We sent a 6-digit code to<br />
          <span className="font-semibold text-[#0B2A3B]">olena@example.com</span>
        </p>

        <OTPInput value={otp} onChange={setOtp} />

        <button
          onClick={() => navigate('/onboarding/1')}
          className="w-full mt-8 bg-[#0B7BFF] text-white font-bold py-3.5 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-blue-200"
        >
          Verify
        </button>

        <p className="text-center text-sm text-[#6B7787] mt-5">
          Didn't receive it?{' '}
          <button className="text-[#0B7BFF] font-semibold">Resend code</button>
        </p>
      </div>
    </div>
  );
}
