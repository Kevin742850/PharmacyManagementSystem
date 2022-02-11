import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionServiceService } from 'src/app/inspection-service.service';
@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionTypeList: any = [];


  inspectionTypesMap: Map<number, string> = new Map()
  constructor(private service: InspectionServiceService) { }

  ngOnInit(): void {

    this.inspectionList$ = this.service.GetInspectionList();
    this.inspectionTypeList$ = this.service.GetInspectionTypesList();
    this.refreshInspectionTypesMap();
  }
  modalTitle: string = '';
  activateUpsertInspectionComponent: boolean = false;
  inspection: any;

  modalAdd() {
    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null,
    }
    this.modalTitle = "Add Inspection";
    this.activateUpsertInspectionComponent = true;
  }

  modalEdit(item: any) {

    this.inspection = item;
    this.modalTitle = "Edit Inspection";
    this.activateUpsertInspectionComponent = true;
  }
  deleteInspection(item: any) {
    if (confirm("Are you want to delete inspection ?")) {
      this.service.DeleteInspection(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if (closeModalBtn) {
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none";
          }
        }, 4000);
      this.inspectionList$ = this.service.GetInspectionList();
      });
    }
  }

  modalClose() {
    this.activateUpsertInspectionComponent = false;
    this.inspectionList$ = this.service.GetInspectionList();
  }
  refreshInspectionTypesMap() {
    this.service.GetInspectionTypesList().subscribe(data => {
      this.inspectionTypeList = data;
      for (let i = 0; i < data.length; i++) {
        this.inspectionTypesMap.set(this.inspectionTypeList[i].id, this.inspectionTypeList[i].name);
      }

    })
  }
}
