import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-screenshot-placeholder',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './screenshot-placeholder.component.html',
  styleUrls: ['./screenshot-placeholder.component.scss']
})
export class ScreenshotPlaceholderComponent {
  @Input() aspectRatio: '16/9' | '4/3' | '9/16' | '1/1' = '16/9';
  @Input() label = 'Product Screenshot';
  @Input() icon = 'image';
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;

  imageError = false;
}
