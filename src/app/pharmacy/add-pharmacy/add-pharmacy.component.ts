import { Component, Input, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/service/Pharmacy/pharmacy.service';

@Component({
  selector: 'app-add-pharmacy',
  templateUrl: './add-pharmacy.component.html',
  styleUrls: ['./add-pharmacy.component.css']
})
export class AddPharmacyComponent implements OnInit {

  constructor(private pharmacyService: PharmacyService) { }
  @Input() pharmacy: any;
  id: number = 0;
  name: string = "";
  city: string = "";
  state: string = "";
  zip: string = "";
  email: string = "";
  phone: string = "";
  createDate: string ="";
  modifiedDate : string ="";

  ngOnInit(): void {
    this.id = this.pharmacy.id;
    this.name = this.pharmacy.name;
    this.city = this.pharmacy.city;
    this.state = this.pharmacy.state,
    this.zip = this.pharmacy.zip;
    this.email = this.pharmacy.email;
    this.phone = this.pharmacy.phone;
    this.createDate = this.pharmacy.createDate;
    this.modifiedDate = this.pharmacy.modifiedDate;
  }
  addPharmacy() {
    var pharmacy =
    {
      name: this.name,
      city: this.city,
      zip: this.zip,
      email: this.email,
      state: this.state,
      phone: this.phone,
      createDate: this.createDate,
      modifiedDate : this.modifiedDate,
    }
    this.pharmacyService.AddPharmacy(pharmacy).subscribe(res => {
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

  updatePharmacy() {
    var pharmacy =
    {
      id: this.id,
      name: this.name,
      state:this.state,
      city: this.city,
      zip: this.zip,
      email: this.email,
      phone: this.phone,
      createDate: this.createDate,
      modifiedDate:this.modifiedDate,
    }
    var id: number = this.id;
    this.pharmacyService.UpdatePharmacy(id, pharmacy).subscribe(res => {
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
