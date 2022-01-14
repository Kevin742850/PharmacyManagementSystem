import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './Inspection/show-inspection/show-inspection.component';
import { UpsertInspectionComponent } from './Inspection/upsert-inspection/upsert-inspection.component';
import { InspectionServiceService } from './inspection-service.service';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './service/Interceptor/token-interceptor.service';
import { CustomerComponent } from './Customer/show-customer/customer.component';
import { UpsertCustomerComponent } from './customer/upsert-customer/upsert-customer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpErrorInterceptorService } from './service/Interceptor/http-error-interceptor.service';
import { AlertifyService } from './service/Alertify/alertify.service';
@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    UpsertInspectionComponent,
    LoginComponent,
    CustomerComponent,
    UpsertCustomerComponent 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
    multi: true
  },
  AlertifyService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
