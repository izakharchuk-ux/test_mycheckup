import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Menu } from 'lucide-react';

export default function TopNav({ title, back, showBell, showMenu, onMenuClick }) {
  const navigate = useNavigate();
  return (
    <header className="flex items-center h-14 px-4 bg-white border-b border-[#E0EAF1] sticky top-0 z-30">
      {back ? (
        <button onClick={() => navigate(back)} className="p-1 -ml-1 text-[#0B2A3B]">
          <ArrowLeft size={22} />
        </button>
      ) : showMenu ? (
        <button onClick={onMenuClick} className="p-1 -ml-1 text-[#0B2A3B]">
          <Menu size={22} />
        </button>
      ) : (
        <div className="w-7" />
      )}
      <span className="flex-1 text-center text-base font-semibold text-[#0B2A3B]">{title}</span>
      {showBell ? (
        <button className="p-1 -mr-1 text-[#0B2A3B] relative">
          <Bell size={22} />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#EF4444]" />
        </button>
      ) : (
        <div className="w-7" />
      )}
    </header>
  );
}
