import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { MessageDevice } from 'src/app/models/messageDevice';

@Component({
  selector: 'app-message-devices',
  templateUrl: './message-devices.component.html',
  styleUrls: ['./message-devices.component.scss']
})
export class MessageDevicesComponent implements OnInit {

  @Input() messageDefId: number;

  devicesInside: MessageDevice[];
  devicesOutside: DeviceShort[];

  devicesAffected: number;


  constructor(private mS: MessagesService) {}

  ngOnInit() {
    this.dowloadDevices();
  }

  onRefreshTrigger(count: number) {
    this.devicesAffected = count;
    this.dowloadDevices();

  }


  dowloadDevices() {
    this.mS.getMessageDevices(this.messageDefId).subscribe(
      (inside) => {
          this.devicesInside = inside;
          const ids = this.devicesInside.map(x => x.diagprog.id);

          this.mS.getNotMessageDevices(ids).subscribe(
            (outside) => {
              this.devicesOutside = outside;
            }
          );
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
