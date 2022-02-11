import { Component, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  p: number = 1;
  categoryList: Array<any>
  modalTitle: string = '';
  activateModel: boolean = false;
  category: any;
  totalRecords: number ;
  page: number = 1;
  constructor(private Service: AddServiceService) {
    this.categoryList = new Array<any>();
    this.totalRecords=0;
  }

  ngOnInit(): void {
    this.Service.GetCategoryList().subscribe((data) => {
      this.categoryList = data;
      this.totalRecords = data.length;
    }
    )
  }
  modalcategoryform() {
    this.category = {
      id: 0,
      name: null,
      description: null,
    }
    this.modalTitle = "Add category";
    this.activateModel = true;
  }
  modalEditcategory(item: any) {
    this.category = item;
    this.modalTitle = "Edit category";
    this.activateModel = true;
  }
  modalClose() {
    this.activateModel = false;
    this.ngOnInit();
  }
  deletecategory(item: any) {
    if (confirm("Are you want to delete category ?")) {
      this.Service.DeleteCategory(item.id).subscribe(res => {
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




