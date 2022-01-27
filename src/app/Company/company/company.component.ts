import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyServiceService } from 'src/app/service/company/company-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  medicineList$!: Observable<any[]>;
  distributionList$!: Observable<any[]>;

  constructor(private service: CompanyServiceService) { }

  @Input() company: any;
  id: number = 0;
  name: string = "";
  discription: string = "";
  distributionId!: number;



  ngOnInit(): void {
    //this all are for retrive data from db for dropdown menu
    this.distributionList$ = this.service.GetDistributionList();
  }

  submit(form:any){
    this.name = form.Name;
    this.discription = form.discription;
    this.distributionId = form.distributionId;
  }

  addCompany() {
    var company =
    {
      name: this.name,
      discription: this.discription,
      distributionId: this.distributionId

    }
    this.service.AddCompany(company).subscribe(res => {
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

  // updateCompany() {
  //   var company =
  //   {
  //     id: this.id,
  //     name: this.name,
  //     discription: this.discription,
  //     createDate: this.createDate,
  //     ModifiedDate: this.ModifiedDate,
  //     distributionId: this.distributionId,

  //   }
  //   var id: number = this.id;
  //   this.service.UpdateCompany(id, company).subscribe(res => {
  //     var closeModalBtn = document.getElementById('add-edit-modal-close');
  //     if (closeModalBtn) {
  //       closeModalBtn.click();
  //     }
  //     var showUpdateSuccess = document.getElementById('update-success-alert');
  //     if (showUpdateSuccess) {
  //       showUpdateSuccess.style.display = "block";
  //     }
  //     setTimeout(function () {
  //       if (showUpdateSuccess) {
  //         showUpdateSuccess.style.display = "none";
  //       }

  //     }, 4000);
  //   });

  // }

}
