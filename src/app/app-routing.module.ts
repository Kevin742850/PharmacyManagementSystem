import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customer/show-customer/customer.component';
import { ApplicationGuard } from './guards/application.guard';
import { ShowInspectionComponent } from './Inspection/show-inspection/show-inspection.component';
import { LoginComponent } from './login/login.component';
import { ShowMedicinesComponent } from './medicine/show-medicines/show-medicines.component';
import { ShowPharmacyComponent } from './pharmacy/show-pharmacy/show-pharmacy.component';

const routes: Routes = [
  { path: 'showInspection', component: ShowInspectionComponent, canActivate: [ApplicationGuard] },
  { path: 'showCustomer', component: CustomerComponent, canActivate: [ApplicationGuard] },
  { path: 'showMedicine', component: ShowMedicinesComponent, canActivate:[ApplicationGuard]},
  { path: 'showPharmacy', component:ShowPharmacyComponent, canActivate:[ApplicationGuard]},
  {
    path: '', component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
