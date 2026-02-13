import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SeoService } from '../../services/seo.service';
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
    SectionHeaderComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  allFeatures = FEATURES;
  journeySteps = JOURNEY_STEPS;

  personas = [
    { key: 'dentist' as const, label: 'Dentists', icon: 'medical_services' },
    { key: 'sleep-doc' as const, label: 'Sleep Physicians', icon: 'local_hospital' },
    { key: 'staff' as const, label: 'Office Staff', icon: 'groups' },
    { key: 'patient' as const, label: 'Patients', icon: 'person' },
  ];

  activePersona = signal<string>('dentist');

  filteredFeatures = computed(() => {
    const persona = this.activePersona();
    return this.allFeatures.filter(f => f.personas.includes(persona as any));
  });

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['features']);
  }

  onTabChange(index: number): void {
    this.activePersona.set(this.personas[index].key);
  }
}
