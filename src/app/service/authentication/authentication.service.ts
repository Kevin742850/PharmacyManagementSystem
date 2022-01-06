import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly inspectionAPIURL = "https://localhost:7191/api";
  isAuth: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }
  Authenticate(signInData: SignInData): boolean {
    this.http.post(this.inspectionAPIURL + '/ValidUsers/', signInData).subscribe(res => {
      if (res != null) {
        debugger;
        this.isAuth = true;     
        
        localStorage.setItem('userToken', res.toString() );
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
     return  localStorage.getItem('userToken');
  }
}
