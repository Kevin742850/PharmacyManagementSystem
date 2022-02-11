import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from '../service/add-service.service';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {

  constructor(private service: AddServiceService) { }

  @Input() strength: any;
  id: number = 0;
  name: string = "";
  discription: string = "";


  ngOnInit(): void {

  }

  submit(form:any){
    this.name = form.Name;
    this.discription = form.discription;
  }

  addStrength() {
    var strength =
    {
      name: this.name,
      discription: this.discription,


    }
    this.service.AddStrength(strength).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close4');
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
