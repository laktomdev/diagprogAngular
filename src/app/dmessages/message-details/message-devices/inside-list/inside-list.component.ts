import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { DeviceShort } from 'src/app/models/Device/deviceShort';

@Component({
  selector: 'app-inside-list',
  templateUrl: './inside-list.component.html',
  styleUrls: ['./inside-list.component.scss']
})
export class InsideListComponent implements OnInit {

  @Input() devicesInside: DeviceShort[];

  constructor() { }

  ngOnInit() {

  }

}
