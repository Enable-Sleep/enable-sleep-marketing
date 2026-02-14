import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export interface ArticleSchema {
  title: string;
  description: string;
  authorName: string;
  datePublished: string;
  url: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  serviceType: string;
}

export interface PersonSchema {
  name: string;
  jobTitle: string;
  description: string;
  affiliation: string;
  knowsAbout: string[];
  url: string;
}

export interface HowToSchema {
  name: string;
  description: string;
  steps: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  clearDynamicSchemas(): void {
    if (!this.isBrowser) return;
    const elements = this.document.querySelectorAll('script[data-dynamic-schema]');
    elements.forEach(el => el.remove());
  }

  addSchema(schema: object): void {
    if (!this.isBrowser) return;
    const script = this.document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-dynamic-schema', 'true');
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  setArticleSchema(article: ArticleSchema): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'author': {
        '@type': 'Person',
        'name': article.authorName,
        'jobTitle': 'Dental Sleep Medicine Expert',
        'affiliation': {
          '@type': 'Organization',
          'name': 'Enable Sleep'
        }
      },
      'datePublished': article.datePublished,
      'publisher': {
        '@type': 'Organization',
        'name': 'Enable Sleep',
        'url': 'https://enablesleep.com',
        'logo': 'https://enablesleep.com/assets/logos/enable-sleep-wordmark-dark.png'
      },
      'mainEntityOfPage': article.url,
      'image': article.image || 'https://enablesleep.com/og-image.png'
    });
  }

  setFaqSchema(faqs: FaqItem[]): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  setBreadcrumbSchema(items: BreadcrumbItem[]): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        ...(item.url ? { 'item': item.url } : {})
      }))
    });
  }

  setServiceSchema(service: ServiceSchema): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.name,
      'description': service.description,
      'provider': {
        '@type': 'Organization',
        'name': service.provider,
        'url': 'https://enablesleep.com'
      },
      'serviceType': service.serviceType
    });
  }

  setPersonSchema(person: PersonSchema): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': person.name,
      'jobTitle': person.jobTitle,
      'description': person.description,
      'affiliation': {
        '@type': 'Organization',
        'name': person.affiliation,
        'url': 'https://enablesleep.com'
      },
      'knowsAbout': person.knowsAbout,
      'url': person.url
    });
  }

  setHowToSchema(howTo: HowToSchema): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': howTo.name,
      'description': howTo.description,
      'step': howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        'position': index + 1,
        'text': step
      }))
    });
  }

  setWebSiteSchema(): void {
    this.addSchema({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Enable Sleep',
      'url': 'https://enablesleep.com',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://enablesleep.com/resources?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });
  }
}
