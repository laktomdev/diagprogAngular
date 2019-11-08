import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {

  @Input() devicesInside: DeviceShort[];
  @Input() messageId: number;

  @Output() itemsRemovedEmitter = new  EventEmitter<number>();
  selected: DeviceShort[];
  loading = false;


  onSelectionChanged(selected: DeviceShort[]) {
    this.selected = selected;
  }

  removeFromSelected() {
    this.loading = true;
    this.mS.removeMessageFromMultipleDevices(this.selected.map(x => x.id), this.messageId).subscribe((data) => {
      this.itemsRemovedEmitter.emit(data);
      this.loading = false;
      this.selected = undefined;
    });
  }

  // TODO: tutaj też pobierać listę zamiast Inputu
  constructor(private mS: MessagesService) { }


  ngOnInit() {
  }

}
