import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/service/Customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  p: number = 1;
  customerList: Array<any>
  modalTitle: string = '';
  activateUpsertCustomerComponent: boolean = false;
  customer: any;
  totalRecords: number ;
  page: number = 1;
  constructor(private customerService: CustomerService) {
    this.customerList = new Array<any>();
    this.totalRecords=0;
  }

  ngOnInit(): void {
    this.customerService.GetCustomerList().subscribe((data) => {
      this.customerList = data;
      this.totalRecords = data.length;
    }
    )
  }
  modalAddCustomer() {
    this.customer = {
      id: 0,
      name: null,
      address: null,
      city: null,
      zip: null,
      ssn: null,
      email: null,
      phone: null,
      pharmacyid: 1,
      description: null,
    }
    this.modalTitle = "Add Customer";
    this.activateUpsertCustomerComponent = true;
  }
  modalEditCustomer(item: any) {
    this.customer = item;
    this.modalTitle = "Edit Customer";
    this.activateUpsertCustomerComponent = true;
  }
  modalCloseCustomer() {
    this.activateUpsertCustomerComponent = false;
    this.ngOnInit();
  }
  deleteCustomer(item: any) {
    if (confirm("Are you want to delete customer ?")) {
      this.customerService.DeleteCustomer(item.id).subscribe(res => {
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
