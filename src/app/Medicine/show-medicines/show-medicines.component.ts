import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/service/add-service.service';
import { MedicineServiceService } from 'src/app/service/medicine/medicine-service.service';

@Component({
  selector: 'app-show-medicines',
  templateUrl: './show-medicines.component.html',
  styleUrls: ['./show-medicines.component.css']
})
export class ShowMedicinesComponent implements OnInit {

  p: number = 1;
  // medicineList: Array<any>
  customer: any;
  totalRecords: number ;
    page: number = 1;


    name: string = "";
    description: string = "";
    distributionId!: number;

  distributionList$!: Observable<any[]>;
  medicineList : Array<any>;
  companyList$!: Observable<any[]>;
  companyList: any = [];
  formList$!: Observable<any[]>;
  formList: any = [];
  categoryList$!: Observable<any[]>;
  categoryList: any = [];
  strengthList$!: Observable<any[]>;
  strengthList: any = [];

  companyMap: Map<number, string> = new Map()
  formMap: Map<number, string> = new Map()
  categoryMap: Map<number, string> = new Map()
  strengthMap: Map<number, string> = new Map()

  constructor(private service: MedicineServiceService, private service2: AddServiceService) {
    this.medicineList = new Array<any>();
     this.totalRecords=0;
   }

  ngOnInit(): void {

    this.distributionList$ = this.service2.GetDistributionList();
    this.service.GetMedicineList().subscribe((data) => {
      this.medicineList = data;
      this.totalRecords = data.length;
    })
    this.companyList$ = this.service.GetCompanyList();
    this.formList$ = this.service.GetCompanyList();
    this.categoryList$ = this.service.GetCompanyList();
    this.strengthList$ = this.service.GetCompanyList();
    this.CompanyMap();
    this.FormMap();
    this.CategoryMap();
    this.StrengthMap();

  }
  modalTitle: string = '';
  activateModel: boolean = false;
  medicine: any;
  company:any;
  category:any;
  form:any;
  strength:any;

  addMedicine() {
    this.medicine = {
      id: 0,
      name: null,
      companyId: null,
      salePrice: null,
      purchasePrice: null
    }
    this.modalTitle = "Add Medicine";
    this.activateModel = true;
  }

  submit(form:any){
    this.name = form.Name;
    this.description = form.discription;
  }

  addCategorys() {
    var category =
    {
      name: this.name,
      discription: this.description,


    }

    this.service2.AddCategory(category).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close2');
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

  addStrengths() {
    var strength =
    {
      name: this.name,
      discription: this.description,


    }
    this.service2.AddStrength(strength).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close4');
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
  addForms() {
    var form =
    {
      name: this.name,
      discription: this.description,


    }

    this.service2.AddForm(form).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close3');
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
  submits(form:any){
    this.name = form.Name;
    this.description = form.description;
    this.distributionId = form.distributionId;
  }

  addCompanys() {
    var company =
    {
      name: this.name,
      discription: this.description,
      distributionId: this.distributionId

    }
    this.service2.AddCompany(company).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close1');
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


  addCompany() {
    this.company = {
      id: 0,
      name: null,
      discription: null,
      createDate: null,
      ModifiedDate: null
    }
    this.modalTitle = "Add Company";
    this.activateModel = true;
  }

  addCategory() {
    this.category = {
      id: 0,
      name: null,
      discription: null,
      createDate: null,
      ModifiedDate: null
    }
    this.modalTitle = "Add Category";
    this.activateModel = true;
  }
  addForm() {
    this.form = {
      id: 0,
      name: null,
      discription: null,
      createDate: null,
      ModifiedDate: null
    }
    this.modalTitle = "Add Form";
    this.activateModel = true;
  }
  addStrength() {
    this.strength = {
      id: 0,
      name: null,
      discription: null,
      createDate: null,
      ModifiedDate: null
    }
    this.modalTitle = "Add Strength";
    this.activateModel = true;
  }

  editMedicine(item: any) {

    this.medicine = item;
    this.modalTitle = "Edit medicine";
    this.activateModel = true;
  }
  deleteMedicine(item: any) {
    if (confirm("Are you want to delete Medicine ?")) {
      this.service.DeleteMedicine(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alart1');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none";
          }
        }, 4000);
        this.ngOnInit();
      });
    }
  }

  modalClose() {
    this.activateModel = false;
    this.ngOnInit();
  }
  CompanyMap() {
    this.service.GetCompanyList().subscribe(data => {
      this.companyList = data;
      for (let i = 0; i < data.length; i++) {
        this.companyMap.set(this.companyList[i].id, this.companyList[i].name);
      }

    })
  }

  FormMap() {
    this.service.GetFormList().subscribe(data => {
      this.formList = data;
      for (let i = 0; i < data.length; i++) {
        this.formMap.set(this.formList[i].id, this.formList[i].name);
      }

    })
  }

  CategoryMap() {
    this.service.GetCategoryList().subscribe(data => {
      this.categoryList = data;
      for (let i = 0; i < data.length; i++) {
        this.categoryMap.set(this.categoryList[i].id, this.categoryList[i].name);
      }

    })
  }

  StrengthMap() {
    this.service.GetStrengthList().subscribe(data => {
      this.strengthList = data;
      for (let i = 0; i < data.length; i++) {
        this.strengthMap.set(this.strengthList[i].id, this.strengthList[i].name);
      }

    })
  }
}

