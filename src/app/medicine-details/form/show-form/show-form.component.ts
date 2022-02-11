import { Component, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {

  p: number = 1;
  formList: Array<any>
  modalTitle: string = '';
  activateAddmedFormComponent: boolean = false;
  form: any;
  totalRecords: number ;
  page: number = 1;
  constructor(private formService: AddServiceService) {
    this.formList = new Array<any>();
    this.totalRecords=0;
  }

  ngOnInit(): void {
    this.formService.GetFormList().subscribe((data) => {
      this.formList = data;
      this.totalRecords = data.length;
    }
    )
  }
  modalAddform() {
    this.form = {
      id: 0,
      name: null,
      description: null,
    }
    this.modalTitle = "Add form";
    this.activateAddmedFormComponent = true;
  }
  modalEditform(item: any) {
    this.form = item;
    this.modalTitle = "Edit form";
    this.activateAddmedFormComponent = true;
  }
  modalCloseCustomer() {
    this.activateAddmedFormComponent = false;
    this.ngOnInit();
  }
  deleteform(item: any) {
    if (confirm("Are you want to delete form ?")) {
      this.formService.DeleteForm(item.id).subscribe(res => {
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
