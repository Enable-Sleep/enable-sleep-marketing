import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScreenshotPlaceholderComponent } from '../../components/screenshot-placeholder/screenshot-placeholder.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SeoService } from '../../services/seo.service';
import { SEO_META } from '../../data/seo-meta.data';

@Component({
  selector: 'app-ai-scribe',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CtaBannerComponent,
    ScreenshotPlaceholderComponent,
    SectionHeaderComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './ai-scribe.component.html',
  styleUrls: ['./ai-scribe.component.scss']
})
export class AiScribeComponent implements OnInit {
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

  soapSections = [
    { label: 'Subjective', color: 'text-accent-purple', content: 'Patient reports persistent snoring and daytime fatigue. Epworth Sleepiness Scale score: 14/24. Bed partner confirms witnessed apneas.' },
    { label: 'Objective', color: 'text-primary', content: 'Mallampati Class III. BMI 28.4. Neck circumference 16.5". Mandibular range of motion: 42mm. No TMJ clicking or crepitus.' },
    { label: 'Assessment', color: 'text-accent-green', content: 'Moderate obstructive sleep apnea (G47.33). Patient is a candidate for mandibular advancement device therapy.' },
    { label: 'Plan', color: 'text-gray-700', content: 'Refer for home sleep test via physician network. Schedule follow-up for impressions. CPT: 99213, E0486.' },
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['aiScribe']);
  }
}
