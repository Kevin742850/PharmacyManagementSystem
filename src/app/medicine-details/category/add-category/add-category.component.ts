import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private Service: AddServiceService, private alert: AlertifyService) { }
  @Input() category: any;
  id: number = 0;
  name: string = "";
  description : string ="";
  pharmacyid : number = 0;

  pharmacyList: any

  ngOnInit(): void {
    this.id = this.category.id;
    this.name = this.category.name;
    this.description = this.category.description;
    this.pharmacyid = this.category.pharmacyid;

    this.pharmacyList = localStorage.getItem('pharmacyId')
  }
  addcategory() {
    var category =
    {
      name: this.name,
      description : this.description,
      pharmacyId : this.pharmacyList
    }
    this.Service.AddCategory(category).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfully');

    });
  }

  updatecategory() {
    var category =
    {
      id: this.id,
      name: this.name,
      description:this.description,
      pharmacyId : this.pharmacyid
    }
    var id: number = this.id;
    this.Service.UpdateCategory(id, category).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Update successfulyy');
    });
  }
}

