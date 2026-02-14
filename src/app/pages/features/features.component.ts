import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';
import { FEATURES, Feature } from '../../data/features.data';
import { JOURNEY_STEPS } from '../../data/journey-steps.data';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    FeatureCardComponent,
    CtaBannerComponent,
    BreadcrumbComponent,
    SectionHeaderComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  allFeatures = FEATURES;
  journeySteps = JOURNEY_STEPS;

  personas = [
    { key: 'dentist' as const, label: 'Dentists', icon: 'medical_services' },
    { key: 'sleep-doc' as const, label: 'Sleep Physicians', icon: 'local_hospital' },
    { key: 'staff' as const, label: 'Office Staff', icon: 'groups' },
    { key: 'patient' as const, label: 'Patients', icon: 'person' },
  ];

  faqs: { question: string; answer: string }[] = [
    {
      question: 'What features does dental sleep medicine software need?',
      answer: 'Dental sleep medicine software should include guided clinical workflows, integrated medical billing (E0486/K1027), AI-powered documentation, a patient portal, sleep physician collaboration tools, home sleep test management, compliance tracking, and HIPAA-compliant security. Enable Sleep includes all of these in a single platform.'
    },
    {
      question: 'How does Enable Sleep differ from general dental practice management software?',
      answer: 'Unlike general dental PMS, Enable Sleep is purpose-built for dental sleep medicine with medical billing (not dental billing), sleep physician referral networks, oral appliance therapy workflows, and AI documentation specifically trained on sleep medicine visit types.'
    },
    {
      question: 'Can Enable Sleep handle both dental and medical billing?',
      answer: 'Enable Sleep focuses on the medical billing side of dental sleep medicine, which is the primary revenue pathway for oral appliance therapy. The platform generates correct HCPCS codes (E0486, K1027) and ICD-10 codes (G47.33) automatically from your clinical documentation.'
    },
    {
      question: 'Does Enable Sleep support multi-location dental sleep practices?',
      answer: 'Yes, Enable Sleep is designed to scale with your practice. The cloud-based platform allows you to manage multiple locations, providers, and patient workflows from a single dashboard with role-based access controls.'
    },
    {
      question: 'What compliance tools does Enable Sleep provide?',
      answer: 'Enable Sleep includes automated compliance tracking for Medicare and commercial insurance requirements, documentation completeness checks, HIPAA audit logs, treatment progress monitoring, and follow-up scheduling to maintain compliance with payer requirements.'
    },
  ];

  activePersona = signal<string>('dentist');

  filteredFeatures = computed(() => {
    const persona = this.activePersona();
    return this.allFeatures.filter(f => f.personas.includes(persona as any));
  });

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['features']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'Features' },
    ]);
    this.schemaService.setFaqSchema(this.faqs);
    this.schemaService.setServiceSchema({
      name: 'Enable Sleep Dental Sleep Medicine Platform',
      description: 'Complete dental sleep medicine software with guided workflows, AI documentation, medical billing, and patient portal.',
      provider: 'Enable Sleep',
      serviceType: 'Dental Sleep Medicine Software',
    });
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }

  onTabChange(index: number): void {
    this.activePersona.set(this.personas[index].key);
  }
}
