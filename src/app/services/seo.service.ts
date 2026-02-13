import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  url?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private titleService: Title) {}

  updateMetaTags(config: SeoConfig): void {
    this.titleService.setTitle(config.title);
    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ property: 'og:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });
    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    this.meta.updateTag({ name: 'twitter:title', content: config.twitterTitle || config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
  }
}
