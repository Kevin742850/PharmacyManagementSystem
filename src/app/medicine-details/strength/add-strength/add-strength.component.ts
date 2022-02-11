import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';

@Component({
  selector: 'app-add-strength',
  templateUrl: './add-strength.component.html',
  styleUrls: ['./add-strength.component.css']
})
export class AddStrengthComponent implements OnInit {

  constructor(private Service: AddServiceService) { }
  @Input() strength: any;
  id: number = 0;
  name: string = "";
  description : string ="";

  ngOnInit(): void {
    this.id = this.strength.id;
    this.name = this.strength.name;
    this.description = this.strength.description;
  }
  addstrength() {
    var strength =
    {
      name: this.name,
      description : this.description,
    }
    this.Service.AddStrength(strength).subscribe(res => {
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

  updatestrength() {
    var strength =
    {
      id: this.id,
      name: this.name,
      description:this.description,
    }
    var id: number = this.id;
    this.Service.UpdateCategory(id, strength).subscribe(res => {
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
