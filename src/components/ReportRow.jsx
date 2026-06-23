import { useNavigate } from 'react-router-dom';
import Badge from './Badge.jsx';

export default function ReportRow({ report }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/report/${report.id}`)}
      className="w-full flex items-center gap-3 px-4 h-[72px] bg-white rounded-xl border border-[#e0eaf1] active:scale-[0.98] transition-transform text-left"
    >
      <div className="w-10 h-10 rounded-[10px] bg-[#ddebff] flex items-center justify-center flex-shrink-0 text-lg">
        📋
      </div>
      <div className="flex flex-col gap-1 flex-shrink-0">
        <p className="text-[15px] font-semibold text-[#0b2a3b]">{report.shortName}</p>
        <p className="text-[13px] text-[#6b7785]">{report.date}</p>
      </div>
      <div className="flex-1 min-w-0" />
      <Badge status={report.status} />
    </button>
  );
}
