import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formdetails: any;

  constructor() { }

  ngOnInit(): void {
    this.formdetails = new FormGroup({
          'firstname': new FormControl(this.formdetails.firstname)
    });
  }

  onsubmit() {

  }
}
