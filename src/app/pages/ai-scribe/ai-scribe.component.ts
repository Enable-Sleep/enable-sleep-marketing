import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScreenshotPlaceholderComponent } from '../../components/screenshot-placeholder/screenshot-placeholder.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ExplorePlatformComponent } from '../../components/explore-platform/explore-platform.component';
import { StatsBarComponent } from '../../components/stats-bar/stats-bar.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';

@Component({
  selector: 'app-ai-scribe',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatExpansionModule,
    CtaBannerComponent,
    BreadcrumbComponent,
    ScreenshotPlaceholderComponent,
    SectionHeaderComponent,
    ExplorePlatformComponent,
    StatsBarComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './ai-scribe.component.html',
  styleUrls: ['./ai-scribe.component.scss']
})
export class AiScribeComponent implements OnInit, OnDestroy {
  howItWorks = [
    {
      step: 1,
      icon: 'mic',
      title: 'Start Recording',
      description: 'Tap to start when the patient visit begins. The AI listens and processes in real time.'
    },
    {
      step: 2,
      icon: 'record_voice_over',
      title: 'Conduct Your Visit',
      description: 'Focus on your patient. The AI captures clinical findings, patient history, and treatment discussions.'
    },
    {
      step: 3,
      icon: 'description',
      title: 'Review SOAP Note',
      description: 'A compliant SOAP note is generated automatically with ICD-10 and CPT codes ready for billing.'
    },
  ];

  stats = [
    { value: '85%', label: 'Less documentation time' },
    { value: '7+', label: 'Visit types supported' },
    { value: 'Auto', label: 'Billing code generation' },
  ];

  faqs: { question: string; answer: string }[] = [
    {
      question: 'How does AI scribing work for dental sleep medicine?',
      answer: 'Enable Sleep\'s AI Medical Scribe listens during patient visits and automatically generates compliant SOAP notes with ICD-10 and CPT/HCPCS billing codes. The AI is specifically trained on dental sleep medicine visit types including screenings, consultations, impressions, deliveries, and follow-ups.'
    },
    {
      question: 'Is the AI scribe accurate for dental sleep medicine documentation?',
      answer: 'The AI scribe is trained specifically on dental sleep medicine terminology and workflows. It captures clinical findings, patient history, and treatment discussions, then generates structured SOAP notes that include the correct diagnostic codes (G47.33) and procedure codes (E0486, K1027) for each visit type.'
    },
    {
      question: 'How much time does the AI scribe save per patient visit?',
      answer: 'Practices using Enable Sleep\'s AI Medical Scribe report approximately 85% reduction in documentation time. Instead of spending 10-15 minutes writing notes after each visit, clinicians review and approve an AI-generated note in 1-2 minutes.'
    },
    {
      question: 'Does the AI scribe work for all dental sleep medicine visit types?',
      answer: 'Yes, the AI scribe supports 7+ visit types common in dental sleep medicine: initial screenings, sleep consultations, impression appointments, device deliveries, titration visits, follow-up checks, and compliance reviews. Each visit type has its own documentation template and billing code mappings.'
    },
  ];

  soapSections = [
    { label: 'Subjective', color: 'text-accent-purple', content: 'Patient reports persistent snoring and daytime fatigue. Epworth Sleepiness Scale score: 14/24. Bed partner confirms witnessed apneas.' },
    { label: 'Objective', color: 'text-primary', content: 'Mallampati Class III. BMI 28.4. Neck circumference 16.5". Mandibular range of motion: 42mm. No TMJ clicking or crepitus.' },
    { label: 'Assessment', color: 'text-accent-green', content: 'Moderate obstructive sleep apnea (G47.33). Patient is a candidate for mandibular advancement device therapy.' },
    { label: 'Plan', color: 'text-gray-700', content: 'Refer for home sleep test via physician network. Schedule follow-up for impressions. CPT: 99213, E0486.' },
  ];

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['aiScribe']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'AI Medical Scribe' },
    ]);
    this.schemaService.setFaqSchema(this.faqs);
    this.schemaService.setServiceSchema({
      name: 'Enable Sleep AI Medical Scribe',
      description: 'AI-powered clinical documentation for dental sleep medicine that automatically generates SOAP notes and billing codes from patient visits.',
      provider: 'Enable Sleep',
      serviceType: 'AI Medical Documentation',
    });
    this.schemaService.setHowToSchema({
      name: 'How to Use AI Scribing for Dental Sleep Medicine',
      description: 'Three-step process for using Enable Sleep\'s AI Medical Scribe during dental sleep medicine patient visits.',
      steps: this.howItWorks.map(step => `${step.title}: ${step.description}`),
    });
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
