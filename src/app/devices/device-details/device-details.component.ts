import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Device } from 'src/app/models/device';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  device: Device;


  constructor(private dS: DevicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.dS.getById(Number(id)).subscribe(
      (data) => {
        this.device = data;
      }
    );
  }

}
