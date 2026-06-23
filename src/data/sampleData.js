export const user = {
  name: 'Olena K.',
  firstName: 'Olena',
  email: 'olena@example.com',
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
    date: 'Mar 15, 2024',
    doctor: 'Dr. S. Ivanov',
    flags: 2,
    status: 'flagged',
  },
  {
    id: 2,
    name: 'Lipid Panel',
    shortName: 'Lipid Panel',
    date: 'Feb 10, 2024',
    doctor: 'Dr. M. Kovalenko',
    flags: 0,
    status: 'normal',
  },
  {
    id: 3,
    name: 'Complete Blood Count',
    shortName: 'CBC',
    date: 'Dec 5, 2023',
    doctor: 'Dr. S. Ivanov',
    flags: 1,
    status: 'flagged',
  },
];

export const parameters = [
  { name: 'Hemoglobin', value: '13.2', unit: 'g/dL', range: '12–16', status: 'normal' },
  { name: 'WBC', value: '11.2', unit: 'K/µL', range: '4.5–11.0', status: 'high' },
  { name: 'Platelets', value: '245', unit: 'K/µL', range: '150–400', status: 'normal' },
  { name: 'RBC', value: '4.1', unit: 'M/µL', range: '4.0–5.2', status: 'normal' },
  { name: 'Cholesterol', value: '210', unit: 'mg/dL', range: '<200', status: 'high' },
  { name: 'HDL', value: '58', unit: 'mg/dL', range: '>40', status: 'normal' },
];

export const cholesterolTrend = [
  { label: 'Dec 23', value: 210 },
  { label: 'Feb 24', value: 198 },
  { label: 'Mar 24', value: 180 },
  { label: 'Jun 24', value: 170 },
];

export const doctorComments = [
  {
    id: 1,
    doctor: 'Dr. S. Ivanov',
    initials: 'SI',
    date: 'Mar 18, 2024',
    report: 'CBC — Mar 15, 2024',
    text: 'Your WBC is slightly elevated. Monitor for 2 weeks and retest if symptoms develop. Stay hydrated and get adequate rest.',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    doctor: 'Dr. M. Kovalenko',
    initials: 'MK',
    date: 'Feb 12, 2024',
    report: 'Lipid Panel — Feb 10, 2024',
    text: 'Lipid panel looks good overall. Consider reducing saturated fat intake to keep cholesterol in the optimal range long-term.',
    color: 'bg-mint-500',
  },
];
