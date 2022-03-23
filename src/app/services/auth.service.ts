import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //_userLoginUrl = "http://localhost:8000/user/login";

  constructor(private http: HttpClient, private _router: Router) {}

  userLoggedIn() {
    return !!localStorage.getItem('token');
  }

  /*userLogin(user: any)
  {
  return this.http.post<any>(this._userLoginUrl,user)
  }*/

  userLogout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
