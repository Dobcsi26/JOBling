import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleadvertisementRoutingModule } from './singleadvertisement-routing.module';
import { SingleadvertisementComponent } from './singleadvertisement.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    SingleadvertisementComponent
  ],
  imports: [
    CommonModule,
    SingleadvertisementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ]
})
export class SingleadvertisementModule { }
