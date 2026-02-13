export interface Feature {
  icon: string;
  title: string;
  description: string;
  personas: ('dentist' | 'sleep-doc' | 'staff' | 'patient')[];
  accentColor: 'primary' | 'green' | 'purple';
}

export const FEATURES: Feature[] = [
  {
    icon: 'checklist',
    title: 'Guided Workflows for Every Visit',
    description: 'Step-by-step templates tell you exactly what to document at each appointment\u2014from screening to treatment to follow-up.',
    personas: ['dentist', 'staff'],
    accentColor: 'green',
  },
  {
    icon: 'local_hospital',
    title: 'Sleep Physician Network',
    description: 'Connect your patients to board-certified sleep physicians. Get diagnosis and treatment authorization in days, not months.',
    personas: ['dentist', 'sleep-doc'],
    accentColor: 'green',
  },
  {
    icon: 'verified',
    title: 'Audit-Proof Compliance',
    description: 'Built by dental sleep medicine experts. Every workflow ensures compliance with Medicare and insurance requirements.',
    personas: ['dentist', 'staff'],
    accentColor: 'green',
  },
  {
    icon: 'payments',
    title: 'Medical Billing Engine',
    description: 'We handle the complex medical billing codes. Submit claims correctly the first time and get paid faster.',
    personas: ['dentist', 'staff'],
    accentColor: 'primary',
  },
  {
    icon: 'psychology',
    title: 'AI Medical Scribe',
    description: 'AI assistant documents patient visits automatically. Spend more time with patients, less time on paperwork.',
    personas: ['dentist', 'sleep-doc'],
    accentColor: 'purple',
  },
  {
    icon: 'folder_shared',
    title: 'Complete Sleep EMR',
    description: 'Purpose-built electronic medical records for sleep medicine. Calendaring, patient tracking, and task management in one platform.',
    personas: ['dentist', 'staff'],
    accentColor: 'primary',
  },
  {
    icon: 'phone_iphone',
    title: 'Patient Portal',
    description: 'Modern PWA portal for appointments, digital forms, progress tracking, and secure messaging on any device.',
    personas: ['patient', 'staff'],
    accentColor: 'purple',
  },
  {
    icon: 'calendar_month',
    title: 'Smart Scheduling',
    description: 'Appointment scheduling optimized for sleep medicine visit types. Automated reminders reduce no-shows.',
    personas: ['staff', 'patient'],
    accentColor: 'primary',
  },
  {
    icon: 'assignment',
    title: 'Digital Intake Forms',
    description: 'Patients complete medical history, sleep questionnaires, and consent forms digitally before their visit.',
    personas: ['patient', 'staff'],
    accentColor: 'green',
  },
  {
    icon: 'analytics',
    title: 'Practice Analytics',
    description: 'Track patient outcomes, revenue metrics, and compliance rates. Make data-driven decisions for practice growth.',
    personas: ['dentist', 'staff'],
    accentColor: 'primary',
  },
  {
    icon: 'security',
    title: 'Enterprise Security',
    description: 'HIPAA-compliant infrastructure with AES-256 encryption, role-based access controls, and comprehensive audit trails.',
    personas: ['dentist', 'staff', 'sleep-doc', 'patient'],
    accentColor: 'green',
  },
];
