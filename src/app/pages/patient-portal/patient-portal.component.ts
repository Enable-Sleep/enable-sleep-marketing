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
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
