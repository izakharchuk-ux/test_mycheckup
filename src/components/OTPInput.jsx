import { useRef } from 'react';

export default function OTPInput({ value, onChange }) {
  const inputs = useRef([]);
  const digits = value.padEnd(6, '').split('').slice(0, 6);

  const handleChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, '').slice(-1);
    const arr = [...digits];
    arr[i] = v;
    onChange(arr.join('').trim());
    if (v && i < 5) inputs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          ref={el => (inputs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digits[i] || ''}
          onChange={e => handleChange(i, e)}
          onKeyDown={e => handleKeyDown(i, e)}
          className="w-11 h-12 text-center text-xl font-bold border-2 border-[#E0EAF1] rounded-xl focus:border-[#0B7BFF] focus:outline-none bg-white text-[#0B2A3B] transition-colors"
        />
      ))}
    </div>
  );
}
