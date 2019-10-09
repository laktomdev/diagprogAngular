import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { DeviceMessage } from 'src/app/models/Device/Message/deviceMessage';

@Component({
  selector: 'app-device-messages',
  templateUrl: './device-messages.component.html',
  styleUrls: ['./device-messages.component.scss']
})
export class DeviceMessagesComponent implements OnInit {

  messagesFresh: DeviceMessage[];
  messagesOutdated: DeviceMessage[];

  @Input() deviceId: number;

  constructor(private mS: MessagesService) { }

  ngOnInit() {

    this.mS.getMessagesInDeviceFreshList(Number(this.deviceId)).subscribe(
      (data) => {
        this.messagesFresh = data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.mS.getMessagesInDeviceOutdatedList(Number(this.deviceId)).subscribe(
      (data) => {
        this.messagesOutdated = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
