import { useNavigate } from 'react-router-dom';
import { ChevronRight, FileText } from 'lucide-react';
import Badge from './Badge.jsx';

export default function ReportRow({ report }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/report/${report.id}`)}
      className="w-full flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#E0EAF1] active:scale-[0.98] transition-transform text-left"
    >
      <div className="w-10 h-10 rounded-xl bg-[#DCE9FF] flex items-center justify-center flex-shrink-0">
        <FileText size={18} className="text-[#0B7BFF]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#0B2A3B] truncate">{report.name}</p>
        <p className="text-xs text-[#6B7787] mt-0.5">{report.date} • {report.doctor}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Badge status={report.status} flags={report.flags} />
        <ChevronRight size={16} className="text-[#6B7787]" />
      </div>
    </button>
  );
}
