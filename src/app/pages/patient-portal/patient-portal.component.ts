import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScreenshotPlaceholderComponent } from '../../components/screenshot-placeholder/screenshot-placeholder.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';

@Component({
  selector: 'app-patient-portal',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CtaBannerComponent,
    BreadcrumbComponent,
    ScreenshotPlaceholderComponent,
    SectionHeaderComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.scss']
})
export class PatientPortalComponent implements OnInit, OnDestroy {
  portalFeatures = [
    {
      icon: 'calendar_month',
      title: 'Online Scheduling',
      description: 'Patients book and manage appointments directly. Automated reminders reduce no-shows.'
    },
    {
      icon: 'assignment',
      title: 'Digital Intake Forms',
      description: 'Medical history, sleep questionnaires, and consent forms completed before the visit.'
    },
    {
      icon: 'trending_up',
      title: 'Progress Tracking',
      description: 'Patients view their treatment progress, sleep test results, and compliance metrics.'
    },
    {
      icon: 'chat',
      title: 'Secure Messaging',
      description: 'HIPAA-compliant messaging between patients and care team for questions and updates.'
    },
  ];

  pwaSteps = [
    { step: 1, title: 'Open the Portal Link', description: 'Patients receive a link via text or email to access their portal.' },
    { step: 2, title: 'Add to Home Screen', description: 'One tap to install the PWA on their phone\u2014no app store needed.' },
    { step: 3, title: 'Access Anytime', description: 'The portal works like a native app with offline support and push notifications.' },
  ];

  faqs: { question: string; answer: string }[] = [
    {
      question: 'What can patients do through the Enable Sleep patient portal?',
      answer: 'Patients can complete digital intake forms, view their treatment progress, communicate securely with the care team, access appointment details, and track their oral appliance therapy compliance — all from any device through the progressive web app (PWA).'
    },
    {
      question: 'Is the patient portal available on mobile devices?',
      answer: 'Yes, the Enable Sleep patient portal is built as a progressive web app (PWA) that works on any device — smartphones, tablets, and desktop computers. Patients can install it on their home screen for quick access without downloading from an app store.'
    },
    {
      question: 'How does the patient portal improve treatment compliance?',
      answer: 'The portal provides patients with real-time visibility into their treatment journey, sends automated reminders for follow-up appointments, and allows them to log their nightly appliance usage. This transparency and engagement helps patients stay committed to their oral appliance therapy.'
    },
    {
      question: 'Is patient data secure in the portal?',
      answer: 'Absolutely. The Enable Sleep patient portal is fully HIPAA-compliant with AES-256 encryption for data at rest and in transit, role-based access controls, and comprehensive audit logging. All patient data is protected with the same enterprise-grade security as the main platform.'
    },
  ];

  practiceBenefits = [
    { icon: 'schedule', text: 'Reduce front desk phone calls by 40% with online scheduling' },
    { icon: 'edit_off', text: 'Eliminate paper intake forms and manual data entry' },
    { icon: 'notifications_active', text: 'Automated appointment reminders decrease no-show rates' },
    { icon: 'forum', text: 'Secure messaging reduces unnecessary office visits' },
  ];

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['patientPortal']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'Patient Portal' },
    ]);
    this.schemaService.setFaqSchema(this.faqs);
    this.schemaService.setServiceSchema({
      name: 'Enable Sleep Patient Portal',
      description: 'HIPAA-compliant patient portal for dental sleep medicine with digital forms, treatment tracking, secure messaging, and PWA access on any device.',
      provider: 'Enable Sleep',
      serviceType: 'Patient Portal',
    });
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
