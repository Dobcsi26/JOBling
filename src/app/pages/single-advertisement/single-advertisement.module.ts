import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SingleAdvertisementRoutingModule } from './single-advertisement-routing.module';
import { SingleAdvertisementComponent } from './single-advertisement.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    SingleAdvertisementComponent
  ],
  imports: [
    CommonModule,
    SingleAdvertisementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class SingleAdvertisementModule { }
