import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from '../service/add-service.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private service: AddServiceService) { }

  @Input() form: any;
  id: number = 0;
  name: string = "";
  discription: string = "";


  ngOnInit(): void {

  }

  submit(form:any){
    this.name = form.Name;
    this.discription = form.discription;
  }

  addForm() {
    var form =
    {
      name: this.name,
      discription: this.discription,


    }

    this.service.AddForm(form).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close3');
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


