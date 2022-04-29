import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementServiceService } from 'src/app/services/advertisement-service.service';
import { Advertisement } from '../../models/advertisement'

@Component({
  selector: 'app-oneadvertisement',
  templateUrl: './oneadvertisement.component.html',
  styleUrls: ['./oneadvertisement.component.scss']
})
export class OneadvertisementComponent implements OnInit {

  advertisement?: Advertisement;
  advId: any = this.router.url.substring(18, );

  

  constructor( 
    private router: Router, 
    private advertisementService: AdvertisementServiceService) {} 

    ngOnInit(): void {
      this.advertisementService.getById(this.advId).subscribe(data => {
        this.advertisement = data;
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
