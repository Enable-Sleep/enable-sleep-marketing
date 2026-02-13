import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';
import {
  COMPLIANCE_BADGES,
  INFRASTRUCTURE_DETAILS,
  DATA_PROTECTION,
  ACCESS_CONTROLS,
  SecurityDetail
} from '../../data/security.data';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CtaBannerComponent,
    BreadcrumbComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit, OnDestroy {
  complianceBadges = COMPLIANCE_BADGES;
  securitySections: SecurityDetail[] = [
    INFRASTRUCTURE_DETAILS,
    DATA_PROTECTION,
    ACCESS_CONTROLS
  ];

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['security']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'Security & Compliance' },
    ]);
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
