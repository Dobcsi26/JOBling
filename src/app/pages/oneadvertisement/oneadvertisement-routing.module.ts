import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneadvertisementComponent } from './oneadvertisement.component';

const routes: Routes = [{ path: '', component: OneadvertisementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneadvertisementRoutingModule { }
