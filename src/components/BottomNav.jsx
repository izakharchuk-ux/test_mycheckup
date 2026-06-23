import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Upload, MessageSquare, Settings } from 'lucide-react';

const tabs = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: FileText, label: 'Reports', path: '/report/1' },
  { icon: Upload, label: 'Upload', path: '/upload', special: true },
  { icon: MessageSquare, label: 'Doctor', path: '/comments' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#e0eaf1]">
      <div className="max-w-sm mx-auto flex items-center justify-around h-16">
        {tabs.map(({ icon: Icon, label, path, special }) => {
          const active = location.pathname === path || (label === 'Home' && location.pathname === '/dashboard');
          if (special) {
            return (
              <button key={label} onClick={() => navigate(path)} className="flex flex-col items-center -mt-4">
                <div className="w-12 h-12 rounded-full bg-[#2EC4B6] flex items-center justify-center shadow-lg">
                  <Icon size={20} color="white" />
                </div>
              </button>
            );
          }
          return (
            <button key={label} onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 ${active ? 'text-[#0B7BFF]' : 'text-[#6b7785]'}`}>
              <Icon size={20} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
