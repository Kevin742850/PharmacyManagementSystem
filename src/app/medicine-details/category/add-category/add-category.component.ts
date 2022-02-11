import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private Service: AddServiceService) { }
  @Input() category: any;
  id: number = 0;
  name: string = "";
  description : string ="";

  ngOnInit(): void {
    this.id = this.category.id;
    this.name = this.category.name;
    this.description = this.category.description;
  }
  addcategory() {
    var category =
    {
      name: this.name,
      description : this.description,
    }
    this.Service.AddCategory(category).subscribe(res => {
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

  updatecategory() {
    var category =
    {
      id: this.id,
      name: this.name,
      description:this.description,
    }
    var id: number = this.id;
    this.Service.UpdateCategory(id, category).subscribe(res => {
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

