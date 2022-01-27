import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MedicineServiceService } from 'src/app/service/medicine/medicine-service.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  medicineList$!: Observable<any[]>;
  companyList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;
  formList$!: Observable<any[]>;
  strengthList$!: Observable<any[]>;
  constructor(private service: MedicineServiceService, private fb: FormBuilder) {
    this.form = fb.group({
      number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
   }

  @Input() medicine: any;
  id: number = 0;
  name: string = "";
  formula: string = "";
  purchasePrice: string = "";
  salePrice: string = "";
  expiryDate: string = "";
  isControlDrug:boolean=false;
  companyId!: number;
  categoryId!: number;
  formId!: number;
  strengthId!: number;

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    //use this data during update medicone field
    this.id = this.medicine.id;
    this.name = this.medicine.name;
    this.formula = this.medicine.formula;
    this.purchasePrice= this.medicine.purchasePrice;
    this.salePrice = this.medicine.salePrice;
    this.expiryDate = this.medicine.expiryDate;
    this.companyId = this.medicine.companyId;
    this.categoryId = this.medicine.categoryId;
    this.formId = this.medicine.formId;
    this.strengthId = this.medicine.strengthId;
    this.isControlDrug = this.medicine.isControlDrug;
    //this all are for retrive data from db dropdown menu
    this.companyList$ = this.service.GetCompanyList();
    this.categoryList$ = this.service.GetCategoryList();
    this.formList$ = this.service.GetFormList();
    this.strengthList$ = this.service.GetStrengthList();
  }

  get f(){
    return this.form.controls;
  }


  submit(form:any){
    this.id = form.id;
    this.name = form.Name;
    this.formula = form.Formula;
    this.purchasePrice= form.purchasePrice;
    this.salePrice = form.salePrice;
    this.expiryDate = form.expiryDate;
    this.companyId = form.companyId;
    this.categoryId = form.categoryId;
    this.formId = form.formId;
    this.strengthId = form.strengthId;
    this.isControlDrug = form.isControlDrug;
  }

  addMedicine() {
    var medicine =
    {
      name: this.name,
      formula: this.formula,
      salePrice: this.salePrice,
      purchasePrice: this.purchasePrice,
      expiryDate: this.expiryDate,
      companyId: this.companyId,
      categoryId: this.categoryId,
      formId: this.formId,
      strengthId: this.strengthId,
      isControlDrug: this.isControlDrug
    }
    this.service.AddMedicine(medicine).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none";
        }

      }, 4000);
    });

  }

  updateMedicine() {
    var medicine =
    {
      id: this.id,
      name: this.name,
      formula: this.formula,
      expiryDate: this.expiryDate,
      salePrice: this.salePrice,
      purchasePrice: this.purchasePrice,
      companyId: this.companyId,
      categoryId: this.categoryId,
      formId: this.formId,
      strengthId: this.strengthId,
      isControlDrug: this.isControlDrug

    }
    var id: number = this.id;
    this.service.UpdateMedicine(id, medicine).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none";
        }

      }, 4000);
    });

  }

}
