import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { MessagesService } from 'src/app/services/messages.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MessageDevice } from 'src/app/models/messageDevice';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.scss']
})
export class InsideComponent implements OnInit {

  @Input() devicesInside: MessageDevice[];
  @Input() messageId: number;

  @Output() itemsRemovedEmitter = new  EventEmitter<number>();
  selected: DeviceShort[];
  loading = false;


  onSelectionChanged(selected: DeviceShort[]) {
    this.selected = selected;
  }

  askIfRemove() {
    this.alertify.confirm('Potwierdź usunięcie z urządzeń',
     `Czy chcesz usunąć komunikat z ${this.selected.length} urządzeń?`,
      () => this.removeFromSelected());
  }
  removeFromSelected() {
    this.loading = true;
    this.mS.removeMessageFromMultipleDevices(this.selected.map(x => x.id), this.messageId).subscribe((data) => {
      if (data === this.selected.length) {
        this.itemsRemovedEmitter.emit(data);
        this.alertify.success(`Usunięto komunikat z ${this.selected.length} urządzeń`);
        this.selected = undefined;
      } else {
        if (data > 0) {
          this.alertify.success(`Usunięto komunikat z ${data} urządzeń`);
        }
        this.alertify.error(`Nie udało się usunąć komunikatu z ${this.selected.length - data} z ${this.selected.length} urządzeń.`);
      }
      this.loading = false;
    });
  }

  // TODO: tutaj też pobierać listę zamiast Inputu
  constructor(private mS: MessagesService, private alertify: AlertifyService) { }


  ngOnInit() {
  }

}
