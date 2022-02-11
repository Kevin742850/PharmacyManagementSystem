import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Customer/show-customer/customer.component';
import { ApplicationGuard } from './guards/application.guard';
import { ShowInspectionComponent } from './Inspection/show-inspection/show-inspection.component';
import { LoginComponent } from './login/login.component';
import { ShowCategoryComponent } from './medicine-details/category/show-category/show-category.component';
import { ShowCompanyComponent } from './medicine-details/company/show-company/show-company.component';
import { ShowFormComponent } from './medicine-details/form/show-form/show-form.component';
import { ShowStrengthComponent } from './medicine-details/strength/show-strength/show-strength.component';
import { ShowMedicinesComponent } from './medicine/show-medicines/show-medicines.component';
import { ShowPharmacyComponent } from './pharmacy/show-pharmacy/show-pharmacy.component';

const routes: Routes = [
  { path: 'showInspection', component: ShowInspectionComponent, canActivate: [ApplicationGuard] },
  { path: 'showCustomer', component: CustomerComponent, canActivate: [ApplicationGuard] },
  { path: 'showMedicine', component: ShowMedicinesComponent, canActivate:[ApplicationGuard]},
  { path: 'showPharmacy', component:ShowPharmacyComponent, canActivate:[ApplicationGuard]},
  { path: 'showCategory', component:ShowCategoryComponent, canActivate:[ApplicationGuard]},
  { path: 'showCompany', component:ShowCompanyComponent, canActivate:[ApplicationGuard]},
  { path: 'showStrength', component:ShowStrengthComponent, canActivate:[ApplicationGuard]},
  { path: 'showForm', component:ShowFormComponent, canActivate:[ApplicationGuard]},
  {
    path: '', component: LoginComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
