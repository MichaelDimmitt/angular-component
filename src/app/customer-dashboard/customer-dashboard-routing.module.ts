import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }