export default function Badge({ status, flags }) {
  if (status === 'normal') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
        ✓ Normal
      </span>
    );
  }
  if (status === 'flagged' || status === 'high') {
    const label = flags ? `${flags} ${flags === 1 ? 'flag' : 'flags'}` : 'High';
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
        ⚠ {label}
      </span>
    );
  }
  if (status === 'low') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
        ↓ Low
      </span>
    );
  }
  return null;
}
