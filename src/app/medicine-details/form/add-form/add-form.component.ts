import { Component, Input, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/service/add-service.service';
import { AlertifyService } from 'src/app/service/Alertify/alertify.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private formService: AddServiceService, private alert:AlertifyService) { }
  @Input() form: any;
  id: number = 0;
  name: string = "";
  description : string ="";

  ngOnInit(): void {
    this.id = this.form.id;
    this.name = this.form.name;
    this.description = this.form.description;
  }
  addform() {
    var form =
    {
      name: this.name,
      description : this.description,
    }
    this.formService.AddForm(form).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Added successfulyy');
    });
  }

  updateform() {
    var form =
    {
      id: this.id,
      name: this.name,
      description:this.description,
    }
    var id: number = this.id;
    this.formService.UpdateForm(id, form).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }
      this.alert.success('Update successfulyy');
    });
  }
}
