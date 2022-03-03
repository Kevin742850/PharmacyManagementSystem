import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private Service: AddServiceService, private alert:AlertifyService) { }

  distributionList$!: Observable<any[]>;
  @Input() company: any;
  id: number = 0;
  name: string = "";
  description : string ="";
  distributionId!: number;
  pharmacyId : number = 0;
  pharmacyList :any;


  ngOnInit(): void {
    this.id = this.company.id;
    this.name = this.company.name;
    this.description = this.company.description;
    this.distributionId = this.company.distributionId;
    this.pharmacyId = this.company.pharmacyId;

    this.pharmacyList = localStorage.getItem('pharmacyId');


    this.distributionList$ = this.Service.GetDistributionList();
  }
  addcompany() {
    var company =
    {
      name: this.name,
      description : this.description,
      distributionId : this.distributionId,
      pharmacyId : this.pharmacyList
    }
    this.Service.AddCompany(company).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfully');
    });
  }

  updatecompany() {
    var company =
    {
      id: this.id,
      name: this.name,
      description:this.description,
      distributionId:this.distributionId,
      pharmacyId : this.pharmacyId
    }
    var id: number = this.id;
    this.Service.UpdateCompany(id, company).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Update successfulyy');
    });
  }
}

