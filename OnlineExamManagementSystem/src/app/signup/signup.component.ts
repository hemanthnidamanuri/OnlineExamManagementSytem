import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from "@angular/forms";
import {ConfirmValidator} from "./ConfirmValidator";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formdetails: FormGroup;
  passwordFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

    this.passwordFormGroup = this.fb.group(
      {
        pwd: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')
          ]
        ],
        cpwd: ['', Validators.required]
      },
      {
        validator: ConfirmValidator.validate.bind(this)
      }
    );
    this.formdetails = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      fname: ['', [Validators.required, Validators.maxLength(20)]],
      lname: [
        '',[Validators.required, Validators.maxLength(20)]
      ],
      dob: ['', Validators.required],
      mob: [
        '',
        [Validators.required,
          Validators.maxLength(10)]
      ],
      seq: ['', Validators.required],
      sans: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
  }

  ngOnInit(){}


  onsubmit() {

  }
}

