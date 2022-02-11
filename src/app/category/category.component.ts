import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from '../service/add-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: AddServiceService) { }

  @Input() category: any;
  id: number = 0;
  name: string = "";
  discription: string = "";


  ngOnInit(): void {

  }

  submit(form:any){
    this.name = form.Name;
    this.discription = form.discription;
  }

  addCategory() {
    var category =
    {
      name: this.name,
      discription: this.discription,


    }

    this.service.AddCategory(category).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close2');
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



}

