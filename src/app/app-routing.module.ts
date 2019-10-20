import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'customer-list',
    loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule) 
  },
  { path: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
