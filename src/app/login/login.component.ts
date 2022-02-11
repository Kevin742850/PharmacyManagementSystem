import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isFormValid: boolean = false;
  areCredInValid: boolean = false;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredInValid = false;
      return;
    }
this.CheckValidUser(signInForm);
  }
  private CheckValidUser(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.Authenticate(signInData);
    if (!this.authenticationService.isAuth) {
      this.isFormValid = false;
      this.areCredInValid = true;
    }
  }
}
