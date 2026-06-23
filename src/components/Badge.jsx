// Status pill matching Figma: Parsed (green), Pending (orange), Needs Review (salmon), OK (green), Review (yellow)
const styles = {
  parsed:       'bg-[#e0f9e9] text-[#0e8337]',
  ok:           'bg-[#e0f9e9] text-[#0e8337]',
  pending:      'bg-[#fff3e0] text-[#e07c00]',
  review:       'bg-[#fff8e1] text-[#c9920a]',
  'needs-review': 'bg-[#fde8e8] text-[#c53030]',
};

const labels = {
  parsed: 'Parsed',
  ok: 'OK',
  pending: 'Pending',
  review: 'Review',
  'needs-review': 'Needs Review',
};

export default function Badge({ status }) {
  const cls = styles[status] || styles.pending;
  const label = labels[status] || status;
  return (
    <span className={`inline-flex items-center px-[10px] h-[28px] rounded-full text-[12px] font-semibold whitespace-nowrap ${cls}`}>
      {label}
    </span>
  );
}
