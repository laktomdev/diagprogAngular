import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { DeviceShort } from 'src/app/models/Device/deviceShort';

@Component({
  selector: 'app-message-devices',
  templateUrl: './message-devices.component.html',
  styleUrls: ['./message-devices.component.scss']
})
export class MessageDevicesComponent implements OnInit {

  @Input() messageDefId: number;

  devicesInside: DeviceShort[];
  devicesOutside: DeviceShort[];

  constructor(private mS: MessagesService) {}

  ngOnInit() {
    this.mS.getMessageDevices(this.messageDefId).subscribe(
      (inside) => {
          this.devicesInside = inside;
          const ids = this.devicesInside.map(x => x.id);

          this.mS.getNotMessageDevices(ids).subscribe(
            (outside) =>{
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
