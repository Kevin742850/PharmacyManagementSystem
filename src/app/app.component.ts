import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication/authentication.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InspectionApplicationClientSide';
  constructor(public auth: AuthenticationService) {

  }
  Logout()
  {
    this.auth.Logout();
  }

  
}
