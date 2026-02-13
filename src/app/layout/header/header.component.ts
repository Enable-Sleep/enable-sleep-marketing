import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);

  navLinks = [
    { path: '/features', label: 'Features' },
    { path: '/ai-scribe', label: 'AI Scribe' },
    { path: '/patient-portal', label: 'Patient Portal' },
    { path: '/security', label: 'Security' },
    { path: '/resources', label: 'Resources' },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.mobileMenuOpen.set(false));
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }
}
