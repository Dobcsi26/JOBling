import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleAdvertisementComponent } from './single-advertisement.component';

const routes: Routes = [{ path: '', component: SingleAdvertisementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleAdvertisementRoutingModule { }
