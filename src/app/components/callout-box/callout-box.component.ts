import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-callout-box',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <!-- Stat variant -->
    <div *ngIf="variant === 'stat'"
         class="my-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-5">
      <span class="text-4xl md:text-5xl font-black text-primary flex-shrink-0">{{ value }}</span>
      <span class="text-gray-700 text-lg leading-snug">{{ label }}</span>
    </div>

    <!-- Quote variant -->
    <div *ngIf="variant === 'quote'"
         class="my-8 pl-6 border-l-4 border-primary py-4">
      <p class="text-lg text-gray-800 italic leading-relaxed mb-2">{{ value }}</p>
      <span *ngIf="label" class="text-sm text-gray-500 font-medium">&mdash; {{ label }}</span>
    </div>

    <!-- Tip variant -->
    <div *ngIf="variant === 'tip'"
         class="my-8 p-5 bg-primary/5 border border-primary/15 rounded-xl flex items-start gap-4">
      <mat-icon class="text-primary flex-shrink-0 mt-0.5">{{ icon || 'lightbulb' }}</mat-icon>
      <p class="text-gray-700 leading-relaxed">{{ value }}</p>
    </div>
  `,
})
export class CalloutBoxComponent {
  @Input() variant: 'stat' | 'quote' | 'tip' = 'tip';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() icon: string = 'lightbulb';
}
