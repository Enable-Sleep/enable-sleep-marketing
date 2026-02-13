import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SeoService } from '../../services/seo.service';
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
    MatIconModule,
    CtaBannerComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  complianceBadges = COMPLIANCE_BADGES;
  securitySections: SecurityDetail[] = [
    INFRASTRUCTURE_DETAILS,
    DATA_PROTECTION,
    ACCESS_CONTROLS
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['security']);
  }
}
