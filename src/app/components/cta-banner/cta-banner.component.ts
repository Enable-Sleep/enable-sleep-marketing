import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.scss']
})
export class CtaBannerComponent {
  @Input() title = 'Ready to Transform Your Practice?';
  @Input() subtitle = 'See how Enable Sleep can help you deliver compliant, profitable dental sleep medicine.';
  @Input() buttonText = 'Request a Demo';
}
