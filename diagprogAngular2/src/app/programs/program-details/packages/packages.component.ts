import { Component, Input, OnInit } from '@angular/core';
import { Program } from 'src/app/models/Program/program';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  @Input() expandId: number;
  @Input() program:Program;
  constructor() { }

  ngOnInit() {
  }

}
