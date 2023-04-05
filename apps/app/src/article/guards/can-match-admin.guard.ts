import { Injectable, inject } from '@angular/core';
import { CanMatch, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root',
})
export class CanMatchAdminGuard implements CanMatch {
    userService = inject(UserService);
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.currentUser.isAdmin;
  }
}
