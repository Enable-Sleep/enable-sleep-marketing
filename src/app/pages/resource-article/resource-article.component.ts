import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';
import { SeoService } from '../../services/seo.service';
import { RESOURCES, Resource, CATEGORIES } from '../../data/resources.data';

@Component({
  selector: 'app-resource-article',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    CtaBannerComponent
  ],
  templateUrl: './resource-article.component.html',
  styleUrls: ['./resource-article.component.scss']
})
export class ResourceArticleComponent implements OnInit {
  article: Resource | null = null;
  relatedArticles: Resource[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.article = RESOURCES.find(r => r.slug === slug) || null;

    if (!this.article) {
      this.router.navigate(['/resources']);
      return;
    }

    this.seoService.updateMetaTags({
      title: `${this.article.title} - Enable Sleep`,
      description: this.article.seoDescription,
      url: `https://enablesleep.com/resources/${this.article.slug}`,
    });

    // Compute related articles
    const currentSlug = this.article.slug;
    const currentCategory = this.article.category;
    const allOthers = [...RESOURCES]
      .filter(r => r.slug !== currentSlug)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const sameCategory = allOthers.filter(r => r.category === currentCategory);
    const differentCategory = allOthers.filter(r => r.category !== currentCategory);

    const related: Resource[] = [];
    for (const article of sameCategory) {
      if (related.length >= 3) break;
      related.push(article);
    }
    for (const article of differentCategory) {
      if (related.length >= 3) break;
      related.push(article);
    }

    this.relatedArticles = related;
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
