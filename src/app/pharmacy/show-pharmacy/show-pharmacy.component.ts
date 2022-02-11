import { Component, OnInit } from '@angular/core';
import { PharmacyService } from 'src/app/service/Pharmacy/pharmacy.service';

@Component({
  selector: 'app-show-pharmacy',
  templateUrl: './show-pharmacy.component.html',
  styleUrls: ['./show-pharmacy.component.css']
})
export class ShowPharmacyComponent implements OnInit {

  p: number = 1;
  pharmacyList: Array<any>
  modalTitle: string = '';
  activateComponent: boolean = false;
  pharmacy: any;
  totalRecords: number ;
  page: number = 1;
  constructor(private pharmacyService: PharmacyService) {
    this.pharmacyList = new Array<any>();
    this.totalRecords=0;
  }

  ngOnInit(): void {
    this.pharmacyService.GetPharmacyList().subscribe((data) => {
      this.pharmacyList = data;
      this.totalRecords = data.length;
    }
    )
  }
  modalAddPharmacy() {
    this.pharmacy = {
      id: 0,
      name: null,
      state: null,
      city: null,
      zip: null,
      email: null,
      phone: null,
      createDate:null,
      modifiedDate: null,
    }
    this.modalTitle = "Add Pharmacy";
    this.activateComponent = true;
  }
  modalEditPharmacy(item: any) {
    this.pharmacy = item;
    this.modalTitle = "Edit pharmacy";
    this.activateComponent = true;
  }
  modalClosePharmacy() {
    this.activateComponent = false;
    this.ngOnInit();
  }
  deletePharmacy(item: any) {
    if (confirm("Are you want to delete Pharmacy ?")) {
      this.pharmacyService.DeletePharmacy(item.id).subscribe(res => {
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
