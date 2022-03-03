import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';

@Component({
  selector: 'app-add-strength',
  templateUrl: './add-strength.component.html',
  styleUrls: ['./add-strength.component.css']
})
export class AddStrengthComponent implements OnInit {

  constructor(private Service: AddServiceService, private alert:AlertifyService) { }
  @Input() strength: any;
  id: number = 0;
  name: string = "";
  description : string ="";
  pharmacyId : number = 0;
  pharmacyList : any

  ngOnInit(): void {
    this.id = this.strength.id;
    this.name = this.strength.name;
    this.description = this.strength.description;
    this.pharmacyId = this.strength.pharmacyId;

    this.pharmacyList = localStorage.getItem('pharmacyId')
  }
  addstrength() {
    var strength =
    {
      name: this.name,
      description : this.description,
      pharmacyId :this.pharmacyList
    }
    this.Service.AddStrength(strength).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfulyy');
    });
  }

  updatestrength() {
    var strength =
    {
      id: this.id,
      name: this.name,
      description:this.description,
      pharmacyId : this.pharmacyId
    }
    var id: number = this.id;
    this.Service.UpdateCategory(id, strength).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Update successfulyy');
    });
  }
}
