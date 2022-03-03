import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';
import { MedicineServiceService } from 'src/app/service/medicine/medicine-service.service';

@Component({
  selector: 'app-show-medicines',
  templateUrl: './show-medicines.component.html',
  styleUrls: ['./show-medicines.component.css']
})
export class ShowMedicinesComponent implements OnInit {

  p: number = 1;
  totalRecords: number ;
    page: number = 1;


    name: string = "";
    description: string = "";
    Description : string = "";
    distributionId!: number;
    pharmacyId : number = 0;

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
  pharmacyList:any = [];

  companyMap: Map<number, string> = new Map()
  formMap: Map<number, string> = new Map()
  categoryMap: Map<number, string> = new Map()
  strengthMap: Map<number, string> = new Map()

  constructor(private service: MedicineServiceService, private service2: AddServiceService, private alert: AlertifyService) {
    this.medicineList = new Array<any>();
     this.totalRecords=0;
   }

  ngOnInit(): void {

    this.distributionList$ = this.service2.GetDistributionList();
    this.service.GetMedicineList().subscribe((data) => {
      this.medicineList = data;
      this.totalRecords = data.length;
    })
    this.companyList$ = this.service2.GetCompanyList();
    this.formList$ = this.service2.GetFormList();
    this.categoryList$ = this.service2.GetCategoryList();
    this.strengthList$ = this.service2.GetStrengthList();
    this.CompanyMap();
    this.FormMap();
    this.CategoryMap();
    this.StrengthMap();
    this.pharmacyList = localStorage.getItem('pharmacyId');

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

  submit(form:any)
  {debugger

    this.name = form.name1;
    this.description = form.description1;
    this.pharmacyId = form.pharmacyId;
  }

  addForms() {
    var form1 =
    {
      name: this.name,
      description: this.Description,
      pharmacyId: this.pharmacyList
    }

    this.service2.AddForm(form1).subscribe(res => {
      var closeModalBtn = document.getElementById('modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfulyy');
    });

  }

  // nullfuntion(){
  //   this.name == null;
  //   this.Description ==null;

  // }


  addCompanys(form:any) {
    var company =
    {
      name: form.Name,
      description: form.description,
      distributionId: form.distributionId,
      pharmacyId: this.pharmacyList

    }
    this.service2.AddCompany(company).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close1');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfully');
    });
  }


  addCompany() {
    this.company = {
      id: 0,
      name: null,
      description: null,
      pharmacyId: 0,
    }
    this.modalTitle = "Add Company";
    this.activateModel = true;
  }

  addCategorys() {
    var category =
    {
      name: this.name,
      description: this.Description,
      pharmacyId: this.pharmacyList

    }
    this.service2.AddCategory(category).subscribe(res => {
      var closeModalBtn = document.getElementById('modal-closed3');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfully');
    });
  }

  addCategory() {
    this.category = {
      id: 0,
      name: null,
      description: null,
      pharmacyId: 0,
    }
    this.modalTitle = "Add Category";
    this.activateModel = true;
  }
  addForm() {
    this.form = {
      id: 0,
      name:null ,
      Description: null,
      pharmacyId: 0,
    }
    this.modalTitle = "Add Form";
    this.activateModel = true;
  }

  addStrengths() {
    var strength =
    {
      name: this.name,
      Description: this.Description,
      pharmacyId: this.pharmacyList

    }
    this.service2.AddStrength(strength).subscribe(res => {
      var closeModalBtn = document.getElementById('modal-closed2');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added data successfully');
    });
  }
  addStrength() {
    this.strength = {
      id: 0,
      name: null,
      Description: null,
      pharmacyId: 0,
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
      this.service.DeleteMedicine(item.id, item.pharmacyId).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        this.alert.success('Deleted successfulyy');
        this.ngOnInit();
      });
    }
  }

  modalClose() {
    this.activateModel = false;
    this.ngOnInit();
    // this.nullfuntion();
  }
  CompanyMap() {
    this.service2.GetCompanyList().subscribe(data => {
      this.companyList = data;
      for (let i = 0; i < data.length; i++) {
        this.companyMap.set(this.companyList[i].id, this.companyList[i].name);
      }

    })
  }

  FormMap() {
    this.service2.GetFormList().subscribe(data => {
      this.formList = data;
      for (let i = 0; i < data.length; i++) {
        this.formMap.set(this.formList[i].id, this.formList[i].name);
      }

    })
  }

  CategoryMap() {
    this.service2.GetCategoryList().subscribe(data => {
      this.categoryList = data;
      for (let i = 0; i < data.length; i++) {
        this.categoryMap.set(this.categoryList[i].id, this.categoryList[i].name);
      }

    })
  }

  StrengthMap() {
    this.service2.GetStrengthList().subscribe(data => {
      this.strengthList = data;
      for (let i = 0; i < data.length; i++) {
        this.strengthMap.set(this.strengthList[i].id, this.strengthList[i].name);
      }

    })
  }
}

