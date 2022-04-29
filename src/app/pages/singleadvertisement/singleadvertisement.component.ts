import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from 'src/app/services/advertisement-service.service';
import { Advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-singleadvertisement',
  templateUrl: './singleadvertisement.component.html',
  styleUrls: ['./singleadvertisement.component.scss']
})
export class SingleadvertisementComponent implements OnInit {

  createAdvertisementForm = new FormGroup({
    title: new FormControl(''),
    company_name: new FormControl('')
  })

  constructor( 
    private router: Router, 
    private advertisementService: AdvertisementServiceService) {} 

  ngOnInit(): void {
    
  }

  createAdverisement(){
    this.advertisementService.create(this.createAdvertisementForm.value).then(_ => {
      console.log("Successful")
      this.router.navigateByUrl('/home');
    }).catch(error => {
      console.error(error);
    });
  }
}
