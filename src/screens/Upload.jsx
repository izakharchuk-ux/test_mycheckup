import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, X, ArrowLeft } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';

export default function UploadScreen() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef();

  const handleFile = f => {
    if (f) setFile(f);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDrag(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#E0EAF1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={22} className="text-[#0B2A3B]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0B2A3B]">Upload Analysis</span>
        <div className="w-7" />
      </header>

      <div className="max-w-sm mx-auto px-4 py-6">
        <p className="text-sm text-[#6B7787] mb-6 text-center">Upload your lab report as a PDF or image file</p>

        {/* Drop zone */}
        <div
          onDragOver={e => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={handleDrop}
          onClick={() => !file && inputRef.current?.click()}
          className={`border-2 border-dashed rounded-3xl p-8 flex flex-col items-center transition-all cursor-pointer mb-6
            ${drag ? 'border-[#0B7BFF] bg-[#DCE9FF]/50' : 'border-[#E0EAF1] bg-white'}
            ${file ? 'cursor-default' : 'hover:border-[#0B7BFF] hover:bg-[#DCE9FF]/20'}`}
        >
          {!file ? (
            <>
              <div className="w-16 h-16 rounded-2xl bg-[#DCE9FF] flex items-center justify-center mb-4">
                <Upload size={28} className="text-[#0B7BFF]" />
              </div>
              <p className="font-semibold text-[#0B2A3B] mb-1">Drop your file here</p>
              <p className="text-xs text-[#6B7787] mb-4">or click to browse</p>
              <span className="px-4 py-2 bg-[#0B7BFF] text-white text-sm font-semibold rounded-xl">Browse files</span>
              <p className="text-xs text-[#6B7787] mt-3">PDF, JPG, PNG · max 20MB</p>
            </>
          ) : (
            <div className="flex items-center gap-3 w-full">
              <div className="w-12 h-12 rounded-xl bg-[#DCE9FF] flex items-center justify-center flex-shrink-0">
                <FileText size={22} className="text-[#0B7BFF]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#0B2A3B] truncate">{file.name}</p>
                <p className="text-xs text-[#6B7787]">{(file.size / 1024).toFixed(0)} KB</p>
              </div>
              <button onClick={e => { e.stopPropagation(); setFile(null); }} className="p-1 text-[#6B7787]">
                <X size={18} />
              </button>
            </div>
          )}
        </div>

        <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => handleFile(e.target.files[0])} />

        {/* Supported formats */}
        <div className="bg-white rounded-2xl border border-[#E0EAF1] p-4 mb-6">
          <p className="text-xs font-semibold text-[#0B2A3B] mb-2">Supported formats</p>
          {['CBC — Complete Blood Count', 'Lipid Panel', 'Metabolic Panel', 'Thyroid Panel', 'Urinalysis'].map(f => (
            <div key={f} className="flex items-center gap-2 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4B6]" />
              <span className="text-xs text-[#6B7787]">{f}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/parsing')}
          className={`w-full py-4 rounded-2xl font-bold text-white transition-all active:scale-95
            ${file ? 'bg-[#0B7BFF] shadow-lg shadow-blue-200' : 'bg-[#E0EAF1] text-[#6B7787] cursor-not-allowed'}`}
        >
          {file ? 'Upload Report' : 'Select a file to continue'}
        </button>

        <button onClick={() => navigate('/parsing')} className="w-full text-center text-sm text-[#6B7787] mt-3 py-2">
          Demo: skip upload →
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
