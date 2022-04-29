import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneadvertisementRoutingModule } from './oneadvertisement-routing.module';
import { OneadvertisementComponent } from './oneadvertisement.component';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    OneadvertisementComponent
  ],
  imports: [
    CommonModule,
    OneadvertisementRoutingModule,
    MatIconModule
  ]
})
export class OneadvertisementModule { }
