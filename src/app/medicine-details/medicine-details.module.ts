import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './form/add-form/add-form.component';
import { ShowFormComponent } from './form/show-form/show-form.component';
import { ShowStrengthComponent } from './strength/show-strength/show-strength.component';
import { AddStrengthComponent } from './strength/add-strength/add-strength.component';
import { ShowCompanyComponent } from './company/show-company/show-company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';



@NgModule({
  declarations: [
    ShowCategoryComponent,
    AddCategoryComponent,
    AddFormComponent,
    ShowFormComponent,
    ShowStrengthComponent,
    AddStrengthComponent,
    ShowCompanyComponent,
    AddCompanyComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ShowCategoryComponent,
    AddCategoryComponent,
    AddFormComponent,
    ShowFormComponent,
    ShowStrengthComponent,
    AddStrengthComponent,
    ShowCompanyComponent,
    AddCompanyComponent
  ]
})
export class MedicineDetailsModule { }
