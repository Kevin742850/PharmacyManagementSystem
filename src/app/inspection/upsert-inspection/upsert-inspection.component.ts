import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionServiceService } from 'src/app/inspection-service.service';

@Component({
  selector: 'app-upsert-inspection',
  templateUrl: './upsert-inspection.component.html',
  styleUrls: ['./upsert-inspection.component.css']
})
export class UpsertInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  constructor(private service: InspectionServiceService) { }

  @Input() inspection: any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  inspectionTypeId!: number;


  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.service.GetStatusList();
    this.inspectionList$ = this.service.GetInspectionList();
    this.inspectionTypeList$ = this.service.GetInspectionTypesList();
  }
  addInspection() {
    var inspection =
    {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    }
    this.service.AddInspection(inspection).subscribe(res => {
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

  updateInspection() {
    var inspection =
    {
      id: this.id,
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    }
    var id: number = this.id;
    this.service.UpdateInspection(id, inspection).subscribe(res => {
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