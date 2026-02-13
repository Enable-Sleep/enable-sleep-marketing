import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
  @Input() accentColor: 'primary' | 'green' | 'purple' = 'primary';

  get borderClass(): string {
    switch (this.accentColor) {
      case 'green': return 'border-l-accent-green';
      case 'purple': return 'border-l-accent-purple';
      default: return 'border-l-primary';
    }
  }

  get iconClass(): string {
    switch (this.accentColor) {
      case 'green': return 'text-accent-green';
      case 'purple': return 'text-accent-purple';
      default: return 'text-primary';
    }
  }
}
