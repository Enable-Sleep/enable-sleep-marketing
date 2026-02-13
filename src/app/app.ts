import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('enable-sleep-marketing');

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event) => {
          if (typeof gtag !== 'undefined') {
            gtag('config', 'G-RTL464VRKW', {
              page_path: (event as NavigationEnd).urlAfterRedirects,
            });
          }
        });
    }
  }
}
