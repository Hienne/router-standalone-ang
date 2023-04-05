import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleEditComponent } from '../components/article-edit.component';

export const canLeaveEditGuardFunctional = (component: ArticleEditComponent) => {
  return !component.isEditing;
}

@Injectable({
  providedIn: 'root',
})
export class CanLeaveEditGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: ArticleEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !component.isEditing;
  }
}
