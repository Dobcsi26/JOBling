import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Job_seeker } from '../../models/job_seeker';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    pw: new FormControl(''),
    repw: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){}
}
