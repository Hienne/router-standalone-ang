import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({providedIn: 'root'})
export class PermissionsService {
    private user = getUser();

    isAdmin(isAdmin: boolean) {
        return isAdmin ? this.user.isAdmin : false;
    }
}

export const routes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
];
