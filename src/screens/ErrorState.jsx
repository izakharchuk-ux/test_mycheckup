import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

export default function ErrorState() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F6FBFF] flex flex-col">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#e0eaf1]">
        <button onClick={() => navigate('/upload')} className="text-[#0B7BFF] text-[13px] font-semibold">← Upload</button>
        <span className="flex-1 text-center font-semibold text-[#0b2a3b] text-[15px]">Upload — Error</span>
        <div className="w-16" />
      </header>

      {/* ParseFailed layout — matches Figma right panel */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-sm text-center">
          <div className="w-24 h-24 rounded-full bg-[#fde8e8] flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-[#EF4444]">✕</span>
          </div>
          <h2 className="text-[22px] font-extrabold text-[#0b2a3b] mb-2">We couldn't parse this file</h2>
          <p className="text-[13px] text-[#6b7785] mb-2 leading-relaxed">
            The file format couldn't be interpreted automatically. Please try with a different document or upload an unsupported format.
          </p>
          <p className="text-[12px] text-[#6b7785] mb-8">It always works if the file type is PDF or JPG (or is uncompressed)</p>
          <div className="flex gap-3">
            <button onClick={() => navigate('/upload')}
              className="flex-1 bg-[#0B7BFF] text-white font-bold py-3.5 rounded-xl active:scale-95 transition-transform text-[14px]">
              Retry Upload
            </button>
            <button onClick={() => navigate('/dashboard')}
              className="flex-1 border border-[#e0eaf1] bg-white text-[#0b2a3b] font-semibold py-3.5 rounded-xl active:scale-95 transition-transform text-[14px]">
              Manual Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
