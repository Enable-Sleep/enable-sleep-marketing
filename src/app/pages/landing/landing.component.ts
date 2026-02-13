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
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
