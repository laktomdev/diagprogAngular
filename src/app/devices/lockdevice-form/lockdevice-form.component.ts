import { Component, OnInit, Inject } from '@angular/core';
import { ServerLock } from 'src/app/models/serverLock';
import { MAT_DIALOG_DATA, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { LockStatus } from 'src/app/models/lockStatus';
import { MomentUtcDateAdapter } from 'src/app/pipes/momentUtcAdapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import moment from 'moment/src/moment';
// import * as moment from 'moment';
import { StatusInformation } from 'src/app/models/statusInformation';
import { LockService } from 'src/app/services/lock.service';
import { AlertifyService } from 'src/app/services/alertify.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


@Component({
  selector: 'app-lockdevice-form',
  templateUrl: './lockdevice-form.component.html',
  styleUrls: ['./lockdevice-form.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
})
export class LockdeviceFormComponent implements OnInit {

  lock: ServerLock;
  lockStatusEnum = LockStatus;

  lockStatus: LockStatus;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ServerLock, private lockService: LockService, private alertify: AlertifyService) {
    console.log(data);
    this.lock = data;
    this.lock.statusInformation  = {} as StatusInformation;

  }

  ngOnInit() {
  }

  print() {
    console.log(this.lock);
  }

  lockDevice() {
    moment().startOf('day');

    if (this.lock.blockDate) {
      this.lock.blockDate = moment
        .parseZone(this.lock.blockDate)
        .utc()
        .format();
    }

    this.lockService.lockDevice(this.lock).subscribe((result => {
      if (result === 200) {
        this.alertify.success(`Zablokowano urządzenie ${this.lock.deviceId}`);
      } else if (result === 501) {
        this.alertify.error(`Nie udało się zablokować urządzenia. Uzupełnij wszystkie dane.`);
      } else {
        this.alertify.error(`Nie udało się zablokować urządzenia.`);
      }
  }));
  }

  unlockDevice() {
    moment().startOf('day');

    if (this.lock.blockDate) {
      this.lock.blockDate = moment
        .parseZone(this.lock.blockDate)
        .utc()
        .format();
    }
    this.lockService.unlockDevice(this.lock).subscribe((result => {
        if (result === 200) {
          this.alertify.success(`Odblokowano urządzenie ${this.lock.deviceId}`);
        } else if (result === 501) {
          this.alertify.error(`Nie udało się odblokować urządzenia. Uzupełnij wszystkie dane.`);
        } else {
          this.alertify.error(`Nie udało się odblokować urządzenia.`);
        }
    }));
  }

}
