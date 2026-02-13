import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'features',
    loadComponent: () => import('./pages/features/features.component').then(m => m.FeaturesComponent)
  },
  {
    path: 'ai-scribe',
    loadComponent: () => import('./pages/ai-scribe/ai-scribe.component').then(m => m.AiScribeComponent)
  },
  {
    path: 'patient-portal',
    loadComponent: () => import('./pages/patient-portal/patient-portal.component').then(m => m.PatientPortalComponent)
  },
  {
    path: 'security',
    loadComponent: () => import('./pages/security/security.component').then(m => m.SecurityComponent)
  },
  {
    path: 'demo',
    loadComponent: () => import('./pages/demo-request/demo-request.component').then(m => m.DemoRequestComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'resources',
    loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent)
  },
  {
    path: 'resources/:slug',
    loadComponent: () => import('./pages/resource-article/resource-article.component').then(m => m.ResourceArticleComponent)
  },
  { path: '**', redirectTo: '' }
];
