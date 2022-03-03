import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/Customer/customer.service';
import { CommonModule } from '@angular/common';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';
@Component({
  selector: 'app-upsert-customer',
  templateUrl: './upsert-customer.component.html',
  styleUrls: ['./upsert-customer.component.css']
})
export class UpsertCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, public alert:AlertifyService) { }
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
  description : string ="";
  pharmacyid : number = 0;

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
      this.alert.success('Added successfulyy');
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
      this.alert.success('Updated successfulyy');
    });
  }
}
