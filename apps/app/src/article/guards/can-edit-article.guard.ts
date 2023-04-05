import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';

export const canEditArticleGuardFunctional = (route: ActivatedRouteSnapshot) => {
  return inject(UserService).isAuthor(route.paramMap.get('slug'));
}

export const isAdminGuardFunctional = () => {
  return inject(UserService).currentUser.isAdmin;
}

@Injectable({
  providedIn: 'root',
})
export class CanEditArticleGuard implements CanActivate {
  userService = inject(UserService);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.isAuthor(route.paramMap.get('slug'));
  }
}
