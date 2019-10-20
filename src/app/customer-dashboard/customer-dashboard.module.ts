import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';

@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule
  ],
  exports: [
    CustomerDashboardComponent
  ]
})
export class CustomerDashboardModule { }
