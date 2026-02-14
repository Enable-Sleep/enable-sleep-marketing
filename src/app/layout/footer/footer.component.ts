import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  productLinks = [
    { path: '/features', label: 'Features' },
    { path: '/ai-scribe', label: 'AI Scribe' },
    { path: '/patient-portal', label: 'Patient Portal' },
    { path: '/security', label: 'Security' },
  ];

  companyLinks = [
    { path: '/resources', label: 'Resources' },
    { path: '/faq', label: 'FAQ' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
  ];
}
