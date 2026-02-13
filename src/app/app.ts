import { Component, signal } from '@angular/core';
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

  constructor(private router: Router) {
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
