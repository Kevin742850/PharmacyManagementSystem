import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';

@Component({
  selector: 'app-show-company',
  templateUrl: './show-company.component.html',
  styleUrls: ['./show-company.component.css']
})
export class ShowCompanyComponent implements OnInit {

  p: number = 1;
  companyList: Array<any>
  modalTitle: string = '';
  activateModel: boolean = false;
  company: any;
  totalRecords: number ;
  page: number = 1;

  distributionList$!: Observable<any[]>;
  distributionList: any = [];

  distributionMap: Map<number, string> = new Map()

  constructor(private Service: AddServiceService, public alert:AlertifyService) {
    this.companyList = new Array<any>();
    this.totalRecords=0;
  }

  ngOnInit(): void {
    this.Service.GetCompanyList().subscribe((data) => {
      this.companyList = data;
      this.totalRecords = data.length;
    }
    )
    this.distributionList$ = this.Service.GetDistributionList();
    this.distributionMaps();
  }

  modalcompany() {
    this.company = {
      id: 0,
      name: null,
      description: null,
    }
    this.modalTitle = "Add company";
    this.activateModel = true;
  }
  modalEditcompany(item: any) {
    this.company = item;
    this.modalTitle = "Edit company";
    this.activateModel = true;
  }
  modalClose() {
    this.activateModel = false;
    this.ngOnInit();
  }
  deletecompany(item: any) {
    if (confirm("Are you want to delete company ?")) {
      this.Service.DeleteCompany(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        this.alert.success('Deleted successfulyy');
        this.ngOnInit();
      });
    }
  }

  distributionMaps() {
    this.Service.GetDistributionList().subscribe(data => {
      this.distributionList = data;
      for (let i = 0; i < data.length; i++) {
        this.distributionMap.set(this.distributionList[i].id, this.distributionList[i].name);
      }

    })
  }

}
