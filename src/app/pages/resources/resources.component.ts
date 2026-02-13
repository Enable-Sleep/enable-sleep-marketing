import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { SeoService } from '../../services/seo.service';
import { RESOURCES, Resource, CATEGORIES, CategoryMeta } from '../../data/resources.data';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CtaBannerComponent,
    ScrollAnimateDirective
  ],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
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

  constructor(private seoService: SeoService) {
    this.seoService.updateMetaTags({
      title: 'Resources - Enable Sleep | Dental Sleep Medicine Insights',
      description: 'Expert insights and guides on dental sleep medicine from Dr. Joseph Zelk. Learn about screening, compliance, billing, and growing your sleep medicine practice.',
      url: 'https://enablesleep.com/resources',
    });
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
