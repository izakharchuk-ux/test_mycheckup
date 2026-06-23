export const user = {
  name: 'Olena K.',
  firstName: 'Olena',
  email: 'olena@email.com',
  bloodType: 'A+',
  dob: '1990-04-15',
  phone: '+1 (555) 234-5678',
  city: 'Kyiv',
  doctor: 'Dr. S. Ivanov',
  language: 'English',
};

export const reports = [
  {
    id: 1,
    name: 'Complete Blood Count',
    shortName: 'CBC',
    date: 'Sep 12, 2025',
    doctor: 'Dr. S. Ivanov',
    status: 'parsed',
  },
  {
    id: 2,
    name: 'Lipid Panel',
    shortName: 'Lipid Panel',
    date: 'Aug 15, 2025',
    doctor: 'Dr. M. Kovalenko',
    status: 'needs-review',
  },
  {
    id: 3,
    name: 'Complete Blood Count',
    shortName: 'CBC',
    date: 'Jun 5, 2025',
    doctor: 'Dr. S. Ivanov',
    status: 'ok',
  },
];

export const healthCards = [
  { label: 'Cholesterol', value: '170', unit: 'mg/dL', trend: '▼ 11%', trendLabel: 'vs last test', dir: 'down' },
  { label: 'Glucose', value: '92', unit: 'mg/dL', trend: '▼ 6%', trendLabel: 'vs last test', dir: 'down' },
  { label: 'Blood Pressure', value: '118/76', unit: 'mmHg', trend: '▼ 3%', trendLabel: 'vs last test', dir: 'down' },
];

export const parameters = [
  { name: 'Hemoglobin', value: '13.2', unit: 'g/dL', range: '12–16', status: 'ok' },
  { name: 'WBC', value: '11.2', unit: 'K/µL', range: '4.5–11.0', status: 'needs-review' },
  { name: 'Platelets', value: '245', unit: 'K/µL', range: '150–400', status: 'ok' },
  { name: 'RBC', value: '4.1', unit: 'M/µL', range: '4.0–5.2', status: 'ok' },
  { name: 'Cholesterol', value: '170', unit: 'mg/dL', range: '<200', status: 'ok' },
  { name: 'HDL', value: '58', unit: 'mg/dL', range: '>40', status: 'ok' },
];

export const cholesterolTrend = [
  { label: 'Dec 24', value: 210 },
  { label: 'Mar 25', value: 195 },
  { label: 'Jun 25', value: 182 },
  { label: 'Sep 25', value: 170 },
];

export const doctorComments = [
  {
    id: 1,
    doctor: 'Dr. S. Ivanov',
    initials: 'SI',
    date: 'Sep 15, 2025',
    report: 'CBC — Sep 12, 2025',
    text: 'Your WBC is slightly elevated. Monitor for 2 weeks and retest if symptoms develop. Stay hydrated and get adequate rest.',
  },
  {
    id: 2,
    doctor: 'Dr. M. Kovalenko',
    initials: 'MK',
    date: 'Aug 18, 2025',
    report: 'Lipid Panel — Aug 15, 2025',
    text: 'Lipid panel looks good overall. Cholesterol is now in a healthy range. Keep up the dietary improvements.',
  },
];
