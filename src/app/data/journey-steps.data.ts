export interface JourneyStep {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: 1,
    icon: 'search',
    title: 'Screen & Identify',
    description: 'Use validated screening tools to identify patients at risk for sleep-disordered breathing during routine dental visits.',
  },
  {
    number: 2,
    icon: 'assignment',
    title: 'Intake & History',
    description: 'Digital intake forms capture medical history, sleep questionnaires, and consent\u2014all before the patient arrives.',
  },
  {
    number: 3,
    icon: 'local_hospital',
    title: 'Sleep Physician Referral',
    description: 'Connect your patient to a board-certified sleep physician through our network for diagnosis within days.',
  },
  {
    number: 4,
    icon: 'biotech',
    title: 'Sleep Test & Diagnosis',
    description: 'Coordinate home sleep testing or in-lab polysomnography. Receive diagnosis and treatment authorization digitally.',
  },
  {
    number: 5,
    icon: 'medical_services',
    title: 'Treatment Planning',
    description: 'Create compliant treatment plans with guided workflows. Oral appliance selection, impressions, and documentation.',
  },
  {
    number: 6,
    icon: 'precision_manufacturing',
    title: 'Appliance Delivery',
    description: 'Document delivery visits with step-by-step templates. Fit, adjust, and educate patients on proper use.',
  },
  {
    number: 7,
    icon: 'tune',
    title: 'Titration & Follow-Up',
    description: 'Track titration progress and schedule follow-ups. Automated reminders keep patients on their treatment plan.',
  },
  {
    number: 8,
    icon: 'monitor_heart',
    title: 'Efficacy Testing',
    description: 'Coordinate follow-up sleep tests to verify treatment effectiveness. Document outcomes for compliance.',
  },
  {
    number: 9,
    icon: 'payments',
    title: 'Billing & Claims',
    description: 'Submit medical insurance claims with correct codes. Track reimbursements and manage the revenue cycle.',
  },
];
