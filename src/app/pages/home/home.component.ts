import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from 'src/app/services/advertisement-service.service';
import { Advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  advertisements?: Array<Advertisement>;

  constructor( 
    private router: Router, 
    private advertisementService: AdvertisementServiceService) {} 

    ngOnInit(): void {
      this.advertisementService.getAll().subscribe(data => {
        this.advertisements = data;
      })
    }

    deleteAdvertisement(id: any){
      this.advertisementService.delete(id).then(_ => {
        console.log("Successful")
        this.router.navigateByUrl('/home');
      }).catch(error => {
        console.error(error);
      });
    }

}
