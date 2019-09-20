import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [ slideInAnimation ]
})
export class BodyComponent implements OnInit {

  constructor() { }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit() {
  }

}
