import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { SmartListComponent } from './components/smart-list/smart-list.component';

@NgModule({
  declarations: [CustomerDashboardComponent, SmartListComponent],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule
  ],
  exports: [
    CustomerDashboardComponent
  ]
})
export class CustomerDashboardModule { }
