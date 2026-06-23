import { useEffect, useState } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  const isSuccess = type === 'success';

  return (
    <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 h-[52px] rounded-2xl shadow-xl transition-all duration-300 min-w-[280px]
      bg-white border border-[#e0eaf1]
      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${isSuccess ? 'bg-[#e0f9e9]' : 'bg-[#fde8e8]'}`}>
        <span className={`text-xs font-bold ${isSuccess ? 'text-[#0e8337]' : 'text-[#c53030]'}`}>
          {isSuccess ? '✓' : '✕'}
        </span>
      </div>
      <span className="text-[14px] font-medium text-[#0b2a3b]">{message}</span>
    </div>
  );
}
