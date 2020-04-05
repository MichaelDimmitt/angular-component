import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  deepylyNested = [
    {
      directions: [
        'north',
        'south',
        'east',
        'west'
      ],
      products: [
        'wrench',
        'hammer',
        'screwdriver'
      ]
    },
    {
      directions: [
        'west',
        'east',
        'south',
        'north'
      ],
      products: [
        'screwdriver',
        'hammer',
        'wrench',
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
