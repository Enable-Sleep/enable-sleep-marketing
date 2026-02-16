import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-14 px-4" [ngClass]="variant === 'purple' ? 'bg-gradient-to-r from-purple-900 to-purple-700' : 'bg-gradient-to-r from-slate-900 to-slate-700'">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <div *ngFor="let stat of stats; let last = last"
               class="text-center"
               [ngClass]="{ 'md:border-r md:border-white/20': !last }">
            <span class="block text-4xl md:text-5xl font-black mb-2"
                  [ngClass]="variant === 'purple' ? 'text-purple-200' : 'text-primary'">
              {{ stat.value }}
            </span>
            <span class="text-sm text-gray-300">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StatsBarComponent {
  @Input() stats: StatItem[] = [];
  @Input() variant: 'default' | 'purple' = 'default';
}
