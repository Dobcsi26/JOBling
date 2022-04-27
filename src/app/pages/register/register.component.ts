import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Job_seeker } from '../../models/job_seeker';
import { Job_offer } from '../../models/job_offer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpFormSeeker = new FormGroup({
    email: new FormControl(''),
    pw: new FormControl(''),
    repw: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl('')
  });

  signUpFormAdvertiser = new FormGroup({
    email: new FormControl(''),
    pw: new FormControl(''),
    repw: new FormControl(''),
    company_name: new FormControl(''),
  });

  choose: any;

  constructor(private router: Router, private location: Location, private authService: AuthService, private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmitSeeker() {
    console.log(this.signUpFormSeeker.value);
    this.authService.signup(this.signUpFormSeeker.get('email')?.value, this.signUpFormSeeker.get('pw')?.value).then(cred => {
      console.log(cred);
      const seeker: Job_seeker = {
        id: cred.user?.uid as string,
        name: this.signUpFormSeeker.get('name')?.value,
        email: this.signUpFormSeeker.get('email')?.value,
        age: this.signUpFormSeeker.get('age')?.value
      };
      this.userService.createSeeker(seeker).then(_ => {
        console.log('User added successfully.');
        this.router.navigateByUrl('/home');

      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }

  onSubmitAdvertiser() {
    this.authService.signup(this.signUpFormAdvertiser.get('email')?.value, this.signUpFormAdvertiser.get('pw')?.value).then(cred => {
      console.log(cred);
      const advertiser: Job_offer = {
        id: cred.user?.uid as string,
        email: this.signUpFormAdvertiser.get('email')?.value,
        company_name: this.signUpFormAdvertiser.get('company_name')?.value,
      };
      this.userService.createAdvertiser(advertiser).then(_ => {
        console.log('User added successfully.');
        this.router.navigateByUrl('/home');

      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }
}
