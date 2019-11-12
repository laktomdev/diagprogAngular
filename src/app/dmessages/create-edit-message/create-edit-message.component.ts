import { Component, OnInit, Input, Inject, Optional, EventEmitter, Output } from '@angular/core';
import { MessageDef } from 'src/app/models/messageDef';
import {  DateAdapter, MAT_DATE_FORMATS, MAT_DIALOG_DATA } from '@angular/material';
import moment from 'moment/src/moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentUtcDateAdapter } from 'src/app/pipes/momentUtcAdapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


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
  selector: 'app-create-edit-message',
  templateUrl: './create-edit-message.component.html',
  styleUrls: ['./create-edit-message.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ]
})
export class CreateEditMessageComponent implements OnInit {

  @Input() messageDef: MessageDef | null;
  @Output() messageDefChange = new EventEmitter<MessageDef>();

  newRecord = false;

  constructor(private mS: MessagesService, @Optional() @Inject(MAT_DIALOG_DATA) public data: MessageDef) {
    this.messageDef = data;
    if (data !== null) {
      this.newRecord = true;
    }
  }

  ngOnInit() {
  }

  passMessageDefToListComponent() {
    console.log('deviceMessage changed sent to messages-details component');
    this.messageDefChange.emit();
  }

  onSubmit() {
    if (!this.newRecord) {
      moment().startOf('day');

      this.messageDef.validTo = moment.parseZone( this.messageDef.validTo).utc().format();
      this.messageDef.validFrom = moment.parseZone( this.messageDef.validFrom).utc().format();

      this.mS.editMessageDefinition(this.messageDef).subscribe(() => {
          this.passMessageDefToListComponent();
      });
    } else {
      this.mS.addMessageDefinition(this.messageDef).subscribe();
    }
  }

  cancelChanges() {
    this.mS.getMessagesDeffinitionDetails(this.messageDef.id).subscribe((data) => {this.messageDef = data;});
  }

}
