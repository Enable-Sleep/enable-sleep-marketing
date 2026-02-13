import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() icon = '';
  @Input() badge = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() light = false;
}
