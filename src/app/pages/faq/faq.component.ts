import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';
import { FAQ_CATEGORIES } from '../../data/faq.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    BreadcrumbComponent,
    CtaBannerComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {
  categories = FAQ_CATEGORIES;
  activeCategory = signal<string>('all');

  filteredCategories = computed(() => {
    const active = this.activeCategory();
    if (active === 'all') return this.categories;
    return this.categories.filter(c => c.id === active);
  });

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['faq']);

    const allFaqs = this.categories.flatMap(c =>
      c.questions.map(q => ({ question: q.question, answer: q.answer }))
    );
    this.schemaService.setFaqSchema(allFaqs);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'FAQ' },
    ]);
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }
}
