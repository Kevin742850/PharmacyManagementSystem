import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';
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
  constructor(private service: MedicineServiceService,private service2: AddServiceService, private alert: AlertifyService) {
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
  pharmacyId : number = 0;


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
    this.pharmacyId = this.medicine.pharmacyId
    //this all are for retrive data from db dropdown menu
    this.companyList$ = this.service2.GetCompanyList();
    this.categoryList$ = this.service2.GetCategoryList();
    this.formList$ = this.service2.GetFormList();
    this.strengthList$ = this.service2.GetStrengthList();
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
    this.pharmacyId = form.pharmacyId;
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
      isControlDrug: this.isControlDrug,
      pharmacyId : this.pharmacyId
    }
    this.service.AddMedicine(medicine).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfulyy');
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
      isControlDrug: this.isControlDrug,
      pharmacyId : this.pharmacyId

    }
    var id: number = this.id;
    this.service.UpdateMedicine(id, medicine).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Updated successfulyy');
    });

  }

}
