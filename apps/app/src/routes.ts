import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.routes').then(r => r.ARTICLE_ROUTES)
  },
  {
    path: '',
    redirectTo: 'article',
    pathMatch: 'full'
  }
];
