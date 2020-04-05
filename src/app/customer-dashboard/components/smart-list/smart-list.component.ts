import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart-list',
  templateUrl: './smart-list.component.html',
  styleUrls: ['./smart-list.component.scss']
})
export class SmartListComponent implements OnInit {
  @Input() deeplyNestedData
  @Input() flag
  constructor() { }

  ngOnInit() {
  }

}
