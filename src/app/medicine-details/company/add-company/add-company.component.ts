import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceService } from 'src/app/service/add-service.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private Service: AddServiceService) { }

  distributionList$!: Observable<any[]>;
  @Input() company: any;
  id: number = 0;
  name: string = "";
  description : string ="";
  distributionId!: number;


  ngOnInit(): void {
    this.id = this.company.id;
    this.name = this.company.name;
    this.description = this.company.description;
    this.distributionId = this.company.distributionId;


    this.distributionList$ = this.Service.GetDistributionList();
  }
  addcompany() {
    var company =
    {
      name: this.name,
      description : this.description,
      distributionId : this.distributionId
    }
    this.Service.AddCompany(company).subscribe(res => {
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

  updatecompany() {
    var company =
    {
      id: this.id,
      name: this.name,
      description:this.description,
      distributionId:this.distributionId
    }
    var id: number = this.id;
    this.Service.UpdateCompany(id, company).subscribe(res => {
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

