import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //canActivate(
  // route: ActivatedRouteSnapshot,
  //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  // return true;

  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: any): boolean {
    if (this._authService.userLoggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      alert('Access is denied');
      this._router.navigate(['/login']);
      return false;
    }
  }
}
