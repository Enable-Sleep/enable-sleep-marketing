import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

interface PlatformCard {
  route: string;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
}

const PLATFORM_CARDS: PlatformCard[] = [
  {
    route: '/features',
    icon: 'dashboard',
    iconColor: 'text-primary',
    title: 'All Features',
    description: 'Guided workflows, billing, and compliance tools for dental sleep medicine.',
  },
  {
    route: '/ai-scribe',
    icon: 'psychology',
    iconColor: 'text-accent-purple',
    title: 'AI Medical Scribe',
    description: 'Automated clinical documentation with SOAP notes and billing codes.',
  },
  {
    route: '/patient-portal',
    icon: 'phone_iphone',
    iconColor: 'text-primary',
    title: 'Patient Portal',
    description: 'Scheduling, forms, messaging, and progress tracking for patients.',
  },
  {
    route: '/security',
    icon: 'shield',
    iconColor: 'text-accent-green',
    title: 'Security & Compliance',
    description: 'HIPAA-compliant infrastructure with enterprise-grade encryption.',
  },
];

@Component({
  selector: 'app-explore-platform',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, ScrollAnimateDirective],
  template: `
    <section class="py-16 px-4" [ngClass]="bgClass" appScrollAnimate>
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-10">Explore the Platform</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <a *ngFor="let card of visibleCards"
             [routerLink]="card.route"
             class="group block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
            <mat-icon [class]="card.iconColor + ' text-3xl mb-3'">{{ card.icon }}</mat-icon>
            <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">{{ card.title }}</h3>
            <p class="text-sm text-gray-600">{{ card.description }}</p>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ExplorePlatformComponent {
  @Input() exclude: string = '';
  @Input() bgClass: string = 'bg-gray-50';

  get visibleCards(): PlatformCard[] {
    return PLATFORM_CARDS.filter(card => card.route !== this.exclude);
  }
}
