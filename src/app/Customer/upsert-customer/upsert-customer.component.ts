import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/Customer/customer.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upsert-customer',
  templateUrl: './upsert-customer.component.html',
  styleUrls: ['./upsert-customer.component.css']
})
export class UpsertCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  @Input() customer: any;
  id: number = 0;
  name: string = "";
  address: string = "";
  city: string = "";
  state: string = "";
  zip: string = "";
  ssn: string = "";
  email: string = "";
  phone: string = "";
  pharmacyid: number = 1;
  description : string ="";

  ngOnInit(): void {
    this.id = this.customer.id;
    this.name = this.customer.name;
    this.address = this.customer.address;
    this.city = this.customer.city;
    this.zip = this.customer.zip;
    this.ssn = this.customer.ssn;
    this.email = this.customer.email;
    this.phone = this.customer.phone;
    this.pharmacyid = this.customer.pharmacyid;
    this.description = this.customer.description;
  }
  addCustomer() {
    var customer =
    {
      name: this.name,
      address: this.address,
      city: this.city,
      zip: this.zip,
      ssn: this.ssn,
      email: this.email,
      phone: this.phone,
      pharmacyid: this.pharmacyid,
      description : this.description,
    }
    this.customerService.AddCustomer(customer).subscribe(res => {
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

  updateCustomer() {
    var customer =
    {
      id: this.id,
      name: this.name,
      address: this.address,
      city: this.city,
      zip: this.zip,
      ssn: this.ssn,
      email: this.email,
      phone: this.phone,
      pharmacyid: 1,
      description:this.description,
    }
    var id: number = this.id;
    this.customerService.UpdateCustomer(id, customer).subscribe(res => {
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
