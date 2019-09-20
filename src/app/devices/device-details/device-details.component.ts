import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;

  @Input()
  customId: number;
  isInEditMode = false;


  constructor(private dS: DevicesService
    ) { }

  ngOnInit() {
    this.dS.getById(Number(this.customId)).subscribe(
      (data) => {
        this.device = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
