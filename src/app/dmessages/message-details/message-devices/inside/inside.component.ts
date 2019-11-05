import { Component, OnInit, Input } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {

  @Input() devicesInside: DeviceShort[];

  constructor() { }

  ngOnInit() {
  }

}
