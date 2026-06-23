import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Upload, PenLine } from 'lucide-react';

export default function ErrorState() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F6FBFF] flex flex-col items-center justify-center px-5 pb-20">
      <div className="w-full max-w-sm text-center">
        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} className="text-[#EF4444]" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#0B2A3B] mb-3">Upload Failed</h2>
        <p className="text-[#6B7787] mb-8 leading-relaxed">
          The file format is not supported.<br />
          Please upload a <span className="font-semibold text-[#0B2A3B]">PDF or JPG</span> file.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 text-left">
          <p className="text-xs font-semibold text-amber-800 mb-2">Supported formats</p>
          <p className="text-xs text-amber-700">PDF · JPG · JPEG · PNG</p>
          <p className="text-xs text-amber-700 mt-1">Maximum file size: 20MB</p>
        </div>

        <button onClick={() => navigate('/upload')}
          className="w-full bg-[#0B7BFF] text-white font-bold py-4 rounded-2xl active:scale-95 transition-transform shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mb-3">
          <Upload size={20} /> Try Again
        </button>
        <button onClick={() => navigate('/dashboard')}
          className="w-full border-2 border-[#E0EAF1] bg-white text-[#0B2A3B] font-semibold py-4 rounded-2xl active:scale-95 transition-transform flex items-center justify-center gap-2">
          <PenLine size={18} /> Enter Manually
        </button>
        <button onClick={() => navigate('/dashboard')} className="text-sm text-[#6B7787] mt-4">
          Back to dashboard
        </button>
      </div>
    </div>
  );
}
