import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { DeviceShort } from 'src/app/models/Device/deviceShort';

@Component({
  selector: 'app-outside-list',
  templateUrl: './outside-list.component.html',
  styleUrls: ['./outside-list.component.scss']
})
export class OutsideListComponent implements OnInit {

  @Input() devicesOutside: DeviceShort[];


  constructor() { }

  ngOnInit() { }

}
