import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ExplorePlatformComponent } from '../../components/explore-platform/explore-platform.component';
import { CalloutBoxComponent } from '../../components/callout-box/callout-box.component';
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
    MatExpansionModule,
    CtaBannerComponent,
    BreadcrumbComponent,
    ExplorePlatformComponent,
    CalloutBoxComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit, OnDestroy {
  faqs: { question: string; answer: string }[] = [
    {
      question: 'Is Enable Sleep HIPAA compliant?',
      answer: 'Yes, Enable Sleep is fully HIPAA compliant. The platform implements all required administrative, physical, and technical safeguards including AES-256 encryption, role-based access controls, comprehensive audit logging, and Business Associate Agreements (BAAs) with all subprocessors.'
    },
    {
      question: 'What encryption does Enable Sleep use?',
      answer: 'Enable Sleep uses AES-256 encryption for all data at rest and TLS 1.3 encryption for all data in transit. This is the same encryption standard used by banks and government agencies to protect sensitive information.'
    },
    {
      question: 'Does Enable Sleep have SOC 2 certification?',
      answer: 'Enable Sleep\'s infrastructure is built on SOC 2 certified cloud providers with additional security controls layered on top. The platform undergoes regular security assessments and penetration testing to maintain the highest security standards.'
    },
    {
      question: 'How does Enable Sleep protect patient health information (PHI)?',
      answer: 'Patient health information is protected through multiple layers: encrypted storage, encrypted transmission, role-based access controls that limit who can view specific records, automatic session timeouts, comprehensive audit trails that track every access to PHI, and regular security audits.'
    },
  ];

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
    this.schemaService.setFaqSchema(this.faqs);
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
