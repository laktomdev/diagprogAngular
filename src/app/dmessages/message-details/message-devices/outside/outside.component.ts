import { Component, OnInit, Input } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.scss']
})
export class OutsideComponent implements OnInit {

  @Input() devicesOutside: DeviceShort;

  constructor() { }

  ngOnInit() {
  }

}
