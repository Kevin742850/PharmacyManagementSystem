import { Component, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';

@Component({
  selector: 'app-show-strength',
  templateUrl: './show-strength.component.html',
  styleUrls: ['./show-strength.component.css']
})
export class ShowStrengthComponent implements OnInit {

  p: number = 1;
  strengthList: Array<any>
  modalTitle: string = '';
  activateModel: boolean = false;
  strength: any;
  totalRecords: number ;
  page: number = 1;
  constructor(private Service: AddServiceService) {
    this.strengthList = new Array<any>();
    this.totalRecords=0;
  }

  ngOnInit(): void {
    this.Service.GetStrengthList().subscribe((data) => {
      this.strengthList = data;
      this.totalRecords = data.length;
    }
    )
  }
  modalstrength() {
    this.strength = {
      id: 0,
      name: null,
      description: null,
    }
    this.modalTitle = "Add strength";
    this.activateModel = true;
  }
  modalEditstrength(item: any) {
    this.strength = item;
    this.modalTitle = "Edit strength";
    this.activateModel = true;
  }
  modalClose() {
    this.activateModel = false;
    this.ngOnInit();
  }
  deletestrength(item: any) {
    if (confirm("Are you want to delete strength ?")) {
      this.Service.DeleteStrength(item.id).subscribe(res => {
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
        this.ngOnInit();
      });
    }
  }

}

