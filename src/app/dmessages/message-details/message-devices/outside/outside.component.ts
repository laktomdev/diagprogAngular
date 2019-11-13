import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DeviceShort } from 'src/app/models/Device/deviceShort';
import { MessagesService } from 'src/app/services/messages.service';
import { AlertifyService } from 'src/app/services/alertify.service';

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

  constructor(private mS: MessagesService, private alertify: AlertifyService) { }

  onSelectionChanged(selected: DeviceShort[]) {
    this.selected = selected;
  }

  askIfAdd() {
    this.alertify.confirm('Potwierdź dodanie do urządzeń',
    `Czy chcesz dodać komunikat do ${this.selected.length} urządzeń?`,
     () => this.addToSelected());
  }

  addToSelected() {
    this.loading = true;
    this.mS.addMessageToMultipleDevices(this.selected.map(x => x.id), this.messageId).subscribe((data => {
      console.log(data);
      if (data === this.selected.length) {
        this.itemsAddedEmitter.emit(data);
        this.alertify.success(`Dodano komunikat do ${this.selected.length} urządzeń`);
        this.selected = undefined;
      } else {
        if (data > 0) {
          this.alertify.success(`Dodano komunikat do ${data} urządzeń`);
        }
        this.alertify.error(`Nie udało się dodać komunikatu do ${this.selected.length - data} z ${this.selected.length} urządzeń`);
      }

      this.loading = false;
    }));
  }

  ngOnInit() {
  }

}
