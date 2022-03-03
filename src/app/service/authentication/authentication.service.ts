import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenMapping } from 'src/app/login/tokenMapping';
import { SignInData } from 'src/app/model/signInData';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly inspectionAPIURL = environment.apiURL;
  isAuth: boolean = false;
  mappedResponse: TokenMapping;
  constructor(private http: HttpClient, private router: Router) {
    this.mappedResponse = new TokenMapping();

  }
  Authenticate(signInData: SignInData): boolean {
    this.http.post(this.inspectionAPIURL + '/ValidUsers/', signInData).subscribe((data:any) => {
      this.mappedResponse = data;

      if (this.mappedResponse != null) {
        this.isAuth = false;
        this.mappedResponse.token=this.mappedResponse.token.replace(/['"]+/g, '');
        localStorage.setItem('userToken', this.mappedResponse.token);
        localStorage.setItem('pharmacyId', this.mappedResponse.pharmacyId.toString());
        localStorage.setItem('pharmacyAddress', this.mappedResponse.pharmacyAddress);
        this.router.navigate(['showInspection']);
      }
      else {
        this.isAuth = true;

      }

    });
    return true;
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
