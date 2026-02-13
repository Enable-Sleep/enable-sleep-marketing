import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { DemoRequestFormComponent } from '../../components/demo-request-form/demo-request-form.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SEO_META } from '../../data/seo-meta.data';
import { SchemaService } from '../../services/schema.service';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-demo-request',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    DemoRequestFormComponent,
    BreadcrumbComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './demo-request.component.html',
  styleUrls: ['./demo-request.component.scss']
})
export class DemoRequestComponent implements OnInit, OnDestroy {
  faqs = [
    {
      question: 'How long is the demo?',
      answer: 'A typical demo takes about 30 minutes. We\'ll walk you through the platform features most relevant to your practice and answer any questions you have.'
    },
    {
      question: 'Is there a cost for the demo?',
      answer: 'No, demos are completely free with no obligation. We want you to see exactly how Enable Sleep can help your practice before making any decisions.'
    },
    {
      question: 'What do I need to prepare?',
      answer: 'Nothing at all! Just bring your questions. It helps if you can share a bit about your current workflow so we can tailor the demo to your needs.'
    },
    {
      question: 'Can my whole team attend?',
      answer: 'Absolutely! We encourage you to bring your office manager, billing staff, and any other team members who would use the platform.'
    },
    {
      question: 'How soon can I get started after the demo?',
      answer: 'We can have most practices up and running within a week of signing up. Our onboarding team handles the setup so you can focus on patients.'
    },
  ];

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['demo']);
    this.schemaService.setFaqSchema(this.faqs);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'Request a Demo' },
    ]);
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
