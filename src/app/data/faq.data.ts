export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  icon: string;
  questions: FaqQuestion[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'general',
    label: 'General',
    icon: 'info',
    questions: [
      {
        question: 'What is dental sleep medicine software?',
        answer: 'Dental sleep medicine software is a clinical platform designed to help dental practices screen, diagnose, and treat sleep-related breathing disorders such as obstructive sleep apnea. It streamlines workflows including patient screening, home sleep test ordering, oral appliance therapy management, medical billing, and compliance tracking — replacing fragmented manual processes with a single integrated system.'
      },
      {
        question: 'What is the difference between CPAP and oral appliance therapy?',
        answer: 'CPAP (Continuous Positive Airway Pressure) uses a mask connected to a machine that delivers pressurized air to keep the airway open during sleep. Oral appliance therapy uses a custom-fitted dental device that repositions the lower jaw forward to maintain an open airway. Both are effective treatments for obstructive sleep apnea, but oral appliances are often preferred by patients who find CPAP uncomfortable, with CPAP non-compliance rates approaching 50% within the first year.'
      },
      {
        question: 'What is obstructive sleep apnea and how common is it?',
        answer: 'Obstructive sleep apnea (OSA) is a condition in which the upper airway repeatedly collapses during sleep, causing breathing pauses that reduce blood oxygen levels and fragment sleep architecture. It affects an estimated 25-30 million adults in the United States, yet approximately 80% of moderate-to-severe cases remain undiagnosed. Left untreated, OSA significantly increases the risk of hypertension, heart disease, stroke, diabetes, and motor vehicle accidents.'
      },
      {
        question: 'Why should dentists offer sleep medicine services?',
        answer: 'Dentists are uniquely positioned to identify sleep-related breathing disorders because they routinely examine the airway, oral anatomy, and dental structures associated with OSA during regular checkups. The American Dental Association formally recommended in 2017 that dentists screen all patients for sleep-related breathing disorders. Beyond the clinical imperative, dental sleep medicine represents a significant practice growth opportunity with per-case reimbursements typically ranging from $2,000 to $4,000 through medical insurance.'
      },
      {
        question: 'What is Enable Sleep?',
        answer: 'Enable Sleep is a comprehensive dental sleep medicine platform built by Dr. Joseph Zelk, who has spent over 20 years training dentists in sleep medicine and has overseen more than 15,000 oral appliance cases. The platform provides guided clinical workflows, AI-powered documentation, a patient portal, medical billing support, and credentialing assistance — everything a dental practice needs to successfully screen, treat, and get paid for dental sleep medicine services.'
      },
      {
        question: 'How does dental sleep medicine differ from traditional sleep medicine?',
        answer: 'Traditional sleep medicine is typically practiced by physicians who diagnose sleep disorders and prescribe treatments like CPAP. Dental sleep medicine focuses specifically on the oral appliance therapy side of treatment, where dentists fabricate and manage custom mandibular advancement devices for patients with OSA. The two disciplines work together — sleep physicians diagnose and dental sleep medicine practitioners provide an alternative treatment pathway, particularly for patients who cannot tolerate CPAP.'
      }
    ]
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: 'rocket_launch',
    questions: [
      {
        question: 'What training do dentists need to practice sleep medicine?',
        answer: 'Most dentists begin with continuing education courses covering sleep physiology, airway assessment, oral appliance selection and fitting, and titration protocols. Organizations like the American Academy of Dental Sleep Medicine (AADSM) offer foundational training programs. While board certification through the ABDSM is valuable for advanced practitioners, it is not required to begin screening patients and providing oral appliance therapy in most states.'
      },
      {
        question: 'How long does it take to start offering dental sleep medicine?',
        answer: 'With a structured implementation plan, most practices can begin screening patients within the first two weeks and treat their first oral appliance case within 60-90 days. The primary timeline drivers are medical credentialing with insurance payers, which can take 30-60 days, and establishing referral relationships with local sleep physicians. Enable Sleep accelerates this process by providing step-by-step implementation guidance and handling the credentialing complexity.'
      },
      {
        question: 'Do I need a sleep physician to start a dental sleep medicine program?',
        answer: 'Yes, a collaborative relationship with a sleep physician is essential because oral appliance therapy requires a diagnosis of obstructive sleep apnea from a qualified medical provider. Dentists do not diagnose sleep apnea — they screen for risk factors and refer patients for diagnostic testing. Many dentists build referral networks with local sleep physicians, and home sleep testing has made the diagnostic pathway significantly more accessible for both providers and patients.'
      },
      {
        question: 'What equipment do I need for dental sleep medicine?',
        answer: 'The initial equipment investment is minimal compared to most dental services. You need digital or physical impression capabilities (which most practices already have), a pulse oximeter for baseline screening, and access to validated screening questionnaires. Oral appliance devices are ordered from dental labs, and home sleep tests are typically provided through third-party partnerships. No major capital equipment purchases are required to begin.'
      },
      {
        question: 'How does Enable Sleep help new practices get started?',
        answer: 'Enable Sleep provides a structured 90-day implementation framework that walks practices through every step — from medical credentialing and payer enrollment to screening protocol setup, referral network development, and first-case management. The platform includes guided clinical workflows, documentation templates, billing support, and access to mentorship from experienced dental sleep medicine practitioners, eliminating the need to build operational infrastructure from scratch.'
      }
    ]
  },
  {
    id: 'billing-insurance',
    label: 'Billing & Insurance',
    icon: 'payments',
    questions: [
      {
        question: 'How do dentists bill medical insurance for oral appliance therapy?',
        answer: 'Oral appliance therapy for obstructive sleep apnea is billed through medical insurance, not dental insurance, because it is a prescribed treatment for a diagnosed medical condition. Dentists submit claims using HCPCS codes (primarily E0486 for custom oral appliances) along with appropriate ICD-10 diagnosis codes for obstructive sleep apnea. This requires the practice to be credentialed with medical insurance payers and to follow medical documentation standards.'
      },
      {
        question: 'What billing codes does dental sleep medicine use?',
        answer: 'The primary HCPCS code for custom oral appliances is E0486, which covers mandibular advancement devices prescribed for obstructive sleep apnea. K1027 is used for oral appliance adjustments and follow-up services. Practices also use standard E&M (evaluation and management) codes for consultations and follow-up visits. Proper documentation including the sleep study results, physician prescription, and clinical notes is essential for clean claim submission and timely reimbursement.'
      },
      {
        question: 'What is the difference between dental and medical billing for sleep appliances?',
        answer: 'Dental billing uses CDT codes and submits to dental insurance carriers, while medical billing for oral appliance therapy uses HCPCS and CPT codes submitted to medical insurance carriers. The critical distinction is that oral appliances for OSA are a medical treatment — they are prescribed by a physician for a medical diagnosis, even though they are fabricated and managed by a dentist. This means higher reimbursement rates (typically $2,000-$4,000 per case) but also more complex documentation and credentialing requirements.'
      },
      {
        question: 'Does Medicare cover oral appliance therapy?',
        answer: 'Yes, Medicare covers custom oral appliances for the treatment of obstructive sleep apnea under HCPCS code E0486. The patient must have a diagnosis of OSA confirmed by a qualifying sleep study, a prescription from a treating physician, and documentation that they meet Medicare coverage criteria. Medicare reimbursement rates for oral appliances are publicly posted and provide predictable revenue for practices that maintain compliant documentation.'
      },
      {
        question: 'How does Enable Sleep handle medical billing?',
        answer: 'Enable Sleep provides integrated medical billing support including benefits verification, claim preparation, and submission guidance. The platform generates the clinical documentation that medical payers require — sleep study summaries, physician prescriptions, clinical assessments, and progress notes — in the correct format for clean claim submission. This dramatically reduces denial rates and accelerates reimbursement by ensuring documentation meets medical billing standards from the start.'
      }
    ]
  },
  {
    id: 'platform-technology',
    label: 'Platform & Technology',
    icon: 'devices',
    questions: [
      {
        question: 'How does AI scribing work for dental sleep medicine?',
        answer: 'Enable Sleep\'s AI scribe listens to the clinical conversation during patient visits and automatically generates structured clinical documentation in real time. It captures relevant medical history, examination findings, screening results, and treatment decisions without requiring the clinician to type notes manually. The AI is specifically trained on dental sleep medicine terminology and documentation requirements, producing notes that meet both clinical standards and medical billing documentation thresholds.'
      },
      {
        question: 'Is Enable Sleep HIPAA compliant?',
        answer: 'Yes, Enable Sleep is built with HIPAA compliance as a foundational requirement. All patient data is encrypted both in transit and at rest using industry-standard encryption protocols. The platform maintains strict access controls, audit logging, and data handling procedures that meet or exceed HIPAA security and privacy requirements. Regular security assessments ensure ongoing compliance with evolving healthcare data protection standards.'
      },
      {
        question: 'Does Enable Sleep integrate with my existing practice management software?',
        answer: 'Enable Sleep is designed to complement your existing dental practice management system rather than replace it. The platform operates alongside your current PMS, handling the sleep-medicine-specific workflows — screening, medical documentation, treatment tracking, and medical billing — that general dental software was not built to manage. This means no disruption to your existing dental workflows while adding comprehensive sleep medicine capabilities.'
      },
      {
        question: 'What devices can patients use to access the patient portal?',
        answer: 'The Enable Sleep patient portal is a web-based application accessible from any device with a modern browser, including smartphones, tablets, and desktop computers. Patients can complete screening questionnaires, upload sleep study results, view treatment progress, communicate with the practice, and access educational materials from any device. No app download is required — patients simply access the portal through a secure link.'
      },
      {
        question: 'How does Enable Sleep\'s guided workflow work?',
        answer: 'The guided workflow system walks clinicians through each visit type with structured prompts and decision trees specific to dental sleep medicine. From initial screening through treatment delivery and long-term compliance monitoring, the platform ensures no clinical step is missed and all required documentation is captured. Each workflow adapts based on patient responses and clinical findings, providing relevant clinical guidance and automatically generating the documentation needed for medical billing.'
      }
    ]
  },
  {
    id: 'clinical-workflows',
    label: 'Clinical Workflows',
    icon: 'clinical_notes',
    questions: [
      {
        question: 'What visit types does Enable Sleep support?',
        answer: 'Enable Sleep supports the complete dental sleep medicine patient journey including initial screening visits, comprehensive sleep evaluations, oral appliance consultations, impression and fitting appointments, appliance delivery, titration and adjustment visits, efficacy follow-ups, and ongoing compliance monitoring. Each visit type has its own guided workflow with appropriate documentation templates and billing code recommendations.'
      },
      {
        question: 'How does the sleep screening process work?',
        answer: 'Screening begins with validated questionnaires such as the STOP-BANG and Epworth Sleepiness Scale, which can be completed by patients through the portal before their appointment. During the clinical visit, the dentist or hygienist assesses airway anatomy including Mallampati classification, tongue scalloping, tonsil size, and signs of bruxism. Positive screenings are documented and the patient is referred for a diagnostic home sleep test or in-lab polysomnography through established physician partnerships.'
      },
      {
        question: 'How are home sleep tests managed in the platform?',
        answer: 'Enable Sleep streamlines home sleep test (HST) coordination by managing the referral to sleep physicians, tracking test distribution and return, and integrating results into the patient record once the interpreting physician provides the diagnosis. The platform tracks where each patient is in the diagnostic pipeline so no referrals fall through the cracks. Results, including AHI scores and oxygen desaturation data, are stored alongside clinical notes for treatment planning and insurance documentation.'
      },
      {
        question: 'What happens after a patient receives their oral appliance?',
        answer: 'After delivery, the patient enters a titration phase where the appliance is gradually adjusted to optimize therapeutic efficacy while maintaining comfort. Enable Sleep schedules and tracks follow-up visits, documents adjustment progress, and monitors patient-reported outcomes. Once titration is complete, a follow-up sleep test confirms treatment efficacy, and the patient transitions to a long-term compliance monitoring protocol with regular check-ins documented in the platform.'
      },
      {
        question: 'How does Enable Sleep track compliance and outcomes?',
        answer: 'The platform maintains longitudinal patient records that track treatment outcomes from initial screening through ongoing maintenance. Key metrics include pre- and post-treatment AHI scores, patient-reported symptom improvements, appliance wear time, and follow-up test results. This outcomes data supports insurance documentation for renewals, demonstrates treatment efficacy to referring physicians, and helps the practice identify patterns that improve clinical protocols over time.'
      }
    ]
  }
];
