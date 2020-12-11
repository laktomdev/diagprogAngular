import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-info',
  templateUrl: './pricing-info.component.html',
  styleUrls: ['./pricing-info.component.scss']
})
export class PricingInfoComponent implements OnInit {
@Input() expandId: number;
  constructor() { }

  ngOnInit() {
  }

}
