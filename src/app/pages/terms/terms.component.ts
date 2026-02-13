import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit, OnDestroy {
  lastUpdated = 'January 9, 2025';

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['terms']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'Terms of Service' },
    ]);
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }
}
