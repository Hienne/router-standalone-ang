import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { UserService } from './user.service';

export const routes: Route[] = [
  {
    path: 'admin',
    canMatch: [() => inject(UserService).currentUser.isAdmin],
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent),
    title: 'Admin'
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
