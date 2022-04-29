import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleadvertisementComponent } from './singleadvertisement.component';

const routes: Routes = [{ path: '', component: SingleadvertisementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleadvertisementRoutingModule { }
