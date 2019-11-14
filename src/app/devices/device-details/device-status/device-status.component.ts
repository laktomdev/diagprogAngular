import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceStatusInfo } from 'src/app/models/Device/deviceStatusInfo';
import { DevicesService } from 'src/app/services/devices.service';
import { DeviceStatus } from 'src/app/models/Device/deviceStatus';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-device-status',
  templateUrl: './device-status.component.html',
  styleUrls: ['./device-status.component.scss']
})
export class DeviceStatusComponent implements OnInit {

  deviceStatus: DeviceStatusInfo;
  statusEnum = DeviceStatus;
  @Input() deviceId: number;
  @Output() refreshListEmitter = new EventEmitter();

  constructor(private dS: DevicesService, private alertify: AlertifyService) { }

  askIfReleaseReservation() {
    this.alertify.confirm('Zatwierdź zwolnienie rezerwacji', `Czy na pewno chcesz zwolnić rezerwacje urządzenia ${this.deviceId}?\n
    Urządzenie przestanie być widoczne na liście urzązeń`, () => this.releaseReservation());
  }

  releaseReservation() {
    console.log('zwalniam rezerwację!');
    this.dS.releaseReservation(this.deviceId).subscribe((response) => {
      if (response === 200) {
        this.alertify.success(`Zwolniono rezerwacje urządzenia ${this.deviceId}`);
        this.refreshListEmitter.emit();
      } else {
        this.alertify.success(`Nie udało się zwolnić rezerwacji urządzenia ${this.deviceId}`);
      }
    });
  }

  ngOnInit() {
    this.dS.getDeviceStatusById(Number(this.deviceId)).subscribe(
      (data) => {
        this.deviceStatus = data;
        console.log(this.deviceStatus);

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
