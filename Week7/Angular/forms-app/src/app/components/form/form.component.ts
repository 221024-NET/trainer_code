import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username: any;
  formdata: any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl("Ajay Singala")
    });
  }

  // onClickSubmit(result: any) {
  //   console.log("You entered: " + result.username);
  // }
  onClickSubmit(data: any) {
    this.username = data.username
  }

}
