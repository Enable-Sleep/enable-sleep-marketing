import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../services/seo.service';
import { SchemaService } from '../../services/schema.service';
import { SEO_META } from '../../data/seo-meta.data';
import { RESOURCES, Resource, CATEGORIES, CategoryMeta } from '../../data/resources.data';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CtaBannerComponent,
    BreadcrumbComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;
  activeCategory = signal<string>('all');

  allArticles: Resource[] = [...RESOURCES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  filteredArticles = computed(() => {
    const category = this.activeCategory();
    if (category === 'all') {
      return this.allArticles;
    }
    return this.allArticles.filter(a => a.category === category);
  });

  featuredArticle = computed(() => {
    const articles = this.filteredArticles();
    if (articles.length === 0) return null;
    const featured = articles.find(a => a.featured);
    return featured || articles[0];
  });

  secondaryArticles = computed(() => {
    const articles = this.filteredArticles();
    const featured = this.featuredArticle();
    if (!featured) return [];
    const remaining = articles.filter(a => a.slug !== featured.slug);
    return remaining.slice(0, 2);
  });

  remainingArticles = computed(() => {
    const articles = this.filteredArticles();
    const featured = this.featuredArticle();
    if (!featured) return [];
    const remaining = articles.filter(a => a.slug !== featured.slug);
    return remaining.slice(2);
  });

  constructor(
    private seoService: SeoService,
    private schemaService: SchemaService
  ) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags(SEO_META['resources']);
    this.schemaService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://enablesleep.com' },
      { name: 'Resources' },
    ]);
  }

  ngOnDestroy(): void {
    this.schemaService.clearDynamicSchemas();
  }

  setCategory(slug: string): void {
    this.activeCategory.set(slug);
  }

  getCategoryLabel(category: string): string {
    const found = CATEGORIES.find(c => c.slug === category);
    return found ? found.label : category;
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
