import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload as UploadIcon, FileText, X, AlertTriangle } from 'lucide-react';
import BottomNav from '../components/BottomNav.jsx';

export default function UploadScreen() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const inputRef = useRef();

  const handleFile = f => { if (f) setFile(f); };

  return (
    <div className="min-h-screen bg-[#F6FBFF] pb-20">
      <header className="flex items-center h-14 px-4 bg-white border-b border-[#e0eaf1] sticky top-0 z-30">
        <button onClick={() => navigate('/dashboard')} className="p-1 -ml-1">
          <ArrowLeft size={21} className="text-[#0b2a3b]" />
        </button>
        <span className="flex-1 text-center font-semibold text-[#0b2a3b] text-[15px]">Upload Analysis</span>
        <div className="w-7" />
      </header>

      <div className="max-w-sm mx-auto px-4 py-6">
        <p className="text-[13px] text-[#6b7785] mb-6 text-center">Upload your lab report as a PDF, PNG, or JPG file</p>

        <div
          onDragOver={e => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={e => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => !file && inputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center transition-all cursor-pointer mb-5
            ${drag ? 'border-[#0B7BFF] bg-[#ddebff]/40' : 'border-[#e0eaf1] bg-white'}
            ${file ? 'cursor-default' : 'hover:border-[#0B7BFF]'}`}
        >
          {!file ? (
            <>
              <div className="w-14 h-14 rounded-2xl bg-[#ddebff] flex items-center justify-center mb-4">
                <UploadIcon size={26} className="text-[#0B7BFF]" />
              </div>
              <p className="font-semibold text-[#0b2a3b] text-[15px] mb-1">Drop file here</p>
              <p className="text-[12px] text-[#6b7785] mb-4">or click to browse</p>
              <span className="px-4 py-2 bg-[#2EC4B6] text-white text-[13px] font-semibold rounded-lg">Upload Analysis</span>
              <p className="text-[11px] text-[#6b7785] mt-3">PDF · PNG · JPG · max 20MB</p>
            </>
          ) : (
            <div className="flex items-center gap-3 w-full">
              <div className="w-11 h-11 rounded-xl bg-[#ddebff] flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-[#0B7BFF]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-[#0b2a3b] truncate">{file.name}</p>
                <p className="text-[12px] text-[#6b7785]">{(file.size / 1024).toFixed(0)} KB</p>
              </div>
              <button onClick={e => { e.stopPropagation(); setFile(null); }}>
                <X size={18} className="text-[#6b7785]" />
              </button>
            </div>
          )}
        </div>

        <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => handleFile(e.target.files[0])} />

        {/* Supported formats */}
        <div className="bg-white rounded-xl border border-[#e0eaf1] p-4 mb-5">
          <p className="text-[12px] font-semibold text-[#0b2a3b] mb-2">Supported formats</p>
          {['CBC — Complete Blood Count', 'Lipid Panel', 'Comprehensive Metabolic Panel', 'Thyroid Panel', 'Urinalysis'].map(f => (
            <div key={f} className="flex items-center gap-2 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EC4B6]" />
              <span className="text-[12px] text-[#6b7785]">{f}</span>
            </div>
          ))}
        </div>

        <button onClick={() => navigate('/parsing')}
          className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all active:scale-95
            ${file ? 'bg-[#0B7BFF] text-white shadow-lg shadow-blue-100' : 'bg-[#e0eaf1] text-[#6b7785]'}`}
          disabled={!file}
        >
          {file ? 'Upload & Analyse' : 'Select a file to continue'}
        </button>

        {/* Demo shortcuts */}
        <div className="flex gap-3 mt-3">
          <button onClick={() => navigate('/parsing')} className="flex-1 text-center text-[13px] text-[#0B7BFF] py-2 font-medium">
            Demo: parse →
          </button>
          <button onClick={() => setShowErrorModal(true)} className="flex-1 text-center text-[13px] text-[#EF4444] py-2 font-medium">
            Demo: error →
          </button>
        </div>
      </div>

      {/* Error Modal — Figma: Unsupported File Format */}
      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b2a3b]/50 px-5"
          onClick={() => setShowErrorModal(false)}>
          <div className="w-full max-w-[340px] bg-white rounded-2xl p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="w-14 h-14 rounded-2xl bg-[#fde8e8] flex items-center justify-center mb-5">
              <AlertTriangle size={28} className="text-[#EF4444]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#0b2a3b] mb-2">Unsupported File Format</h3>
            <p className="text-[13px] text-[#6b7785] mb-6 leading-relaxed">
              Only PDF, PNG, JPG files are supported. Please choose a valid file.
            </p>
            <div className="flex gap-3">
              <button onClick={() => { setShowErrorModal(false); inputRef.current?.click(); }}
                className="flex-1 bg-[#0B7BFF] text-white font-bold py-3 rounded-xl text-[14px] active:scale-95 transition-transform">
                Try Again
              </button>
              <button onClick={() => { setShowErrorModal(false); navigate('/dashboard'); }}
                className="flex-1 border border-[#e0eaf1] text-[#0b2a3b] font-semibold py-3 rounded-xl text-[14px] active:scale-95 transition-transform">
                Manual Entry
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
