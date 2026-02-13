export interface ComplianceBadge {
  icon: string;
  title: string;
  description: string;
}

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    icon: 'verified_user',
    title: 'HIPAA Compliant',
    description: 'Full compliance with Health Insurance Portability and Accountability Act requirements.',
  },
  {
    icon: 'shield',
    title: 'SOC 2 Certified',
    description: 'Service Organization Control Type 2 certification for security, availability, and confidentiality.',
  },
  {
    icon: 'lock',
    title: 'End-to-End Encrypted',
    description: 'All data encrypted in transit and at rest using industry-standard encryption protocols.',
  },
];

export interface SecurityDetail {
  category: string;
  icon: string;
  items: { label: string; value: string }[];
}

export const INFRASTRUCTURE_DETAILS: SecurityDetail = {
  category: 'Infrastructure',
  icon: 'cloud',
  items: [
    { label: 'Cloud Provider', value: 'Amazon Web Services (AWS)' },
    { label: 'Encryption at Rest', value: 'AES-256 encryption' },
    { label: 'Encryption in Transit', value: 'TLS 1.3' },
    { label: 'Availability', value: 'Multi-AZ deployment with 99.9% uptime SLA' },
    { label: 'Backups', value: 'Automated daily backups with point-in-time recovery' },
  ],
};

export const DATA_PROTECTION: SecurityDetail = {
  category: 'Data Protection',
  icon: 'storage',
  items: [
    { label: 'Backup Frequency', value: 'Daily automated backups' },
    { label: 'Recovery', value: 'Point-in-time recovery within 30 days' },
    { label: 'Retention', value: 'Configurable data retention policies per HIPAA requirements' },
    { label: 'Data Residency', value: 'All data stored within the United States' },
  ],
};

export const ACCESS_CONTROLS: SecurityDetail = {
  category: 'Access Controls',
  icon: 'admin_panel_settings',
  items: [
    { label: 'Authentication', value: 'Multi-factor authentication (MFA) required' },
    { label: 'Authorization', value: 'Role-based access control (RBAC)' },
    { label: 'Audit Trail', value: 'Comprehensive logging of all user actions' },
    { label: 'Session Management', value: 'Automatic timeout and session invalidation' },
  ],
};
