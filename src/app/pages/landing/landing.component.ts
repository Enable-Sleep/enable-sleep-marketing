import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScreenshotPlaceholderComponent } from '../../components/screenshot-placeholder/screenshot-placeholder.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';
import { FEATURES } from '../../data/features.data';
import { JOURNEY_STEPS } from '../../data/journey-steps.data';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    FeatureCardComponent,
    CtaBannerComponent,
    ScreenshotPlaceholderComponent,
    SectionHeaderComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  topFeatures = FEATURES.slice(0, 6);
  journeySteps = JOURNEY_STEPS;

  faqs: { question: string; answer: string }[] = [
    {
      question: 'What is dental sleep medicine?',
      answer: 'Dental sleep medicine is the discipline where dentists screen, treat, and manage patients with sleep-related breathing disorders — primarily obstructive sleep apnea — using oral appliance therapy. The American Dental Association has recommended that dentists screen all patients for these conditions since 2017.'
    },
    {
      question: 'What is oral appliance therapy for sleep apnea?',
      answer: 'Oral appliance therapy uses a custom-fitted dental device (mandibular advancement device) worn during sleep to reposition the lower jaw and keep the airway open. It is an FDA-approved treatment for obstructive sleep apnea and a primary alternative to CPAP therapy, particularly for patients with mild-to-moderate sleep apnea or CPAP intolerance.'
    },
    {
      question: 'How do dentists get started with dental sleep medicine?',
      answer: 'Dentists typically start by completing continuing education in dental sleep medicine, then implementing screening protocols in their practice. A platform like Enable Sleep provides the clinical workflows, medical billing, AI documentation, and physician collaboration tools needed to run a compliant dental sleep medicine program from day one.'
    },
    {
      question: 'How profitable is dental sleep medicine for dental practices?',
      answer: 'Dental sleep medicine is highly profitable, with practices averaging approximately $2,000 profit per oral appliance therapy case through medical insurance reimbursement. Since an estimated 1 in 5 adult dental patients has sleep apnea, most practices have a large untapped patient base already in their chairs.'
    },
    {
      question: 'What makes Enable Sleep different from other dental sleep medicine solutions?',
      answer: 'Enable Sleep is the first all-in-one dental sleep medicine platform combining AI-powered clinical documentation, guided patient workflows, integrated medical billing, a patient portal, and sleep physician collaboration — all in a single HIPAA-compliant system. Unlike legacy tools, it uses AI to automate documentation and billing code generation.'
    },
  ];

  trustSignals = [
    { icon: 'verified_user', label: 'HIPAA Compliant' },
    { icon: 'lock', label: '256-bit Encryption' },
    { icon: 'speed', label: '99.9% Uptime' },
  ];

  financialStats = [
    { value: '~$2,000', label: 'Profit per patient for compliant oral appliance therapy' },
    { value: '1 in 5', label: 'Adult patients in dental offices have sleep apnea' },
    { value: '85%', label: 'Less documentation time with AI Medical Scribe' },
  ];

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['home']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home' },
    ]);
    this.schemaService.setFaqSchema(this.faqs);
    this.schemaService.setWebSiteSchema();
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
