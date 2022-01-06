import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly inspectionAPIURL = environment.apiURL;
  isAuth: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  Authenticate(signInData: SignInData): boolean {
    this.http.post(this.inspectionAPIURL + '/ValidUsers/', signInData).subscribe(res => {
      if (res != null) {
        this.isAuth = true;

        localStorage.setItem('userToken', res.toString());
        this.router.navigate(['showInspection']);
      }
      else {
        this.isAuth = false;
      }
    });
    return this.isAuth;
  }

  Logout() {
    this.isAuth = false;
    localStorage.clear();
    this.router.navigate(['']);

  }
  getToken() {
    return localStorage.getItem('userToken');
  }
}
