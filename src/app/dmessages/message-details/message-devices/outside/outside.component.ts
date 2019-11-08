import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.scss']
})
export class OutsideComponent implements OnInit {

  @Input() devicesOutside: DeviceShort[];
  @Input() messageId: number;

  @Output() itemsAddedEmitter = new  EventEmitter<number>();

  selected: DeviceShort[];
  loading = false;

  constructor(private mS: MessagesService) { }

  onSelectionChanged(selected: DeviceShort[]) {
    this.selected = selected;
  }

  addToSelected() {
    this.loading = true;
    this.mS.addMessageToMultipleDevices(this.selected.map(x => x.id), this.messageId).subscribe((data => {
      this.itemsAddedEmitter.emit(data);
      this.loading = false;
      this.selected = undefined;

    }));
  }

  ngOnInit() {
  }

}
